const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/jokesDB")
    .then(()=> { console.log("ok, we are connected to the Database") })
    .catch(err => { console.log("something went wrong and this is the error", err) });

