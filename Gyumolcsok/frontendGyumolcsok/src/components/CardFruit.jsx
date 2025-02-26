import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardFruitDiv = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CardFruitImage = styled.img`
  border-radius: 8px;   
    width: 100%;
    height: auto;
    object-fit: cover;
`;
const CardFruitTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
`;
const CardFruitDescription = styled.p`
    font-size: 0.9rem;
    color: #666;
`;

const CardFruit = ({ fruit }) => {
    console.log(fruit);
    return (
        <CardFruitDiv>
            <CardFruitImage src={`/gyumolcskepek/${fruit.src}`} alt={fruit.alt_szoveg} />
            <CardFruitTitle>{fruit.nev}</CardFruitTitle>
            <CardFruitDescription>{fruit.megjegyzes}</CardFruitDescription>
        </CardFruitDiv>
    )
}

// típus ellenőrzésről bővebben: https://www.npmjs.com/package/prop-types
CardFruit.propTypes = {
    fruit: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt_szoveg: PropTypes.string.isRequired,
        nev: PropTypes.string.isRequired,
        megjegyzes: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardFruit;