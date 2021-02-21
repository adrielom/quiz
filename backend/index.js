const express = require('express')
const app = express()
const cors = require('cors')

const mysql = require('mysql')

app.use(express.json())

app.use(cors())

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quiz'
})


app.get('/questions/:id', (req, res) => {
    pool.getConnection((error, response) => {
        if (error) throw error
        pool.query("SELECT * from questions WHERE id = ?", req.params.id, (err, result) => {
            if (err) throw err
            console.log(result)
            res.status(200).send(result[0])

        })
    })
})
app.get('/questions/', (req, res) => {
    pool.getConnection((error, response) => {
        if (error) throw error
        pool.query("SELECT * from questions", (err, result) => {
            if (err) throw err
            console.log(result)
            res.status(200).send(result)
        })
    })
})



app.listen(3300, () => {
    console.log('listening')
})