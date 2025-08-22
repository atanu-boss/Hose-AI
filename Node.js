// api/generate-video.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await fetch("https://api.rundiffusion.com/video", {
    method: "POST",
    headers: { "Authorization": "Bearer YOUR_KEY", "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  res.status(200).json(data);
}
