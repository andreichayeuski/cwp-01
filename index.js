
/* task02
console.log('Hello World');*/

/* task03
const name= process.argv[2];
console.log(`Hi ${name}!`);*/

/* task04 
process.argv.forEach(
    function(element) 
    {
        console.log(element);
    }
    );*/

/* task05 */
task05();

function task05()
{
    let re = new RegExp("[a-z]:([\\/]?([^*|\\/:\"<>]*))*");
    if (re.test(process.argv[2]))
    {
        let fs = require('fs');
        let pathToFile = process.argv[2] + "/summary.js";
        fs.writeFile(pathToFile, "console.log('hello')", function(err) {
                if(err) 
                {
                    throw err;
                }
                console.log("The file was created!");
            });
        //fs.appendFileSync(pathToFile, ""
            
    }
    else
    {
        console.log("Error: not valid path to directory.");
    }
    console.log(process.argv[2]);
}