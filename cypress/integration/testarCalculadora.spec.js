/// <reference types = "cypress" />

import Calculadora from "../support/pages/Calculadora"

describe("Realiza testes com as 4 operações fundamentais com números inteiros", () => {
  beforeEach(() => {
    cy.visit("../src/calculadora.html")
  })

  it("A soma 5 + 4 deve ser 9", () => {
    Calculadora.realizaSoma()
  })

  it("A subtração 10 - 2 deve ser 8 ", () => {
    Calculadora.realizaSubtracao()
  })

  it("A multiplicação de 5 * 5 deve ser 25", () => {
    Calculadora.realizaMultiplicacao()
  })

  it("A divisão de 100 / 2 deve ser 50", () => {
    Calculadora.realizaDivisao()
  })

  afterEach(() => {
    cy.get(":nth-child(1) > :nth-child(1) > .botao").click()
    cy.get("#resultado").should("be.empty")
  })
})
