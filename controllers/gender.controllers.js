const dotenv = require('dotenv');

// Models
const { Gender } = require('../models/gender.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

dotenv.config({ path: './config.env' });

// CRUD'S
const getAllGenders = catchAsync(async (req, res, next) => {
    const gender = await Gender.findAll({
   }); 

    res.status(200).json({
        gender,
   });
});

const getGenderId = catchAsync(async (req, res, next) => {
    const { gender } = req;

    res.status(200).json({
        gender,
    });
});

const createGender = catchAsync(async (req, res, next) => {
    const { name } = req.body;

    // INSERT INTO...
    const newGender = await Gender.create({
        name,
    });

    res.status(201).json({
        status: 'success', newGender
    });

});

const updateGender = catchAsync(async (req, res, next) => {
    const { gender } = req;
    const { name } = req.body;

    await gender.update({ name });

    res.status(200).json({ status: 'success' });
});

const deleteGender = catchAsync(async (req, res, next) => {
    const { gender } = req;

    await gender.update({ status: 'deleted'});

    res.status(200).json({
        status: 'success',
    });
});


module.exports = {
    getAllGenders,
    getGenderId,
    createGender,
    updateGender,
    deleteGender,
};