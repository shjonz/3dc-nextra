const { PrismaClient } = require('@prisma/client');

module.exports = async function handler(req, res) {
    try {
        const prisma = new PrismaClient();

        const data = await prisma.post.findMany();
        await prisma.$disconnect();

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
};
