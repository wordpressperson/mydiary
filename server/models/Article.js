const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true},
    article: {type: String, required: true}, 
    authorname: {type: String, required: true}
})

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;