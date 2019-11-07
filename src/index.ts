import { app } from './initializers/bolt'
import Hello from './message/hello'
import Echo from './commands/echo'
import Api from './commands/api'

(async () => {
    const server = await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!', server.address());
})();

Hello()
Echo()
Api()


