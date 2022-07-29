import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";

// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials


test('Login and show versioning page @tng', async ({ tngloginPage, tngVersioningPage }) => {
    await tngloginPage.navigateToURL();
    await tngloginPage.loginToApplication();
    await tngVersioningPage.verify_panel_headline('Folder Properties');  
});

test('this test will fail; blabla is no valid text on this page @tng', async ({ tngloginPage, tngVersioningPage }) => {
    await tngloginPage.navigateToURL();
    await tngloginPage.loginToApplication();
    await tngVersioningPage.verify_panel_headline('that`s a wrong panel headline');  
   
});