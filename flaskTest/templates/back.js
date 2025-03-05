const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

// Подключение к БД
mongoose.connect('mongodb://localhost:27017/promotions', { useNewUrlParser: true, useUnifiedTopology: true });

// Модель пользователя
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
}));

// Модель акции
const Promotion = mongoose.model('Promotion', new mongoose.Schema({
    title: String,
    description: String,
}));

// Регистрация
app.post('/api/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send();
});

// Аутентификация
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'secret');
        res.json({ token });
    } else {
        res.status(401).send();
    }
});

// Получение акций
app.get('/api/promotions', async (req, res) => {
    const promotions = await Promotion.find();
    res.json(promotions);
});

// Добавление акции
app.post('/api/promotions', async (req, res) => {
    const promotion = new Promotion(req.body);
    await promotion.save();
    res.status(201).send();
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});