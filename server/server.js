require('dotenv').config()
const express = require('express')

const app = express();
app.use(express.static('public')) 

const {Pool}= require('pg');
const PORT = process.env.port || 5050;

const cors = require('cors');
app.use(cors());

app.use(express.json());

const dbConfig = {
    connectionString: process.env.Visitor_DB_URL
}

const pool = new Pool(dbConfig)

app.post('/visitors', async (req,res) =>{
    try{
        const {visitor_name, visitor_org, visitor_comment} = req.body;
        const {rows} = await pool.query('INSERT INTO visitors(visitor_name, visitor_org, visitor_comment) VALUES ($1, $2, $3)', [visitor_name, visitor_org, visitor_comment]);
        res.send(rows)
    }catch (err){
        res.send(err.message)
    }
})

app.get('/visitors', async (res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM visitors');
        res.send(rows);
    } catch (err){
        res.send(err.message);
    }
})

app.get('/visitors/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {rows} = await pool.query('SELECT * FROM the_pets WHERE pet_id = $1', [id])
        res.send(rows)  
    }catch (error){
        console.error(error);
    }
})

app.post('/pets', async (req, res) => {
    try{
        const {name, age, kind} = req.body
        const {rows} = await pool.query('INSERT INTO the_pets(name, age, kind) VALUES($1, $2, $3)', [name, age, kind])
        res.send(rows) 
    }catch (error){
        res.send(error);
}
})

app.patch('/pets/:id', async (req, res) => {
    try{
        const {id} = req.params
        const {name, age, kind} = req.body
        const {rows} = await pool.query('UPDATE the_pets SET name = $1, age = $2, kind = $3 WHERE pet_id = $4', [name, age, kind, id])
        res.send(rows);
    }catch (error){ 
        res.send(error);
}
})

app.delete('/pets/:id', async (req, res) => {
    const {id} = req.params
    try{
        const {rows} = await pool.query('DELETE FROM the_pets WHERE pet_id = $1', [id])
        res.send(rows)
    }catch{
        res.send(error);
    }
})

app.listen(PORT, () =>{
    console.log('Listening port:' + PORT)
})