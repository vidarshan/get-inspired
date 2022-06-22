import type { NextApiRequest, NextApiResponse } from "next";
import quotes from "./quotes.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomQuote = Math.floor(Math.random() * quotes.length);

  res.status(200).json(quotes[randomQuote]);
}
