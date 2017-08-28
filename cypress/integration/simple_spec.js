/**
 * Created by jmichelin on 7/13/17.
 */
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
});

describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
});

describe('My First Test', function() {
  it('Visits the Deployed Site', function() {
    cy.visit('https://immense-earth-35739.herokuapp.com/#/')
    cy.contains('Interview Question List').click()
    cy.url().should('include', '/interviewQuestionList/active')
    cy.get('button').should('contain', 'Interview Question Form').should('have.class', 'btn btn-primary')
  })
})