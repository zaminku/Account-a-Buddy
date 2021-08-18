const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const goals = require('./routes/api/goals');
const messages = require('./routes/api/messages');

const bodyParser = require('body-parser');
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes are made here
app.use('/api/users', users);
app.use('/api/goals', goals);
app.use('/api/messages', messages)

const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

// Test code ------------------------------

const path = require("path")
const http = require("http")
const socketio = require("socket.io")

const server = http.createServer(app)
const io = socketio(server, {
    cors: {
      origin: '*',
    }
  });
  
app.use(express.static(path.join(__dirname,"./frontend/public")))

io.on("connection", socket=>{
  
    // const id = socket.handshake.query.id
    // socket.join(id)

    console.log(".......Connected.........")

    socket.on("message", data => {
      // socket.broadcast.to(data.recipient).emit('receive-message', data.message)
      console.log(data)
    })
})

server.listen(port, ()=> console.log(`PORT2 is on ${port}`))

// Test end -------------------------------

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));