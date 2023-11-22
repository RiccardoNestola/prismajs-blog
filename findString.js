// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();


prisma.post.findMany({
    where: {
        title: {
            contains: "titolo"
        }
    },
    orderBy: {
        id: "asc"
    }
}).then((posts) => {
    console.log("Risultato ricerca: ", posts);
});