import app from "./app.ts";

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 DevArena API running on port ${PORT}`);
});