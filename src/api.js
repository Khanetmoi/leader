const board = document.querySelector('#scores');
const name = document.querySelector('#name');
const score = document.querySelector('#score');

export const getGameScores = (gamescore) => {
  let combo = '';
  gamescore.map((score) => {
    combo += `
        <h3>${score.user}:${score.score}</h3>
        `;
    board.innerHTML = combo;
    return board.innerHTML;
  });
};

export const postData = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CH6Z7Rvx4uXkcUW0jwCG/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
        index: Date.now(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',

      },
    });
  name.value = '';
  score.value = '';
};

export const getApiData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CH6Z7Rvx4uXkcUW0jwCG/scores');
  const data = await res.json();
  getGameScores(data.result);
};