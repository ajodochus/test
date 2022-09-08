import { WebActions } from "@lib/WebActions";
import { TngVersioningPageObjects } from "@objects/TngVersioningPageObjects";

import { expect, Page } from '@playwright/test';
import { testConfig } from '../../testConfig';


let webActions: WebActions;

export class TngVersioningPage extends TngVersioningPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }


    async goto(): Promise<void> {
        await webActions.navigateToURL('');
    }

    async verify_panel_headline(expected_txt: string): Promise<void> {

        await webActions.verifyElementText(TngVersioningPageObjects.HEADLINE_TEXT, expected_txt);

    }

    async verify_FolderName_H4(expected_txt: string): Promise<void> {

        await webActions.verifyElementText(TngVersioningPageObjects.HEADLINE_TEXT, expected_txt);

    }

    async click_nav_arrow_by_foldername(folder_name: string): Promise<void> {
        await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_name + "']/../button");
        await this.page.pause();
    }

    async unfold_and_verify_FOLDER_NAME(folder_seq: string[]): Promise<void> {
        // unfolds all folder of the array, 
        // than clicks the last element of the array
        // than checks if the content page has H4 with folder name
        for (var i = 1; i <= folder_seq.length - 1; i++) {
            //await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[i] + "']/../button");
            let subfolder_of_folder_name = "//span[@class='p-treenode-label' and text()='" + folder_seq[i - 1] + "']/../../ul";
            let element_is_not_present: number = await this.page.locator(subfolder_of_folder_name).count();
            if (element_is_not_present == 0) {
                await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[i - 1] + "']/../button");
                //return folder_name;
            }

        }
        await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[folder_seq.length - 1] + "']");
        await webActions.verifyElementText(TngVersioningPageObjects.FOLDER_H4_TEXT, folder_seq[folder_seq.length - 1]);
        //await this.page.pause();
    }

    async unfold_and_verify_PROJECT_NAME(folder_seq: string[]): Promise<void> {
        // unfolds all folder of the array, 
        // than clicks the last element of the array
        // than checks if the content page has H4 with folder name
        for (var i = 1; i <= folder_seq.length - 1; i++) {
            //await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[i] + "']/../button");
            let subfolder_of_folder_name = "//span[@class='p-treenode-label' and text()='" + folder_seq[i - 1] + "']/../../ul";
            let element_is_not_present: number = await this.page.locator(subfolder_of_folder_name).count();
            if (element_is_not_present == 0) {
                await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[i - 1] + "']/../button");
                //return folder_name;
            }

        }
        await webActions.clickElement("//span[@class='p-treenode-label' and text()='" + folder_seq[folder_seq.length - 1] + "']");
        await webActions.verifyElementText(TngVersioningPageObjects.TABVIEW_PROJECT_NAME, folder_seq[folder_seq.length - 1]);
        //await this.page.pause();
    }

    async create_folder_through_api(txt: string): Promise<void> {

    }

    async create_folder_wait_for_dialog(txt: string): Promise<void> {

        this.page.on('dialog', async (dialog) => {
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
        this.page.on('dialog', async (dialog) => {


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

    async check_breadcrumb(txt: string[]): Promise<boolean> {
        var result: boolean;
        const all_breadcrumbs = await webActions.getTextFromWebElements("//span[@class='p-menuitem-text']");        
        var result = JSON.stringify(all_breadcrumbs) == JSON.stringify(txt);
        return result;
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