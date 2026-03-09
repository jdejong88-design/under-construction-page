// JavaScript Document
// api/grok.js
export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const body = await req.json();
  const { messages } = body;

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.xai-ErsHoQWaAbQNdmiEA8u9g7wR5JRaQZgJ5I8PFfDsU29cam8rxecuVIKvUblYttcaCcdZta7QaiX5ADKB}`
    },
    body: JSON.stringify({
      model: 'grok-beta', // of 'grok-2' etc.
      messages,
      temperature: 0.75,
      max_tokens: 320
    })
  });

  const data = await response.json();
  return Response.json(data);
}