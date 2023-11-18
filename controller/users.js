import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        username: "selpia",
        age: 19
    }

];

export const getUsers = (req, res) => {
    console.log(`Pengguna dalam Database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    console.log(`Pengguna [${user.username}] ditambahkan ke dalam Database`);
}

export const getUser = (req, res) => {
    res.send(req.params.id);
}

export const deleteUser = (req, res) => {
    console.log(`Pengguna yang menggunakan id ${req.params.id} telah dihapus`);

    users = users.filter((user) => user.id !== req.params.id);
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id !== req.params.id);

    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username telah terupdate ke ${req.body.username}. umur telah terupdate ke ${req.body.age}`)
}