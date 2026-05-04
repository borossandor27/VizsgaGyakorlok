-- ============================================================
-- Klasszikus Filmek Nyilvántartó Rendszer
-- klasszikus_filmek adatbázis
-- ============================================================

CREATE DATABASE IF NOT EXISTS klasszikus_filmek
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_hungarian_ci;

USE klasszikus_filmek;

-- ------------------------------------------------------------
-- Táblák
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS mufajok (
  id INT(11) NOT NULL AUTO_INCREMENT,
  mufaj_neve VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS filmek (
  id INT(11) NOT NULL AUTO_INCREMENT,
  cim VARCHAR(200) NOT NULL,
  mufaj_id INT(11) NOT NULL,
  rendezo VARCHAR(100) NOT NULL,
  gyartasi_ev INT(11) NOT NULL,
  szarmazasi_orszag VARCHAR(50) NOT NULL,
  szereplok TEXT,
  legsikeresebb_dijak VARCHAR(255),
  kep_url TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (mufaj_id) REFERENCES mufajok(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
-- Műfaj adatok
-- ------------------------------------------------------------

INSERT INTO mufajok (id, mufaj_neve) VALUES
(1, 'Krimi / Thriller'),
(2, 'Kaland / Fantasy'),
(3, 'Sci-fi / Akció'),
(4, 'Vígjáték / Dráma'),
(5, 'Dráma / Románc'),
(6, 'Horror / Thriller');

-- ------------------------------------------------------------
-- Film adatok
-- ------------------------------------------------------------

INSERT INTO filmek (id, cim, mufaj_id, rendezo, gyartasi_ev, szarmazasi_orszag, szereplok, legsikeresebb_dijak, kep_url) VALUES
(1,  'A Keresztapa',                                        1, 'Francis Ford Coppola', 1972, 'USA',       'Marlon Brando, Al Pacino, James Caan, Diane Keaton',           'Oscar - legjobb film, legjobb férfi főszereplő',                         'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'),
(2,  'Schindler listája',                                   2, 'Steven Spielberg',     1993, 'USA',       'Liam Neeson, Ben Kingsley, Ralph Fiennes',                     'Oscar - legjobb film, legjobb rendező',                                  'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg'),
(3,  'Csillagok háborúja',                                  3, 'George Lucas',         1977, 'USA',       'Mark Hamill, Harrison Ford, Carrie Fisher',                    'Oscar - legjobb vizuális effektek, legjobb vágás',                       'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'),
(4,  'Forrest Gump',                                        4, 'Robert Zemeckis',      1994, 'USA',       'Tom Hanks, Robin Wright, Gary Sinise',                         'Oscar - legjobb film, legjobb férfi főszereplő',                         'https://upload.wikimedia.org/wikipedia/en/6/6c/Forrest_Gump_poster.jpg'),
(5,  'Mátrix',                                              3, 'Lilly Wachowski',      1999, 'USA',       'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',           'Oscar - legjobb vizuális effektek, legjobb vágás',                       'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'),
(6,  'Titanic',                                             5, 'James Cameron',        1997, 'USA',       'Leonardo DiCaprio, Kate Winslet, Billy Zane',                  'Oscar - legjobb film, legjobb rendező',                                  'https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg'),
(7,  'A Gyűrűk Ura: A gyűrű szövetsége',                   2, 'Peter Jackson',        2001, 'Új-Zéland', 'Elijah Wood, Ian McKellen, Viggo Mortensen',                   'Oscar - legjobb operatőr, legjobb vizuális effektek',                    'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg'),
(8,  'Jurassic Park',                                       3, 'Steven Spielberg',     1993, 'USA',       'Sam Neill, Laura Dern, Jeff Goldblum',                         'Oscar - legjobb vizuális effektek, legjobb hang',                        'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg'),
(9,  'Idegenek a vonaton',                                  1, 'Alfred Hitchcock',     1951, 'USA',       'Farley Granger, Robert Walker, Ruth Roman',                    'BAFTA-jelölés - legjobb brit film',                                      'https://upload.wikimedia.org/wikipedia/commons/3/35/Strangers_on_a_Train_%281951_film_poster%29.jpg'),
(10, 'Psycho',                                              6, 'Alfred Hitchcock',     1960, 'USA',       'Anthony Perkins, Janet Leigh, Vera Miles',                     'Oscar-jelölés - legjobb rendező',                                        'https://upload.wikimedia.org/wikipedia/en/a/a8/Psycho_%281960%29_trailer_shower_scene.jpg'),
(11, 'Kaktusz virág',                                       4, 'Gene Saks',            1969, 'USA',       'Walter Matthau, Ingrid Bergman, Goldie Hawn',                  'Oscar - legjobb női mellékszereplő',                                     'https://upload.wikimedia.org/wikipedia/en/4/49/Cactus_Flower_%281969_film%29.jpg'),
(12, 'Halálos fegyver',                                     1, 'Richard Donner',       1987, 'USA',       'Mel Gibson, Danny Glover, Gary Busey',                         'Golden Globe-jelölés',                                                   'https://upload.wikimedia.org/wikipedia/en/7/71/Lethal_weapon_moviep.jpg'),
(13, 'Casablanca',                                          5, 'Michael Curtiz',       1942, 'USA',       'Humphrey Bogart, Ingrid Bergman, Paul Henreid',                'Oscar - legjobb film, legjobb rendező, legjobb adaptált forgatókönyv',   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Casablanca_poster.jpg/800px-Casablanca_poster.jpg'),
(14, 'Hová lettél, drága völgy?',                           5, 'John Ford',            1941, 'USA',       'Walter Pidgeon, Maureen O''Hara, Donald Crisp',                'Oscar - legjobb film, legjobb rendező',                                  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/How_Green_Was_My_Valley.jpg/220px-How_Green_Was_My_Valley.jpg'),
(15, 'Alien',                                               6, 'Ridley Scott',         1979, 'UK/USA',    'Sigourney Weaver, Tom Skerritt, John Hurt',                    'Oscar - legjobb vizuális effektek',                                      'https://upload.wikimedia.org/wikipedia/en/4/4d/Alien_-_1979_film_poster.jpg'),
(16, 'Két kezem a tied',                                    4, 'Gregory La Cava',      1936, 'USA',       'Irene Dunne, Cary Grant',                                      'Oscar-jelölés - legjobb film',                                           'https://upload.wikimedia.org/wikipedia/commons/a/a6/My_Man_Godfrey_%281936_film%29_poster.jpg'),
(17, 'Terminátor 2',                                        3, 'James Cameron',        1991, 'USA',       'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong',        'Oscar - legjobb vizuális effektek, legjobb smink',                       'https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg'),
(18, 'Gyilkos vagyok',                                      1, 'Billy Wilder',         1944, 'USA',       'Fred MacMurray, Barbara Stanwyck, Edward G. Robinson',         'Oscar-jelölés - legjobb film, legjobb rendező',                          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Double_Indemnity_film_poster.jpg/220px-Double_Indemnity_film_poster.jpg'),
(19, 'Indiana Jones és az elveszett frigyláda fosztogatói', 2, 'Steven Spielberg',     1981, 'USA',       'Harrison Ford, Karen Allen, Paul Freeman',                     'Oscar - legjobb vágás, legjobb hang',                                    'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Raiders_of_the_Lost_Ark.jpg/220px-Raiders_of_the_Lost_Ark.jpg'),
(20, 'Singin'' in the Rain',                                4, 'Gene Kelly',           1952, 'USA',       'Gene Kelly, Donald O''Connor, Debbie Reynolds',                'Golden Globe - legjobb musical film',                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Singin_in_the_Rain_poster.jpg/220px-Singin_in_the_Rain_poster.jpg');
