
function generateObjectArray() {
  const objectArray = [];

  for(let i = 0; i <= 25; i++) {
    const crtImage = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Я тут был ${i} раз!`,
      likes: getRandomInteger(15, 200),
      comments: generateComment(),
    };
    objectArray.push(crtImage);
  }
  return objectArray;
}

function generateComment() {
  const objectComment = [];

  for (let i = 0; i <= 6; i++) {

    const arrayComment = [
      'Всё отлично!','В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
    ];

    const arrayName = ['Артем', 'Никита', 'Сергей', 'Филлип', 'Влад'];

    const crtComment = {
      id: i,
      avatar: `img/avatar-${i}.svg`,
      message: arrayComment[getRandomInteger(0, arrayComment.length - 1)],
      name: arrayName[getRandomInteger(0, arrayName.length - 1)],
    };
    objectComment.push(crtComment);
  }
  return objectComment;
}

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
