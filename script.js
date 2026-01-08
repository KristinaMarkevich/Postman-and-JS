
let email = 'markevich.kr@gmail.com';

// 1. The script must accept a string as input.
if(typeof email === 'string') {
    console.log('Happy to see you again!')
}
    else{
        console.log('Please, enter email')
    };

// 2. After validating the string, display a message in the console stating exactly what is wrong with the entered string.
if (typeof email === 'number'){
    console.log('You entered numbers')
}
else if(typeof email === ' '){
    console.log('You didnt enter anything')
}
else if(typeof email === 'boolean'){
    console.log('You entered words "true" or "false"')
};

// 3. Minimum 5 characters per string.
if(email.length < 5){
    console.log('Enter more than 5 symbols')
};

// 4. Maximum 64 characters per string.
if(email.length > 64){
    console.log('Enter less that 64 symbols')
};

// 5. The string must contain letters.
let pattern = /[a-zA-Z]/;

if(result = pattern.test(email)){
    console.log("Your email contains letters")
}
else{
    console.log('Email should contain letters')
};

// 6. Must contain at least one uppercase letter.
let pattern1 = /[A-Z]/;

if(result = pattern1.test(email)){
    console.log("Your email contains at least one upper letter")
}
else{
    console.log('Email should contain at least one upper letter')
};

// 7. Must contain at least one number.
let pattern2 = /[0-9]/;

if(result = pattern2.test(email)){
    console.log("Your email contains at least one digit")
}
else{
    console.log('Email should contain at least one digit')
};

// 8. Must contain at least one @ sign.
if(email.includes('@')){
    console.log('Email contains "@"')
}
else{
    console.log('Email should contain "@"')
};

// 9. The string must not be empty.
if(email === ' '){
    console.log('You didnt enter anything')
};
