import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
 
  `;

const Footer = () => (
    <StyledFooter>
      <p>&copy; 2021 Gyümölcsök</p>
    </StyledFooter>
);

export default Footer;