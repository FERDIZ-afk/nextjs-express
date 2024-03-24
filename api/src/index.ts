import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/api/goodbye", (req, res) => {
    res.json({ message: "Goodbye from Express!" });
    });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on http://0.0.0.0:${port}`);
});