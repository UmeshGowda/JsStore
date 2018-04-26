var showdown = require('showdown'),
    fs = require('fs'),
    converter = new showdown.Converter(),
    fm = require('front-matter');

const folderName = 'documents';

function getAllFilesFromFolder(folderName) {
    return fs.readdirSync(folderName);
};


exports.convertMdToVueAndSaveInFolder = function (folderToSave) {
    // open tutorial layout
    var layoutContent = fs.readFileSync('./code/layouts/tutorial.vueLayout', {
        encoding: 'utf8'
    });

    getAllFilesFromFolder(folderName).forEach(fileName => {
        var fMData = fm(getContentOfFile(fileName));
        var html = converter.makeHtml(fMData.body);
        fileName = fileName.split(".")[0].trim();
        var filePath = `${folderToSave}/${fileName}.vue`;
        //recreate file if exist otherwise create
        fs.closeSync(fs.openSync(filePath, 'w'));
        var index = layoutContent.indexOf('`');
        var firstString = layoutContent.substring(0, index + 1);
        var lastString = layoutContent.substring(index + 1);
        // html = html.replace(/<\/script>/g, '');
        // html = html.replace(/src/g, ':src');
        html = encodeURI(html);
        fs.writeFileSync(filePath, firstString + html + lastString, {
            encoding: 'utf8'
        });
        console.log(html);
    });
}

function getContentOfFile(fileName) {
    return fs.readFileSync(`${folderName}/${fileName}`, {
        encoding: 'utf8'
    });
}