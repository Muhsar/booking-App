const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const mongoose = require("mongoose");
mongoURI = 'mongodb://localhost/shopApp'
 mongoose.connect(mongoURI,
  {
    useNewUrlParser: true,
  useCreateIndex:true,
   useUnifiedTopology:true,
   useFindAndModify: false
 })
const connection = mongoose.connection
connection.once('open', ()=>{
 console.log('MongoDB database connected succesfully')
})

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});