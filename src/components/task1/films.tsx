type Film = {
  id: string;
  title: string;
  img: string;
  price: number;
  currency: string;
  count: number;
};

const films: Film[] = [{
  id: '1',
  title: 'Супермен',
  img: 'https://upload.wikimedia.org/wikipedia/ru/d/d6/Superman_Man_of_Steel.jpg',
  price: 1299,
  currency: '₽',
  count: 1,
}, {
  id: '2',
  title: 'Одинокий рейнджер',
  img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Lone_ranger_silver_1965.JPG',
  price: 1399,
  currency: '₽',
  count: 2,
}, {
  id: '3',
  title: 'Тайны Смолвиля',
  img: 'https://ru-images-s.kinorium.com/movie/1080/224814.jpg',
  price: 1899,
  currency: '₽',
  count: 99,
}, {
  id: '4',
  title: 'Ведьмак',
  img: 'https://ru-images-s.kinorium.com/movie/1080/1614766.jpg',
  price: 1200,
  currency: '₽',
  count: 0,
}];

export default films;