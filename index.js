/**
 * @file 学习source map
 * 官网: https://www.typescriptlang.org/docs/handbook/compiler-options.html
 * 1. 全局安装typescript npm install -g typescript
 * 2. tsc --sourceMap index.ts
 * 3. 在打印输出右边的行号中，就直接链接到.ts源文件了
 * @version 0.0.1
 * @author 冉娃娃 <274544338@qq.com>
 * @since 2020/8/6 8:27
 */
var Index = /** @class */ (function () {
    function Index(name, age) {
        this.name = '冉娃娃';
        this.age = 33;
        name && (this.name = name);
        age && (this.age = age);
    }
    Index.prototype.sayHello = function () {
        console.log("\u5927\u5BB6\u597D,\u6211\u53EB" + this.name + ",\u6765\u81EA\u91CD\u5E86");
    };
    return Index;
}());
var indexInstance = new Index();
indexInstance.sayHello();
//# sourceMappingURL=index.js.map
