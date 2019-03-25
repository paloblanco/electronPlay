# playing with electron and tabbing

**Clone and run to currently demo tabs in electron**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

## To use:

```
### Clone this repository
git clone https://github.com/paloblanco/electronPlay.git
### Go into the repository
cd electronPlay
### Install dependencies
npm install
### Run the app
npm start
```

For more details on the electron components, check out their [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

# Making new tabs

Once the app is running, open up the dev tools using CTRL + SHIFT + I

Go to the console and type:
```
window.addTab()
```
viola! You should have a new tab. By adding this function to the window space, it is accessible to anything which is being rendered in the browser.
