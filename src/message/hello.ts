import { app } from '../initializers/bolt'

export default function () {
    app.message('hello', ({ message, say }) => {
        say(`おはよう`);
    });

}