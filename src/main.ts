import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "../src/routes/route";
import "../src/assets/fonts/font.css";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(routes);
app.mount("#app");

// createApp(App).mount('#app');
