const app = require("./src/app");
const port = 3000;

app.listen(port, () => {
    console.log(`app.js está rodando na porta: ${port}`);
});