var express = require('express');

app = express();

const port = 3000;

app.listen(port, () => { 
    console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send ("root request");
});
