export default async function handler(req: any, res: any) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/sdxl
      version:
        "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",

      // This is the text prompt that will be submitted by a form on the frontend
      input: {
        prompt: req.body.value,
        image_dimensions: "1024x1024",
        num_inference_steps: 50,
        num_outputs: 1,
        guideance_scale: 7.5,
        scheduler: "DDIM",
      },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
