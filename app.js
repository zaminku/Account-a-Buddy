const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const goals = require('./routes/api/goals');
const messages = require('./routes/api/messages');
const rooms = require('./routes/api/rooms');

const bodyParser = require('body-parser');
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes are made here
app.use('/api/users', users);
app.use('/api/goals', goals);
app.use('/api/messages', messages);
app.use('/api/rooms', rooms);

const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

// TEST CODE ================================================

// App Setup
const path = require("path")
const http = require("http")
const socket = require("socket.io")
const chat = require("./routes/chat")
app.use(chat);
const server = http.createServer(app);

server.listen(port, ()=> {
  console.log("....... CONNECTED .......");
  console.log(`PORT is on ${port}`);
  console.log(".........................");
});

// Socket Setup
const io = socket(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log("....... CONNECTED .......");
  
  // Socket listeners and responses
  socket.on('sendMessage', data => {
    console.log(`${data.username} sent a message`);
    console.log(data);
    // Below io.sockets will emit to ALL sockets
    // Need to revise so that only a particular socket
    // is emitted to
    io.sockets.emit('receiveMessage', data);
  })
  // socket.on('join', data => {
  //   console.log(`${data} has joined the room`);
  // })
  socket.on("disconnect", () => {
    console.log(`User has DISCONNECTED`);
  })
});

// Static Files
// Below would get the files from public folder and serve it to you in the browser.
// I'm not sure what it's for or how I can use it.
// app.use(express.static(path.join(__dirname,"./frontend/public")))
// ===========================================================

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}