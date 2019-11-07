import { app } from '../initializers/bolt'
const axios = require('axios').default;
export default function () {
    app.command('/api', async ({ ack, say }) => {
        const url = 'https://note.mu/api/v1/users?urlname=8120001123887';
        const response = await axios.get(url)
        const newData = response.data.data.nickname;
        ack();
        say(newData);
    });
}