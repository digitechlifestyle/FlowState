'use server';

export async function subscribeForTools(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  if (!email) return { success: false, error: 'Email required' };

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      status: 'active',
      fields: { name: name?.trim() || undefined },
      groups: ['187885228086265198'],
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    return { success: false, error: body?.message ?? 'Something went wrong' };
  }

  return { success: true };
}
