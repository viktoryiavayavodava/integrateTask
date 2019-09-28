const selectorsTr = require('../helpers/selectors.trainsPage')

module.exports = {

    selectTrains: function(category, type) {
        selectorsTr.selectTicketRow1(category, type)
    }

}
