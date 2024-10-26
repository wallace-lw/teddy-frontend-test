export default async function handler(req, res) {



  // const url = decodeURIComponent(req.url.split('/api/proxy?')[1])

  try {
    const baseUrl = new URL(req.url, `http://${req.headers.host}`);
    const targetUrl = baseUrl.searchParams.get('url'); // pega o parâmetro `url` diretamente

    if (!targetUrl) {
      return res.status(400).json({ message: "Missing target URL" });
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        'Origin': req.headers.origin,
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : null,
    });
    
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
}