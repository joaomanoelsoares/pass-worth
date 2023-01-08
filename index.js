const passwordLength = 20;
const includeSymbols = true;
const includeNumbers = true;
const excludeAmbiguous = true;

const generatePassword = () => {
  let password = "";
  const validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const symbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?";
  const numbers = "0123456789";
  let allChars = validChars;

  if (includeSymbols) {
    allChars += symbols;
  }
  if (includeNumbers) {
    allChars += numbers;
  }
  if (excludeAmbiguous) {
    allChars = allChars.replace(/[ilLI|`oO0]/g, "");
  }

  for (let i = 0; i < passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

console.log(generatePassword());

module.exports ={
    generatePassword,
}