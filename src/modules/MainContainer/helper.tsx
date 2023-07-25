import FirstPage from '../FirstPage/FirstPage';
import Projects from '../Projects/Projects';
import Expertises from '../Expertises/Expertises';
import ContactMe from '../ContactMe/ContactMe';
import AboutMe from '../AboutMe/AboutMe';
import { ReactElement } from 'react';

export interface IComponentsObj {
  name: string;
  comp: ReactElement;
}

export const componentsArr: Array<IComponentsObj> = [
  {
    name: FirstPage.name,
    comp: <FirstPage />,
  },
  {
    name: Projects.name,
    comp: <Projects />,
  },
  {
    name: Expertises.name,
    comp: <Expertises />,
  },
  {
    name: AboutMe.name,
    comp: <AboutMe />,
  },
  {
    name: ContactMe.name,
    comp: <ContactMe />,
  },
];
