import { MOCK_COMPETITORS, DEMO_USER } from '@/lib/data';

export async function GET(): Promise<Response> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        competitors: MOCK_COMPETITORS,
        user: DEMO_USER,
      },
      total: MOCK_COMPETITORS.length,
    }),
    { status: 200, headers }
  );
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  const body = await request.json();

  return Response.json({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  });
}