const express = require('express');
const app = express();
app.use(express.json());

const {Pool}= require('pg');
const PORT = process.env.port || 5050;


const cors = require('cors');
app.use(cors());

require('dotenv').config();

const pool = new Pool({
connectionString: process.env.Database_URL

})

app.post('/visitors', async (req,res) =>{
    try{
        const {visitor_name, visitor_org, visitor_comment} = req.body;
        const {rows} = await pool.query('INSERT INTO visitors(visitor_name, visitor_org, visitor_comment) VALUES ($1, $2, $3)', [visitor_name, visitor_org, visitor_comment]);
        res.send(rows)
    }catch (err){
        res.send(err.message)
    }
})