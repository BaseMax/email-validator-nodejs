# email-validator-nodejs

This is a simple email validator for NodeJS that can match all emails in a string, check if a string has an email address, or check if a string includes a specific email address. You can use this module to validate emails in your NodeJS projects.

## Features

- Match all emails in a string
- Check a specific email address in a string
- Check if a string has at least one email address
- Check if a string match only one email address without any other characters or white spaces

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

Or check if a string only match an email address without any other characters:

```javascript
console.log(email_validator.exact("hi there, here is my email address: maxbasecode@gmail.com please email me otherwise i will contact info@google.com... or at least to info@my.asrez.com or me.you@my.asrez.com"));
console.log(email_validator.exact("hey please message me to max@asrez.com"));
console.log(email_validator.exact("max@asrez.com"));
console.log(email_validator.exact("!!!!"));
```

Or check if a string includes a specific email address:

```javascript
console.log(email_validator.includes("hey please message me to max@asrez.com", "max@asrez.com"));
console.log(email_validator.includes("hey please message me to max@asrez.com", "info@google.com"));
```

Copyright 2023, Max Base
