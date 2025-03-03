import styled from "styled-components";

const MyTableRow = styled.tr`
  background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    text-align: center;
    min-height: 200px;
`;
const MyTableData = styled.td`
    padding: 10px;
    border: 1px solid #dee2e6;
    min-height: 200px;
`;

const MyImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const OfferTableRow = ({ offer }) => {
    return (
      <tr>
        <MyTableData>{offer.kategoia}</MyTableData>
        <MyTableData>{offer.leiras}</MyTableData>
        <MyTableData>{new Date(offer.hirdetesDatuma).toLocaleDateString()}</MyTableData>
        <MyTableData>{offer.tehermentes === "true" ? "✔️" : "❌"}</MyTableData>
        <MyTableData>
          <MyImage src={offer.kepUrl} alt="Ingatlan" width={"auto"} height={"220px"} />
        </MyTableData>
        <MyTableData>{offer.ar.toLocaleString()} Ft</MyTableData>
      </tr>
    );
  };
  
  export default OfferTableRow;
  