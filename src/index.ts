import { app } from '../src/initializers/bolt'
import Hello from '../src/message/hello'
import Echo from '../src/commands/echo'
import Api from '../src/commands/api'

(async () => {
    const server = await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!', server.address());
})();

Hello()
Echo()
Api()


