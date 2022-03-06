# Typescript Introduction

> Simple project for learning how to use typescript.

## Prerequisites

- [Node js](https://nodejs.org/en/)

## Get started

1. clone the repo

2. Install the dependencies using the command:
     ```sh
    $ npm install
    ```

3. Configure the tsconfig.json file. for more info on how to do this. visit [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
    
    - "rootDir" : path to your typescript file parent directory

    - "outDir": An output folder for all emitted js files.

4. Execute the typescript file using the command line:

    - Run using javascript:

        `Windows`
        
        ```sh
        $ tsc | npm run $npm_script #npm_script in package.json
        ```

        `Linux or MacOS`
        
        ```sh
        $ tsc  && node $outDir/$js_script
        ```

    - Run using typescript:

        ```sh
        $ ts-node $rootDir/$ts_script
        ```
        