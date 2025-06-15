# Reszponz�v Zenekarok WinForms alkalmaz�s

A k�rt reszponzivit�s megoldhat� a WinForm ny�jtotta lehet�s�gekkel, de a WinForms alapvet�en nem olyan rugalmas, mint a modern webes technol�gi�k. Azonban n�h�ny l�p�st k�vetve el�rhetj�k a k�v�nt eredm�nyt:
- Mindk�t panelnek �ll�tsuk be a Dock tulajdons�g�t
- A jobb oldalon l�v� panelnek, amelynek a m�rete v�ltozik, az Anchor tulajdons�g�t �ll�tsuk be, hogy a bal oldalhoz �s a jobb oldalhoz is r�gz�tve legyen `Anchor = Top, Bottom, Left, Right`
- Ellen�r�zz�k, hogy jobb oldali panel `Location.X` �rt�ke a bal oldali panel sz�less�g�vel megegyez� legyen, �gy a jobb oldali panel mindig a bal oldal panel mellett lesz`