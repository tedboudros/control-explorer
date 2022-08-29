const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

let installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
  REDUX_DEVTOOLS = devTools.REDUX_DEVTOOLS;
}

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: "#000",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
    vibrancy: "dark",
    show: false,
  });

  win.removeMenu();
  //   win.maximize();
  win.show();

  //   win.setFullScreen(true);
  //win.setAlwaysOnTop(true, "normal");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
};

app.whenReady().then(() => {
  if (isDev) {
    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) =>
        console.log(`An error occurred while adding extension: , ${error}`)
      );

    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) =>
        console.log(`An error occurred while adding extension: , ${error}`)
      );
  }

  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
