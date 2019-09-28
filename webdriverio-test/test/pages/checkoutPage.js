const selectorsC = require ('../helpers/selectors/selectors.checkoutPage')
const selectorsTr = require('../helpers/selectors/selectors.trainsPage')

module.exports = {
  setGuest: function (email) {
    selectorsC.setEmail(email)
    selectorsC.setGuestRadio()
    selectorsC.setGuestSubmit ()
    
  }

}
