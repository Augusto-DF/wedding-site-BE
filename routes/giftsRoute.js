const express = require("express");

const router = express.Router();

const giftModel = require("../models/gifts");
const initDB = require("../models/initDB");

router.get("/", (req, res) => {
  try {
    const query = req.query;
    if (Object.keys(query).length) {
      const { filters, computer } = query;
      const formattedFilters = filters?.split(",");
      let list = [];

      if (formattedFilters.length && computer) {
        list = giftModel.list(formattedFilters, computer);
      } else if (formattedFilters.length) {
        list = giftModel.list(formattedFilters);
      } else if (computer) {
        list = giftModel.list(computer);
      }

      const formattedList = list.map((gift) =>
        giftModel.formatGiftResponse(gift)
      );

      res.status(200).json({ response: formattedList });
    } else {
      const list = giftModel
        .list()
        .map((gift) => giftModel.formatGiftResponse(gift));

      res.status(200).json({ response: list });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong" });
  }
});

router.post("/chooseGift", (req, res) => {
  const body = req.body;

  const validate = giftModel.chooseAGiftValidate(body);

  if (!validate.error) {
    const { giftIds, guest_name, guest_cpf, guest_email, guest_phone } = body;

    giftIds.forEach((id) => {
      const giftChanges = {
        was_gifted: 1,
        guest_name,
        guest_cpf,
        guest_email,
        guest_phone,
      };

      try {
        giftModel.update(id, giftChanges);
      } catch (err) {
        res.status(500).json({ error: err });
      }

      res.status(200).json({ success: "Your gift has been reserved" });
    });
  } else {
    res.status(400).json({ ...validate });
  }

  console.log(validate);
});

module.exports = router;
