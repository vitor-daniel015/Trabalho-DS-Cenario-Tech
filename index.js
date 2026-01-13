const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const path = require('path');

const app = express();
app.use(cors(), express.json());

admin.initializeApp({
    credential: admin.credential.cert("./trabalho-diogo-firebase-adminsdk-fbsvc-89f67c396a.json")
});
const db = admin.firestore().collection('Banco-de-Dados');

const render = (file) => (req, res) => res.sendFile(path.join(__dirname, 'front-end', file));

app.use(express.static(path.join(__dirname, 'front-end')));

app.get('/', render('blog-parallax.html'));
app.get('/criar-post', render('postagem.html'));
app.get('/editar-post', render('edicao.html'));
app.get('/sobre', render('sobre.html'));


// CREATE
app.post('/api/posts', async (req, res) => {
    try {
        const { titulo, autor, conteudo, imagemUrl } = req.body;
        if (!titulo || !autor || !conteudo) return res.status(400).json({ error: 'Dados incompletos.' });

        const doc = await db.add({ 
            titulo, autor, conteudo, imagemUrl: imagemUrl || null, 
            dataCriacao: admin.firestore.FieldValue.serverTimestamp() 
        });
        res.status(201).json({ message: 'Criado', id: doc.id });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// READ (Todos)
app.get('/api/posts', async (req, res) => {
    try {
        const snapshot = await db.orderBy('dataCriacao', 'desc').get();
        const posts = snapshot.docs.map(doc => {
            const d = doc.data();
            return { id: doc.id, ...d, dataCriacao: d.dataCriacao?.toDate?.().toISOString() };
        });
        res.json(posts);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// READ (Único)
app.get('/api/posts/:id', async (req, res) => {
    try {
        const doc = await db.doc(req.params.id).get();
        if (!doc.exists) return res.status(404).json({ error: 'Não encontrado.' });
        
        const d = doc.data();
        res.json({ id: doc.id, ...d, dataCriacao: d.dataCriacao?.toDate?.().toISOString() });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// UPDATE
app.put('/api/posts/:id', async (req, res) => {
    try {
        const { titulo, autor, conteudo, imagemUrl } = req.body;
        await db.doc(req.params.id).update({ titulo, autor, conteudo, imagemUrl: imagemUrl || null });
        res.json({ message: 'Atualizado com sucesso' });
    } catch (e) { res.status(500).json({ error: 'Erro ao atualizar ou ID inexistente.' }); }
});

// DELETE
app.delete('/api/posts/:id', async (req, res) => {
    try {
        await db.doc(req.params.id).delete();
        res.json({ message: 'Removido com sucesso' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// START
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));