// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let x = {};
  if (req.method === "POST") {
    x = req.body;
    res.json({ message: "ok" });
  }
  if (req.method === "GET") {
    res.send(x);
  }
  res.status(200).json({ name: "John Doe" });
}
