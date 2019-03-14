'use strict';
const sentences = [
    { subject: 'javaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 feature; object destructuring
function say({ subject, verb, object}) {
    // es feature: template strings
    // note that quotes below are backticks (`), not single quotes (')
    console. log(`$subject} ${verb} ${object}`);
}
// es6 feature: for...of
for(let s of sentences) {
}

