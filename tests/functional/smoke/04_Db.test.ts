import { testConfig } from '../../../testConfig';
import { DBActions } from '@lib/DBActions';
import { test } from '@playwright/test';

const { Pool, Client } = require("pg");

const credentials = {
    user: "tng",
    host: "localhost",
    database: "tng",
    password: "tng",
    port: 5432,
};

// https://node-postgres.com/features/connecting

async function get_all_name_and_folderId() {
    const client = new Client(credentials);
    await client.connect();
    const result = await client.query("SELECT * FROM vs_folder");
    const rows = result.rows;
    rows.forEach(row => {
        console.log(`NAME: ${row.name} FOLDERID: ${row.folderId}`);
    })
    await client.end();

    return result;
}

async function get_folderId_bei_name() {
    const client = new Client(credentials);
    await client.connect();
    const result = await client.query("SELECT * FROM vs_folder WHERE vs_folder.name = 'Dans Folder'");
    const rows = result.rows;
    rows.forEach(row => {
        console.log(`NAME: ${row.name} FOLDERID: ${row.folderId} DESCRIPTION: ${row.description} PARENTID: ${row.parentld}`);
    })
    await client.end();

    return result;
}

(async () => {
    //const vs_folder_content = await get_all_name_and_folderId();
    const folderId_by_name = get_folderId_bei_name();

})();




test('Connect to Postgres DB', async () => {
    
});