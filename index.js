import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());

let teadata = []
let nextId = 1

app.post('/teas', (req, res) => {
    const { name, price } = req.body;
    const teabody = { id: nextId++, name, price };
    teadata.push(teabody)
    res.status(201).send(teabody)
})

app.get('/teaList', (req, res) => {
    res.status(200).send(teadata)
})

app.get('/tea/:id', (req, res) => {
    const tea = teadata.find(t => t.id === parseInt(req.params.id));
    if (!tea) {
        return res.status(404).send("not found")
    }
    return res.status(201).send(tea)

})

app.put('/tea/:id', (req, res) => {
    const tea = teadata.find(t => t.id === parseInt(req.params.id));
    if (!tea) {
        return res.status(404).send("not found")
    }
    const { name, price } = req.body
    tea.name = name;
    tea.price = price;
    return res.status(201).send(tea)

})

app.delete('/tea/:id', (req, res) => {
    const tea = teadata.find(t => t.id === parseInt(req.params.id));
    if (!tea) {
        return res.status(404).send("not found")
    }
    return res.status(201).send(tea)

})

app.get("/", (req, res) => {
    res.send("hello /");
})
app.get("/satyavrat", (req, res) => {
    res.send("satyavrat /........");
})

app.listen(port, () => {
    console.log(`server running at port ${port}`);
})
