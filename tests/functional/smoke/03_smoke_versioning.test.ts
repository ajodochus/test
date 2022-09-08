import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";
import { expect } from '@playwright/test';

const VAR_ENV = process.env.ENV;


// test.use({ storageState: './auth.json' });
test.skip('check for H4 for some folders @tng', async ({ tngloginPage, tngVersioningPage }) => {
    await test.step('login', async () => {

        await tngloginPage.goto();
        await tngloginPage.login();

        await tngVersioningPage.verify_panel_headline('Folder Properties');
        await tngVersioningPage.goto();
        await tngVersioningPage.unfold_and_verify_FOLDER_NAME(["OctoPlant","Dans Folder", "Dan 01"]);
        await tngVersioningPage.unfold_and_verify_PROJECT_NAME(["OctoPlant","Lillys Folder", "lwt 01", "lwt prog 01"]);
        
    });
});

test.use({ storageState: './auth.json' });
test('check breadcrumb', async ({ tngloginPage, tngVersioningPage }) => {

    await test.step('breadcrumb for Lillys folder', async () => {

        var folder_path= ["OctoPlant","Lillys Folder", "lwt 01", "lwt prog 01"];
        await tngVersioningPage.goto();
        await tngVersioningPage.verify_panel_headline('Folder Properties');
        await tngVersioningPage.unfold_and_verify_PROJECT_NAME(folder_path);
        await expect(await tngVersioningPage.check_breadcrumb(folder_path)).toBe(true);
    });
});
