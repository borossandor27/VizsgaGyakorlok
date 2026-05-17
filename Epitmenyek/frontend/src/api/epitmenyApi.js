// src/api/epitmenyApi.js
// Axios-alapú API kliens az Express backendhez

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',           // Vite proxy továbbítja → http://localhost:3001/api
  headers: { 'Content-Type': 'application/json' },
  timeout: 8000,
});

// ---- Építmények ----

/** Összes építmény lekérése; opcionális szűrők: { tipus, nev } */
export async function getEpitmenyek(szurok = {}) {
  const params = {};
  if (szurok.tipus) params.tipus = szurok.tipus;
  if (szurok.nev)   params.nev   = szurok.nev;
  const { data } = await api.get('/epitmenyek', { params });
  return data;
}

/** Egy építmény részletei azonosító alapján */
export async function getEpitmeny(azon) {
  const { data } = await api.get(`/epitmenyek/${azon}`);
  return data;
}

/** Új építmény rögzítése */
export async function postEpitmeny(epitmeny) {
  const { data } = await api.post('/epitmenyek', epitmeny);
  return data;
}

/** Építmény törlése azonosító alapján */
export async function deleteEpitmeny(azon) {
  const { data } = await api.delete(`/epitmenyek/${azon}`);
  return data;
}

// ---- Települések ----

/** Összes település lekérése (legördülőhöz) */
export async function getTelepulesek() {
  const { data } = await api.get('/telepulesek');
  return data;
}
