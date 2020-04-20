// provide the controller a link to the author model
var authors = require('../models/author');
// Function to handle a request to get all authors
const getAllAuthors = (req, res) => {
    res.send(authors); // return the list of authors
};

// function to handle a request to a particular author
const getAuthorByID = (req, res) => {
    // search for author in the database via ID
    const author = authors.find(author => author.id === req.params.id);

    if (author) {
        // send back the author details
        res.send(author);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// Remember to export the callbacks
module.exports = {
    getAllAuthors,
    getAuthorByID
};