// const gameName = {
//   name: 'The Hunger Games',
//   id: 'Cf7W8kekTuGKDAZDipbV',
// };

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createNewGame = async () => {
  await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'The Hunger Games',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

createNewGame();
