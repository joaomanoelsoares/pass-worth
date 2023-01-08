# pass-worth
Clean package that allows you to create safe passwords without writing too much code.

**How to install:**

``npm i pass-worth``

**About:**

````Arguments: 

 - PasswordLength:
    -Type: number
    -Description: Number of strings you want the generated password have
    -Required: Yes
    
  - includeSymbols:
     -Type: boolean
     -Description: When the value are true, the generated password will include symbols, such as: (!@#$%^&*()_+-=[]{}|;':,.<>/?)
     -Required: Yes
     
   - includeNumbers:
      -Type: boolean
      -Description: Whe the value are true, the generated password will include all the numbers (0,1,2,3,4,5,6,7,8,9)
      -Required: Yes
      
   - excludeAmbiguous
      -Type: boolean
      -Description: When the value are true, the generated password won't have similar string characters (ex:ilLI|`oO0)
      -Required: Yes

**Usage examples:**

```const passwordGenerator = require('password-generator');
const newPassword = passwordGenerator.generatePassword(10, true, true, true);
console.log(newPassword); // Shows the generated password on your console
```

```const passwordGenerator = require('password-generator');
const user = {
  username: 'johndoe',
  password: passwordGenerator.generatePassword()
}

// Save the user and the generated password at some place (Database, Local Storage, etc.)
```



