const express = require("express");

const router = express.Router();

const giftModel = require("../models/gifts");
const gifterModel = require("../models/gifter");
const gifter_giftModel = require("../models/gifters_gifts");

router.get("/", (req, res) => {
  try {
    const query = req.query;
    if (Object.keys(query).length) {
      const { filters, computer } = query;
      const formattedFilters = filters?.split(",");
      let list = [];

      if (formattedFilters?.length && computer) {
        list = giftModel.list(formattedFilters, computer);
      } else if (formattedFilters?.length) {
        list = giftModel.list(formattedFilters);
      } else if (computer) {
        list = giftModel.list(null, computer);
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
    res.status(500).json({ message: "Something is wrong" });
  }
});

router.post("/chooseGift", (req, res) => {
  const body = req.body;

  const validate = giftModel.chooseAGiftValidate(body);

  if (Object.keys(validate.error).length < 1) {
    const { giftIds, payment_method, guest_name, guest_cpf, guest_phone } =
      body;

    giftIds.forEach((id) => {
      try {
        let gifter = gifterModel.find(guest_cpf);
        if (!gifter?.id) {
          gifter = gifterModel.create({
            name: guest_name,
            cpf: guest_cpf,
            phone: guest_phone,
          });
        }

        if (gifter.id) {
          const giftChanges = {
            was_gifted: payment_method === "give" ? 1 : 0,
          };
          giftModel.update(id, giftChanges);
          gifter_giftModel.create({
            payment_method,
            gifter_id: gifter.id,
            gift_id: id,
          });
        }
      } catch (err) {
        res.status(500).json({ error: err });
      }
    });

    res.status(200).json({ success: "Your gift has been reserved" });
  } else {
    res.status(400).json({ ...validate });
  }
});

module.exports = router;
