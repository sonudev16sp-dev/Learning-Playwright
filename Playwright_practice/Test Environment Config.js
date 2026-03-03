// Input
let envName = "staging";  // dev | staging | qa | production | prod

// Fixed values (const)
const DEV_URL = "https://dev-api.testingacademy.com";
const STAGING_URL = "https://staging-api.testingacademy.com";
const QA_URL = "https://qa-api.testingacademy.com";
const PROD_URL = "https://api.testingacademy.com";

let config = {};  // Assembled configuration object

switch (envName.toLowerCase()) {

    case "dev":
        config = {
            name: "DEV",
            baseUrl: DEV_URL,
            apiKey: "dev_key_xxxx-xxxx",
            timeout: 5000,
            description: "Development - Internal testing environment"
        };
        break;

    case "staging":
        config = {
            name: "STAGING",
            baseUrl: STAGING_URL,
            apiKey: "stg_key_xxxx-xxxx",
            timeout: 8000,
            description: "Staging - Pre-production mirror"
        };
        break;

    case "qa":
        config = {
            name: "QA",
            baseUrl: QA_URL,
            apiKey: "qa_key_xxxx-xxxx",
            timeout: 7000,
            description: "QA - Dedicated testing environment"
        };
        break;

    case "production":
    case "prod":
        config = {
            name: "PRODUCTION",
            baseUrl: PROD_URL,
            apiKey: "prod_key_secure-xxxx",
            timeout: 10000,
            description: "Production - Live customer environment"
        };
        break;

    default:
        console.log("Invalid environment name provided.");
        process.exit(1);
}

// Output
console.log("Environment:", config.name);
console.log("Base URL:", config.baseUrl);
console.log("API Key:", config.apiKey);
console.log("Timeout:", config.timeout + "ms");
console.log("Description:", config.description);