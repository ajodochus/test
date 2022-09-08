import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/bu/LoginPage';
import { MyAccountPage } from '@pages/bu/MyAccountPage';
import { MyAddressesPage } from '@pages/bu/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/bu/MyPersonalInformationPage';

import { TngLoginPage } from '@pages/TngLoginPage';
import { TngVersioningPage } from '@pages/TngVersioningPage';

const test = baseTest.extend<{
    tngloginPage: TngLoginPage;
    tngVersioningPage: TngVersioningPage;

    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;

}>({
    tngloginPage: async ({ page }, use) => {
        await use(new TngLoginPage(page));
    },
    tngVersioningPage: async ({ page }, use) => {
        await use(new TngVersioningPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
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