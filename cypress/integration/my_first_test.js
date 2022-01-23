///<reference types= "cypress"/>

it("google test", function () {
  cy.visit("www.google.com");

  //Accetp cocokies
  cy.get("#L2AGLb > .QS5gu").click();
  //Type search text and press enter
  cy.get(".gLFyf").type("Automation step by step{enter}");

  //Click on the first search result
  //   cy.get(".dmenKe > :nth-child(1) > .usJj9c > h3 > .l").click();

  //Clicks on videos
  cy.contains("Videos").click();
});
