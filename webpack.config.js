const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};
// '상위경로/src/'의 경로를 @로 대체하는 코드
// 예를 들어 C:\a\b\c\root\front\src/ 까지의 경로를 @로 대체할 수 있다.