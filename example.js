const email_validator = require("./email-validator");

// Test match function
console.log(email_validator.match("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));

// Test has function
console.log(email_validator.has("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));
console.log(email_validator.has("hey please message me to max@asrez.com"));
console.log(email_validator.has("!!!!"));

// Test exact function
console.log(email_validator.exact("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));
console.log(email_validator.exact("hey please message me to max@asrez.com"));
console.log(email_validator.exact("max@asrez.com"));
console.log(email_validator.exact("!!!!"));

// Test includes function
console.log(email_validator.includes("hey please message me to max@asrez.com", "max@asrez.com"));
console.log(email_validator.includes("hey please message me to max@asrez.com", "info@google.com"));
