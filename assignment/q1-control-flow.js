/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

let env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
//const databaseCredential = "devuser:password";

switch(env)
{
    case 'DEV':
        console.log('No change to DatabaseCredential');
        break;
    case 'STAGE':
        console.log('Modify databaseCredential to Stageuser:Password');
        break;
    case 'PROD':
        console.log('Modify databaseCredential to Produser:password');
        break;
}

console.log("Bye");


//console.log(`Database credential for environment ${env} is ${databaseCredential}`);