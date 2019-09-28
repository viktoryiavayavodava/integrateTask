module.exports = {

  getPrice(price) {
    return price.substring(1)
},

waitForElement (el) {
  browser.waitUntil(() => {
    return el.isDisplayed()})
},

loseFocus () {
  browser.keys('PageUp')

}

}