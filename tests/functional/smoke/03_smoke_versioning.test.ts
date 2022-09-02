import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";
import { expect } from '@playwright/test';

// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials

const VAR_ENV = process.env.ENV;
//test.use({ storageState: './auth.json' });
test('check for H4 for some folders @tng', async ({ tngloginPage, tngVersioningPage }) => {
    await test.step('login', async () => {

        await tngloginPage.goto();
        await tngloginPage.login();

        await tngVersioningPage.verify_panel_headline('Folder Properties');
        await tngVersioningPage.goto();
        await tngVersioningPage.unfold_and_verify_FOLDER_NAME(["OctoPlant","Dans Folder", "Dan 01"]);
        await tngVersioningPage.unfold_and_verify_PROJECT_NAME(["OctoPlant","Lillys Folder", "lwt 01", "lwt prog 01"]);
        
    });
});
