import * as x from './locators/flights.locators';

class FlightsPage {

    visit(){
        cy.visit(url);
    }
    
    selectDepartureCity(departure){
        cy.get(x.departureField).select(departure);
    }

    selectDestinationCity(destination){
        cy.get(x.destinationField).select(destination);
    }

    setDepartureAndReturnDatesFromToday(departure, tripLenght) {
        const today = new Date();
    
        const departureDate = new Date(today);
        departureDate.setDate(today.getDate() + departure);
    
        const returnDate = new Date(departureDate);
        returnDate.setDate(departureDate.getDate() + tripLenght);
    
        const formattedDepartureDate = departureDate.toISOString().split('T')[0];
        const formattedReturnDate = returnDate.toISOString().split('T')[0];
    
        cy.get(x.departureDateField).type(formattedDepartureDate);
        cy.get(x.returnDateField).type(formattedReturnDate);
      }

      selectTravelers(travelers){
        cy.get(x.travelersField).select(travelers);
      }

      clickSearchButton(){
        cy.get(x.searchButton).click();
      }
}
export default new FlightsPage();