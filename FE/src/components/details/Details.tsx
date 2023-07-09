import { useState } from 'react';
import S from './styled';

function Details() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <S.DetailsWrapper>
      <S.Details open={isOpen} onClick={handleOnClick}>
        <S.DetailsSummary>Epcot Center</S.DetailsSummary>
        <p>Hey Again its a me mario</p>
      </S.Details>
    </S.DetailsWrapper>
  );
}

export default Details;
