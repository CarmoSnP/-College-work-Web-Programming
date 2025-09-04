const fs = require("fs");
const path = require("path");

// Caminho do arquivo de usuários
const usersFile = path.join(__dirname, "../models/users.json");

// Função para ler os usuários
function readUsers() {
    return JSON.parse(fs.readFileSync(usersFile, "utf-8"));
}

// Função para salvar usuários
function saveUsers(data) {
    fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
}

// Função de login
const login = (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
    }

    // Remove a senha antes de enviar
    const { password: _, ...userWithoutPassword } = user;

    res.json({ message: "Login realizado com sucesso!", ...user });
};

// Função de registro
const register = (req, res) => {
    const { name, email, password } = req.body;
    const users = readUsers();

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Usuário já cadastrado" });
    }

    users.push({ name, email, password });
    saveUsers(users);

    res.json({ message: "Usuário cadastrado com sucesso!" });
};

module.exports = { login, register };
