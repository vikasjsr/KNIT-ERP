import app from "./app.js"
import { connectDB } from "./database.js";
const PORT = 4000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is working on port: ${PORT}`);
  });