// Offers.js
import { useEffect, useState } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";


const baseUrl = "http://localhost:3000/api/ingatlan";
export function Offers() {
const [ingatlanok, setIngatlanok] = useState([]);
useEffect(() => {
  getAllIngatlan();
}),[];
const getAllIngatlan = async () => {
  const response = await axios.get(baseUrl);
  setIngatlanok(response.data);
}
  return (
    <div>
      <h2>Aktuális ajánlataink</h2>
      <div id="cards">
      {ingatlanok.map((ingatlan) => {
        let title = ingatlan.kategoia;
        let description = ingatlan.leiras;
        let date = ingatlan.hirdetesDatuma;
        let img = ingatlan.kepUrl;
        return (
          <OfferCard key={ingatlan.id} title={title} description={description} date={date} img={img} />
        );
      })}
      </div>
    </div>
  );
}

export default Offers;