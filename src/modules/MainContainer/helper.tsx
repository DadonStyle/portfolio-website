import FirstPage from '../FirstPage/FirstPage';
import Projects from '../Projects/Projects';
import Expertise from '../Expertises/Expertises';
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
    name: Expertise.name,
    comp: <Expertise />,
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
