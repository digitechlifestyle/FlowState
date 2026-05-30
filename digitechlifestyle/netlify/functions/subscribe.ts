import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let email: string, name: string | undefined;
  try {
    const body = JSON.parse(event.body ?? "{}");
    email = body.email?.trim();
    name = body.name?.trim() || undefined;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: "Email required" }) };
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server config error" }) };
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      status: "active",
      fields: { name },
      groups: ["187885228086265198"],
    }),
  });

  if (!res.ok && res.status !== 422) {
    // 422 = already subscribed, treat as success
    const body = await res.json().catch(() => ({})) as { message?: string };
    return {
      statusCode: res.status,
      body: JSON.stringify({ error: body?.message ?? "Subscription failed" }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true }),
  };
};
