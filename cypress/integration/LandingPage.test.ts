export{} //Allows for proper compilation

it("Smoke", async () => {
    cy.visit('http://localhost:3000/');
});
