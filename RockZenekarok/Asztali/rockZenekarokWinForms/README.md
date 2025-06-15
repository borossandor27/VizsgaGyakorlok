# Reszponzív Zenekarok WinForms alkalmazás

A kért reszponzivitás megoldható a WinForm nyújtotta lehetõségekkel, de a WinForms alapvetõen nem olyan rugalmas, mint a modern webes technológiák. Azonban néhány lépést követve elérhetjük a kívánt eredményt:
- Mindkét panelnek állítsuk be a Dock tulajdonságát
- A jobb oldalon lévõ panelnek, amelynek a mérete változik, az Anchor tulajdonságát állítsuk be, hogy a bal oldalhoz és a jobb oldalhoz is rögzítve legyen `Anchor = Top, Bottom, Left, Right`
- Ellenõrízzük, hogy jobb oldali panel `Location.X` értéke a bal oldali panel szélességével megegyezõ legyen, így a jobb oldali panel mindig a bal oldal panel mellett lesz`