const express = require("express");
const dbConnection = require("./config/database");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
require("dotenv").config();

const { notFound, errorHanlder } = require("./middlewares/errors");

// Connect to MongoDB
dbConnection();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.static(path.join(__dirname, "images")));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




//mount Routes
app.use("/api/courses", require("./routes/courseRoute"));
app.use("/api/exams", require("./routes/examRoute"));
app.use("/api/lessons", require("./routes/lessonRoute"));
app.use("/api/certificates", require("./routes/certificateRoute"));
app.use("/api/units", require("./routes/unitRoute"));
app.use("/api/courseStudents", require("./routes/courseStudentRoute"));
app.use("/api/reviews", require("./routes/reviewRoute"));
app.use("/api/questions", require("./routes/questionRoute"));




app.use(notFound);
app.use(errorHanlder);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
