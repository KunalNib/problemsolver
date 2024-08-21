const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: String,
    description: String,
    reportedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Problem', problemSchema);
