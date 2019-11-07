const { App } = require(`@slack/bolt`)

// Initializes your app with your bot token and signing secret
const config = {
    token: "xoxp-236314697698-235788935521-822899997124-6774c031e16a16d4ce305946c5cf49bd",
    signingSecret: "406a5f121d080ede6f91cc362942fac5",
}

export const app = new App(config)