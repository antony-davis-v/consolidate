// workers-site/index.js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import { Resend } from 'resend'

// Wrangler has already injected your secret as a global
const resend = new Resend(RESEND_API_KEY)

addEventListener('fetch', event => {
  event.respondWith(router(event))
})

async function router(event) {
  const { request } = event
  const url = new URL(request.url)

  // 1) intercept POST /send_email
  if (url.pathname === '/send_email' && request.method === 'POST') {
    return handleSendEmail(request)
  }

  // 2) otherwise fall back to serving your site assets
  return handleEvent(event)
}

async function handleSendEmail(request) {
  try {
    const { name, email, phone, company, message } = await request.json()

    const html = `
      <h3>New enquiry from your website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone   ? `<p><strong>Phone:</strong> ${phone}</p>`   : ''}
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `

    await resend.emails.send({
      from:    'onboarding@resend.dev',
      to:      'website.admin@valuenode.com',
      subject: 'New enquiry from your website',
      html,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('SendEmailError', err)
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event)
  } catch (err) {
    return new Response('Not found', { status: 404 })
  }
}
