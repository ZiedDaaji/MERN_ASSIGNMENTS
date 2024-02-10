const jokeController = require("../controllers/joke.controller")


module.exports = (app) => {
    //get all
    app.get("/api/jokes", jokeController.getAllJokes);
    // geton joke
    app.get("/api/jokes/:_id", jokeController.getOneJokes);
    //creatjoke POST
    app.post("/api/jokes", jokeController.postJoke);
    //DELETE JOKE
    app.delete("/api/jokes/:_id", jokeController.deleteJoke);
    //put
    app.put("/api/jokes/:_id", jokeController.updateJoke);
}



