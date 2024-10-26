export default async function handler(req, res) {
  const url = decodeURIComponent(req.url.split('/api/proxy?')[1])

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        ...req.headers,
        'Origin': req.headers.origin,
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : null,
    });
    
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
}