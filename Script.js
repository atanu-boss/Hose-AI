const resultDiv = document.getElementById("result");

// Example: AI Image Generation via Replicate API (Stable Diffusion)
async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  resultDiv.innerHTML = "Generating image...";

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token YOUR_REPLICATE_API_KEY"
    },
    body: JSON.stringify({
      version: "your-model-version-id",
      input: { prompt: prompt }
    })
  });

  const data = await response.json();
  // Display image (URL returned by API)
  resultDiv.innerHTML = `<img src="${data.output[0]}" alt="AI Image">`;
}

// Example: AI Video Generation via RunDiffusion API
async function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  resultDiv.innerHTML = "Generating video...";

  const response = await fetch("https://api.rundiffusion.com/video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_RUNDIFFUSION_API_KEY"
    },
    body: JSON.stringify({ prompt: prompt, steps: 30 })
  });

  const data = await response.json();
  // Display video
  resultDiv.innerHTML = `<video src="${data.video_url}" controls></video>`;
}
