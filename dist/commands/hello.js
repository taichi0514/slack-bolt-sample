"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("../initializers/bolt");
function default_1() {
    bolt_1.app.command(`/echo`, async ({ command, ack, say }) => {
        ack();
        say(`${command.text}`);
    });
}
exports.default = default_1;
//# sourceMappingURL=hello.js.map