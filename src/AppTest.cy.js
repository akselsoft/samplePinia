import App from "./App.vue";
import { createApp } from "vue";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
// import any store you want to interact with in tests
import { useMainStore } from "./store/main";

const store = useMainStore(); // uses the testing pinia!

store.form = {
  pages: [
    { id: 1, name: "From Pinia" },
    { id: 2, name: "Again" },
  ],
};
beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Sample App", () => {
  it("Renders from test pinia", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });
});
