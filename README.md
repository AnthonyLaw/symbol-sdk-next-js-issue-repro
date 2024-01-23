# The Symbol SDK & Next.js issue repro repo.

### The app works fine in development:

1. `npm install`
2. `npm run dev`
3. Visit `localhost:3000`
4. Press the button on the page.

### The app doesn't works in production:

1. `npm install`
2. `npm run build`
3. `npm run start`
4. Visit `localhost:3000`
5. Press the button on the page.

## Project structure

- `/pages/index.jsx` - main page layout.
- `/utils/transaction.js` - transaction creation helper functions.
- `/config/index.js` - app configuration file.
- `next.config.js` - Next.js configuration file.

## Workaround

Turn the webpack minification off in the Next.js configuration file.

```js
module.exports = {
    // ...
    webpack: (config) => {
        // ...
        config.optimization.minimize = false;
    }
};
```
