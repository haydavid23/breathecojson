const https = require('https');
const fs = require("fs")
const path = require("path")

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const url = "https://jsonplaceholder.typicode.com/posts/1";
const exercises = []

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);

    console.log(body);
    exercises.push(body)
    console.log(exercises)
  });
});


const root = fs.readdirSync("p")
const arr =[]



function start(node){
    console.log(fs.readdirSync("p/css/junior/bootstrap-red-dashboard/"))
    let arr = fs.readdirSync("p/css/junior/bootstrap-red-dashboard/");

    let x =arr.filter(e => e.includes('README'));

    console.log(x);

    node.forEach(node =>{
        console.log(path.resolve(node).split('/'))
        fs.lstatSync(path.resolve(node)).isDirectory()
    })

    arr.forEach(e => console.log( ''   ))

    console.log( fs.lstatSync('p/css/junior/bootstrap-red-dashboard/').isFile() )

   if (node.includes("README.md")){console.log("README.md")}
    else{
   node.forEach((i)=>{console.log(fs.readdirSync(i))})
    }

}

start(root)

// function search(folderName) {

//     let files = fs.readdirSync(folderName);

//     let result = files.find(e => e.includes('README.md'));

//     if (result) return result
//     else {
//         files.forEach
//     }
// }

// search('p')

let readmeArray = [];

let technologies = ['css','javascript','php']

function search(folderName) {

    let fileArray = 'list of folders/files in this dir';

    let readmeArray = 'filter through fileArray to find the readme';

    if (readmeArray.length > 0)
        readmeArray.forEach(e => {
            readmeArray.push({
                readme: readme,
                technology: 'pathName'.split('/').find(dir => technologies.includes(dir.toLowerCase()) )
                            // [documents','src','images','php'].find( ['css','javascript','php'].includes(e) )
            });
        })

    fileArray.forEach(e => {
        if (e.isDirectory())
            search(e);
    })

    return 'Complete';
}

// let x = prompt('start with folder ');
// search(x);
