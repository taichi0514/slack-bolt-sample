"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { App } = require(`@slack/bolt`);
const config = {
    token: "xoxp-236314697698-235788935521-822899997124-6774c031e16a16d4ce305946c5cf49bd",
    signingSecret: "406a5f121d080ede6f91cc362942fac5",
};
exports.app = new App(config);
//# sourceMappingURL=bolt.js.map