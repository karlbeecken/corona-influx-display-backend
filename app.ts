import express from "express";
const app = express();
const PORT = 8083;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

import incidenceRouter from "./routes/incidence";

app.use("/incidence", incidenceRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
