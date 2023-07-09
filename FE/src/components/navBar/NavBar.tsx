import { PropsWithChildren } from 'react';
import S from './styled';

export interface INavBarProps {
  links: string;
}

const NavBar = (props: PropsWithChildren<INavBarProps>) => (
  <S.Wrapper>{props.links}</S.Wrapper>
);

export default NavBar;
