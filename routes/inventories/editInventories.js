const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.patch('/inventories', (req, res) => {
    const body = req.body
    const id = req.query.id

    const result = db.edit('inventories', id, body)
    if (result) {
        res.send(result)
    }
    else {
        res.status(404).send('stop')
    }
})



module.exports = app