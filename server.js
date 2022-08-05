const express = require("express");
const serverStatic = require("serve-static");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const PORT = process.env.PORT || 4200;

const app = express();

app.use(history());
app.use(serverStatic(__dirname + "/dist/asc-fe"));

try {
    app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
} catch (error) {
    console.log(error);
    process.exit(0);
}
