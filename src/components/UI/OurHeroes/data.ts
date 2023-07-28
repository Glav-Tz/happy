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
    nameCategories: 'Соцсети',
    idCategories: 7,
  },
];

const hero = [
  {
    imgCharacter: 'sweetTooth',
    characterName: 'Сладкая вечеринка',
    descShow: 'Все сладости в одной игровой программе',
    consistsOfGroups: [0],
  },
  {
    imgCharacter: 'unicorn',
    characterName: 'Единорожка',
    descShow:
      'Самая нежная и волшебная программа, в которой собрано все, что любят Единороги',
    consistsOfGroups: [0, 2, 6],
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
    characterName: 'Человек-Паук',
    descShow:
      'Гигантские паутины, умение лазить по стенам и другие “суперсилы” Человека Паука',
    consistsOfGroups: [0, 2, 4],
  },
  {
    imgCharacter: 'haggiWaggi',
    characterName: 'Хагги Вагги',
    descShow: 'Путешествие на фабрику игрушек Poppy Playtime',
    consistsOfGroups: [3],
  },
  {
    imgCharacter: 'tickTok',
    characterName: 'Тик Ток',
    descShow: 'Устройте своему ребенку ТикТок челлендж',
    consistsOfGroups: [0, 7, 1],
  },
  {
    imgCharacter: 'youTube2',
    characterName: 'Yotube Челленджи',
    descShow:
      'Самые популярные челленджи в стиле ВладаА4 и других известных блогеров',
    consistsOfGroups: [7, 1],
  },
  {
    imgCharacter: 'rose',
    characterName: 'Розочка',
    descShow:
      'Самая красочная программа с героями веселого и яркого мультфильма “Тролли”',
    consistsOfGroups: [2, 6],
  },
  {
    imgCharacter: 'brawlStars',
    characterName: 'Brawl stars',
    descShow: 'Окунись в любимую игру',
    consistsOfGroups: [3],
  },
  {
    imgCharacter: 'minecraft',
    characterName: 'Майнкрафт',
    descShow: 'Создай свой Майнкрафт-мир в нашей кутой игровой программе',
    consistsOfGroups: [3],
  },
  {
    imgCharacter: 'littleMermaid',
    characterName: 'Русалочка Ариэль',
    descShow: 'Путешествие в подводный мир удивительной Атлантики',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: '2cats',
    characterName: '2 рыжих кота',
    descShow:
      'Какими должны быть котики? Что они любят? Малыши узнают вместе с нашими  веселыми котами',
    consistsOfGroups: [2],
  },
  {
    imgCharacter: 'antistress',
    characterName: 'антистресс-пати',
    descShow:
      'Pop-it, паззлы, головоломки, сквиши и мячики помогут весело провести время и успокоить нервы',
    consistsOfGroups: [5],
  },
  {
    imgCharacter: 'ladyBug',
    characterName: 'Леди баг',
    descShow:
      'Обожаемая всеми Леди Баг поделиться секретами своих суперспособностей',
    consistsOfGroups: [2, 4, 6],
  },
  {
    imgCharacter: 'wednesday',
    characterName: 'Уэнздей',
    descShow: 'Кровавая вечеринка для всей семьи',
    consistsOfGroups: [0],
  },
  {
    imgCharacter: 'blogging',
    characterName: 'Блогерская вечеринка',
    descShow:
      'Познакомимся со всеми соц-сетями и узнаем, как стать    популярными в каждой из них',
    consistsOfGroups: [1, 7],
  },
  {
    imgCharacter: 'likes',
    characterName: 'Likee-вечеринка',
    descShow:
      'Самые свежие тренды, танцевальная музыка, море лайков и позитива',
    consistsOfGroups: [1, 7],
  },
  {
    imgCharacter: 'youTube',
    characterName: 'Yotube детский',
    descShow: 'YouTube-челленджи, адаптированные для детей от 5 до 8 лет',
    consistsOfGroups: [7],
  },
  {
    imgCharacter: 'pirates',
    characterName: 'Пиратский квест',
    descShow:
      'Кто не мечтал отправится в путешествие и отыскать настоящий пиратский клад?',
    consistsOfGroups: [5],
  },
  {
    imgCharacter: 'paleontologists',
    characterName: 'Дино-Пати',
    descShow:
      'Отыщите следы динозавров вместе с нашими веселыми исследователями',
    consistsOfGroups: [5],
  },
  {
    imgCharacter: 'pajama',
    characterName: 'Пижамная вечеринка',
    descShow: 'Бой подушками, любимые игрушки и другие ”пижамные” развлечения',
    consistsOfGroups: [5, 1],
  },
  {
    imgCharacter: 'harry',
    characterName: 'Гарри Поттер',
    descShow:
      'Погрузись в мир волшебства Хогвартс с самым известным волшебником',
    consistsOfGroups: [3, 5],
  },
  {
    imgCharacter: 'harley',
    characterName: 'Харли квин',
    descShow: 'Немного похулиганим вместе с очаровательной Харли Квин',
    consistsOfGroups: [4, 5],
  },
  {
    imgCharacter: 'football',
    characterName: 'Футбольная вечеринка',
    descShow:
      'Стань крутым футболистом и победи команду соперников в настоящем матче',
    consistsOfGroups: [1, 5],
  },
  {
    imgCharacter: 'squid',
    characterName: 'Игра в кальмара',
    descShow:
      'Хотите пощекотать нервы и погрузиться в атмосферу      нашумевшего сериала?',
    consistsOfGroups: [1],
  },
  {
    imgCharacter: 'mafia',
    characterName: 'Мафия',
    descShow:
      'Город засыпает, просыпается мафия... а ты сможешь вычислить опасную группировку?',
    consistsOfGroups: [1],
  },
  {
    imgCharacter: 'rainbow',
    characterName: 'Радужные друзья',
    descShow: 'Познакомься со всеми друзьями из хоррор игры от Роблокс',
    consistsOfGroups: [3],
  },
  {
    imgCharacter: 'supers',
    characterName: 'Супермен и супергерл',
    descShow:
      'Супергеройская игровая программа по мотивам любимого мультфильма',
    consistsOfGroups: [4],
  },
  {
    imgCharacter: 'Thor',
    characterName: 'Тор',
    descShow:
      'Эффектный супергерой с гигантским молотом научит управлять молниями',
    consistsOfGroups: [4],
  },
  {
    imgCharacter: 'snowWhite',
    characterName: 'Белоснежка',
    descShow:
      'Путешествие в сказочный лес вместе с принцессой Белоснежкой и 7-ю гномами',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: 'rapunzel',
    characterName: 'Рапунцель',
    descShow:
      'Хамелеончик Паскаль, боевая сковородка - что еще приготовила девочкам Рапунцель?',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: 'elsa',
    characterName: 'Эльза',
    descShow:
      'Снежная буря, сугробы, игры в снежки в любое время года вместе с принцессой Эльзой',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: 'moana',
    characterName: 'Моана',
    descShow: 'Отправимся в морское путешествие следом за бесстрашной Моаной?',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: 'enchantimals',
    characterName: 'Данесса Олени',
    descShow: 'Отправьтесь в удивительный мир куколок Энчантималс с Данессой',
    consistsOfGroups: [6],
  },
  {
    imgCharacter: 'lol',
    characterName: 'Куолка ЛОЛ',
    descShow:
      'Наряды, украшения, звездный подиум - что еще любят куколки модницы?',
    consistsOfGroups: [6],
  },
];

export { categories, hero };
