import styled from 'styled-components';

const StartDiv = styled.div`
  height: 100%; /* Teljes nézetablak magasság */
  width: 100%; /* Teljes nézetablak szélesség */
  margin: 0 auto; /* Középre igazítás */
  background-image: url(img/real-estate-agent.png);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;   /* A szülő szélességét veszi át */
  position: absolute;   /* Vagy 'fixed', ha mindig a képernyő aljához akarod igazítani */
  bottom: 15vh;   /* 20vh távolság a szülőelem aljától */
  left: 0;
  `;


const Button = styled.button`
  width: 35vw;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: none;
  background-color: #0d6efd;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;
export function Home() {
  return (
    <>
      <StartDiv id='start'>
      <h1>Á.L.B. Ingatlanügynökség</h1>
        <DivButtons>
          <Button onClick={() => window.location.href = '/offers'}>Nézze meg kínálatunkat!</Button>
          <Button onClick={() => window.location.href = '/newad'}>Hirdessen nálunk!</Button>
        </DivButtons>
      </StartDiv>
    </>
  );
}

export default Home;