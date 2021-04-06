const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const templatePath = path.join(__dirname, '../public/template/index.ejs');

const express = require('express');
const app = express();
app.use(express.static('./public'));

const langs = ['cn', 'en'];

let cache = {
    template: '',
    data: ''
};
function newRequire(p) {
    let modulePath = path.join(__dirname, p);
    if (require.cache[modulePath]) {
        delete require.cache[modulePath];
    }
    return require(modulePath);
}

function parseData(data, langs) {
    let resolve = {};
    const parseTree = function(obj, lang) {
        let keys = Object.keys(obj);
        if (obj[lang] !== undefined && keys.length == langs.length) {
            return obj[lang];
        } else if (obj[lang] && keys.length !== langs.length) {
            throw '数据格式不正确';
        } else {
            let newObj = Array.isArray(obj) ? [] : {};
            keys.forEach(key => {
                newObj[key] = parseTree(obj[key], lang);
            });
            return newObj;
        }
    }
    langs.forEach(lang => {
        resolve[lang] = parseTree(data, lang);
    });
    return resolve;
}

function renderTemplate() {
    let template = fs.readFileSync(templatePath, 'utf-8');
    let data = newRequire('../content/data.js');
    if (cache.template == template && cache.data == data) {
        return
    } else {
        cache.template = template;
        cache.data = data;
    }
    
    let { en, cn } = parseData(data, langs);
    
    let enHTML = ejs.render(template, {data: en, lang: 'en'});
    let cnHTML = ejs.render(template, {data: cn, lang: 'cn'});
    let enPath = path.resolve(__dirname, '../public/en');
    let cnPath = path.resolve(__dirname, '../public/cn');
    let indexPath = path.resolve(__dirname, '../public');
    if (!fs.existsSync(enPath)) {
        fs.mkdirSync(enPath);
    }
    if (!fs.existsSync(cnPath)) {
        fs.mkdirSync(cnPath);
    }
    fs.writeFileSync(`${enPath}/index.html`, enHTML);
    fs.writeFileSync(`${cnPath}/index.html`, cnHTML);
    fs.writeFileSync(`${indexPath}/index.html`, cnHTML);
}

function build(){
    try{
        console.log('编译中...');
        let t = new Date().getTime();
        renderTemplate();
        console.log(`编译完成! 耗时：${(new Date().getTime() - t)} ms`);
        if (process.env.ENV === 'dev') {
            console.log(`http://127.0.0.1:4000/en`);
            console.log(`http://127.0.0.1:4000/cn`);
        }
    }catch(err) {
        console.log('编译失败');
        console.log(err);
    }
}

if (process.env.ENV === 'dev') {
    app.listen('4000', () => {
        console.log('服务启动成功, http://127.0.0.1:4000');
        build();
        fs.watch(path.resolve(__dirname, '../public/template'),(type, filename) => {
            build();
        });
        fs.watch(path.resolve(__dirname, '../content'),(type, filename) => {
            build();
        });
    });
} else {
    build();
}
