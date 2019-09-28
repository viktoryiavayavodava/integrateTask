module.exports = {

  get outward() {
      return $('#outwardTickets')
  },

  get advanceFirst() {
      return $('#outward_0 input[category_name="Advance_FirstClass"]');
  },
  get advanceStandard() {
      return $('#outward_0 input[category_name="Advance_Standard"]');
  },
  get offPeakFirst() {
      return $('#outward_0 input[category_name="Off-Peak_FirstClass"]');
  },
  get offPeakStandard() {
      return $('#outward_0 input[category_name="Off-Peak_Standard"]');
  },
  get anytimeFirst() {
      return $('#outward_0 input[category_name="Anytime_FirstClass"]');
  },
  get anytimeStandard() {
      return $('#outward_0 input[category_name="Anytime_Standard"]');
  },
  get advanceFirstPrice() {
      return $('#outward_0 input[category_name="Advance_FirstClass"] ~label');
  },
  get advanceStandardPrice() {
      return $('#outward_0 input[category_name="Advance_Standard"] ~label');
  },
  get offPeakFirstPrice() {
      return $('#outward_0 input[category_name="Off-Peak_FirstClass"] ~label');
  },
  get offPeakStandardPrice() {
      return $('#outward_0 input[category_name="Off-Peak_Standard"] ~label');
  },
  get anytimeFirstPrice() {
      return $('#outward_0 input[category_name="Anytime_FirstClass"] ~label');
  },
  get anytimeStandardPrice() {
      return $('#outward_0 input[category_name="Anytime_Standard"] ~label');
  },

  selectTicketRow1(category, type) {
      if (type == 'standard') {
          if (category == "advance") { this.advanceStandard.click() }
          if (category == "offpeak") { this.offPeakStandard.click() }
          else { this.anytimeStandard.click() }
      }

      else {
          if (category == "advance") { this.advanceFirst.click() }
          if (category == "offpeak") { this.offPeakFirst.click() }
          else { this.anytimeFirst.click() }
      }
  },

  returnTicketPrice(category, type) {
      if (type == 'standard') {
          if (category == "advance") { return this.advanceStandardPrice }
          if (category == "offpeak") { return this.offPeakStandardPrice }
          else { return this.anytimeStandardPrice }
      }

      else {
          if (category == "advance") { return this.advanceFirstPrice }
          if (category == "offpeak") { return this.offPeakFirstPrice }
          else { return this.anytimeFirstPrice }
      }
  },

   get priceSummary() {
      return $('.cjs_price span.price')
  },

  get continueBtn () {
      return $('input[value="Continue"][type="submit"]')
  },

  clickContinueBtn (){
      this.continueBtn.click()

  },

  get summaryBox () {
  return $('#summary')
  }
}