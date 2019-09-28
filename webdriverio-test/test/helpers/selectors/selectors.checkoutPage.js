module.exports = {

  get email () {
    return $('#EmailTextBox')
  },

  setEmail (email) {
    this.email.setValue(email)
  },

  get guestRadio () {
    return $('#continueWithoutLogin')
  },

  setGuestRadio () {
    this.guestRadio.click()
  },

  get guestSubmit () {
    return $('#GuestCheckoutSubmitButton')
  },

  setGuestSubmit () {
    this.guestSubmit.click()
  }

}
