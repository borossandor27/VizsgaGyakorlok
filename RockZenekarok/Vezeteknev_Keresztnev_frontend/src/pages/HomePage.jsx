const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Üdvözöljük a Rock Zenekarok oldalán!</h1>
      <p>Itt megtalálhatja a legjobb rock zenekarokat és információkat róluk.</p>
      <Link to="/zenekarok" className="btn btn-primary">Zenekarok listája</Link>
    </div>
  );
}

export default HomePage;