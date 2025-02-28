// Offers.js
import OfferCard from "../components/OfferCard";

const offers = [
  { id: 1, title: "Ház", description: "Egyszintes ház nagy telken.", date: "2022-02-24", img: "https://cdn.jhmrad.com/wp-content/uploads/three-single-storey-houses-elegance-amazing_704000.jpg" },
  { id: 2, title: "Garázs", description: "Nagy garázs kertvárosi környezetben.", date: "2022-02-27", img: "https://www.afritechmedia.com/wp-content/uploads/2021/11/How-Can-You-Protect-Your-Garage-Floor-612x340.jpg" }
];

export function Offers() {
  return (
    <div>
      <h2>Aktuális ajánlataink</h2>
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
}

export default Offers;