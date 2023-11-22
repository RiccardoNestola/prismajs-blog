// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();


    async function findPost(slug){
        const post = await prisma.post.findUnique({
            where: {
                slug: slug
            },
        }).then((post => {

            if (post) {
                console.log('Post trovato:', post);
            } else {
                console.log('Nessun post trovato con questo slug:', slug);
            }

        }))

    }

findPost("titolo-del-mio-primo-post")
/* findPost("titolo-del-mio-primo-postssssss") */