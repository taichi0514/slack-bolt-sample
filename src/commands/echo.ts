import { app } from '../initializers/bolt'

export default function () {
    app.command('/echo', async ({ command, ack, say }) => {
        // コマンドリクエストを確認
        console.log(command.text);
        ack();
        say(command.text);
    });
}