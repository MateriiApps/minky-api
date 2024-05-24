const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 47822;

const minkys = [];

fs.readdir("./minky", (err, files) => {
    if (err) {
        throw "failed to read minky dir";
    }

    files.forEach(file => {
        const filePath = path.resolve("./minky", file);
        minkys.push(filePath);
    });
});

app.get("/", (_, res) => {
    const randomIndex = Math.floor(Math.random() * minkys.length);
    const randomFile = minkys[randomIndex];
    const fileName = randomFile.replace(/^.*[\\/]/, '');

    res.set("Content-Disposition", `inline; filename="${fileName}"`)
       .sendFile(randomFile);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
