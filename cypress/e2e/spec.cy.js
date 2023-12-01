import flightsPage from '../pages/flights.page';
import resultsPage from '../pages/results.page';

describe('When I search for a flight', () => {
  
  it('the results should be sorted in descendant order', () => {
    /* LMAO: 
    sorted by desc changes the price for one $180 flight to $181
    ignored destination and departure cities
    all flights MEX-HAV, same time, same flight number
    sorting by relevance does nothing
    */
    cy.navBar('Flights');
    flightsPage.selectDepartureCity('Hermosillo');
    flightsPage.selectDestinationCity('CDMX');
    flightsPage.setDepartureAndReturnDatesFromToday(2, 5);
    flightsPage.selectTravelers(2);
    flightsPage.clickSearchButton();

    resultsPage.selectSort('asc');
    resultsPage.validateResultsSortedByPrice('asc');
  })
})
