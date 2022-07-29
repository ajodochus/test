import test from '@lib/BaseTest';

test(`Login TNG.`, async ({ tngloginPage }) => {

    await tngloginPage.navigateToURL();
    await tngloginPage.loginToApplication();
    
    
});