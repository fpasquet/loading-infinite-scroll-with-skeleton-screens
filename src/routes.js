import Layout from "./components/Layout";
import PokedexPage from "./pages/Pokedex";
import BattlePage from "./pages/Battle";

export const paths = {
  POKEDEX: "/",
  BATTLE: "BATTLE"
};

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: paths.POKEDEX,
        exact: true,
        component: PokedexPage
      },
      {
        path: paths.BATTLE,
        exact: true,
        component: BattlePage
      }
    ]
  }
];

export default routes;
