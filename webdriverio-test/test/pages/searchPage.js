const selectorsS = require('../helpers/selectors.searchPage')

module.exports = {

    searchTrains: function(from, to, oneWay) {
        selectorsS.setFromStation(from)
        browser.keys('Enter')
        selectorsS.setToStation(to)
        browser.keys('Enter')
        browser.keys('Tab')
        selectorsS.expandForm()
        if (oneWay === true) {
            selectorsS.setOneWay()
        } else {
            selectorsS.setReturn()
        }
        selectorsS.searchSubmit()
    }

}
