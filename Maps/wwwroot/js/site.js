import HelloWorld from "./HelloWorld";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    await sleep(1000);
    const helloWorld = new HelloWorld();
    helloWorld.action();
}

init().then(r => {});