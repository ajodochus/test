import test from '@lib/BaseTest';


// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials


test('Login and show versioning page @smoketest', async ({ tngloginPage, tngVersioningPage }) => {
    await tngloginPage.navigateToURL();
    await tngloginPage.loginToApplication();
    await tngVersioningPage.verify_panel_title();  
});