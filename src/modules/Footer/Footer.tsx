import S from './styled';
import { ReactComponent as GithubSVG } from '../../assets/svg/github-mark.svg';
import { ReactComponent as LinkdeinSVG } from '../../assets/svg/linkedin-icon.svg';
import { ReactComponent as CVicon } from '../../assets/svg/CV-icon.svg';
import CVpdf from '../../assets/Full-Stack Noam Dadon CV.pdf';

const Footer = () => (
  <S.Footer>
    <S.Link
      animationDelay={0}
      href="https://www.linkedin.com/in/noam-dadon/"
      target="_blank"
    >
      <LinkdeinSVG />
    </S.Link>
    <S.Link
      animationDelay={0.25}
      href="https://github.com/DadonStyle"
      target="_blank"
    >
      <GithubSVG />
    </S.Link>
    <S.Link animationDelay={0.5} href={CVpdf} target="_blank">
      <CVicon />
    </S.Link>
  </S.Footer>
);

export default Footer;
