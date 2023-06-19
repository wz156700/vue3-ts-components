// Node.js require:
const Ajv = require("ajv");
const localize = require("ajv-i18n")
const ajv = new Ajv({ allErrors: true, jsonPointers: true }); // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv);
// ajv.addKeyword('test', {
//     macro() {
//         return {
//             minLength: 10
//         }
//     }
// })
const schema = {
    type: "object",
    properties: {
        name: {
            type: 'string',
            minLength: 10,
            errorMessage: "这是不对的"
        },
        age: {
            type: 'number'
        },
        pets: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        isWorker: {
            type: 'boolean'
        },

    },
    required: ['name', 'age']

};

const data = {
    name: 'wlf',
    age: 18,
    pets: ['土豆', 3]
};

const validate = ajv.compile(schema);
const valid = validate(data);
if (!valid) { console.log(validate.errors); }

// const schema = {
//     type: "object",
//     required: ["foo"],
//     properties: {
//         foo: { type: "integer" },
//     },
//     additionalProperties: false,
//     errorMessage: "should be an object with an integer property foo only",
// }

// const validate = ajv.compile(schema)
// console.log(validate({ foo: "a", bar: 2 })) // false
// console.log(validate.errors) // processed errors
