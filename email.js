function isValidateEmail(email){
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
const email ="example@example.com";
if (isValidateEmail(email)) {
   console.log("Email is valid.");
} else {
console.log("Email is invalid.");
}

