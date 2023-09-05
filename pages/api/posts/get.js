import { prisma } from "../../../components/utils/connect";

export default async function handler(req, res) {
  try {
    const data = await prisma.posts.findMany();
    await prisma.$disconnect();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}