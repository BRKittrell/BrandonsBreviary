require('dotenv').config()

import express from 'express'

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

app.listen(PORT, () =>{
    console.log('Listening port:' + PORT)
})