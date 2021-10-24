const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLenght: [200, 'Too long input!'],
        required: [true, 'The field is not filled']
    },
    description: {
        type: String,
        maxLenght: [200, 'Too long input!'],
        required: [true, 'The field is not filled']
    },
    imageUrl: {
        type: String,
        required: [true, 'The field is not filled'],
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
        max: 6,
        required: [true, 'The field is not filled']
    }
})



module.exports = mongoose.model('Cube', cubeSchema);