# 原生node.js

## 规范化
### CommonJS 规范

#### 引入(四种格式)

1. 支持引入内置模块例如 `http` `os` `fs` `child_process` 等nodejs内置模块
2. 支持引入第三方模块`express` `md5` `koa` 等
3. 支持引入自己编写的模块 ./ ../ 等
4. 支持引入addon C++扩展模块 .node文件

```JavaScript

const fs = require('node:fs'); // 导入核心模块 
const express = require('express'); // 导入 node_modules 目录下的模块 
const myModule = require('./myModule.js'); // 导入相对路径下的模块 
const nodeModule = require('./myModule.node'); // 导入扩展模块

```

#### 导出(两种方式)

1. exports导出模块
```
module.exports = { 
	hello: function() { 
		console.log('Hello, world!'); 
	} 
};

```

2. module.exports导出值
```

module.exports = 123

```
### ESM模块规范

**引入模块==import==必须写在头部**

> 使用ESM模块时需要将package.json的type设置为type:module
```javascript
import fs from 'node:fs'
```

> 如果引入json文件时需要特殊处理，需要增加断言并且指定类型json，node低版本不支持。
```javascript
import data from './data.json' assert { type : "json" }
conselo.log(data)
```

> 加载模块的所有对象
```javascript
import * as all from 'xxx.js'
```

> 动态导入模块

import静态加载不支持掺杂在逻辑中，如果想动态加载请使用import函数模式
```javascript
if(true){
	import('./test.js').then()
}
```

> 模块导出

1. 导出一个默认对象
```javascript
export default {
	name : 'test';
}
//default只能有一个不可重复export default
```

2. 导出变量
```javascript
export const a = 1
```


## 全局变量

### nodeJS内置全局api

#### 1. 当前模块所在==目录==的绝对路径
```javascript
__dirname
```


#### 2. 当前模块==文件==的绝对路径，包括文件名和文件拓展名
```javascript
__filename
```

#### 3. 引入模块和导出模块
```javascript
require module
```

#### 4. process对象
```javascript

process

process.argv
//这是一个包含命令行参数的数组。第一个元素是Node.js的执行路径，第二个元素是当前执行的JavaScript文件的路径，之后的元素是传递给脚本的命令行参数。

process.env
//这是一个包含当前环境变量的对象。您可以通过`process.env`访问并操作环境变量。

process.cwd()
//这个方法返回当前工作目录的路径。

process.on(event, listener)
//用于注册事件监听器。您可以使用`process.on`监听诸如`exit`、`uncaughtException`等事件，并在事件发生时执行相应的回调函数。

process.exit([code])
//用于退出当前的Node.js进程。您可以提供一个可选的退出码作为参数。

process.pid
//这个属性返回当前进程的PID（进程ID）。
```

这些只是`process`对象的一些常用属性和方法，还有其他许多属性和方法可用于监控进程、设置信号处理、发送IPC消息等。

需要注意的是，`process`对象是一个全局对象，可以在任何模块中直接访问，无需导入或定义。


#### 5. Buffer对象

`Buffer`类在处理文件、网络通信、加密和解密等操作中非常有用，尤其是在需要处理二进制数据时

```javascript
Buffer
```

###### 创建`Buffer`实例

- Buffer.alloc(size[, fill[, encoding]])
创建一个指定大小的新的`Buffer`实例，初始内容为零。`fill`参数可用于填充缓冲区，`encoding`参数指定填充的字符编码。

- Buffer.from(array)
创建一个包含给定数组的`Buffer`实例。

- Buffer.from(string[, encoding])
创建一个包含给定字符串的`Buffer`实例。

###### 读取和写入数据

- buffer[index]
通过索引读取或写入`Buffer`实例中的特定字节。

- buffer.length
获取`Buffer`实例的字节长度。

- buffer.toString([encoding[, start[, end]]])
将`Buffer`实例转换为字符串。

###### 转换数据

- buffer.toJSON( )
将`Buffer`实例转换为JSON对象。

- buffer.slice([start[, end]])
返回一个新的`Buffer`实例，其中包含原始`Buffer`实例的部分内容。

###### 其他方法

- Buffer.isBuffer(obj)
检查一个对象是否是`Buffer`实例。

- Buffer.concat(list[, totalLength])
将一组`Buffer`实例或字节数组连接起来形成一个新的`Buffer`实例。

### 其他全局API

> 由于nodejs中没有DOM和BOM，除了这些API，其他的ECMAscriptAPI基本都能用

```javascript
setTimeout 
setInterval 
Promise 
Math  
console  
Date 
fetch//(node v18) 
等...
```