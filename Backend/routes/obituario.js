// OBITUARIO.JS
// Backend/routes/obituario.js

const express = require('express');
const router = express.Router();
const Obituario = require('../models/obituario');

// Crear un nuevo obituario
router.post('/', async (req, res) => {
    try {
        const obituario = await Obituario.create(req.body);
        res.status(201).json(obituario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el obituario' });
    }
    }
);

// Obtener todos los obituarios
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación de obituarios!');
  });

    // Obtener un obituario por su ID
    router.get('/:id', async (req, res) => {
    try {
        const obituario = await Obituario.findByPk(req.params.id);
        if (obituario) {
        res.json(obituario);
        } else {
        res.status(404).json({ message: 'Obituario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el obituario' });
    }
    });

    // Actualizar un obituario por su ID
    router.put('/:id', async (req, res) => {
    try {
        const obituario = await Obituario.findByPk(req.params.id);
        if (obituario) {
        await obituario.update(req.body);
        res.json(obituario);
        } else {
        res.status(404).json({ message: 'Obituario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el obituario' });
    }
    });

    // Eliminar un obituario por su ID
    router.delete('/:id', async (req, res) => {
    try {
        const obituario = await Obituario.findByPk(req.params.id);
        if (obituario) {
        await obituario.destroy();
        res.json({ message: 'Obituario eliminado correctamente' });
        } else {
        res.status(404).json({ message: 'Obituario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el obituario' });
    }
    });

module.exports = router;