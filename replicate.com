export async function POST(req) {
  const { prompt } = await req.json();

  const res = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version: "video-model-id",
      input: { prompt },
    }),
  });

  const data = await res.json();
  return Response.json(data);
}
