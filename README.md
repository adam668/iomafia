# littlefantasy.io
# Table of Contents

- [About](#about): What is littlefantasy.io?
- [Preperation](#preperation): What you need to get started.
  - [Installing a package manager](##install-a-package-manager)

# About
littlefantasy.io is a modern browser game made with:

- TypeScript (Server side) using [Express](https://expressjs.com).
  - Server found in [src/server](./src/server/)
- React (javascript framework)
  - Found in [src/](./src/)

All of these tools come together via Node.JS.

# Hole


# Preperation

- Get your command-prompt/console/terminal up and ready.
  - *On windows please use PowerShell instead of Command Prompt.*
- **Have at least 1GB of free space. 5GBs *recomended***.
  but assuming you haven't installed the following below, we recommed **1-5GBs** of space.
- Copy paste the commands **(without the >/$/%)** into your command-prompt/console/terminal
  based on your system.
- Note that Linux **has not** been tested but it *should* work.

## Install a package manager

On **windows** install chocolatey:
You can install it by:
1. Open your powershell (in admin mode)
2. Run this command in it
```powershell
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

On **macOS** install Homebrew (*brew* for short):
```sh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
For more info see the [Documentation](https://brew.sh)

**Linux** ships with apt-get so you're good! Note that this may differ if you use a
different distribution of Linux.

## Install Git

**macOS**: **Preinstalled**

**Linux**:
```bash
$ sudo apt-get git
```
**Windows**:
```powershell
> choco install git
```
You can also [download it from the official website](https://git-scm.com/downloads)

## Install Node
Note that installing node **should also** install npm (node package manager)

**macOS**:
```zsh
% brew install node
```

**Linux**:
```bash
$ sudo apt-get node
```
**Windows**:
```powershell
> choco install nodejs
```

Again, you can also [download it from the official website](https://nodejs.org/en/download/).

Run:
```
node --version
```
The version should be greater or equal to 'v14.X.X' as this project uses some
*new* Node.JS features

# Starting the server

Assuming you have followed the instructions in ['Preperation'](#preperation)
you can now start a littlefantasy.io server on your computer.

To do so, copy-paste the following into your terminal/powershell/command-prompt WITHOUT THE "$"

1. Clone the source
```bash
$ git clone https://github.com/adam668/iomafia/
```

2. To gather the dependencies run:
```bash
$ npm install
```

4. To start the server run:
```bash
$ npm run start
```
*or* if you want the server to restart when changed:
```
$ npm run dev
```

# Additional Resources

## Learning Resources
- You **should** learn JavaScript; so here are some good resources
  - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [W3 Schools](https://www.w3schools.com/js/default.asp)
  - [JavaScript.info](https://javascript.info)
- You **should** also learn TypeScript. (its JavaScript but with types)
  - [Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- Learn [Express](https://expressjs.com) a JavaScript framework (if you want to
  work on the backend/server)
  - [Official Starter Guide](https://expressjs.com/en/starter/installing.html)
- Learn [React](https://reactjs.org/) a framework for the front end (if you're a front end dev)
 - [Official Starter Guide](https://reactjs.org/docs/getting-started.html)
- Any more **specific** questions that you may want to ask, you can find/ask here
  - [StackOverflow](https://stackoverflow.com)