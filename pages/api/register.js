import { prisma } from "@/utils/connect";

import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST")
    res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const isExistingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isExistingUser) res.status(409).json({ message: "User already exists" });

  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
}
