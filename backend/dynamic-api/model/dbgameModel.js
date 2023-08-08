const mongoose = require('mongoose');

const dbGameSchema = mongoose.Schema(

    {
        task_id: {
            type: String,
        },
        namespace_list: {
            type: Array,
            required: true,
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        namespace: {
            type: String,
            required: true,
        }
    },
    {
        timestamp: true,
    }
)

const DBGame = mongoose.model("DBGame", dbGameSchema)

exports.model = DBGame