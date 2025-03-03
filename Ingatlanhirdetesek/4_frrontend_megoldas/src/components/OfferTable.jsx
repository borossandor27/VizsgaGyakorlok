import OfferTableRow from "../components/OfferTableRow";
import styled from "styled-components";

const MyTable = styled.table`
  border-collapse: collapse;
    width: 90%;
    margin: 20px auto;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    border-radius: 5px;
    border-radius: 15px;
    overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #343a40;
  color: white;
  padding: 10px;
  border: 1px solid #dee2e6;
  text-align: center;
  min-height: 50px;
  font-size: 1.2rem;
`;

const OfferTable = ({ offers }) => {
  return (
    <div >
      <MyTable >
        <thead>
          <tr>
            <TableHeader>Kategória</TableHeader>
            <TableHeader>Leírás</TableHeader>
            <TableHeader>Hirdetés dátuma</TableHeader>
            <TableHeader>Tehermentes</TableHeader>
            <TableHeader>Kép</TableHeader>
            <TableHeader>Ár (Ft)</TableHeader>
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
