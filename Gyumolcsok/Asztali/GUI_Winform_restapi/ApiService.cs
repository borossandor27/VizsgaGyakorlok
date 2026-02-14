using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using WindowsFormsApp1;

namespace WindowsFormsApp1
{
    public class ApiService<T> where T : class
    {
        private readonly string _baseUrl;
        // .NET Frameworkben a HttpClient-et érdemes statikusnak vagy singletonnak hagyni
        private static readonly HttpClient _client = new HttpClient();

        public ApiService(string baseUrl)
        {
            _baseUrl = baseUrl.EndsWith("/") ? baseUrl : baseUrl + "/";
        }

        private async Task<HttpResponseMessage> SendAsync(Func<Task<HttpResponseMessage>> httpCall)
        {
            try
            {
                var response = await httpCall();

                if (!response.IsSuccessStatusCode)
                    throw new ApplicationException(GetErrorMessage(response));

                return response;
            }
            catch (HttpRequestException ex)
            {
                throw new ApplicationException("Nem érhető el az API (hálózati hiba).", ex);
            }
            catch (TaskCanceledException ex)
            {
                throw new ApplicationException("Időtúllépés történt az API elérésekor.", ex);
            }
        }


        // GET: Összes lekérése
        public async Task<List<T>> GetAllAsync(string endpoint)
        {
            var response = await SendAsync(() =>
                _client.GetAsync(_baseUrl + endpoint));

            var json = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<List<T>>(json);
        }



        // POST: Létrehozás
        public async Task<bool> CreateAsync(string endpoint, T item)
        {
            var json = JsonConvert.SerializeObject(item);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            await SendAsync(() =>
                _client.PostAsync(_baseUrl + endpoint, content));

            return true;
        }


        // PUT: Frissítés
        public async Task<bool> UpdateAsync(string endpoint, int id, T item)
        {
            var json = JsonConvert.SerializeObject(item);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            await SendAsync(() =>
                _client.PutAsync($"{_baseUrl}{endpoint}/{id}", content));

            return true;
        }


        // DELETE: Törlés
        public async Task<bool> DeleteAsync(string endpoint, int id)
        {
            await SendAsync(() =>
                _client.DeleteAsync($"{_baseUrl}{endpoint}/{id}"));

            return true;
        }


        public async Task<bool> IsApiAvailableAsync()
        {
            try
            {
                var response = await _client.GetAsync(_baseUrl);
                return response.IsSuccessStatusCode;
            }
            catch
            {
                return false;
            }
        }

        private string GetErrorMessage(HttpResponseMessage response)
        {
            switch (response.StatusCode)
            {
                case System.Net.HttpStatusCode.NotFound:
                    return "A kért erőforrás nem található.";
                case System.Net.HttpStatusCode.Unauthorized:
                    return "Nincs jogosultság a művelethez.";
                case System.Net.HttpStatusCode.InternalServerError:
                    return "Szerverhiba történt.";
                default:
                    return $"Ismeretlen hiba: {(int)response.StatusCode}";
            }
        }

    }



}