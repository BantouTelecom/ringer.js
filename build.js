var jade = require('jade'),
    uglify = require('uglify-js'),
    _ = require('underscore'),
    fs = require('fs'),
    main;


// indents each line in a file by 4 spaces or whatever you pass into it
function indent(file, indentAmount) {
    var split = file.split('\n'),
        actualIndent = indentAmount || '    ',
        i = 0,
        l = split.length;
    
    for (; i < l; i++) {
        split[i] = actualIndent + split[i];
    }
    
    return split.join('\n');
}

function beautify(code) {
    var ast = uglify.parser.parse(code);
    return uglify.uglify.gen_code(ast, {beautify: true});
}

function minify(name) {
    var code = fs.readFileSync(__dirname + '/build/' + name + '.js', 'utf-8'),
        ast = uglify.parser.parse(code),
        pro = uglify.uglify,
        minified;

    ast = pro.ast_mangle(ast); // get a new AST with mangled names
    ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
    minified = pro.gen_code(ast); // build out the code

    fs.writeFileSync(__dirname + '/build/' + name + '.min.js', minified);
}

function build(name) {
    main = fs.readFileSync(__dirname + '/src/' + name + '.js', 'utf-8');
    
    fs.writeFileSync(__dirname + '/build/' + name + '.js', main);
    minify(name);
}

build('ringer');
