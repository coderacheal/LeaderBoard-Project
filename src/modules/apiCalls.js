const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nRSVEiwnNBe4rvQgyfEt/scores/';

const submitScoreToAPI = async (user, score) => {
  await fetch(scoreURL, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const retrieveScoreFromAPI = async () => {
  const response = await fetch(scoreURL);
  const nameAndScore = await response.json();
  return nameAndScore;
  // console.log(nameAndScore.result);
};

export { submitScoreToAPI, retrieveScoreFromAPI };
