module.exports = {

  get fromStation() {
      return $('[id^=FromStation]')
  },

  get toStation() {
      return $('[id^=ToStation]')
  },

  setFromStation(value) {
      this.fromStation.setValue(value)

  },

  setToStation(value) {
      this.toStation.setValue(value)
      browser.keys("Enter")
  },

  get oneWayRadio() {
      return $('//label[contains(.,"One way")]')
  },
  get returnRadio() {
      return $('//div[@aria-label="Return"]')
  },

  setOneWay() {
      this.oneWayRadio.click()
  },

  setReturn() {
      this.returnRadio.click()
  },

  get GoBtn() {
      return $('//button[@title="Go >"]')
  },

  searchSubmit() {
      this.GoBtn.click()
  },

  get expandButton() {
      return $('//button[@title="Expand tickets form"]')
  },

  expandForm() {
      this.expandButton.click()
  },

}