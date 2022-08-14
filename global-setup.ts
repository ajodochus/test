import rimraf from "rimraf";

async function globalSetup(): Promise<void> {
    await new Promise(resolve => {
        rimraf(`./allure-results`, resolve);
    });
    console.log("setup");
}
export default globalSetup;