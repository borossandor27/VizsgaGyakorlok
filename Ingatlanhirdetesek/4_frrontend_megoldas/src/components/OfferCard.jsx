import styled from "styled-components";
import CardTitle from "../components/CardTitle";

const OfferCardDiv = styled.div`
  width: 35vw;
  border: 1px solid #6c757d;
  border-radius: 5px;
  padding: 0px;
  margin: 0px;
  background-color: #f8f9fa;
  box-shadow: 2px 2px 5px #888888;
`;

const IngatlanKepKontener = styled.p`
  textalign: center;
  width: 100%;
`;
const IngatlanKep = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 350px;
  min-height: 350px;
`;
export function OfferCard({ title, description, date, img }) {
  //console.log("OfferCard", title, description, date, img);
  return (
    <OfferCardDiv>
      <CardTitle title={title} date={date}/>
      <p>{description}</p>
      <IngatlanKepKontener>
        <IngatlanKep src={img} alt={title} width={"auto"} height={"auto"} />
      </IngatlanKepKontener>
      
    </OfferCardDiv>
  );
}

export default OfferCard;