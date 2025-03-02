import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Cím balra, dátum jobbra */
  align-items: center; /* Középre igazítás */
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Opcionális elválasztó */
  background-color: #6c757d;
  color: var(--background-color-base);
`;

const TitleText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const DateText = styled.span`
  font-size: 1em;
  color: gray;
`;

export function CardTitle({ title, date }) {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <DateText>{date}</DateText>
    </TitleContainer>
  );
}

export default CardTitle;
