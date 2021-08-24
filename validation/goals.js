const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGoalInput(data) {
    let errors = {};

    data.category = validText(data.category) ? data.category : '';
    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : '';
    data.milestone = validText(data.milestone) ? data.milestone : '';


    if (!Validator.isLength(data.category, { min: 5, max: 50 })) {
        errors.category = 'Category must be at least 5 characters long';
    }
 
    if (Validator.isEmpty(data.category)) {
        errors.category = 'Category field is required';
    }

    if (!Validator.isLength(data.title, { min: 3, max: 40 })) {
        errors.title = 'Title must be at least 3 characters long';
    }

    if (!Validator.isLength(data.milestone, { min: 0, max: 40 })) {
        errors.milestone = 'Milestone can be at most 40 characters long';
    }
 
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
        errors.description = 'Description must be at least 5 characters long';
    }
 
    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};