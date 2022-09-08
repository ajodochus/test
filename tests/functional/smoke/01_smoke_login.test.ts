import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";

// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials
let body;
const VAR_ENV = process.env.ENV;
test.describe.serial('login tests', () => {
    test('Login and show versioning page @tng', async ({ request, tngloginPage, tngVersioningPage }) => {
        await test.step('login', async () => {
            await tngloginPage.goto();
            await tngloginPage.login();
            await tngVersioningPage.verify_panel_headline('Folder Properties');

            //await tngVersioningPage.create_folder("new folder name");
            //await test.step('ENV var: ' + VAR_ENV, async () => {});
        });
        /*
        await test.step('fail: wrong headline' , async () => {
           test.setTimeout(5000);
           //await tngloginPage.navigateToURL();
           await tngloginPage.loginToApplication();
           await tngVersioningPage.verify_panel_headline('that`s a wrong panel headline');
        });
       */
    });

});
