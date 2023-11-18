import express from "express";
import bodyParser from "body-parser";

import usersRoute from "./routes/users.js";
import aboutRoute from "./routes/about.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoute)
app.use('/about', aboutRoute)

app.get('/', (req, res, next) => {
    res.status(200).send('Ini adalah halaman Beranda')
});

app.use((req, res, next) => {
    res.status(400).send("Halaman tidak dapat diakses dengan method tersebut")
});

app.use((req, res, next) => {
    res.status(404).send('Halaman tidak ditemukan');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));