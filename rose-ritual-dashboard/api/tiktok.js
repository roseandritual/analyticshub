export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { handle, type } = req.query;
  if (!handle) return res.status(400).json({ error: 'Missing handle' });

  const key = process.env.SOCIALCRAWL_API_KEY;
  if (!key) return res.status(500).json({ error: 'API key not configured' });

  const endpoint = type === 'posts'
    ? `https://www.socialcrawl.dev/v1/tiktok/posts?handle=${handle}&limit=10`
    : `https://www.socialcrawl.dev/v1/tiktok/profile?handle=${handle}`;

  try {
    const response = await fetch(endpoint, {
      headers: { 'x-api-key': key }
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
