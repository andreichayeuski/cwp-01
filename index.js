
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
            });
            //task 05.2
            showDirectoryInfo(path.dirname(pathToFile));
            
            //task 05.3
            let pathToNewDir = path.dirname(pathToFile) + "\\" + path.basename(path.dirname(pathToFile));
            fs.mkdirSync(pathToNewDir);
            
            let files = fs.readdir(path.dirname(pathToFile), function(err)
            {
                if (err) 
                {
                    throw err;
                }
            });
            let copyright = JSON.parse(fs.readFile('config.json', function(err)
            {
                if (err) 
                {
                    throw err;
                }
            })).copyright;
            for (let i in files) 
            {
                if (path.extname(files[i]) === ".txt") 
                {
                    let pathToSrc = path.dirname(pathToFile) + "\\" + files[i];
                    let pathToNewFile = pathToNewDir + "\\" + files[i];

                    fs.copyFile(pathToSrc, pathToNewFile, function(err)
                    {
                        if (err) 
                        {
                            throw err;
                        }
                    });

                    let fcontent = fs.readFile(pathToNewFile, "utf-8", function(err)
                    {
                        if (err) 
                        {
                            throw err;
                        }
                    });
                    
                    let fileContent = copyright + "\r\n" + fcontent + "\r\n" + copyright;
                    
                    fs.writeFile(pathToNewFile, fileContent, function(err)
                    {
                        if (err) 
                        {
                            throw err;
                        }
                    });
                }
            }
            
            //fs.appendFileSync(pathToFile, "console.log('" + path.basename(path.dirname(pathToFile)) + "');\n");
            console.log("All is done.");
    }
    else
    {
        console.log("Error: not valid path to directory.");
    }

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
