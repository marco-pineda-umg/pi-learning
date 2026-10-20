import express from "express";
import { pool } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    const { rows } = await pool.query<{ now: Date }>("SELECT NOW()");
    res.json({ ok: true, dbTime: rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API en puerto ${PORT}`));
