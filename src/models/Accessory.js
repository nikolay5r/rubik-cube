const mongoose = require('mongoose');

const accesssorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Input field is not filled!']
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
    description: {
        type: String,
        maxLenght: [200, 'Too long input!'],
        required: [true, 'Input field is not filled']
    }
})

module.exports = mongoose.model('Accessory', accesssorySchema)