/**
 * @file 学习source map
 * @version 0.0.1
 * @author 冉娃娃 <274544338@qq.com>
 * @since 2020/8/6 8:27
 */

class Index {
  name: string = '冉娃娃';
  age: number = 33;
  constructor(name?: string, age?: number) {
    name && (this.name = name);
    age && (this.age = age);
  }
  sayHello() {
    console.log(`大家好,我叫${this.name},来自重庆`);
  }
}

const indexInstance = new Index();

indexInstance.sayHello();
