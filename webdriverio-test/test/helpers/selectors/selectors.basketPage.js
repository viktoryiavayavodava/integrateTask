module.exports = {
  get totalCost () {
    return $('#ttCost')
  },

  get proceedBtn () {
    return $('#Submit')
  },

  proceedToPayment () {
    this.proceedBtn.click()
  }

}