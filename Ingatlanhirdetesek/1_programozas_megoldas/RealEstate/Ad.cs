using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateGUI
{

    class Ad
    {
        public int Area;
        public Category Category;
        public DateTime CreateAt;
        public string Description;
        public int Floors;
        public bool FreeOfCharge;
        public int Id;
        public string ImageUrl;
        public string LatLong;
        public int Rooms;
        public Seller Seller;

        private string csvFile = "realestates.csv";
        double _latitude, _longitude;

        public Ad(string line)
        {
            string[] parts = line.Split(';');
            Id = int.Parse(parts[0]);
            Rooms = int.Parse(parts[1]);
            LatLong = parts[2];
            _latitude = double.Parse(LatLong.Split(',')[0].Replace('.', ','));
            _longitude = double.Parse(LatLong.Split(',')[1].Replace('.', ','));
            Floors = int.Parse(parts[3]);
            Area = int.Parse(parts[4]);
            Description = parts[5];
            FreeOfCharge = parts[6] == "1";
            ImageUrl = parts[7];
            CreateAt = DateTime.Parse(parts[8]);
            Seller = new Seller(int.Parse(parts[9]), parts[10], parts[11]);
            Category = new Category(int.Parse(parts[12]), parts[13]);
        }

        public Ad(int area, Category category, DateTime createAt, string description, int floors, bool freeOfCharge, int id, string imageUrl, string latLong, int rooms, Seller seller)
        {
            Area = area;
            Category = category;
            CreateAt = createAt;
            Description = description;
            Floors = floors;
            FreeOfCharge = freeOfCharge;
            Id = id;
            ImageUrl = imageUrl;
            LatLong = latLong;
            Rooms = rooms;
            Seller = seller;
        }
        public double DistanceTo(string receivedLatLong)
        {
            /*
             *  Nem számolunk a Föld görbületével (ahhoz a Haversine-képlet kell!), a távolságot egy síkbeli távolságként kell kiszámolni.
             *  A sztring-ként kapott GPS koordinátákat fel kell bontani a vessző mentén, és az így kapott két értéket
             *  a objektum megfelelő longitude és latitude mezőinek a segítségével az az euklideszi távolság képletével
             *  (Pitagorasz-tétellel) az alábbi képlettel kell kiszámolni:
             *  
             */
            double distance = 0;
            string[] parts = receivedLatLong.Split(',');
            double lat1 = double.Parse(parts[0].Replace('.', ','));
            double lon1 = double.Parse(parts[1].Replace('.', ','));
            distance = Math.Sqrt(Math.Pow((_latitude - lat1), 2) + Math.Pow((_longitude - lon1), 2));
            return distance;
        }

    }
}
