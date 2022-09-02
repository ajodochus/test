import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import * as CryptoJS from 'crypto-js';

test('Login to PHP travels. @example', async ({ loginPage, myAccountPage }) => {
    await loginPage.navigateToURL();
    await loginPage.loginToApplication();
    await myAccountPage.verifyMyAccountHeader();
});

test.skip('encrypt. @example', async ({ loginPage }) => {
    const enc = CryptoJS.AES.encrypt("mypass", "key").toString();
    await test.step(enc, async () => {});
    await test.step("hello", async () => {});
});

