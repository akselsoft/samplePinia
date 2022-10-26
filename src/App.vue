<template>
  {{ msg }}
  <p />
  The form has {{ form.pages.length }} pages.
  <div>
    <input type="button" @click="updateStore" value="Force a form" />
  </div>
  <div v-for="page in form.pages" :key="page.id">
    {{ page.name }}
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useMainStore } from "./store/main";

export default {
  name: "sample",
  props: {
    details: null,
  },
  data() {
    return {
      msg: "hello",
      form: {
        pages: [
          { id: 1, name: "Introduction" },
          { id: 2, name: "Chapter 1" },
        ],
      },
    };
  },
  computed: {
    ...mapState(useMainStore, ["currentForm"]),
    ...mapStores(useMainStore),
  },
  mounted() {
    if (this.details) {
      this.msg = "using details";
      this.form = this.details;
    } else {
      this.msg = "no available form - using default";
      if (this.currentForm) {
        this.form = this.currentForm;
        this.msg = "using pinia form";
      }
    }
  },
  methods: {
    ...mapActions(useMainStore, ["setCurrentForm"]),
    updateStore() {
      this.msg = "updating it myself";
      this.setCurrentForm({
        pages: [{ id: 1, name: "My Hard-coded form" }],
      });
      this.form = this.currentForm;
    },
  },
  props: {
    details: {
      type: Object,
      default: null,
    },
  },
};
</script>
