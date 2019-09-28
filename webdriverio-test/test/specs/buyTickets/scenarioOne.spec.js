const assert = require('assert');
const search = require('../../pages/searchPage')
const trains = require('../../pages/trainsPage')
const selectorsS = require('../../helpers/selectors.searchPage')
const selectorsTr = require('../../helpers/selectors.trainsPage')


describe('Test suite to verify Buys tickets functionality - Scenario1 e2e', () => {
    beforeEach(function() {
        browser.setWindowSize(1920, 1080)
        browser.url('')
    })

    it('should input destinations and search', () => {
        search.searchTrains('Liverpool Central', 'London Bridge', true)
        trains.selectTrains('anytime', 'first')
        const priceRow = selectorsTr.getPrice(selectorsTr.returnTicketPrice('anytime', 'first').getText())
        const priceSummary = selectorsTr.getPrice(selectorsTr.priceSummary.getText())
        assert.equal(priceRow, priceSummary)

        //then change selection and assert again
        // and then continue-check sum - continue - guest - continue - check sum - continue - check sum in all sections- continue- select payment m. and check totlal sum again


    })









})