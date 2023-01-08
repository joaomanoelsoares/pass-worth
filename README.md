# pass-worth
Clean package that allows you to create safe passwords without writing too much code.

**How to install:**

``npm i pass-worth``

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



