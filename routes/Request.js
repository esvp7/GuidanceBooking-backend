const router = require("express").Router();
const { Request } = require("../models/form");

//CREATE REQUEST
router.post("/", async (req, res) => {
    const newRequest = new Request(req.body);
    try {
      const savedRequest = await newRequest.save();
      res.status(200).json(savedRequest);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;