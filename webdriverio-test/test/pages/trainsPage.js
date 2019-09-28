const selectorsTr = require('../helpers/selectors/selectors.trainsPage')

module.exports = {

    selectTrains: function(category, type) {
        selectorsTr.selectTicketRow1(category, type)
    },

    moveToElement: function (el) {
        el.moveTo(100,100)
    }

}
