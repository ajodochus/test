import test from '@lib/BaseTest';
import { WebActions } from "@lib/WebActions";
import { APIActions } from '@lib/APIActions';
import { APIResponse, expect } from '@playwright/test';
import { isAssertClause } from 'typescript';


// xray ticket: otng-273
// As a TNG user
// I want to be able to see my landing page
// by login with valid credetials

const VAR_ENV = process.env.ENV;
const apiActions = new APIActions();

let var_response;
    let body;
    let json_text;

    test.use({storageState: './auth.json'});
test('Api test', async ({ request, tngloginPage, tngVersioningPage }) => {
    //test.use({ baseurl: 'http:...'});

     await tngVersioningPage.navigateToURL();
    await tngVersioningPage.verify_panel_headline('Folder Properties');  
    //await apiActions.verifyStatusCode(response);

    var_response = await request.get('/api/1.0/folder');
    body = JSON.parse(await var_response.text());
    //expect(body.data.id).toBe(2);
    //expect(body.data.first_name).toBe("Janet");
    //json_text = JSON.stringify(body.name);
    json_text = JSON.stringify(body);


    await test.step('response: ' + json_text , async () => {});


    
   // await test.step('response: ' + JSON.parse((await issues.body()).toString()), async () => {});
   //await test.step('response: ' +  issues.text, async () => {});
});



