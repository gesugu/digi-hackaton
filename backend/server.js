// server.js 
// const express = require("express"); 
// const bodyParser = require("body-parser"); 
// const axios = require("axios"); 
// const cors = require("cors"); 
 
// const app = express(); 
// const PORT = 5000; 
 
// const userSessions = {}; 
 
// app.use(cors()); 
// app.use(bodyParser.json()); 
 
// const apiKey = "AIzaSyB9_RZgG1JqNacXEL9gfDdhwmHMpaBrp_M"; 
// const geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateMessage"; 
 
// // Сохранение данных опросника 
// app.post("/api/saveSurveyData", (req, res) => { 
//   const { sessionId, surveyData } = req.body; 
//   userSessions[sessionId] = { surveyData }; 
//   res.send("Survey data saved!"); 
// }); 
 
// // Обработка сообщений чата 
// app.post("/api/chat", async (req, res) => { 
//   const { sessionId, message } = req.body; 
//   const surveyData = userSessions[sessionId]?.surveyData || {}; 
 
//   // Добавляем данные из опросника в контекст 
//   const context = `Имя: ${surveyData.name}, Возраст: ${surveyData.age}, Профессия: ${surveyData.profession}, Опыт: ${surveyData.experience}`; 
//   const prompt = `${context}\nПользователь: ${message}`; 
 
//   try { 
//     const response = await axios.post( 
//       `${geminiApiUrl}?key=${apiKey}`, 
//       { 
//         prompt: { text: prompt }, 
//         temperature: 0.7, 
//         max_output_tokens: 300, 
//       }, 
//       { headers: { "Content-Type": "application/json" } } 
//     ); 
 
//     const botMessage = response.data.candidates[0].content.parts[0].text; 
//     res.send(botMessage); 
//   } catch (error) { 
//     console.error("Ошибка запроса к Gemini:", error); 
//     res.status(500).send("Ошибка при общении с Gemini."); 
//   } 
// }); 
 
// app.listen(PORT, () => { 
//   console.log(`Server is running on http://localhost:${PORT}`); 
// });


// const express = require("express");   const cors = require("cors");
//    const bodyParser = require("body-parser");
//    const app = express();   app.use(cors());
//    app.use(express.json()); // Включаем обработку JSON   app.use(bodyParser.urlencoded({ extended: true }));
//    app.use(bodyParser.json());   
// //    const { sessionId, surveyData } = req.body;
// //      if (!sessionId || !surveyData) {       return res.status(400).json({ error: "Отсутствуют sessionId или surveyData" });
// //      }
// //      console.log("Полученные данные опросника:", surveyData);
// //      // Пример сохранения данных в локальной переменной или БД     // surveyResults[sessionId] = surveyData;
// //      res.status(200).send("Данные опросника успешно сохранены!");
//      const { sessionId, message } = req.body;
//      if (!sessionId || !message) {       return res.status(400).json({ error: "Отсутствуют sessionId или message" });
//      }
//      console.log(`Сообщение от пользователя (сессия ${sessionId}):`, message);
//      // Пример ответа от ИИ     const botResponse = `Вы написали: ${message}. Что вы хотите узнать о своей карьере?`;
//      // Возвращаем ответ
//      res.status(200).send(botResponse);