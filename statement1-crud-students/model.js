const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Name: String,
    Roll_No: String,
    WAD_Marks: { type: Number, min: 0, max: 100 },
    CC_Marks: { type: Number, min: 0, max: 100 },
    DSBDA_Marks: { type: Number, min: 0, max: 100 },
    CNS_Marks: { type: Number, min: 0, max: 100 },
    AI_Marks: { type: Number, min: 0, max: 100 },
},{
    timestamps: true,
});

module.exports = mongoose.model('Student',StudentSchema);