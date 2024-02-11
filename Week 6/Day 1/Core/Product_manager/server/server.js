const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json(), express.urlencoded({extended: true}), cors())


require("dotenv").config()
const port = process.env.PORT
require("./config/mongoose.config")
require("./routes/product.routes")(app)








app.listen(port, () => console.log(`Listening on port: ${port}`))