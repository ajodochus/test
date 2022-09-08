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
let result;



//expect(body.data.id).toBe(2);
//expect(body.data.first_name).toBe("Janet");
//json_text = JSON.stringify(body.name);

//test.describe.configure({ mode: 'serial' });
test.use({ storageState: './auth.json' });
//test.use({ httpCredentials: {username: 'test1', password: 'test'}})
test.skip('Api personality', async ({ storageState, request, tngloginPage, tngVersioningPage }) => {

    var_response = await request.get('/api/1.0/personality', {
        headers: {
            "accept-encoding": "application/json",

        }

    });
    let body_perso = JSON.parse(await var_response.text());
    let jp = require('jsonpath');
    let get_folderId_by_name = jp.query(body_perso, '$..longName');
    let stringify_perso = JSON.stringify(body_perso);

    await test.step('personality text: ' + stringify_perso, async () => { });
    await test.step('personality result: ' + get_folderId_by_name, async () => { });

});

test('api get folder id of root folder', async ({ request, tngloginPage, tngVersioningPage }) => {

    var_response = await request.get('/api/1.0/folder');
    body = JSON.parse(await var_response.text());

    // search with jsonpath
    let body_stringify = JSON.stringify(body);
    await test.step('env folderID for ROOT: ' + body_stringify, async () => { });
});


test.skip('api get folder id of BOB GARGAN', async ({ request, tngloginPage, tngVersioningPage }) => {

    var_response = await request.get('/api/1.0/folder');
    body = JSON.parse(await var_response.text());

    // search with jsonpath
    let jp = require('jsonpath');
    let get_all_folderId_by_name = jp.query(body, '$..name');
    let get_folderId_by_folderName = jp.query(body, '$..children[?(@.name=="Bob Gargan")].folderId')


    json_text = JSON.stringify(body);

    // search with javascript object
    const getByValue = value => {
        for (let key of Object.keys(body)) if (body[key] === value) return key;
    }

    //search on the json file a object value with "test"
    result = getByValue("OctoPlant");


    // await test.step('resp text: ' + json_text, async () => { });
    // await test.step('resp json: ' + body, async () => { });
    // await test.step('resp result: ' + get_all_folderId_by_name, async () => { });
    await test.step('folderId from Bob Gardan: ' + get_folderId_by_folderName, async () => { process.env['FOLDER_ID'] = get_folderId_by_folderName });
    // await test.step('response: ' + JSON.parse((await issues.body()).toString()), async () => {});
    //await test.step('response: ' +  issues.text, async () => {});
});

test.skip('check for process.env.FOLDER_ID', async ({ request, tngloginPage, tngVersioningPage }) => {

    await test.step('env folderID for BOB: ' + process.env.FOLDER_ID, async () => { });

});


