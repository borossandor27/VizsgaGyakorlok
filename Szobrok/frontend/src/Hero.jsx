import React from 'react';

function Hero({ cim, alcim, magassag = '320px', hatterKep = '/kepek/0szoborpark.jpg' }) {
  return (
    <div
      className="hero"
      style={{ minHeight: magassag, backgroundImage: `url(${hatterKep})` }}
    >
      <div className="hero-tartalom">
        <h1>{cim}</h1>
        {alcim && <p>{alcim}</p>}
      </div>
    </div>
  );
}

export default Hero;
