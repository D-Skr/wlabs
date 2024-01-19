const housesDB = require("../db.json");

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(housesDB);
  },
  deleteHouse: (req, res) => {
    const { id } = req.params;
    housesDB.filter((el, index, arr) => {
      if (el.id === +id) {
        arr.splice(index, 1);
        res.status(200).send(housesDB);
      }
    });
  },
  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: globalID,
      address,
      price,
      imageURL,
    };
    housesDB.push(newHouse);
    res.status(200).send(housesDB);
    globalID++;
  },
  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    const idx = housesDB.findIndex((elem) => +elem.id === +id);

    if (type === "plus") {
      housesDB[idx].price += 10000;
      res.status(200).send(housesDB);
      return;
    } else if (type === "minus") {
      housesDB[idx].price -= 1000;
      //price cannot be negative
      if (housesDB[idx].price < 0) {
        housesDB[idx].price = 0;
      }
      res.status(200).send(housesDB);
    } else {
      res.status(400);
    }
  },
};
