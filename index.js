
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
    const fs = require('fs');
    let re = new RegExp("[a-z]:([\\/]?([^*|\\/:\"<>]*))*");
    if (re.test(process.argv[2]))
    {
        fs.writeFile(path.basename(pathToFile), "", function(err) {
                if (err) 
                {
                    throw err;
                }
                console.log("The file was created!");
            });
            //task 05.2
            showDirectoryInfo(path.dirname(pathToFile));
            console.log("Task 05.2 completed");
            //task 05.3
            console.log("Task 05.3 started");
            let pathToNewDir = path.dirname(pathToFile) + "\\" + path.basename(path.dirname(pathToFile));
            fs.mkdirSync(pathToNewDir);
            console.log(pathToNewDir);
            let files = fs.readdirSync(path.dirname(pathToFile));
            console.log(path.dirname(pathToFile));
            for (let i in files) 
            {
                console.log(path.extname(files[i]));
                if (path.extname(files[i]) === ".txt") 
                {
                    console.log(files[i]);
                    fs.copyFileSync(path.dirname(pathToFile) + "\\" + files[i], pathToNewDir + "\\" + files[i]);
                }
            }
            
            
            //fs.appendFileSync(pathToFile, "console.log('" + path.basename(path.dirname(pathToFile)) + "');\n");
            console.log("All is done.");
    }
    else
    {
        console.log("Error: not valid path to directory.");
    }
    console.log(process.argv[2]);
    function showDirectoryInfo(pathToDir)
    {
        console.log(pathToDir);
        fs.readdir(pathToDir, function(err, listOfContents)
            {
                if (err) 
                {
                    console.log(err);
                    console.log(pathToDir);
                }
                listOfContents.forEach(element => 
                {
                    console.log(listOfContents);
                    console.log(element);
                    fs.stat((pathToDir + "\\" + element), function(err, stats)
                    {
                        if (err) 
                        {
                           console.log(err);
                           console.log(pathToDir);
                        }
                        if (stats.isDirectory())
                        {
                            showDirectoryInfo(pathToDir + "\\" + element);
                        }
                        if (stats.isFile())
                        {
                            fs.appendFileSync(pathToFile, "console.log('" + path.relative(path.dirname(pathToFile), pathToDir + "\\\\" + element).toString()  + "');\n");
                        } 
                    });
                });
            })
    }
}
