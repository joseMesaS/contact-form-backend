"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const EmailController_1 = require("./EmailController");
const port = process.env.PORT || 4000;
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [EmailController_1.default]
});
app.listen(port);
//# sourceMappingURL=index.js.map