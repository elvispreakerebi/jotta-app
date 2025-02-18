require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const path = require("path");

const app = express();

// Middleware
app.use(
    cors({
      origin: process.env.NODE_ENV === "production"
        ? "http://localhost:3000" // Your frontend's production URL
        : "http://localhost:3000", // Development URL
      credentials: true, // Allow credentials
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectDB();

// Passport Configuration
require("./config/passport")(passport);

// Session Middleware using MongoDB
app.use(
    session({
      secret: process.env.SESSION_SECRET || "your_secret", // Use a strong secret in production
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI, // Your MongoDB connection string
      }),
      cookie: {
        secure: process.env.NODE_ENV === "production", // Secure cookies only in production
        httpOnly: true, // Prevent client-side access to the cookie
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Adjust for environment
      },
    })
);

// app.use((req, res, next) => {
//     console.log("Session Cookie Settings:", req.session.cookie);
//     next();
// });


// Flash Middleware
app.use(flash());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Debugging Middleware
// app.use((req, res, next) => {
//     console.log("Session Data:", req.session);
//     console.log("Authenticated User:", req.user);
//     next();
// });

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/youtube", require("./routes/youtube"));

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, "frontend/build")));

// Handle React routing, return all requests to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
