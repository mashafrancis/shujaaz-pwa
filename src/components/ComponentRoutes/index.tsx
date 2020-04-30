import * as React from 'react';
import {ComponentRoutesProps} from "@components/ComponentRoutes/interfaces";
import SuperHeroPage from "@pages/SuperHeroPage";
import CharactersPage from "@pages/CharactersPage";
import HomePage from "@pages/HomePage";

export const ComponentRoutes: ComponentRoutesProps[] = [
  {
    component: HomePage,
  },
  {
    component: SuperHeroPage,
  },
  {
    component: CharactersPage
  }
]
