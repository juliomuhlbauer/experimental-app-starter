import { db } from "@/lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

const isDev = process.env.NODE_ENV === "development";

const displayId = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await db.collection("users").doc("8sLXauzqneD9yAMlCkwp").get();

  if (!user.exists) {
    return res.status(404).json({});
  }

  return res.status(404).json({ id: user.id, ...user.data() });
};

export default displayId;
