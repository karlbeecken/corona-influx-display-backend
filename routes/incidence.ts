import express from "express";
const router = express.Router();

/**
 * get the current incidence for berlin
 */
router.get("/berlin", async (req, res, next) => {
  let incidence: number = 158.61;
  res.send(Math.floor(incidence).toString());
});

export default router;
