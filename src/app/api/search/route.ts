import { MOCK_COMPETITORS } from '@/lib/data';

export async function GET({ url }: { url: URL }): Promise<Response> {
  const queryParams = url.searchParams;
  const query = queryParams.get('q') || '';
  const type = queryParams.get('type');

  const results = MOCK_COMPETITORS.filter((competitor) => {
    const name = competitor.name.toLowerCase();
    const url = competitor.url.toLowerCase();

    return name.includes(query.toLowerCase()) || url.includes(query.toLowerCase());
  });

  const total = results.length;
  const data = results.slice(0, 20);

  return Response.json({
    ok: true,
    data: {
      results: data,
      total,
      query,
    },
  });
}