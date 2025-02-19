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
    height: 200px;
    object-fit: cover;
`;
const CardFruitTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;
const CardFruitDescription = styled.p`
    font-size: 16px;
    color: #666;
`;

const CardFruit = ({ fruit }) => {
    return (
        <CardFruitDiv>
            <CardFruitImage src={fruit.src} alt={fruit.alt_szoveg} />
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