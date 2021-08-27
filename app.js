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


// =================================
// ======== SOCKET SETUP ===========
// =================================
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
  console.log("....... IO SOCKET IS CONNECTED .......");
  console.log(socket.id);

  socket.on("join", (roomId, username) => {
    socket.join(roomId);
    console.log(`Connection coming from room ${roomId}`);
    console.log(`${username} has been connected`);
    socket.to(roomId).emit("new user", username);
  });

  socket.on("send message", (roomId, message) => {
    console.log(`${message.username} sent the following text: ${message.text}`);
    console.log(`re-emitting that message to socket id ${roomId}`);
    socket.to(roomId).emit("receive message", message);
  })

  socket.on("disconnect", () => {
    console.log("USER HAS DISCONNECTED");
  });
});
// =================================


app.use('/static', express.static(path.join(__dirname, './frontend/public')));

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