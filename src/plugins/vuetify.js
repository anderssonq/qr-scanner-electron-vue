import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const theme = {
  primary: "#1dbf73",
  secondary: "#0277BD",
  menuActive: "#4caf50",
  accent: "#9C27b0",
  info: "#00CAE3",
  error: "#FF3347",
  watch: "#2196F3",
  edit: "#388E3C",
  delete: "#E53935"
};
export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  },
  options: {
    customProperties: true
  }
});
