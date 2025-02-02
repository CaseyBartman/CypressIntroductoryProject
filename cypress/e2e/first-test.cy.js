describe('template spec', () => { //The describe function helps you create a test suite
  it('passes', () => {
    //Inside these functions is where you use the cypress commands to interact with the browser and test behavior
    cy.visit('http://localhost:5173') //Only works when the server hosting it is running!
  })
})