import S from './styled';

const Header = () => {
  const handleOnClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <S.Header>
      <S.LogoWrapper onClick={handleOnClick}>N.D</S.LogoWrapper>
    </S.Header>
  );
};

export default Header;
