// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();

prisma.post.delete({
    where: {
        id: 1
    }
}).then((result) => {
    console.log("Post cancellato: ", result);
});
