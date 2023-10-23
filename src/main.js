import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faClipboard, faBan, faCheck);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
