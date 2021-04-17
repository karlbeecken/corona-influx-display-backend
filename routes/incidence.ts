import express from "express";
const router = express.Router();

import { getIncidence } from "../data";

/**
 * get the current incidence for berlin
 */
router.get("/berlin", async (req, res, next) => {
  let incidence: any = await getIncidence();
  if (incidence) {
    let rate: any = incidence["rate"];
    res.send(Math.floor(rate).toString());
  }
});

export default router;
