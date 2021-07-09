const express = require("express");
const cors = require("cors");
// const { createReadStream } = require("fs");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const errCallback = err => console.log("Something didnt go right. Im sure you'll figure it out!")
// const dreams = require

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A lifetime friend shall soon be made.",
  "Any decision you have to make tomorrow is a good decision.",
  "A faithful friend is a strong defense.",
  "Bide your time, for success is near.",
  "In order to take, one must first give."

  ]
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)

})


app.get("/api/inspiration", (req, res) => {
  const inspiration = [
    "Yes!", "Obviously!!", "Go do it!", "Are you really going to let a website tell you what to do???"
  ]
  let randomIndex = Math.floor(Math.random() * inspiration.length)
  let randomInspiration = inspiration[randomIndex]
  res.status(200).send(randomInspiration)
})

// ----------------------ATTEMPT 1---------------------------


// const baseURL = `http://localhost:4000.api/dreams`
// const dreams = require("./db.json");
// const { title } = require("process");
// let dreamID = 2


// const dreamsCallback = ({ data: dreams }) => displayDreams(dreams)

// const shareDream = body => axios.post(baseURL).then(dreamsCallback).catch(errCallback)

// function submitHandler(e) {
//   e.preventDefault()
  
//   const form = document.querySelector('form')
//   let text = document.querySelector('#text')
//   form.addEventListener('submit', submitHandler)
  
//   let bodyObj = {
//     text: text.value
//   }
//   shareDream(bodyObj)
  
//   title.value = ''
// }


// module.exports = {
//   shareDream: (req, res) => {
//     console.log (req.body)
    
//     const { text } = req.body
//     const newDream = { id: dreamID, text }
//     console.log(newDream)
//     dreams.push(newDream)
//     dreamID++
//     res.status(200).send(dreams)
//   }
// }


// -----------------ATTEMPT 2---------------------

// const button = document.querySelector('button')
// const body = document.querySelector('div')
// const errorCallBack = err => console.log(err)

// const clicked = () => {
//   console.log(`You clicked a button! You must be so proud`)
//   axios.get('http://jservice.io/api/random').then((res) => {
//     console.log(res.data)
//     console.log(res.data)
//     const triviaDisplay = document.createElement('h2')
//     let trivia = res.data.question
//     triviaDisplay.textContent = `Heres your question! ${trivia}`
//     body.append(triviaDisplay) 
//   }).catch(errorCallBack)
// }

// button.addEventListener('click', clicked)





app.listen(4000, () => console.log("Server running on 4000"));
