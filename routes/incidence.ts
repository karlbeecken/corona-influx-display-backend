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
    let rounded: any = Math.round(rate * 10) / 10;
    res.send(Math.floor(rounded).toString());
  }
});

export default router;
