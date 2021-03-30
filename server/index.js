const express = require("express") // импорт фреймворка express.js
const app = express() // главный модуль (для использования встроенных методов express.js)
const axios = require('axios') // модуль для управления запросами
const cors = require('cors') // отключение CORS

const PORT = 3030 // Порт для node server

app.get('/getData', cors(), async (req, res) => { // /getData (путь) - get асинхронный get запрос
   const data = await axios.get('http://beruvyhodnoy.ru/stock/get/?shop_id=22') // обращаемся к API
   return res.json(data.data) // возвращаем данных API в формате json
})

app.listen(PORT, () => { // прослушка сервера на порте 
   console.log(`Example app listening at http://localhost:${PORT}`) // вывод сообщения о прослушке сервера
})
