const mongoose = require("mongoose");
const Joi = require("joi");

const requestSchema = new mongoose.Schema({
    firstName: {type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: true },
    reason: { type: String, required: true },
    details: { type: String },
    grade: { type: Number, required: true },
    isNewcomer: { type: Boolean, required: true },
    isNewStudent: { type: Boolean, required: true},
});

const Request = mongoose.model("Request", requestSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        reason: Joi.string().required().label("Reason"),
        details: Joi.string().label("Details"),
        grade: Joi.number().required().label("Grade"),
        isNewcomer: Joi.boolean().required().label("Newcomer"),
        isNewStudent: Joi.boolean().required().label("NewStudent"),
    });
    return schema.validate(data);
}

module.exports = { Request, validate }