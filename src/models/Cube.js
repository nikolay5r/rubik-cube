const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLenght: [200, 'Too long text!'],
        required: [true, 'Not filled all the fields!']
    },
    description: {
        type: String,
        maxLenght: [200, 'Too long text!'],
        required: [true, 'Not filled all the fields!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Not filled all the fields!'],
        validate: {
            validator: function (value) {
                return /^https?:\/\//g.test(value)
            },
            message: 'Invalid image url!'
        }
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 6
    }
})



module.exports = mongoose.model('Cube', cubeSchema);