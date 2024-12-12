const button = document.getElementById("cb");
const para = document.getElementById("joke");

button.addEventListener("click", async function () {
  try {
    const res = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const setup = res.data.setup;
    const punchline = res.data.punchline;

    para.textContent = setup + " - " + punchline;
  } catch (error) {
    console.error("Error fetching the joke:", error);
    para.textContent = "Oops! Something went wrong. Try again later.";
  }
});
