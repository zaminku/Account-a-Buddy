# Account-a-Buddy
[Account-a-Buddy](https://account-a-buddies.herokuapp.com) is a MERN stack web application that helps users keep track of their goals with a big emphasis on partner-based accountability. Each user is anonymously matched with someone who has a similar goal to either make or break a habit. This gives the user someone they can share their struggles and successes with as they try to complete their goal. The more accountability you have, the greater likelihood of success. Set your goals and find a buddy who will keep you motivated!

## Languages & Technologies
Languages: Javascript, HTML5, CSS3
<br/>
Backend: MongoDB, Mongoose, Express.js
<br/>
Frontend: React, Node.js, Axios
<br/>
Hosting: Heroku

## Functionalities
- User Authentication
    - Users can create an account and login to their profile

```Javascript
export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
)
```

- Goals CRUD 
    - Users can create as many goals as possible
- Daily Reaction Tracker
    - Users can record their emotion to each one of their goals once a day
- User will be paired with an anonymous accountability partner
    -  Users are paired based on whether they chose habit forming/breaking
- Live Chat
    -  Users will be able to contact their partner in a private chatroom regarding each goal

## Technical Challenges
- Live chat & socket.io
    Direct messages to other users utilizes Javascript and [socket.io](https://socket.io/)

```Javascript
    io.on('connection', (socket) => {

        socket.on("join", (roomId, username) => {
            socket.join(roomId);
            socket.to(roomId).emit("new user", username);
        });

        socket.on("send message", (roomId, message) => {
            socket.to(roomId).emit("receive message", message);
        })

        socket.on("disconnect", () => {
            console.log("USER HAS DISCONNECTED");
        });
    });
```

- MongoDB
    The primary database used to retain messages sent and goals created per user
```Javascript
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
```

## Team Members
⭐ [Ben Chai](https://www.linkedin.com/in/ben-chai/) - Flex
<br/>
⭐ [Jenny Nhan](https://www.linkedin.com/in/jennynhan/) - Backend
<br/>
⭐ [Samuel Song](https://www.linkedin.com/in/samuel-song-a0b64a21a/) - Live Chat
<br/>
⭐ [Zamin Kugshia](https://www.linkedin.com/in/zamin-k/) - Frontend
