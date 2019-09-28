const assert = require('assert');
const search = require('../../pages/searchPage')
const trains = require('../../pages/trainsPage')
const checkout = require('../../pages/checkoutPage')
const selectorsTr = require('../../helpers/selectors/selectors.trainsPage')
const selectorsTick = require('../../helpers/selectors/selectors.ticketsPage')
const selectorsSeat = require('../../helpers/selectors/selectors.seatsPage')
const selectorsB = require('../../helpers/selectors/selectors.basketPage')
const selectorsPay = require('../../helpers/selectors/selectors.paymentPage')
const utils = require ('../../helpers/utils')
const data = require('../../helpers/testData.json')


describe('Test suite to verify Buy tickets functionality - Scenario1 e2e', () => {
    beforeEach(function() {
        browser.setWindowSize(1920, 1080)
        browser.url('')
    })

    it('should go through one-way ticket purchase flow', () => {

        // search and select
        search.searchTrains(data.fromStation[0], data.toStation[0], true)
        trains.selectTrains(data.ticketCategory[0], data.ticketType[1])
        const priceRow = utils.getPrice(selectorsTr.returnTicketPrice(data.ticketCategory[0], data.ticketType[1]).getText())
        const priceSummary = utils.getPrice(selectorsTr.priceSummary.getText())
        assert.equal(priceRow, priceSummary)

        // change selection
        trains.selectTrains(data.ticketCategory[2], data.ticketType[0])
        browser.pause(1000)
        const newPriceRow = utils.getPrice(selectorsTr.returnTicketPrice(data.ticketCategory[2], data.ticketType[0]).getText())
        const newPriceSummary = utils.getPrice(selectorsTr.priceSummary.getText())
        assert.equal(newPriceRow, newPriceSummary)
        // browser.pause(3000)
        // utils.loseFocus()
        trains.moveToElement(selectorsTr.summaryBox)

        // move to seats
        selectorsTr.clickContinueBtn ()
        utils.waitForElement(selectorsSeat.bike)
        const priceTtl =  utils.getPrice(selectorsTick.totalPrice.getText())
        const totalCost = utils.getPrice(selectorsTick.totalCost.getText())
        // browser.pause(3000)

        assert.equal(priceTtl,newPriceSummary)
        assert.equal(totalCost,newPriceSummary)

        // move to login
        selectorsTr.clickContinueBtn ()
        checkout.setGuest(data.emails[0])
        selectorsTr.clickContinueBtn ()

        // move to tickets
        const totalCostTickets = utils.getPrice(selectorsTick.totalCost.getText())
        assert.equal(totalCostTickets,newPriceSummary)
        selectorsTick.setRandomStation ()
        selectorsTr.clickContinueBtn ()

        //basket
        const basketCost = utils.getPrice(selectorsB.totalCost.getText())
        assert.equal(basketCost,newPriceSummary)

        //go to payment page

        selectorsB.proceedToPayment()
        // browser.pause(3000)

        const paymentCost = utils.getPrice(selectorsPay.totalCost.getText())
        assert.equal(paymentCost,newPriceSummary)

        selectorsPay.setPayment(data.payType[0])
        const cardCost = utils.getPrice(selectorsPay.totalCardAmt.getText())
        assert.equal(cardCost,newPriceSummary)

    })

})