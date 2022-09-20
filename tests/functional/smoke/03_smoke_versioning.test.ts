import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";
import { expect } from '@playwright/test';



const VAR_ENV = process.env.ENV;




test.describe('Testsuite: Versioning', () => {

    var folder_path = ["OctoPlant", "Lillys Folder", "lwt 01", "lwt prog 01"];

    // test.use({ storageState: './auth.json' });
    test('perform tests for "versioning page"', async ({ tngloginPage, tngVersioningPage, browserName, page}) => {
        
        await test.step('BROWSER USED:' +  browserName , async () => {
        });

        await test.step('LOGIN: perform login through login mask on landing page', async () => {
            await tngloginPage.goto();
            await tngloginPage.login();
            await tngVersioningPage.verify_panel_headline('Folder Properties');
        });

        await test.step('FOLDER NAME: open up "Dan 01" and verify folder name on content page', async () => {
            
            await tngVersioningPage.goto();
            await tngVersioningPage.unfold_and_verify_FOLDER_NAME(["OctoPlant", "Dans Folder", "Dan 01"]);
            
        });

        await test.step('PROJECT NAME: open up "lwt prog 01" and check project name on content page', async () => {
            await tngVersioningPage.unfold_and_verify_PROJECT_NAME(["OctoPlant", "Lillys Folder", "lwt 01", "lwt prog 01"]);
        });

        await test.step('BREADCRUMB: open up "lwt prog 01" and check breadcrumb on content page', async () => {   
            await tngVersioningPage.unfold_and_verify_PROJECT_NAME(folder_path);
            await expect(await tngVersioningPage.check_breadcrumb(folder_path)).toBe(true);
        });

        await test.step('LOGOUT: perform logout through headers profile/logout button', async () => {   
            await tngVersioningPage.logout();
        });
    });


})