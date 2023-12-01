import * as x from './locators/results.locators';
class ResultsPage {
    visit(){
        cy.visit(x.url);
    }
    selectSort(sort){
        cy.get(x.sortList).select(sort);
    }
    validateResultsSortedByPrice(sort) {
        const prices = [];
        var expectedPrice = [];
        cy.get('.price')
          .each(($price) => {
            const priceText = $price.text().replace(/[^\d.]/g, ''); // Remove non-numeric characters
            prices.push(parseFloat(priceText)); // Convert to float and add to the array
          })
          .then(() => {
            if (sort === 'asc') {
              expectedPrice = prices.slice().sort((a, b) => a - b);
              cy.log("Expected Asc: ", expectedPrice);
            } else if (sort === 'desc') {
              expectedPrice = prices.slice().sort((a, b) => b - a);
              cy.log("Expected Desc: ", expectedPrice);
            } else {
              cy.log('Invalid sort option. Use "asc" or "desc".');
              return; // Exit the method if the sort option is invalid
            }
      
            // Assert that prices and expectedPrice are the same
            expect(prices).to.deep.equal(expectedPrice);
          });
      }
}
export default new ResultsPage();