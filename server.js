/* Create un nuovo progetto Node.js(senza Express) ed installate la Prisma CLI e il Prisma Client.
v- Successivamente definite un modello chiamato “Post” nel file schema.prisma, che deve contenere le seguenti proprietà:
    - title
    - slug(deve essere univoco)
    - image(non obbligatoria)
    - content
    - published(boolean)
    - createdAt
    - updatedAt
Una volta creato il modello, dovete implementare le operazioni di CRUD specifiche per questo modello.Questo significa che dovete realizzare:
v- Una funzione che consente di creare un Post.
v- Una funzione che permette di leggere un Post usando lo slug.
v- Una funzione che restituisce l’elenco di tutti i Post.
v- Una funzione che consente di modificare un Post.
v- Una funzione che elimina un Post. */

/* BONUS:
-1. Crea una funzione che restituisca solo i Post pubblicati.
2. Crea una funzione che restituisca solo i Post che contengono una determinata stringa nel contenuto.
3. Tramite un argomento CLI poter indicare quale funzione eseguire dal file. */