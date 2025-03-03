import OfferTableRow from "../components/OfferTableRow";
import styled from "styled-components";

const MyTable = styled.table`
  border-collapse: collapse;
    width: 90%;
    margin: 20px auto;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;
const OfferTable = ({ offers }) => {
  return (
    <div >
      <MyTable >
        <thead>
          <tr>
            <th>Kategória</th>
            <th>Leírás</th>
            <th>Hirdetés dátuma</th>
            <th>Tehermentes</th>
            <th>Kép</th>
            <th>Ár (Ft)</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <OfferTableRow key={offer.id} offer={offer} />
          ))}
        </tbody>
      </MyTable>
    </div>
  );
};

export default OfferTable;
