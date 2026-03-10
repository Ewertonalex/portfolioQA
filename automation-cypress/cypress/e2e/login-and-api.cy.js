describe("Fluxos críticos - Demo App", () => {
  const baseUrl = "https://www.saucedemo.com";

  it("Fluxo de login bem-sucedido (happy path)", () => {
    cy.visit(baseUrl);

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });

  it("Validação de mensagem de erro em login inválido", () => {
    cy.visit(baseUrl);

    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Epic sadface");
  });
});

describe("Testes de API - JSONPlaceholder", () => {
  const apiBase = "https://jsonplaceholder.typicode.com";

  it("Lista de posts deve retornar 200 e corpo não vazio", () => {
    cy.request(`${apiBase}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("Criação de post deve respeitar contrato mínimo", () => {
    cy.request("POST", `${apiBase}/posts`, {
      title: "Post de teste QA",
      body: "Conteúdo de exemplo para validação de API.",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body).to.include({
        title: "Post de teste QA",
        body: "Conteúdo de exemplo para validação de API.",
        userId: 1,
      });
    });
  });
});

