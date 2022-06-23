describe("App E2E", () => {
  it('should have a header', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Calculator App')
  })


  it('should have a keypad', () => {
    cy.contains('0')
    cy.contains('1')
    cy.contains('2')
    cy.contains('3')
    cy.contains('4')
    cy.contains('5')
    cy.contains('6')
    cy.contains('7')
    cy.contains('8')
    cy.contains('9')
    cy.contains('+')
    cy.contains('-')
    cy.contains('/')
    cy.contains('*')
    cy.contains('%')
    cy.contains('C')
    cy.contains('CE')
    cy.contains('.')
    cy.contains('=')
  })


  it('should have a display', () => {

    cy.contains('2').click()
    cy.contains('-').click()
    cy.contains('4').click()
    cy.contains('2-4')

  })

  it('check key CE', () => {

    cy.contains('CE').click()
    cy.contains('2-')


  })
})
