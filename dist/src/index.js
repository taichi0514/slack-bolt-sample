"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("../initializers/bolt");
const hello_1 = require("../commands/hello");
(async () => {
    const server = await bolt_1.app.start(process.env.PORT || 3000);
    console.log(`⚡️ Bolt app is running! PORT: ${server.address().port}`);
})();
hello_1.default();
//# sourceMappingURL=index.js.map