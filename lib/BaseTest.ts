import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { MyAccountPage } from '@pages/MyAccountPage';
import { MyAddressesPage } from '@pages/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/MyPersonalInformationPage';

import { TngLoginPage } from '@pages/TngLoginPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    tngloginPage: TngLoginPage;

    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    tngloginPage: async ({ page }, use) => {
        await use(new TngLoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    myAddressesPage: async ({ page }, use) => {
        await use(new MyAddressesPage(page));
    },
    myPersonalInformationPage: async ({ page }, use) => {
        await use(new MyPersonalInformationPage(page));
    }
});

export default test;