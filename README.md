# Project Name
- Account-a-Buddy
- https://account-a-buddies.herokuapp.com
 
# Overview
- This web application connects users with other users (accountability partner) to help them achieve their goals.
- Users can keep motivated and accountable for achieving goals they set for themselves by being able to talk with an anonymous partner about their struggles and successes.
- Being able to help a partner achieve their goal can also aid in keeping a user motivated to achieve their own goal.
 
# Core Functionalities / Features
- Create an account and login.
    - Users are anonymous and can only be identified by their username.
- Create and edit goals to complete.
    - Create sub-goals (milestones) for each goal to complete.
- Keep a running total of how the user feels about their goal for that day.
- For each goal, match with another user (accountability partner) who has a similar goal based on the goal-type (habit breaking or habit forming).
    - Live chat with your accountability partner.
    - End any existing accountability partnership at any time and match with another user. 

## MVP List
- User Auth
- Live Chat
- Goals / Milestones CRUD
- Daily Reaction Tracker
- Random Partner Matcher

## BONUS
- Set the duration of a goal as well as the time left with an accountability partner with the option to extend the partnership.
- Gamify the completion of goals.
    - Streaks – (ex. 14day streak of accomplishing your goal you get a badge).
    - Incentive to pay for extending partnerships with reward points.
    - Receive reward for user engagement (daily use, etc.)
- Map / filter for matching partners based on location for possible meetups.
- Journal and make posts about goal progress to a user's profile.
 
# Functionality
- Users can create an account and login to their profile.
- Users can create a goal. 
    - Type
        - Habit forming
        - Habit breaking
        <!-- - One time goal (Bonus feature) -->
    - Goal details
        - Title
        - Description of goal
        - Milestones (subtasks)
- User will be paired with an anonymous accountability partner.
    -  Users are paired based on whether they chose habit forming/breaking
    <!-- - Default duration of  3 days (Bonus feature) -->
    <!-- - Once time has ended, users have the option to extend the partnership for 3 weeks (Bonus feature)-->
    <!-- - User can receive badges from their partner at the end of the 3 weeks/partnership/goal achievement (Bonus feature)-->
- Live Chat
    -  Users will be able to contact their partner in a private chatroom
- Users will be able to react to each one of their goals once a day
<!-- - User's goals will be tracked and displayed in a graph (Bonus feature) -->
<!-- - Users write posts in a private journal and can react to it (ex. How do you feel right now? – sad, happy, angry, etc as emojis) (Bonus feature)-->

# Technologies & Challenges

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
    MongoDB is the primary database used to retain messages sent and goals created per user
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
# Team Members
- Ben Chai - flex
- Jenny Nhan - backend
- Samuel Song - live chat
- Zamin Kugshia - frontend