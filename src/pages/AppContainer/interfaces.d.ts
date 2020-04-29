import * as React from 'react';
import { History } from 'history';

export interface AppContainerProps {
  history?: History;
  component?: React.ReactNode
}

export interface AppContainerState {
  selectedIndex: number;
  character: any;
  error: any;
  isLoading: boolean;
  // character: {
  //   id: string;
  //   name: string;
  //   powerstats: {
  //     intelligence: string;
  //     strength: string;
  //     speed: string;
  //     durability: string;
  //     power: string;
  //     combat: string;
  //   },
  //   biography: {
  //     fullName: string;
  //     alterEgos: string;
  //     aliases: string[];
  //     placeOfBirth: string;
  //     firstAppearance: string;
  //     publisher: string;
  //     alignment: string;
  //   },
  //   appearance: {
  //     gender: string;
  //     race: string;
  //     height: string[];
  //     weight: string[];
  //     eyeColor: string;
  //     hairColor: string;
  //   },
  //   work: {
  //     occupation: string;
  //     base: string;
  //   },
  //   connections: {
  //     groupAffiliation: string;
  //     relatives: string;
  //   },
  //   image: {
  //     url: string;
  //   }
  // }
}
