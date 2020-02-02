const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegisterInput = data => {
    let errors = {};
    //Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //name Checks
    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    //Email Checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is Invalid";
    }

    //Password Checks
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    // Password length checks
    else if (!validator.isLength(data.password, {
            min: 6,
            max: 30
        })) {
        errors.password = "Password must be at least 6 characters";
    }

    // Password2 checks
    else if (validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required";
    }

    // Password and password2 compares
    else if (!validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords do not match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};