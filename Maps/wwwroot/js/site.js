function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    await sleep(1000);
    alert("Hello, World!");
}

init().then(r => {});