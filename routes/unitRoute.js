const express = require("express");

const {
  createUnit,
  getUnits,
  getUnit,
  updateUnit,
  deleteUnit,
} = require("../controllers/unitController");

const router = express.Router();

router.post("/", createUnit);
router.get("/", getUnits);
router.get("/:id", getUnit);
router.put("/:id", updateUnit);
router.delete("/:id", deleteUnit);

module.exports = router;
