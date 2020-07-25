const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('./index.html', (err,data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });

}).listen(6012, () => {
    console.log('6012번 포트에서 서버 대기중입니다!');
});