const REGEX = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})\b/g;
const EXACT_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})\b$/g;

// Return an array from all emails address inside the input text
const match = (text) => {
    return text.match(REGEX);
};

// Return true if the input text has at least one email address
const has = (text) => {
    return REGEX.test(text);
};

// Return true if the input text includes the email address
const includes = (text, email) => {
    const matches = match(text);

    if (!matches) return false;
    return matches.includes(email);
};

// Return true if the input text match only one email address without any other characters or whitespaces
const exact = (text) => {
    return EXACT_REGEX.test(text);
};

// Export the functions
module.exports = {
    match,
    includes,
    has,
    exact
};
