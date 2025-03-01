export function Home() {
  return (
    <div>
      <h1>Á.L.B. Ingatlanügynökség</h1>
      <div className="startButtons">
        <button onClick={() => window.location.href = '/offers'}>Nézze meg kínálatunkat!</button>
        <button onClick={() => window.location.href = '/newad'}>Hirdessen nálunk!</button>
      </div>
    </div>
  );
}

export default Home;