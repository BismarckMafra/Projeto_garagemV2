const express = require('express');
const router = express.Router();

const { saveUser, readUsers } = require('../utils/fileHandler');


router.get('/listar_carro', (req, res) => {
    const usuarios = readUsers();
    res.json(usuarios)
})

router.get('/listar_carro/:id', (req, res) => {
    const id_carros = parseInt(req.params.id);
    const lista_carros = readUsers();
    const usuario = lista_carros.find(u => u.id === id_carros);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: "Carro não encontrado" });
    }
})

router.post('/cadastrar_carros', (req, res) => {
    const lista_usuarios = readUsers();
    const novo_id = lista_usuarios.length > 0 ? Math.max(...lista_usuarios.map(u => u.id + 1))  : 1
 
    const novo_usuario = {
        id: novo_id,
        nome: req.body.nome,
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        cor: req.body.cor
    }

    lista_usuarios.push(novo_usuario);
    saveUser(lista_usuarios);
    res.status(201).json(novo_usuario);
})

router.put('/atualizar_carros/:id', (req, res) => {
    const id_carros = parseInt(req.params.id);
    const lista_usuarios = readUsers();
    const usuarioIndex = lista_usuarios.findIndex(u => u.id === id_usuarios)

    if (usuarioIndex !== -1) {
        lista_usuarios[usuarioIndex].nome = req.body.nome || lista_usuarios[usuarioIndex].nome;
        lista_usuarios[usuarioIndex].sobrenome = req.body.sobrenome || lista_usuarios[usuarioIndex].sobrenome;
        saveUser(lista_usuarios);
        res.json(lista_usuarios[usuarioIndex]);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
})

router.delete('/deletar_usuarios/:id', (req, res) => {
    const id_usuarios = parseInt(req.params.id);
    const lista_usuarios = readUsers();
    const usuarioIndex = lista_usuarios.findIndex(u => u.id === id_usuarios)
    if (usuarioIndex !== -1) {
        lista_usuarios.splice(usuarioIndex, 1);
        saveUser(lista_usuarios);
        res.json({ message: "Usuário deletado com sucesso" });
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
})

module.exports = router;