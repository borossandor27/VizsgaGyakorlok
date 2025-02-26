import axios from 'axios';
const baseUrl = 'http://localhost:3000/gyumolcsok';

// Az interceptorok segítségével a hibakezelés egyszerűsíthető és egységesíthető.
// Az interceptorok segítségével a kérések és a válaszok előtt és után is hibakezelést tudunk végezni
// A 'request' segítségével módosíthatóak a kérés adatai (pl. autentikációs tokenek, logolás), így csökkenthetjük az ismétlődő kódot és növeljük az alkalmazás karbantarthatóságát.
axios.interceptors.request.use(
    request => request,
    () => {
        throw new Error('Hiba a szerver elérésekor!');
    }
);

// A 'response' segítségével a válaszokat tudjuk ellenőrizni, és hibakezelést végezni.
// Az interceptorok segítségével a hibakezelés egyszerűsíthető és egységesíthető.
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 404) {
            throw new Error('Nem található a keresett elem!');
        } else {
            throw new Error('Hiba a szerver elérésekor!');
        }
    }
);
export const getAllGyumolcs = async () => {
    const response = await axios.get(baseUrl);
    if (response.status !== 200) {
        throw new Error('Hiba a szerver elérésekor!');
    }
    return response.data ? response.data : [];
}
export const getOneGyumolcs = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    if (response.status !== 200) {
        throw new Error('Hiba a szerver elérésekor!');
    }
    return response.data? response.data : [];
}
export const createGyumolcs = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
}
export const updateGyumolcs = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data ? true : false;
}
export const removeGyumolcs = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data ? true : false;
}
