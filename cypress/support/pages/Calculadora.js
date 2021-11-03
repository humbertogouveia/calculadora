const el = require("./elementos").ELEMENTS
class Calculadora {
  realizaSoma() {
    cy.get(el.numero5).should("contain.text", "5").click()

    cy.get(el.botaoDeAdicao).should("contain.text", "+").click()

    cy.get(el.numero4).should("contain.text", "4").click()

    cy.get(el.botaoQueCalculaResultado).should("contain.text", "=").click()

    cy.get(el.inputResultado).should("have.text", "9")
  }

  realizaSubtracao() {
    cy.get(el.numero1).should("contain.text", "1").click()

    cy.get(el.numero0).should("contain.text", "0").click()

    cy.get(el.botaoDeSubtracao).should("contain.text", "-").click()

    cy.get(el.numero2).should("contain.text", "2").click()

    cy.get(el.botaoQueCalculaResultado).should("contain.text", "=").click()

    cy.get(el.inputResultado).should("have.text", "8")
  }

  realizaDivisao() {
    cy.get(el.numero1).should("contain.text", "1").click()

    cy.get(el.numero0).should("contain.text", "0").click()

    cy.get(el.numero0).should("contain.text", "0").click()

    cy.get(el.botaoDeDivisao).should("contain.text", "/").click()

    cy.get(el.numero2).should("contain.text", "2").click()

    cy.get(el.botaoQueCalculaResultado).should("contain.text", "=").click()

    cy.get(el.inputResultado).should("have.text", "50")
  }

  realizaMultiplicacao() {
    cy.get(el.numero5).should("contain.text", "5").click()

    cy.get(el.botaoDeMultiplicacao).should("contain.text", "X").click()

    cy.get(el.numero5).should("contain.text", "5").click()

    cy.get(el.botaoQueCalculaResultado).should("contain.text", "=").click()

    cy.get(el.inputResultado).should("have.text", "25")
  }
}

export default new Calculadora()
