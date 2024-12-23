import express, { Request, Response, json } from 'express';
import constactsRouter from './routes/contacts-router';

const app = express();

app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.send("I'm okay!")
})

app.use(constactsRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server in up and running on port ${port}`))