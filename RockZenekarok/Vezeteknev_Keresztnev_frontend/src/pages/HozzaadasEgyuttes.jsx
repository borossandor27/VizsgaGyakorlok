const HozzaadasEgyuttes = () => {
  return (
    <>
           <h2 class="mb-4 text-center"> Egy új együttes rögzítése</h2>
        <div class="row">
            <div class="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
                <div class="mb-3">
                    <label for="name" class="form-label">Az együttes neve:</label>
                    <textarea class="form-control" id="name" rows="1"></textarea>
                </div>
                <div class="mb-3">
                    <label for="tipus" class="form-label">A zenekar stílusa:</label>
                    <select class="form-select" id="tipus">
                        <option value="0">Kérem válasszon</option>
                        <option value="1"> </option>
                        <option value="2"> </option>
                        <option value="3"> </option>
                        <option value="4"> </option>
                        <option value="5"> </option>
                        <option value="6"> </option>
                        <option value="7"> </option>
                        <option value="8"> </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="orszag" class="form-label">Az együttes országa:</label>
                    <textarea class="form-control" id="orszag" rows="1"></textarea>
                </div>

                <div class="mb-3">
                    <label for="varos" class="form-label">Az együttes varosa:</label>
                    <textarea class="form-control" id="varos" rows="1"></textarea>
                </div>
                <div class="mb-3">
                    <label for="evek" class="form-label">Aktív évek</label>
                    <textarea class="form-control" id="evek" rows="1" ></textarea>
                </div>
                <div class="mb-3">
                    <label for="tagok" class="form-label">Tagok</label>
                    <textarea class="form-control" id="tagok" rows="1" placeholder="0"></textarea>
                </div>
                <div class="mb-3">
                    <label for="siker" class="form-label">Legsikeresebb album:</label>
                    <textarea class="form-control" id="siker" rows="1" ></textarea>
                </div>
                
               
                <div class="mb-3">
                    
                </div>
                <div class="mb-3 text-center">
                    <button class="btn btn-secondary px-5">Feltöltés</button>
                </div>
            </div>
        </div>

    </>
  );
}
export default HozzaadasEgyuttes;