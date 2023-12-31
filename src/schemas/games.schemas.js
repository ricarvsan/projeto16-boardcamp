import Joi from "joi"

export const gameSchema = Joi.object({
    name: Joi.string().allow(''),
    image: Joi.string().required(),
    stockTotal: Joi.number().integer().required(),
    pricePerDay: Joi.number().integer().required()
});