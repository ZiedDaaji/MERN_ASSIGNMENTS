const express = require("express");
const app = express();
const PORT = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config")
const jokesRoutes = require("./routes/joke.routes")
jokesRoutes(app)



app.listen ( PORT, () => console.log(`Listening on port: ${PORT}`) );