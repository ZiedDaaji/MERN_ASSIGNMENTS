const joke = require("../modules/joke.module")


//get all
module.exports.getAllJokes = (req, res) => {
    joke.find()
    .then((AllJokes) => {
        res.json({ jokes : AllJokes })
    })
    .catch(err => {
        res.json({ Message: "somthing is wrong", err })
    })
    }
//get one
module.exports.getOneJokes = (req, res) => {
    const { params } = req;
    joke.findOne({ _id: params._id })
        .then((oneJokeById) => {
            res.json(oneJokeById)
        })
        .catch(err => {
            res.json({ Message: "somthing is wrong", err })
        })
}
//post
module.exports.postJoke = (req, res) => {
    joke.create(req.body)
    .then((newJoke) => {
        res.json(newJoke)
    })
    .catch(err => {
        res.json({ Message: "somthing is wrong", err })
    })
}
//delete
module.exports.deleteJoke = (req, res) => {
    joke.deleteOne({ _id: req.params._id })
    .then((deleted) => {
        res.json(deleted)
    })
    .catch(err => {
        res.json({ Message: "somthing is wrong", err })
    })
}
//put
module.exports.updateJoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
    .then((updatedJoke) => {
        res.json(updatedJoke)
    })
    .catch(err => {
        res.json({ Message: "somthing is wrong", err })
    })
    }