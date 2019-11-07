require('dotenv').config();
const axios = require('axios').default;
const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
    const server = await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!', server.address());
})();

app.command('/echo', async ({ command, ack, say }) => {
    // コマンドリクエストを確認
    console.log(command.text);
    ack();
    say(command.text);
});

app.message('test', ({ message, say }) => {
    say(`おはよう`);
});

app.command('/api', async ({ ack, say }) => {
    const url = 'https://note.mu/api/v1/users?urlname=8120001123887';
    const response = await axios.get(url)
    const newData = response.data.data.nickname;
    ack();
    say(newData);
});

app.event('app_home_opened', ({ event, ack, say }) => {
    ack();
    say(`Hello world, <@${event.user}>!`);
});


