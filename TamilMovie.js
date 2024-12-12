const form = document.querySelector("#searchform");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(
    ` https://api.themoviedb.org/3/authentication`,
    config
  );
  makeImage(res.data);
  form.elements.query.value = "";
});

const makeImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
