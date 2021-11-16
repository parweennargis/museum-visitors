# Museum Visitors

This project serves as the nodejs API system for Museum Visitors.

## Requirements

1. [NodeJS](https://nodejs.org/en/) `> 12.0.0`

## Recommended IDE

[Vscode](https://code.visualstudio.com/) is recommended as the debug configuration is provided assuming vscode.

## Structure and Services

The project consists of a top level `package.json` typical of a nodejs project. However the individual service code is in `src` directories.

### Root Structure:

The root project contains shared modules, library and models, with individual directories for each API.

```
--project-root
    |_ .gitignore           // global git ignores
    |_ README.md            // this file
    |_ package.json         // package file. Node modules are global for all services
    |_ src                  // API service root directory
```

### Service Structure:

```
--project-root
    |_ src                  // API service root directory
        |_ routes/v1        // Route of the project
        |_ controller       // Controller for request and response
        |_ services         // Business layer logic
        |_ validation       // API request validation
```

## Building API service

The following steps are required for setup:

1. Install `nodejs` version `12.0.0` or greater.
2. Clone this git repository and go to root directory.
3. Install modules: `npm install`

## Running or Debugging a service

The following steps are required for debugging a service locally:

1. Run a local version of API: `node src/app.js`

#### Debugging

If using vscode a [debug configuration](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
can be added in `.vscode/launch.json`.

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/index.js"
        }
    ]
}
```

#### API for local instance

`http://localhost:6001/v1/visitors?date=1388534400000&ignore=america_tropical_interpretive_center`
