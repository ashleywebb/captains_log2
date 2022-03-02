const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema (
    {
        title: String,
        entry: String,
        shipIsBroken: Boolean
    },
    {
        timestamps: true
    }
)

const Log = mongoose.model('Log', logsSchema)

module.exports = Log