const categories = [
  {
    nameCategories: 'Популярное',
    idCategories: 0,
  },
  {
    nameCategories: 'Подросткам',
    idCategories: 1,
  },
  {
    nameCategories: 'Мульт-герои',
    idCategories: 2,
  },
  {
    nameCategories: 'Герои игр',
    idCategories: 3,
  },
  {
    nameCategories: 'Супергерои',
    idCategories: 4,
  },
  {
    nameCategories: 'Универсальное',
    idCategories: 5,
  },
  {
    nameCategories: 'Принцессы',
    idCategories: 6,
  },
  {
    nameCategories: 'Куколки',
    idCategories: 7,
  },
];

const hero = [
  {
    imgCharacter: 'sweetTooth',
    characterName: 'Сладкая вечеринка',
    descShow: 'Все сладости в одной игровой программе',
    consistsOfGroups: [0, 1],
  },
  {
    imgCharacter: 'unicorn',
    characterName: 'Единорожка',
    descShow:
      'Самая нежная и волшебная программа, в которой собрано все, что любят Единороги',
    consistsOfGroups: [0, 2],
  },
  {
    imgCharacter: 'puppyPatrol',
    characterName: 'Щенячий Патруль',
    descShow:
      'Супергеройская игровая программа по мотивам любимого мультфильма',
    consistsOfGroups: [0, 2],
  },
  {
    imgCharacter: 'spiderMan',
    characterName: 'Человек шелкопряд',
    descShow: 'Есть у него веретено, всех врагов он победит легко.',
    consistsOfGroups: [0, 4],
  },
  {
    imgCharacter: 'haggiWaggi',
    characterName: 'Хагги Вагги',
    descShow: 'Путешествие на фабрику игрушек Poppy Playtime',
    consistsOfGroups: [0, 8],
  },
  {
    imgCharacter: 'tickTok',
    characterName: 'Тик Ток',
    descShow: 'Устройте своему ребенку ТикТок челлендж',
    consistsOfGroups: [0, 8],
  },
];

export { hero, categories };
