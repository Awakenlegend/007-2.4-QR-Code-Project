/* 
1. Use the inquirer npm package to get user input.
2. Use the npm i qr-imagenpm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message:"enter ur url",
        name:"url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
  })
  .catch((error) => {
    if (error.isTtyError) {
        var qr_svg = qr.image(url)
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
          });
    } else {
      // Something else went wrong
    }
  });