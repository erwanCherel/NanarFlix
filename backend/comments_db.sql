DROP TABLE IF EXISTS `comments`;

CREATE TABLE
  `comments` (
    `id` int NOT NULL AUTO_INCREMENT,
    `newReviewer` varchar(100) NOT NULL,
    `newComment` text NOT NULL,
    `newAvatarImage` varchar(400) NOT NULL,
    PRIMARY KEY (`id`)
  );

LOCK TABLES `comments` WRITE;

INSERT INTO
  `comments`
VALUES
  (
    1,
    'Jean-Baptiste',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec placerat turpis. Praesent ut ultricies nisi.',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Pale',
  ),
    (
    2,
    'Julien',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec placerat turpis. Praesent ut ultricies nisi.',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Light',
  ),
    (
    3,
    'Angélique',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec placerat turpis. Praesent ut ultricies nisi.',
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Pale', 
  ),
    (
    4,
    'Erwan',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec placerat turpis. Praesent ut ultricies nisi.',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Light',
  );

UNLOCK TABLES;