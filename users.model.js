const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
            Course_id: {
                type: String
            },
            Course_name: {
                type: String
            },
            Provider: {
                type: String
            },
            University: {
                type: String
            },
            Parent_subject: {
                type: String
            },
            Child_subject: {
                type: String
            },
            Url: {
                type: String
            },
            Next_session: {
                type: String
            },
            Length: {
                type: String
            },
            Video_url: {
                type: String
            }
})
module.exports = mongoose.model('User',User);