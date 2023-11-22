// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();


    function findPublishedPost(){
        prisma.post.findMany({
            where: {
                published: true
            },
        }).then((posts => {
            console.log('Post trovati:', posts);

        }))

    }

findPublishedPost();