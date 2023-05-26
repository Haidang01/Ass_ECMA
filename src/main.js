import Navigo from "navigo"
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";


const router = new Navigo();

const render = (pages) => {
  document.querySelector('#app').innerHTML = pages();
}

// router 
router.on('/', () => render(HomePage));
router.on('/about', () => render(AboutPage));

router.resolve();
