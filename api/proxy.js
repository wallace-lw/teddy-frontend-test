export default async function handler(req, res) {
  try {
    const baseUrl = new URL(req.url, `http://${req.headers.host}`);
    const targetUrl = baseUrl.searchParams.get('url');

    if (!targetUrl) {
      return res.status(400).json({ message: "Missing target URL" });
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        'Content-Type': 'application/json',
      },
      body: ['POST', 'PATCH'].includes(req.method) ? JSON.stringify(req.body) : null,
    });

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching the URL' });
  }
}
