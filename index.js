const express = require("express"),
    mongoose = require("mongoose"),
    jobRouter = require("./controllers/jobs")
    cors = require("cors"),
    app = express()

require("dotenv").config()
const PORT = process.env.PORT || 3001

app.use(express.static('build')) // serves build folder as main 
app.use(express.json())
app.use(cors())



mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to database')
  })
  .catch((err) => {
    console.log('Connection failed ' + err.message)
  })


app.use('/api/jobs', jobRouter)


app.listen( PORT, () => {
    console.log("server is running...")
})