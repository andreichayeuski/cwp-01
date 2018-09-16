
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
    const pathToFile = process.argv[2] + "/summary.js";
    const path = require('path');
    let re = new RegExp("[a-z]:([\\/]?([^*|\\/:\"<>]*))*");
    if (re.test(process.argv[2]))
    {

        let fs = require('fs');
        fs.writeFile(path.basename(pathToFile), "", function(err) {
                if (err) 
                {
                    throw err;
                }
                console.log("The file was created!");
            });
        
            fs.appendFileSync(pathToFile, "console.log('" + path.dirname(pathToFile) + "');\n");
            fs.readdir(path.dirname(pathToFile), function(err, listOfContents)
            {
                if (err) 
                {
                    console.log(err);
                }
                listOfContents.forEach(element => 
                {
                    fs.appendFileSync(pathToFile, "console.log('" + path.relative(path.dirname(pathToFile), element) + "');\n");
                });
            })
            fs.appendFileSync(pathToFile, "console.log('" + path.dirname(pathToFile) + "');\n");
            console.log("All is done.");
    }
    else
    {
        console.log("Error: not valid path to directory.");
    }
    console.log(process.argv[2]);
}