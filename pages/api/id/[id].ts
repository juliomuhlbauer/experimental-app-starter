import type { NextApiRequest, NextApiResponse } from "next";

const isDev = process.env.NODE_ENV === "development";

const displayId = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const { auth } = req.headers;

  const isAuthenticated = auth === process.env.API_ROUTE_SECRET;

  if (!isAuthenticated && !isDev) {
    res.status(401).json({ error: "Unauthorized" });
  }

  if (!id) {
    res.status(400).json({ error: "Missing id" });
    return;
  }

  res.status(200).json(id);
};

export default displayId;
