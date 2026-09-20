const express = require('express')
const servicios = require('./data/servicios')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor creado correctamente')
})

app.get('/servicios', (req, res) => {
    res.json(servicios)
})

app.get('/servicios/:id', (req, res) => {

    const id = Number(req.params.id)
    const servicio = servicios.find(
        item => item.id === id
    )

    if (!servicio) {
        return res.status(404).json({ mensaje: 'Servicio no encontrado' })
    }

    res.json(servicio)
})

app.listen(port,() => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})