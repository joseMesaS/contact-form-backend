"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const EmailController_1 = require("./EmailController");
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [EmailController_1.default]
});
app.listen(4001);
//# sourceMappingURL=index.js.map