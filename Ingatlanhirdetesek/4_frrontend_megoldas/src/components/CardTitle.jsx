import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Cím balra, dátum jobbra */
  align-items: center; /* Középre igazítás */
  width: 100%;
  padding: 10px 0px; /* Belső tér */
  border-bottom: 1px solid #ddd; /* Opcionális elválasztó */
  background-color: #6c757d;
  color: #d9f3f0;
  font-size: 1.5em;

`;

const TitleText = styled.span`
  font-weight: bold;
  padding-left: 10px;
`;

const DateText = styled.span`
  font-size: 0.8em;
    padding-right: 10px;
`;

export function CardTitle({ title, date }) {
    date = new Date(date).toLocaleDateString("hu-HU");
    return (
        <TitleContainer>
            <TitleText>{title}</TitleText>
            <DateText>{date}</DateText>
        </TitleContainer>
    );
}

export default CardTitle;
