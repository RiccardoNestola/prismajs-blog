// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();

prisma.post.findMany({
    select: {
        title: true,
        slug: true,
        image: true,
        content: true
    },
}).then((pizze) => {
    console.log("Lista pizze: ", pizze);
});

