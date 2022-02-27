const express=require('express');
const app=express()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

//const mongoose= require('mongoose');

const PORT=process.env.PORT || 3001



//mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true}).
const CONNECTION_URL='mongodb://localhost:27017/mailtesting'


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);



// using transporter.


// app.post("/send_mail", cors(), async (req, res) => {
// 	let { text } = req.body
// 	const transport = nodemailer.createTransport({
// 		host: process.env.MAIL_HOST,
// 		port: process.env.MAIL_PORT,
// 		auth: {
// 			user: process.env.MAIL_USER,
// 			pass: process.env.MAIL_PASS
// 		}
// 	})

// 	await transport.sendMail({
// 		from: process.env.MAIL_FROM,
// 		to: "test@test.com",
// 		subject: "test email",
// 		html: `<div className="email" style="
//         border: 1px solid black;
//         padding: 20px;
//         font-family: sans-serif;
//         line-height: 2;
//         font-size: 20px; 
//         ">
//         <h2>Here is your email!</h2>
//         <p>${text}</p>
    
//         <p>All the best, Darwin</p>
//          </div>
//     `
// 	})
// })







// var express = require('express');
// var cors = require('cors')
// var bodyParser = require('body-parser')

// var app = express();

// app.use(cors())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.post('/login', (req, res) => {
//     console.log(req.body)
//     let body = req.body;
//     if (body.username == "syed701@gmail.com" && body.password == "Test_1234") {
//         res.status(200).send({
//             error: null,
//             message: null,
//             token: "hfjhfg2h3jf423f4hj3f24g234v23jhf4j23fbu4jf23j423jf4hj23b4jnfdsf8td7s8fnt8dsfmsdf"
//         })
//     } else {
//         res.status(401).send({
//             error: 401,
//             message: "Not authorized"
//         });
//     }

// });

// var server = app.listen(8081, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('Login app is listening at http://%s:%s', host, port);
// });