export function Home() {
    return (
      <div>
        <h1>Á.L.B. Ingatlanügynökség</h1>
        <button onClick={() => window.location.href='/offers'}>Nézze meg kínálatunkat!</button>
        <button onClick={() => window.location.href='/newad'}>Hirdessen nálunk!</button>
      </div>
    );
  }

  export default Home;