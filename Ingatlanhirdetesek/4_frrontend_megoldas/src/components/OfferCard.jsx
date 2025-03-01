import styled from "styled-components";

const OfferCardDiv = styled.div`
  width: 35vw;
  border: 1px solid #6c757d;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f8f9fa;
  box-shadow: 2px 2px 5px #888888;
`;
const Title = styled.p`
  background-color: #6c757d;
  color: var(--background-color-base);
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export function OfferCard({ title, description, date, img }) {
  return (
    <OfferCardDiv>
      <Title>{title} {date}</Title>
      <p>{description}</p>
      <img src={img} alt={title} width="200" height="auto" />
    </OfferCardDiv>
  );
}

export default OfferCard;