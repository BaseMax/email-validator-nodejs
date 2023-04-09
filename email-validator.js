// javascript
// const REGEX = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/g;
// const REGEX = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})(?!\.)/g;
const REGEX = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})\b/g;
// "info@google.com..."" is an invalid email but we should detect `info@google.com` as an email and not `info@google.com...`.

// Return an array from all emails address inside the input text
const match = (text) => {
    return text.match(REGEX);
};

// Return true if the input text has at least one email address
const has = (text) => {
    return match(text).length > 0;
};

// Return true if the input text includes the email address
const includes = (text, email) => {
    return match(text).includes(email);
};

// Export the functions
module.exports = {
    match,
    includes,
    has
};
