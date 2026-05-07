import type {APIRoute} from 'astro'
import {sanityClient} from 'sanity:client'

export const prerender = false

export const POST: APIRoute = async ({request}) => {
  try {
    const token = import.meta.env.SANITY_API_WRITE_TOKEN
    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            'Server missing SANITY_API_WRITE_TOKEN. Add it to .env (see .env.example) and restart dev.',
        }),
        {status: 503, headers: {'Content-Type': 'application/json'}},
      )
    }

    let data: Record<string, unknown>
    try {
      data = (await request.json()) as Record<string, unknown>
    } catch {
      return new Response(JSON.stringify({success: false, message: 'Invalid JSON body'}), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      })
    }

    const name = typeof data.name === 'string' ? data.name.trim() : ''
    const email = typeof data.email === 'string' ? data.email.trim() : ''
    const subject =
      typeof data.subject === 'string' && data.subject.trim() ? data.subject.trim() : '未填写主题'
    const message =
      typeof data.message === 'string' && data.message.trim() ? data.message.trim() : '未填写详情'

    if (!name || !email) {
      return new Response(JSON.stringify({success: false, message: 'Name and email are required'}), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      })
    }

    const writeClient = sanityClient.withConfig({
      token,
      useCdn: false,
    })

    await writeClient.create({
      _type: 'inquiry',
      name,
      email,
      subject,
      message,
      status: '待处理',
    })

    return new Response(JSON.stringify({success: true, message: 'Inquiry saved!'}), {
      status: 200,
      headers: {'Content-Type': 'application/json'},
    })
  } catch (error) {
    console.error('submit-inquiry:', error)
    return new Response(JSON.stringify({success: false, message: 'Error saving inquiry.'}), {
      status: 500,
      headers: {'Content-Type': 'application/json'},
    })
  }
}
