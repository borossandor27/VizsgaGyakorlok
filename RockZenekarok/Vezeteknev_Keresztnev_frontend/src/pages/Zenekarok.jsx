import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../style.css';

const Zenekarok = () => {
  return (
    <div className="zenekarok-page">
      <h2  className="mb-4 text-center">A Rock and Roll nagyjai</h2>
      <div className="row">

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">Queen</span>
              <span className="float-end">Rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Egyesült Királyság, London</p>
                <p> Aktív évek: 1970-1991</p>
                <p>Tagok: Freddie Mercury, Brian May, John Deacon, Roger Taylor</p>
                <p>Legsikeresebb album: A Night at the Opera</p>

              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid" alt="" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Queen_%E2%80%93_montagem_%E2%80%93_new.png" />
            <div className="card-footer text-center">
              <a id="gomb" className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">AC/DC</span>
              <span className="float-end">Hard Rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Ausztrália, Sydney</p>
                <p> Aktív évek: 1973-napjaink</p>
                <p>Tagok: Angus Young, Malcolm Young, Bon Scott, Brian Johnson</p>
                <p>Legsikeresebb album: Black in Black</p>
              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid" alt="" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/ACDC_In_Tacoma_2009.jpg" />
            <div className="card-footer text-center">
              <a className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">Pink Floyd</span>
              <span className="float-end">Progresszív rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Egyesült Királyság, London</p>
                <p> Aktív évek: 1965-1995</p>
                <p>Tagok: David Gilmour, Roger Waters, Nick Mason, Richard Wright</p>
                <p>Legsikeresebb album: The Dark Side of the Moon </p>
              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid" alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/be/PinkFloyd1973_retouched.jpg" />
            <div className="card-footer text-center">
              <a className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">The Rolling Stones</span>
              <span className="float-end">Rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Egyesült Királyság, London</p>
                <p> Aktív évek: 1962-napjaink</p>
                <p>Tagok: Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood</p>
                <p>Legsikeresebb album: Sticky Fingers</p>
              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rolling_Stones_bow_post-show_22_May_2018_in_London_%2841437870275%29.jpg/2560px-Rolling_Stones_bow_post-show_22_May_2018_in_London_%2841437870275%29.jpg" />
            <div className="card-footer text-center">
              <a className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">KISS</span>
              <span className="float-end">Hard Rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Egyesült Államok, New York</p>
                <p> Aktív évek: 1973-2023</p>
                <p>Tagok: Paul Stanley, Gene Simmons, Ace Frehley, Peter Criss</p>
                <p>Legsikeresebb album: Destroyer</p>
              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid" alt="" src="https:\/\/www.rockbook.hu\/sites\/default\/files\/kiss1.jpg" />
            <div className="card-footer text-center">
              <a className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
          <div className="card border-light mb-3">
            <div className="card-header bg-secondary">
              <span className="fw-bold">Led Zeppelin</span>
              <span className="float-end">Hard Rock</span>
            </div>
            <div className="card-body">
              <p className="card-text">
                <p>Származási helye: Egyesült Királyság, London</p>
                <p> Aktív évek: 1968-1980</p>
                <p>Tagok: Robert Plant, Jimmy Page, John Paul Jones, John Bonham </p>
                <p>Legsikeresebb album: Led Zeppelin IV</p>
              </p>
            </div>
            <img className="card-img-bottom p-2 img-fluid " alt="" src="https://www.rockbook.hu/sites/default/files/Led_Zeppelin_1979%20rockbook.jpg" />
            <div className="card-footer text-center">
              <a className="btn btn-outline-secondary px-4" >
                Aktív évek száma
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Zenekarok;