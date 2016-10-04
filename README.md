# Giphy experiment

An experiment in the usage of Giphy, boiler plate provided by:
[electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate)

## Install

First, clone the repo via git:

```bash
git clone repo-url your-project-name
```

And then install dependencies.

```bash
cd your-project-name && npm install
```

## Run

Run these two commands __simultaneously__ in different console tabs.

```bash
npm run hot-server
npm run start-hot
```

or run two servers with one command

```bash
npm run dev
```

*Note: requires a node version >= 4 and an npm version >= 2.*

## DevTools

### Toggle Chrome DevTools

-   OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
-   Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
-   Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

*See [electron-debug](https://github.com/sindresorhus/electron-debug)
for more information.*

### DevTools extension

-   [Devtron](https://github.com/electron/devtron) Install via
[electron-debug](https://github.com/sindresorhus/electron-debug).

-   [React Developer Tools](https://github.com/facebook/react-devtools)
Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

-   [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

You can find the tabs on Chrome DevTools.

If you want to update extensions version, please set `UPGRADE_EXTENSIONS` env,
 just run:

```bash
$ UPGRADE_EXTENSIONS=1 npm run dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && npm run dev
```

## Package

```bash
npm run package
```

To package apps for all platforms:

```bash
npm run package-all
```

To package apps with options:

```bash
npm run package -- --[option]
```

### Options

-   --name, -n: Application name (default: ElectronReact)
-   --version, -v: Electron version (default: latest version)
-   --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
-   --icon, -i: Application icon
-   --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx),
linux and win32 (windows) platform. After build, you will find them in
`release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be
ignored by default.

#### Building windows apps from non-windows platforms

Please checkout [Building windows apps from non-windows platforms](https://github.com/maxogden/electron-packager#building-windows-apps-from-non-windows-platforms).

## Credit to the contributors of the initial boiler plate

-   [C. T. Lin](https://github.com/chentsulin)
-   [Jhen-Jie Hong](https://github.com/jhen0409)
-   [Amila Welihinda](https://github.com/amilajack)
