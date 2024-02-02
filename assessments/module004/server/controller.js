module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "Advice, when most needed, is least heeded",
      "All the effort you are making will ultimately pay off",
      "All the troubles you have will pass away very quickly",
      "All will go well with your new project",
      "All your hard work will soon pay off",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getName: (req, res) => {
    const names = ["Bob", "Bill", "Billy", "Bobby", "noname"];

    // choose random name
    let randomIndex = Math.floor(Math.random() * names.length);
    let randomName = names[randomIndex];

    res.status(200).send(randomName);
  },
};
