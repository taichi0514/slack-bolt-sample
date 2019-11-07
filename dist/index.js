"use strict";
require('dotenv').config();
const { App } = require('@slack/bolt');
const app = new App({
    token: "xoxp-236314697698-235788935521-822899997124-6774c031e16a16d4ce305946c5cf49bd",
    signingSecret: "406a5f121d080ede6f91cc362942fac5"
});
(async () => {
    const server = await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!', server.address());
})();
app.command('/echo', async ({ command, ack, say }) => {
    ack();
    say(`${command.text}`);
});
//# sourceMappingURL=index.js.map