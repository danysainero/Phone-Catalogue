const phones = require("../../data/phone-list.json");

class PhonesController {
  constructor() {}

  async getAllPhones(req, res) {
    try {
      const allItems = [...phones.values()];
      res.json(allItems);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getPhoneById(req, res) {
    try {
      const phoneId = req.params.id;
      const allItems = [...phones.values()];

      const filteredPhone = allItems.filter((item) => item.id == phoneId);

      if (!filteredPhone || filteredPhone.length <= 0) {
        throw new Error("Id not found");
      } else {
        res.json(filteredPhone);
      }
    } catch (err) {
      res.status(404).send(err);
    }
  }
}

module.exports = new PhonesController();
