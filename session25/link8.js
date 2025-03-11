function isStrongPassword(password) {  
    if (password.length < 8) {  
        return false;  
    }  
  
    let hasUpper = false;  
    let hasLower = false;  
    let hasDigit = false;  
  
    for (let char of password) {  
        if (char >= 'A' && char <= 'Z') {  
            hasUpper = true;  
        } else if (char >= 'a' && char <= 'z') {  
            hasLower = true;  
        } else if (char >= '0' && char <= '9') {  
            hasDigit = true;  
        }  
    }  
    console.log(hasDigit && hasLower && hasUpper);
    return hasUpper && hasLower && hasDigit;
  }
  isStrongPassword('Abc123!@');
  isStrongPassword('weakpass');

  