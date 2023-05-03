export default function Community() {
  const reviews = [
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription02&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=White&graphicType=Deer&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Serious&skinColor=DarkBrown"
          alt="Avatar"
        />
      ),
      reviewer: "Tim Hagine",
      presentation: "Le cinéma est un soleil noir inlassablement attractif.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Close&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Pale"
          alt="Avatar"
        />
      ),
      reviewer: "Tom Egérie",
      presentation:
        "Le cinéma, ce nouveau petit salarié de nos rêves on peut l'acheter lui, se le procurer pour une heure ou deux, comme une prostitué.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=Blue01&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Bear&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          alt="Avatar"
        />
      ),
      reviewer: "Sam Troulfion",
      presentation:
        "Cinématographe, art militaire. Préparer un film comme une bataille.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairShavedSides&accessoriesType=Prescription02&facialHairType=Blank&clotheType=Overall&clotheColor=PastelBlue&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Disbelief&skinColor=Black"
          alt="Avatar"
        />
      ),
      reviewer: "Beth Rave",
      presentation:
        "L'avion, c'est pareil que le cinéma, il n'y a que des erreurs humaines. Un mauvais film, c'est une erreur humaine.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=ScreamOpen&skinColor=Brown"
          alt="Avatar"
        />
      ),
      reviewer: "Yves Remord",
      presentation:
        "Le cinéma c'est l'art de bien faire les choses défendues au commun des mortels.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Cry&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Brown"
          alt="Avatar"
        />
      ),
      reviewer: "Terry Kiki",
      presentation:
        "Le cinéma est une question de ce qui est dans le cadre et de ce qui en sort.",
    },

    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription02&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=White&graphicType=Deer&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Serious&skinColor=DarkBrown"
          alt="Avatar"
        />
      ),
      reviewer: "Tim Hagine",
      presentation: "Le cinéma est un soleil noir inlassablement attractif.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Close&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Pale"
          alt="Avatar"
        />
      ),
      reviewer: "Tom Egérie",
      presentation:
        "Le cinéma, ce nouveau petit salarié de nos rêves on peut l'acheter lui, se le procurer pour une heure ou deux, comme une prostitué.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=Blue01&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Bear&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          alt="Avatar"
        />
      ),
      reviewer: "Sam Troulfion",
      presentation:
        "Cinématographe, art militaire. Préparer un film comme une bataille.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairShavedSides&accessoriesType=Prescription02&facialHairType=Blank&clotheType=Overall&clotheColor=PastelBlue&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Disbelief&skinColor=Black"
          alt="Avatar"
        />
      ),
      reviewer: "Jean henry",
      presentation:
        "L'avion, c'est pareil que le cinéma, il n'y a que des erreurs humaines. Un mauvais film, c'est une erreur humaine.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=ScreamOpen&skinColor=Brown"
          alt="Avatar"
        />
      ),
      reviewer: "Yves Remord",
      presentation:
        "Le cinéma c'est l'art de bien faire les choses défendues au commun des mortels.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Cry&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Brown"
          alt="Avatar"
        />
      ),
      reviewer: "Terry Kiki",
      presentation:
        "Le cinéma est une question de ce qui est dans le cadre et de ce qui en sort.",
    },
  ];
  return (
    <div>
      <h2 className="bg-gradient-to-r from-orange-200 to-purple-400 uppercase rounded-md my-6 mx-3 px-3 py-1 text-[#472F4A] text-lg md:ml-12 md:mr-12">
        Communauté des regardeurs
      </h2>
      <section className="flex flex-wrap md:ml-1 md:mr-1 justify-center">
        {reviews.slice(0, 6).map(({ image_avatar, reviewer, presentation }) => (
          <div
            className="grid grid-cols-4 gap-2 grid-flow-row grid- bg-[#9EBA9B] w-10/12 h-3/6 p-3 rounded-md mx-3 my-3 md:w-1/4 "
            key={image_avatar}
          >
            <h2 className="p-2   row-start-1 row-end-3 col-start-1 col-end-2">
              {image_avatar}
            </h2>
            <h2 className="p-1 mb-2 text-center font-bold col-start-2 col-end-5 row-start-1 row-end-2 h-1">
              {reviewer}
            </h2>
            <p className="p-3 text-center col-start-2 col-end-5 row-start-2 row-end-3 overflow-auto h-20 text-xs">
              {presentation}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
