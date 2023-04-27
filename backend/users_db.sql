DROP TABLE IF EXISTS `users`;

CREATE TABLE
  `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `firstname` varchar(100) NOT NULL,
    `lastname` varchar(100) NOT NULL,
    `email` varchar(255) UNIQUE NOT NULL,
    `password` varchar(60) NOT NULL,
    `biography` varchar(500) DEFAULT NULL,
    PRIMARY KEY (`id`)
  );

LOCK TABLES `users` WRITE;

INSERT INTO
  `users`
VALUES
  (
    1,
    'Jean-Baptiste',
    'Blond',
    'jbblond@gmail.com',
    'jbblond',
    "Jean-Baptiste est très attentif aux besoins des autres et a un grand sens de la générosité. Musicien a ses heures perdues, gamers et cinéphile, ses multiples talents éblouissent jusqu'au soleil lui-même."
  ),
    (
    2,
    'Julien',
    'LeRoux',
    'jleroux@gmail.com',
    'jleroux',
    "Julien a une grande capacité d'empathie et semble souvent fatigué. D'un calme a toute épreuve, tel le rocher inflexible, il ne sera jamais la source de l'incendie car tous les obstacle se gèrent, je cite, 'Comme un lundi'."
  ),
    (
    3,
    'Angélique',
    'Chartrain',
    'achartrain@gmail.com',
    'achartrain',
    "Angélique est franche et dynamique. Sa patience n'a d'égal que sa persévérance, devant elle le code fait révérence, laisse la râler sans raison, sinon, c'est la 'baston'."
  ),
    (
    4,
    'Erwan',
    'Cherel',
    'echerel@gmail.com',
    'echerel',
    "Erwan est curieux et autonome, entre soif de connaissance et tasse de thé. Sur Code VS, au contraire de Linguini, il écrit la recette de la réussite, mais sans besoin d'un Rémi."
  );

UNLOCK TABLES;
