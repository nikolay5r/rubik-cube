const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLenght: [200, 'Too long input!'],
        required: [true, 'Input field is not filled']
    },
    description: {
        type: String,
        maxLenght: [200, 'Too long input!'],
        required: [true, 'Input field is not filled']
    },
    imageUrl: {
        type: String,
        required: [true, 'Input field is not filled'],
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
        required: [true, 'Input field is not filled']
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]

})



module.exports = mongoose.model('Cube', cubeSchema);