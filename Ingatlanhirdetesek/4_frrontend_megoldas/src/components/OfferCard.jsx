export function OfferCard({ title, description, date, img }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{date}</small>
        <img src={img} alt={title} width="200" />
      </div>
    );
  }
  
    export default OfferCard;