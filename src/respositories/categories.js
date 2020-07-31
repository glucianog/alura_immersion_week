import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Unable to load data :(');
    });
}

export default {
  getAllWithVideos,
};
