# Reszponzív Zenekarok WinForms alkalmazás

Bár a WinForms alapvetően nem olyan rugalmas a felület kezelésben, mint a modern webes technológiák, azonban néhány lépést követve a kért reszponzivitás megoldható a WinForm nyújtotta lehetőségekkel:
- Mindkét panelnek állítsuk be a Dock tulajdonságát
- A jobb oldalon lévő panelnek, amelynek a mérete változik, az Anchor tulajdonságát állítsuk be, hogy a bal oldalhoz és a jobb oldalhoz is rögzítve legyen `Anchor = Top, Bottom, Left, Right`
- Ellenőrízzük, hogy jobb oldali panel `Location.X` értéke a bal oldali panel szélességével megegyező legyen, így a jobb oldali panel mindig a bal oldala mindig a másik panel mellett lesz és csak a jobb széle változik.