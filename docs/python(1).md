
## 常用通用方法
### print( )函数
```python
# 打印Hello, world 
print('Hello, world')
```

### input( )函数

> input()函数：接受一个标准输入数据，返回为string类型 
```python
name = input("请输入你的昵称：") 
print("你好，"+ name + "！")
```

## 数据类型转换

### 字符串:str( )
```python
  
# str()的作用：把一个数或任何其他类型转换成字符串 
name = input("请输入你的昵称：") 
# 其实在此处有name = str(name)的一个过程 
print("你好，"+ name + "！")
# 请输入你的昵称：你好，行远见大！
```

### 整数型:int( )
```python
# 此处int()的作用：把字符串变成了数值 
a = "5" 
b = int(a)
# 去掉了双引号 
print(b)
# 5

# 此处int()的作用：浮点数变整数,直接把小数点后的内容去掉 
a = 3.222 
b = int(a) 
print(b)
# 3

# 利用int()进行输入类型限制
# 输入一个整数，如果输入小数则会报错 
num = int(input("请输入一个整数：")) 
print(num)
```

### 浮点数:float( )
```python
# 把整数转换成浮点数 
a = 10
b = float(a) 
print(b)
# 10.0

# 利用float()进行输入限制
# 输入一个浮点数,如果输入整数则强制转换成浮点数 
num = float(input("请输入一个浮点数：")) 
print(num)
```



## 数据类型识别方法
### type( )
```python
a, b, c, d = 1, 2.0, "Hello, world", True 
print(a, type(a), b, type(b), c, type(c), d, type(d))
# 1 <class 'int'>  
# 2.0 <class 'float'> 
# Hello, world <class 'str'> 
# True <class 'bool'>
```
### isinstance( )
```python
print(isinstance("Hello, world", str)) # 返回True 
print(isinstance("Hello, world", int)) # 返回False 
print(isinstance(5,int)) # 返回True 
print(isinstance(3.2, float)) # 返回True 
print(isinstance(True, bool)) # 返回True
```

## 字符串格式化输出

|符号|描述|
|---|---|
|%c|格式化字符及其ASCII码|
|%d|格式化整数|
|%e|格式化浮点数，用科学计数法|
|%f|格式化浮点数字，可指定小数点后的精度|
|%g|格式化浮点数字，根据值的大小采用%e或%f|
|%o|格式化无符号八进制数|
|%s|格式化字符串|
|%u|格式化无符号整型|
|%x|格式化无符号十六进制数（小写字母）|
|%X|格式化无符号十六进制数（大写字母）|

>格式化输出数字

```python

age = 10 
print("我今年%d岁了" % age) 
# 我今年10岁了

num = int(input("请输入一个整数：")) 
print("数字是：%d ！" % num)
# 请输入一个整数 -> 数字是10



```

>格式化输出字符串

```python
print("我是%s，我来自%s。" % ("中国人","中国"))
# 我是中国人，我来自中国。
```


## 改变打印间隔

### end( )
>不同的print之间常用
```python
# end函数
print("hello", end="")  # end = "" -> 不换行，直接链接下一个print
print("hello", end="t") # end = "t" -> 中间隔一个tab
print("next", end="\n") # end="\n" -> 换行
print("python")

#helloworld	next
#python
```











### sep( )
>同一个print中间常用
```python
print("www","baidu","com") 
print("www","baidu","com",sep=".") 
print("www","baidu","com",sep="\n")

# www baidu com
# www.baidu.com
# www
# baidu
# com
```




