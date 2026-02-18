import express from "express";
import cors from "cors";

import autokRouter from "./routes/autok.js";
import ugyfelekRouter from "./routes/ugyfelek.js";
import kolcsonzohelyekRouter from "./routes/kolcsonzohelyek.js";
import kolcsonzesekRouter from "./routes/kolcsonzesek.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/autok", autokRouter);
app.use("/ugyfelek", ugyfelekRouter);
app.use("/kolcsonzohelyek", kolcsonzohelyekRouter);
app.use("/kolcsonzesek", kolcsonzesekRouter);

app.use((req, res) => {
  res.status(404).json({ hiba: "Végpont nem található" });
});

app.listen(3000, () => {
  console.log("API fut: http://localhost:3000");
});
