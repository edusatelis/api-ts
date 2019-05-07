"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
let port = process.env.PORT || '3000';
server_1.default.app.listen(port, function () {
    console.log(`Server is running in port ${port}`);
});
