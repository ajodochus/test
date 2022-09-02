import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";

// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials

const VAR_ENV = process.env.ENV;
// test.use({ storageState: './auth.json' });
test('Login and show versioning page @tng', async ({ tngloginPage, tngVersioningPage }) => {
    await test.step('login', async () => {
        await tngloginPage.navigateToURL();
        await tngloginPage.loginToApplication();
        await tngVersioningPage.verify_panel_headline('Folder Properties');
        await tngVersioningPage.click_nav_arrow_by_foldername("OctoPlant");
        await tngVersioningPage.click_nav_arrow_by_foldername("Toms folder");
       
    });

});
