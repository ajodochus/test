export const testConfig = {

    // #################
    // ENVIRONMENTS:
    // #################

    // Production stage
    //

    tng: 'https://review-bw-dev-64u062.kube.devtng.com',
    tng_username: 'test1',
    tng_password: 'test',

    tnglocal: 'https://tng.localhost',
    tngdbusername: 'tng', // or postgres
    tngdbpassword: 'tng', // or postgres
    tngdbhost: 'localhost',
    tngdbport: '5432',
    tngdbname: 'tng', // or postgres
    // 
    qa: `http://automationpractice.com`,
    qa_user: 'bwuser@mc5.email',
    qa_password: '!qaY2wsx3edc4r',
    dev: ``,

    // api tests
    qaApi: `https://reqres.in`,
    devApi: ``,
    username: `demouat@gmail.com`,
    password: `U2FsdGVkX1+6691EJeW/QG2vpjUvj47EQBrTIN5BqZg=`,
    waitForElement: 120000,
    dbUsername: ``,
    dbPassword: ``,
    dbServerName: ``,
    dbPort: ``,
    dbName: ``,

    // git api tests
    gitApi: 'https://api.github.com',
    gitApiToken: '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'
    
}