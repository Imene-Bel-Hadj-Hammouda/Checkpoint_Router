import { v4 as uuidv4 } from 'uuid';
const MoviesData = [{
    id: uuidv4(),
    title: "Titanic",
    description:
      "Titanic is an American drama film written, produced and directed by James Cameronn. Incorporating both historical and fictionalized aspects,stars Leonardo DiCaprio and Kate Winslet.",
    posterURL:
      "http://www.babunga.alobi.cd/wp-content/uploads/2017/12/movieposter-279x400.jpg",
    rate: 4,
    thrailer: 'https://www.youtube.com/embed/kVrqfYjkTdQ',
  },
  {
    id: uuidv4(),
    title: "Me Before You",
    description:
      "Me Before You is a 2016 romantic drama film directed by Thea Sharrock in her directorial debut and adapted by English author Jojo Moyes from her 2012-2013 novel of the same name,famous film.",
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/610DJ7aHt4L._AC_SL1090_.jpg",
    rate: 4,
    thrailer:"https://www.youtube.com/embed/Eh993__rOxA" ,
  },
  {
    id: uuidv4(),
    title: "Mission impossible",
    description:
      "is an American film, inspired by the eponymous television series starring since 1996 Tom Cruise (also producer) in the role of Ethan Hunt as well as recurring characters such as Simon Pegg (Benji Dunn).",
    posterURL:
      "http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/mission-impossible-6-dvd-5053083163907-2d-large.png?1544462052",
    rate: 5,
    thrailer:"https://www.youtube.com/embed/wb49-oV0F78" ,
  },
  {
    id: uuidv4(),
    title: "Underworld",
    description:
      "The films feature the adventures of Selene ( Kate Beckinsale ), a vampire involved in an endless war that pits her people against those of the Lycans, powerful werewolves.",
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/51wIV-JmQhL._AC_.jpg",
    rate: 3,
    thrailer:"https://www.youtube.com/embed/2_IoL7g5Ub8" ,
  },
  {
    id: uuidv4(),
    title: "Undisputed III",
    description:
      "Undisputed III:Redemption is a 2010 American action film directed by both Isaac Florentine and starring Scott Adkins, Mykel Shannon Jenkins, Mark Ivanir and Shopov.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTc0YzA4YjQtZGZkMi00ZmRjLWFmM2ItMDcxZTYzZGU3ZTI1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
    rate: 5,
    thrailer:"https://www.youtube.com/embed/6u8IA35-vz8" ,
  },
  {
    id: uuidv4(),
    title: "Scream 4",
    description:
      "or Frissons 4 inQuebeci is anAmerican horror filmdirected byWes Cravenand released in2011. This is the fourth installment in the Scream slasher franchise.",
    posterURL:
      "https://www.dvdfr.com/images/dvd/covers/457x640/fba779a41d8ffc456cc2c18fe3cd226b/53219/old-scream_4.0.jpg",
    rate: 4,
    thrailer:"https://www.youtube.com/embed/JKRtyVLWV-E" ,
  },]
  export default MoviesData