module.exports = {

get totalPrice () {
  return $('#totalPrice0')
},
get totalCost () {
  return $('#total_journey_cost')
},

get stationDdl () {
  return $('#station_KIOSK')
},

setRandomStation () {
  this.stationDdl.click()
  browser.keys('ArrowDown')
  browser.keys('Enter')
}

}