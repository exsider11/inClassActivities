// TODO: Import the Validate class.

const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('Validate', ()=>{
    it('should retrun false if empty string',()=>{
        const validator = new Validate();
        const output = validator.isPassword();
        expect(output).toEqual(false)
    });

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
})