const validate = (username, age) => {
    const errors = []
    username = username.trim()
    age = age.trim()

    // username validation
    if(username.length === 0){
        errors.push("Username required")
    }
    else if(username.length < 2 || username.length > 100){
        errors.push("Username must have 2-100 characters")
    }

    // age validation
    if(age.length === 0) {
        errors.push("Age required")
    } 
    else if(isNaN(age) || age.indexOf(".") !== -1){
        errors.push("Age must be an integer number")
    }
    else if(age < 0) {
        errors.push("Age must be positive")
    }

    return errors;
};

export default validate;
