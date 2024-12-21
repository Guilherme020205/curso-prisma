import express, {json} from "express"
import connection from "./database.js";

const app = express();
app.use(json())

app.get("/users", async (req, res) => {
    // pegar os daods de user do meu lindo banco 
    // pg
    try {
        const result = await connection.query(`SELECT * FROM users`)
        return res.send(result.rows)
    } catch (err) {
        console.error(err)
        return res.sendStatus(500)
    }
})

app.post("/users", async (req, res) => {
    const {name, email, nickname} = req.body;
    try{
        await connection.query(`INSERT INTO users (name, email, nickname) VALUES ($1, $2, $3)`, [name, email, nickname])
        return res.sendStatus(201)
    }catch(err){
        console.error(err)
        return res.sendStatus(500)
    }
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up and running on port ${port}`))