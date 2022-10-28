import App from "./App.vue";
import { createApp } from "vue";
import { setActivePinia, createPinia } from "pinia";

const app = createApp({});
let sampleData = { pages: [{ id: 1, name: "mocked page" }] };

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Sample App", () => {
  it("Renders on its own", () => {
    cy.mount(App, {});
  });
  it("Renders with a passed prop", () => {
    cy.mount(App, {
      props: {
        details: sampleData,
      },
    });
  });
  it("Renders with a custom store value", () => {
    cy.fixture("sampleform.json").then(function (data) {
      sampleData = data;

      cy.mount(App, {});

      cy.log("what do I need to do to SET the store value in my test");
    });
  });
});
