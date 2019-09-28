module.exports = {

  get totalCost () {
    return $('#ttCost')
  },

  get paymentCard () {
    return $('#PaymentMethod_PaymentCard_Option')
  },

  get paymentWeb () {
    return $('#PaymentMethod_OnAccount_Option')
  },

  setPayment (type) {
    if (type == 'card') {this.paymentCard.click()}
    else {this.paymentWeb.click()}

  },

  get totalCardAmt () {
    return $('#Payment_TotalBookingPriceValue')
  },

  get backBtn () {
    return $('#Payment_PaymentBackButton')
  },

  goBack () {
    this.backBtn.click()
  }

}