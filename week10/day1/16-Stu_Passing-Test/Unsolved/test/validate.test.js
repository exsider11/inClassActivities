const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('isPassword',() => {
    it('should have more than 8 characters', () => {
      const validate = new Validate();
      expect(validate.isPassword("Passwo")).toBe(false)
    })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
    it('should contain at least 1 uppercase', () => {
      const validate = new Validate();
      expect(validate.isPassword("password123")).toBe(false)
    })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
    it('should contain at least 1 lowercase', () => {
      const validate = new Validate();
      expect(validate.isPassword("PASSWORD123")).toBe(false)
    })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
    it('should contain at least 1 number', () => {
      const validate = new Validate();
      expect(validate.isPassword("Password")).toBe(false)
    })
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
    it('should return true when passing isPassword()', () =>{
      const validate = new Validate();
      expect(validate.isPassword("Password123")).toBe(true);
    })
  })
});
