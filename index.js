const app = require("./src/views/app");
const port = 8000;
const connectDb = require("./src/config/db/db");
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDb();
});
