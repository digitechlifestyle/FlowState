import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPeriodEnd(sub: any): Date | null {
  const ts = sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end;
  return ts ? new Date(ts * 1000) : null;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const plan = session.metadata?.plan;
      if (userId && plan && session.subscription) {
        const sub = await stripe.subscriptions.retrieve(session.subscription as string);
        await prisma.user.update({
          where: { id: userId },
          data: {
            plan,
            stripeSubscriptionId: sub.id,
            stripePriceId: sub.items.data[0].price.id,
            stripeCurrentPeriodEnd: getPeriodEnd(sub),
          },
        });
      }
      break;
    }
    case "invoice.payment_succeeded": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const invoice = event.data.object as any;
      if (invoice.subscription) {
        const sub = await stripe.subscriptions.retrieve(invoice.subscription as string);
        const userId = (sub.metadata as Record<string, string>)?.userId;
        if (userId) {
          await prisma.user.update({
            where: { id: userId },
            data: { stripeCurrentPeriodEnd: getPeriodEnd(sub) },
          });
        }
      }
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = (sub.metadata as Record<string, string>)?.userId;
      if (userId) {
        await prisma.user.update({
          where: { id: userId },
          data: { plan: "free", stripeSubscriptionId: null, stripePriceId: null },
        });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
