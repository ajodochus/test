import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";

const VAR_ENV = process.env.ENV;


test('Login and show versioning page @wait_for_dialog', async ({ tngloginPage, tngVersioningPage }) => {
    await tngloginPage.navigateToURL();
    await tngloginPage.loginToApplication();
    await tngVersioningPage.verify_panel_headline('Folder Properties');  
    await tngVersioningPage.create_folder_wait_for_dialog("new folder name");
    await test.step('ENV var: ' + VAR_ENV, async () => {});
});

