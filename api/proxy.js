export default async function handler(req, res) {
  
  try {
    const url = decodeURIComponent(targetUrl.split('https://teddy-frontend-test.vercel.app')[1])

    const bodyContent = req.method === 'POST' || req.method === 'PATCH' ? req.body : undefined;

    const response = await fetch(url, {
      method: req.method,
      headers: {
        ...req.headers,
        'Origin': req.headers.origin,
      },
      body: bodyContent ? JSON.stringify(bodyContent) : null,
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