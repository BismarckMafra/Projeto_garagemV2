const express = require('express');
const router = express.Router();

const { saveUser, readUsers } = require('../utils/fileHandler');


router.get('/listar_carro', (req, res) => {
    const carros = readUsers();
    res.json(carros)
})

router.get('/listar_carro/:id', (req, res) => {
    const id_carros = parseInt(req.params.id);
    const lista_carros = readUsers();
    const carros = lista_carros.find(u => u.id === id_carros);
    if (carros) {
        res.json(carros);
    } else {
        res.status(404).json({ message: "Carro não encontrado" });
    }
})

router.post('/cadastrar_carros', (req, res) => {
    const lista_carros = readUsers();
    const novo_id = lista_carros.length > 0 ? Math.max(...lista_carros.map(u => u.id + 1))  : 1
 
    const carro = {
        id: novo_id,
        categoria: req.body.categoria,
        marca_car: req.body.marca_car,
        modelo_car: req.body.modelo_car,
        ano_modelo: req.body.ano_modelo,
        cor: req.body.cor
    }

    lista_carros.push(carro);
    saveUser(lista_carros);
    res.status(201).json(carro);
})

router.put('/atualizar_carros/:id', (req, res) => {
    const id_carros = parseInt(req.params.id);
    const lista_carros = readUsers();
    const carroIndex = lista_carros.findIndex(u => u.id === id_carros);

    if (carroIndex !== -1) {
        lista_carros[carroIndex].categoria = req.body.categoria || lista_carros[carroIndex].categoria;
        lista_carros[carroIndex].marca_car = req.body.marca_car || lista_carros[carroIndex].marca_car;
        lista_carros[carroIndex].modelo_car = req.body.modelo_car || lista_carros[carroIndex].modelo_car;
        lista_carros[carroIndex].ano_modelo = req.body.ano_modelo || lista_carros[carroIndex].ano_modelo;
        lista_carros[carroIndex].cor = req.body.cor || lista_carros[carroIndex].cor;
        saveUser(lista_carros);
        res.json(lista_carros[carroIndex]);
    } else {
        res.status(404).json({ message: "Carro não encontrado" });
    }
})

router.delete('/deletar_carros/:id', (req, res) => {
    const id_carros = parseInt(req.params.id);
    const lista_carros = readUsers();
    const carroIndex = lista_carros.findIndex(u => u.id === id_carros)
    if (carroIndex !== -1) {
        lista_carros.splice(carroIndex, 1);
        saveUser(lista_carros);
        res.json({ message: "Carro deletado com sucesso" });
    } else {
        res.status(404).json({ message: "Carro não encontrado" });
    }
})

module.exports = router;