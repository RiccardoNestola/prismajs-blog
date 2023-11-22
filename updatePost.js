// Importiamo PrismaClient
const { PrismaClient } = require('@prisma/client');

// Creiamo un'istanza di PrismaClient
const prisma = new PrismaClient();

prisma.post.update({
    where: {
        id: 1
    },
    data: {
        title: 'Titolo del mio primo post assoluto',
        slug: 'titolo-del-mio-primo-post-assoluto',
        content: 'Questo è il contenuto del mio primissimo post.',
        published: true,
    },
}).then((nuovoPost) => {
    console.log("Post aggiornato: ", nuovoPost);
});

