const gameName = {
  name: 'The Hunger Games',
  id: 'nRSVEiwnNBe4rvQgyfEt',
};

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createNewGame = async () => {
  await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(gameName[0]),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

createNewGame();
