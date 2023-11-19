import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mainTheme } from "./assets/vuetify/theme";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
});

createApp(App).use(vuetify).mount("#app");
