import { WebActions } from "@lib/WebActions";
import { TngVersioningPageObjects } from "@objects/TngVersioningPageObjects";

import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';


let webActions: WebActions;

export class TngVersioningPage extends TngVersioningPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    
    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL('');
    }

    async verify_panel_title(): Promise<void> {
        
        await webActions.verifyElementText(TngVersioningPageObjects.HEADLINE_TEXT, 'Folder Properties');
    }

/*
    async loginToApplication(): Promise<void> {
        const decipherPassword = await webActions.decipherPassword();
        await webActions.enterElementText(TngLoginPageObjects.USERNAME_EDITBOX, testConfig.tng_username);
        await webActions.enterElementText(TngLoginPageObjects.PASSWORD_EDITBOX, testConfig.tng_password);
        //await webActions.enterElementText(TngLoginPageObjects.PASSWORD_EDITBOX, decipherPassword);
        await webActions.clickElement(TngLoginPageObjects.LOGIN_BUTTON);
    }
*/
}