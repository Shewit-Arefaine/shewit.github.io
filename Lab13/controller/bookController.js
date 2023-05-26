const book = require('../module/book');


exports.save = (req,res,next) => {
    const addbook = new book(req.body.id,req.body.title,req.body.isbn,req.body.publishdate,req.body.author).save();
    res.status(201).json(addbook);
}

exports.getAll = (req,res,next) => {
    res.status(200).json(book.getAll());

}

exports.deletById = (req,res,next) => {
    res.json(book.deletById(req.params.id));
}
exports.edit = (req,res) => {
    const editedBook= new book(req.params.id,req.body.title,req.body.isbn,req.body.publishdate,req.body.author).edit();
    res.json(editedBook);
}