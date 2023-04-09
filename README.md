# email-validator-nodejs

This is 

## Example

Import the module:

```javascript
const email_validator = require("./email-validator");
```

Then match all emails in a string:

```javascript
console.log(email_validator.match("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));
```

Or check if a string has an email address:

```javascript
console.log(email_validator.has("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));
console.log(email_validator.has("hey please message me to max@asrez.com"));
console.log(email_validator.has("!!!!"));
```

Or check if a string includes a specific email address:

```javascript
console.log(email_validator.includes("hey please message me to max@asrez.com", "max@asrez.com"));
console.log(email_validator.includes("hey please message me to max@asrez.com", "info@google.com"));
```

Copyright 2023, Max Base
