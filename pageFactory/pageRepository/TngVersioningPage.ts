import { WebActions } from "@lib/WebActions";
import { TngVersioningPageObjects } from "@objects/TngVersioningPageObjects";

import { expect, Page } from '@playwright/test';
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

    async verify_panel_headline(expected_txt: string): Promise<void> {
        
        await webActions.verifyElementText(TngVersioningPageObjects.HEADLINE_TEXT, expected_txt);
        
    }
    async click_nav_arrow_by_foldername(folder_name: string): Promise<void> {
        await webActions.clickElement("//span[@class='p-treenode-label' and text()='"+ folder_name +"']/../button");
        await this.page.pause();
    }

    async create_folder_through_api(txt: string): Promise<void> {

    }

    async create_folder_wait_for_dialog(txt: string): Promise<void> {

        this.page.on('dialog',async (dialog) => {
            console.log(dialog.message);
            
            //expect(dialog.message()).toContain('Folder Name');
            //create new folder
            //await dialog.accept('my new folder');
            //await dialog.dismiss();
        });
        await webActions.clickElement(TngVersioningPageObjects.TEXTAREA_DESCRIPTION);
        await webActions.enterElementText(TngVersioningPageObjects.TEXTAREA_DESCRIPTION, "hello");
        await webActions.clickElement(TngVersioningPageObjects.BUTTON_NEW_FOLDER);
        await webActions.clickElement(TngVersioningPageObjects.TEXTAREA_DESCRIPTION);
    }

    async create_folder(txt: string): Promise<void> {
        this.page.on('dialog',async (dialog) => {

            
            //expect(dialog.message()).toContain('Folder Name');
            //create new folder
            //await dialog.accept('my new folder');
            await dialog.dismiss();
        });
        await webActions.clickElement(TngVersioningPageObjects.TEXTAREA_DESCRIPTION);
        await webActions.enterElementText(TngVersioningPageObjects.TEXTAREA_DESCRIPTION, "hello");
        await webActions.clickElement(TngVersioningPageObjects.BUTTON_NEW_FOLDER);
        await webActions.clickElement(TngVersioningPageObjects.TEXTAREA_DESCRIPTION);
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