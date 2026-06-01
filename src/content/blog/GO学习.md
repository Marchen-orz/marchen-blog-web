---
title: "Go 学习笔记"
description: "记录 Go 语言基础语法、开发实践与学习过程中的关键知识点"
pubDate: 2025-12-30
tags: ["Go", "后端", "学习笔记"]
category: "学习笔记"
draft: false
visibility: "public"
---

# Golang 教程

文档：[8小时转职Golang工程师](https://www.yuque.com/aceld/mo95lb/dsk886)

### 优势

![3-golang优势1.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650470888012-e20eedfd-9064-4d4e-b040-d6878aaa96ad.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_40%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

![7-golang优势2.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650471318257-8884275c-9fe9-41de-8251-1bb828d50aa6.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_66%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

![5-golan优势1.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650471363769-9ded1e7a-acb0-4d6c-b4c1-61f9b77589b0.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_50%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

![9-golang优势4.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650471446832-5722e0a9-5522-469b-9ea9-296c373e3d66.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_52%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

![11-golang优势6.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650471465058-b5db8451-e1d8-4ce4-a572-cc3d8be9bdc1.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_66%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

## 配置GOPATH

`GOPATH`是一个环境变量，用来表明你写的`go`项目的存放路径

`GOPATH`路径最好只设置一个，所有的项目代码都放到`GOPATH`的`src`目录下。

Linux和Mac平台就参照上面配置环境变量的方式将自己的工作目录添加到环境变量中即可。 Windows平台按下面的步骤将（你的安装目录，例如：`D:\go`）添加到环境变量：

1.我的电脑->属性->高级系统设置

![配置GOPATH](https://www.topgoer.com/static/2/1.png)

检查一下你的电脑里面是否存在`GOPATH`并且设置值为你要存`go`代码的目录

![配置GOPATH](https://www.topgoer.com/static/2/2.png)

同时在`path`里面添加`go`的安装目录和`GOPATH`目录

![配置GOPATH](https://www.topgoer.com/static/2/3.png)

![新建工作目录](https://www.topgoer.com/static/2/4.png)

### 1.1. go的项目目录

在进行`Go`语言开发的时候，我们的代码总是会保存在`$GOPATH/src`目录下。在工程经过`go build`、`go install`或`go get`等指令后，会将下载的第三方包源代码文件放在`$GOPATH/src`目录下， 产生的二进制可执行文件放在 `$GOPATH/bin`目录下，生成的中间缓存文件会被保存在 `$GOPATH/pkg` 下。

如果我们使用版本管理工具（`Version Control System`，`VCS`。常用如`Git`）来管理我们的项目代码时，我们只需要添加`$GOPATH/src`目录的源代码即可。`bin` 和 `pkg` 目录的内容无需版本控制。

### 1.2. 适合个人开发者

我们知道源代码都是存放在`GOPATH`的`src`目录下，那我们可以按照下图来组织我们的代码。

![GO目录结构](https://www.topgoer.com/static/2/5.png)

### 1.3. 目前流行的项目结构

Go语言中也是通过包来组织代码文件，我们可以引用别人的包也可以发布自己的包，但是为了防止不同包的项目名冲突，我们通常使用顶级域名来作为包名的前缀，这样就不担心项目名冲突的问题了。

因为不是每个个人开发者都拥有自己的顶级域名，所以目前流行的方式是使用个人的github用户名来区分不同的包。

![GO目录结构](https://www.topgoer.com/static/2/6.png)

举个例子：张三和李四都有一个名叫studygo的项目，那么这两个包的路径就会是：

```go
import "github.com/zhangsan/studygo"
```

和

```go
import "github.com/lisi/studygo"
```

以后我们从`github`上下载别人包的时候，如：

```go
go get github.com/jmoiron/sqlx
```

那么，这个包会下载到我们本地`GOPATH`目录下的`src/github.com/jmoiron/sqlx`。

### 1.4. 适合企业开发者

![GO目录结构](https://www.topgoer.com/static/2/7.png)

## Go Hello World 实例

Go 语言的基础组成有以下几个部分：

- 包声明
- 引入包
- 函数
- 变量
- 语句 & 表达式
- 注释

### 示例

```go
package main

import "fmt"

func main() { //{ 不能在单独的行上
   /* 这是我的第一个简单的程序 */
   fmt.Println("Hello, World!")
}
```

> 1. 每个 Go 应用程序都应该包含一个名为 main 的包
> 2. package名称和文件名不相关
> 3. 入口文件**包名一定要为main**且**有一个名为main的函数**

### 项目结构

```bash
go项目
 -bin 存放编译文件
 -pkg 存放包
 -src 源文件
```

## Go 语言基础语法

### 关键字

下面列举了 Go 代码中会使用到的 25 个关键字或保留字：

| break    | default     | func   | interface | select |
| -------- | ----------- | ------ | --------- | ------ |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |

除了以上介绍的这些关键字，Go 语言还有 36 个预定义标识符：

| append | bool    | byte    | cap     | close  | complex | complex64 | complex128 | uint16  |
| ------ | ------- | ------- | ------- | ------ | ------- | --------- | ---------- | ------- |
| copy   | false   | float32 | float64 | imag   | int     | int8      | int16      | uint32  |
| int32  | int64   | iota    | len     | make   | new     | nil       | panic      | uint64  |
| print  | println | real    | recover | string | true    | uint      | uint8      | uintptr |

> 程序一般由关键字、常量、变量、运算符、类型和函数组成。
>
> 程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。
>
> 程序中可能会使用到这些标点符号：**.**、**,**、**;**、**:** 和 **…**。

## Go 语言数据类型

在 Go 编程语言中，数据类型用于声明函数和变量。

数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。

Go 语言按类别有以下几种数据类型：

| 序号 | 类型和描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | **布尔型** 布尔型的值只可以是常量 true 或者 false。一个简单的例子：var b bool = true。 |
| 2    | **数字类型** 整型 int 和浮点型 float32、float64，Go 语言支持整型和浮点型数字，并且支持复数，其中位的运算采用补码。 |
| 3    | **字符串类型:** 字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的。Go 语言的字符串的字节使用 UTF-8 编码标识 Unicode 文本。 |
| 4    | **派生类型:** 包括：(a) 指针类型（Pointer）(b) 数组类型(c) 结构化类型(struct)(d) Channel 类型(e) 函数类型(f) 切片类型(g) 接口类型（interface）(h) Map 类型 |

------

### 数字类型

Go 也有基于架构的类型，例如：int、uint 和 uintptr。

| 序号 | 类型和描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | **uint8** 无符号 8 位整型 (0 到 255)                         |
| 2    | **uint16** 无符号 16 位整型 (0 到 65535)                     |
| 3    | **uint32** 无符号 32 位整型 (0 到 4294967295)                |
| 4    | **uint64** 无符号 64 位整型 (0 到 18446744073709551615)      |
| 5    | **int8** 有符号 8 位整型 (-128 到 127)                       |
| 6    | **int16** 有符号 16 位整型 (-32768 到 32767)                 |
| 7    | **int32** 有符号 32 位整型 (-2147483648 到 2147483647)       |
| 8    | **int64** 有符号 64 位整型 (-9223372036854775808 到 9223372036854775807) |

#### 浮点型

| 序号 | 类型和描述                        |
| :--- | :-------------------------------- |
| 1    | **float32** IEEE-754 32位浮点型数 |
| 2    | **float64** IEEE-754 64位浮点型数 |
| 3    | **complex64** 32 位实数和虚数     |
| 4    | **complex128** 64 位实数和虚数    |

------

### 其他数字类型

以下列出了其他更多的数字类型：

| 序号 | 类型和描述                               |
| :--- | :--------------------------------------- |
| 1    | **byte** 类似 uint8                      |
| 2    | **rune** 类似 int32                      |
| 3    | **uint** 32 或 64 位                     |
| 4    | **int** 与 uint 一样大小                 |
| 5    | **uintptr** 无符号整型，用于存放一个指针 |

## Go 语言变量

```
var identifier type
```

可以一次声明多个变量：

```
var identifier1, identifier2 type
```

**实例**

```go
package main
import "fmt"
func main() {
    var a string = "Runoob"
    fmt.Println(a)

    var b, c int = 1, 2
    fmt.Println(b, c)
}
```

以上实例输出结果为：

```go
Runoob
1 2
```

### 变量声明

**第一种，指定变量类型，如果没有初始化，则变量默认为零值**。

```go
var v_name v_type
v_name = value
```

> - 数值类型（包括complex64/128）为 **0**
>
> - 布尔类型为 **false**
>
> - 字符串为 **""**（空字符串）
>
> - 以下几种类型为 **nil**：
>
>   ```go
>   var a *int
>   var a []int
>   var a map[string] int
>   var a chan int
>   var a func(string) int
>   var a error // error 是接口
>   ```

**第二种，根据值自行判定变量类型。**

```go
var v_name = value
```

**第三种，如果变量已经使用 var 声明过了，再使用 \**:=\** 声明变量，就产生编译错误，格式：**

```go
v_name := value
```

> := 是一个声明语句
>
> intVal := 1 相等于：
>
> ```go
> var intVal int 
> intVal =1 
> ```

### 多变量声明

```go
//类型相同多个变量, 非全局变量
var vname1, vname2, vname3 type
vname1, vname2, vname3 = v1, v2, v3

var vname1, vname2, vname3 = v1, v2, v3 // 和 python 很像,不需要显示声明类型，自动推断

vname1, vname2, vname3 := v1, v2, v3 // 出现在 := 左侧的变量不应该是已经被声明过的，否则会导致编译错误


// 这种因式分解关键字的写法一般用于声明全局变量
var (
    vname1 v_type1
    vname2 v_type2
)
```

### 简短形式，使用 := 赋值操作符

我们知道可以在变量的初始化时省略变量的类型而由系统自动推断，声明语句写上 var 关键字其实是显得有些多余了，因此我们可以将它们简写为 a := 50 或 b := false。

a 和 b 的类型（int 和 bool）将由编译器自动推断。

这是使用变量的首选形式，但是**它只能被用在函数体内，而不可以用于全局变量的声明与赋值**。使用操作符 := 可以高效地创建一个新的变量，称之为初始化声明。

> 在定义变量 a 之前使用它，则会得到编译错误 undefined: a
>
> 声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误
>
> 但是全局变量是允许声明但不使用的

## Go 语言常量

### const

常量中的数据类型只可以是**布尔型、数字型（整数型、浮点型和复数）和字符串型**。

```go
const identifier [type] = value
```

你可以省略类型说明符 [type]，因为编译器可以根据变量的值来推断其类型。

- 显式类型定义： `const b string = "abc"`
- 隐式类型定义： `const b = "abc"`

常量还可以用作枚举：

```go
const (
    Unknown = 0
    Female = 1
    Male = 2
)
```

常量可以用len(), cap(), unsafe.Sizeof()常量计算表达式的值。常量表达式中，函数必须是内置函数，否则编译不过：

```go
package main


import "unsafe"
const (
    a = "abc"
    b = len(a)
    c = unsafe.Sizeof(a)
)


func main(){
    println(a, b, c)
}
```

输出结果为：abc, 3, 16

> unsafe.Sizeof(a)输出的结果是16 。
>
> 字符串类型在 go 里是个结构, 包含指向底层数组的**指针和长度**,这两部分每部分都是 8 个字节，所以字符串类型大小为 16 个字节。

### iota

只能出现在const 的（）中

在 golang 中，一个方便的习惯就是使用`iota`标示符，它简化了常量用于增长数字的定义，给以上相同的值以准确的分类。

```go
const (
    CategoryBooks = iota // 0
    CategoryHealth       // 1
    CategoryClothing     // 2
)
```

**iota还可以用在表达式中**

## 函数

多返回值的几种形式

```go
//匿名
func foo(a string, b int) (string, int, int) {
    c := 100
    return a, b, c
}
//有形参名
func foo1(a string, b int) (x string, y int, c int) {
    x = a
    y = b
    c = 100
    return
}
//类型简写
func foo2(a int, b int) (x, y, c int) {
    x = a
    y = b
    c = 100
    return
}
```

## import和init()

![31-init.png](https://cdn.nlark.com/yuque/0/2022/png/26269664/1650528765014-63d3d631-428e-4468-bc95-40206d8cd252.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_60%2Ctext_5YiY5Li55YawQWNlbGQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

> 1. main中init先于main执行
> 2. **导出的函数必须大写**，小写表示不导出，只能在包内使用

### 导入不使用

>   _ "init-test/lib1" 前面加 _

```go
import (
    _ "init-test/lib1"
    "init-test/lib2"
)
```

### 导入重命名

```go
import (
    _ "init-test/lib1"
    mylib2 "init-test/lib2"
)
```

### 导入方法名直接暴露在主程序中(不推荐使用)

```go
import (
    _ "init-test/lib1"
    . "init-test/lib2"
)

func main() {
	Lib2Func() //直接使用
}
```

## defer(类似析构函数)

> defer语句被用于预定对一个函数的调用。可以把这类被defer语句调用的函数称为延迟函数()。
>
> defer作用：
>
> - 释放占用的资源
> - 捕捉处理异常
> - 输出日志

***defer是压栈操作 后 defer先执行***

```go
func Demo(){
	defer fmt.Println("1")
	defer fmt.Println("2")
	defer fmt.Println("3")
	defer fmt.Println("4")
    return 0
}
func main() {
    fmt.Println(Demo()) //0 4 3 2 1 
}
```

## 固定长度数组和动态数组（slice切片）

### 固定长度

```go
package main

func main() {
	var myArray [5]int
	myArray1 := [5]int{10, 20, 30, 40, 50}

	for i := 0; i < len(myArray); i++ {
		println("Element at index", i, "is", myArray[i])
		println(myArray1[i])
	}
}

```

> *var myArray [5]int*
> *myArray1 := [5]int{10, 20, 30, 40, 50}* 数组定义两种方式

#### 另一种遍历方法

```go
for index, value := range myArray1 {
		println("Element at index", index, "is", value)
	}
```

#### 函数内形参传递的**值拷贝**不改变元素组

```go
func printArray(arr [5]int) {
	for i := 0; i < len(arr); i++ {
		println("Element at index", i, "is", arr[i])
	}
	arr[0] = 100 //改变的是副本，不影响原数组
}

func main() {
	var myArray [5]int
	myArray1 := [5]int{10, 20, 30, 40, 50}

	for i := 0; i < len(myArray); i++ {
		println("Element at index", i, "is", myArray[i])
		//println(myArray1[i])
	}
	printArray(myArray1) // 10 20 30 40 50
	println("---After Modification---")
	printArray(myArray1)// 10 20 30 40 50s
}

```

### 动态长度

```go
myArr := []int{1,2,3,4}
```

#### 示例

```go
func printSlice(slice []int) {
	for i := 0; i < len(slice); i++ {
		println("Element at index", i, "is", slice[i])
	}
	slice[0] = 100 // 改变的是原切片，影响原切片
}

func main() {
	mySlice := []int{10, 20, 30, 40, 50}
	printSlice(mySlice) // 动态数组直接传递引用
	println("---After Modification---")
	printSlice(mySlice)
}
```

### slice中的方法

#### len() 获取长度

#### make() 开辟空间

```go
var slice1 []int
	fmt.Printf("Length of slice1:%d\n", len(slice1))
	slice1 = make([]int, 5)
	fmt.Printf("Length of slice1:%d", len(slice1))
```

#### 判断slice是否为空

```go
var slice1 []int
	fmt.Printf("Length of slice1:%d\n", len(slice1))
	if slice1 == nil {
		fmt.Println("slice1为空")
	} else {
		slice1[0] = 10 //不为空才能赋值
	}
```

#### cap() 获取容量

```go
slice2 := make([]int, 3, 5)
	fmt.Printf("Length of slice2:%d, Capacity of slice2:%d", len(slice2), cap(slice2))
```

#### append() 追加元素（自动扩容）

```go
slice2 = append(slice2, 10, 20)
	fmt.Print(slice2)
	fmt.Printf("Length of slice2:%d, Capacity of slice2:%d\n", len(slice2), cap(slice2))
	slice2 = append(slice2, 30)
	fmt.Print(slice2)
	fmt.Printf("Length of slice2:%d, Capacity of slice2:%d\n", len(slice2), cap(slice2)) //已满追加直接翻倍扩容

```

#### 切片截取

可以通过设置下限及上限来设置截取切片*[lower-bound:upper-bound]*，实例如下：

```go
package main


import "fmt"


func main() {
   /* 创建切片 */
   numbers := []int{0,1,2,3,4,5,6,7,8}   
   printSlice(numbers)


   /* 打印原始切片 */
   fmt.Println("numbers ==", numbers)


   /* 打印子切片从索引1(包含) 到索引4(不包含)*/
   fmt.Println("numbers[1:4] ==", numbers[1:4])


   /* 默认下限为 0*/
   fmt.Println("numbers[:3] ==", numbers[:3])


   /* 默认上限为 len(s)*/
   fmt.Println("numbers[4:] ==", numbers[4:])


   numbers1 := make([]int,0,5)
   printSlice(numbers1)


   /* 打印子切片从索引  0(包含) 到索引 2(不包含) */
   number2 := numbers[:2]
   printSlice(number2)


   /* 打印子切片从索引 2(包含) 到索引 5(不包含) */
   number3 := numbers[2:5]
   printSlice(number3)


}


func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}
```

执行以上代码输出结果为：

```go
len=9 cap=9 slice=[0 1 2 3 4 5 6 7 8]
numbers == [0 1 2 3 4 5 6 7 8]
numbers[1:4] == [1 2 3]
numbers[:3] == [0 1 2]
numbers[4:] == [4 5 6 7 8]
len=0 cap=5 slice=[]
len=2 cap=9 slice=[0 1]
len=3 cap=7 slice=[2 3 4]
```

#### copy() 函数

```go
s3 := slice2
fmt.Println(s3) 0 1 2 3 4
slice2[0] = 1000
fmt.Printf("s3[0]=%d\n", s3[0]) //slice2和s3指向同一底层数组 1000
s4 := make([]int, len(slice2))
copy(s4, slice2)
slice2[0] = 2000
fmt.Printf("s4[0]=%d\n", s4[0]) //copy后slice2和s3不再指向同一底层数组 1000
```

## map

```go
	fmt.Printf("s4[0]=%d\n", s4[0]) //copy后slice2和s3不再指向同一底层数组
	map1 := make(map[string]int, 5) //声明map其中的key为string类型，value为int类型
	map1["one"] = 1
	map1["two"] = 2
	map1["three"] = 3
	map1["four"] = 4
	map1["five"] = 5
	fmt.Println("Map element for key 'one':", map1["one"])
	fmt.Println(map1) //map[five:5 four:4 one:1 three:3 two:2] //map是无序的
map2 := map[string]string{ //较为特殊声明方法
		"name":    "Alice",
		"country": "Wonderland",
		"fruit":   "Apple", //结尾有逗号
	}
	fmt.Println(map2)
```

### 方法

#### delete()

```go
fmt.Println(cityMap)
delete(cityMap, "usa")
fmt.Println(cityMap)
```

> map不可直接copy拷贝，只能手动拷贝
>
> ```go
> for k, v := range map2 {
> 	cityMap[k] = v
> }
> ```

## 面向对象

### 封装

```go
type Book struct {
    title  string
    author string
}

func changeAuthor(b Book) {
    b.author = "Jane Smith"
}
func changeAuthorReal(b *Book) {
    b.author = "Jane Smith"
}
func main() {
    fmt.Println("test")
    var book1 Book
    book1.title = "Go Programming"
    book1.author = "John Doe"
    //还可以book1 := Book{title:  "Go Programming",author: "John Doe",}
    fmt.Println(book1)
    changeAuthor(book1)
    fmt.Println(book1) // 传递的是副本，book1 不变
    changeAuthorReal(&book1)
    fmt.Println(book1) // 传递的是地址，book1 变了
}
```

#### 类定义以及方法实现

```go
type Hero struct { // 类名称大写其他包也能使用，否则只有当前包中使用 和函数类似
    name  string
    age   int
    skill string
}

func (hero Hero) Show() {
    fmt.Println("Hero info:", hero)
}

func (hero Hero) GetName() {
    fmt.Println("Hero name is:", hero.name)
}

func (hero Hero) GetAge() {
    fmt.Println("Hero age is:", hero.age)
}

func (hero Hero) GetSkill() {
    fmt.Println("Hero skill is:", hero.skill)
}

func (hero *Hero) SetName(name string) {
    hero.name = name
}
```

> *GO不推荐在类中同时存在值接收和指针接收，所以建议统一传递指针*
>
> ```go
> func (hero *Hero) Show() {
> 	fmt.Println("Hero info:", hero)
> }
> 
> func (hero *Hero) GetName() {
> 	fmt.Println("Hero name is:", hero.name)
> }
> 
> func (hero *Hero) GetAge() {
> 	fmt.Println("Hero age is:", hero.age)
> }
> 
> func (hero *Hero) GetSkill() {
> 	fmt.Println("Hero skill is:", hero.skill)
> }
> ```

### 继承

#### 继承语法

```go
type superMan struct {
	Human // 继承了 Human
	level int
}
```

#### 重写

```go
func (superman *superMan) Eat() {
    fmt.Println(superman.name, "the superman is eating") // 方法重写
}

func (superman *superMan) upgrade() {
    superman.level++
    fmt.Println(superman.name, "the superman is upgrading, now is ", superman.level)
}
```

#### 定义子类对象

```go
superman := superMan{
    Human: Human{
       name: "Bob",
       sex:  "female"},
    level: 1,
}
//或者
superman := superMan{Human{name: "Bob",sex:  "female"},1}
//或者
var s SuperMan
s.name= "xxx"
s.sex= "xxx"
s.level= 1
```

### 多态

> Go 语言与 Java 或 C++ 等传统的面向对象语言不同，它**没有 `extends` 关键字（没有继承）**，也没有传统的类。
>
> Go 语言通过**接口**和**结构体**来实现多态。核心思想是：**“鸭式类型”**，即“如果它走起路来像鸭子，叫起来像鸭子，那么它就是鸭子”。***只要一个结构体实现了接口定义的所有方法，编译器就认为它实现了该接口**。*

```go
package main

import "fmt"

// 1. 定义一个接口，本质是一个指针
type Speaker interface {
    Speak() string
}

// 2. 定义结构体
type Dog struct{}
type Cat struct{}

// 3. 让结构体实现接口的方法（注意：Go 中不需要显式写 implements）
func (d Dog) Speak() string {
    return "汪汪汪"
}

func (c Cat) Speak() string {
    return "喵喵喵"
}

// 4. 一个通用的函数，接收接口类型
func LetAnimalSpeak(s Speaker) {
    // 这里体现多态：不管传进来的是什么，只要实现了 Speak 就行
    fmt.Println(s.Speak())
}

func main() {
    var s Speaker

    dog := Dog{}
    cat := Cat{}

    // 多态赋值：父类(接口)引用指向子类(结构体)对象
    s = dog
    LetAnimalSpeak(s) // 输出: 汪汪汪

    s = cat
    LetAnimalSpeak(s) // 输出: 喵喵喵
}
```

#### 多态基本要素

- 有一个父类（有接口）
- 有子类（实现了父类接口的全部方法）
- 父类类型的变量（指针）指向（引用）子类具体数据变量

#### 同名方法冲突

如果多个接口都需要同名方法，结构体**只需写一次**该方法，自动同时满足所有接口。

#### 接口的完整性

- **铁律**：**“全有或全无”**。
- **判定**：少一个方法，编译器都认为你**完全没有实现**该接口，直接报错。
- **解决建议**：如果觉得接口太大（要求的方法太多），应该将大接口**拆分**成多个**小接口**（单一职责）。

#### interface{}万能接口

```go
func myFunc(arg interface{}) {
	fmt.Println("my Func is called")
	fmt.Println(arg)
}
book := Book{title: "1984", author: "George Orwell", id: 1}
myFunc(book)
myFunc(42)
myFunc("Hello, World!")
```

##### 类型断言机制

```go
func myFunc(arg interface{}) {
    fmt.Println("my Func is called")
    fmt.Println(arg)
    if v, ok := arg.(Book); ok {
       fmt.Println("It's a Book:", v.title)
    } else {
       fmt.Println(v, "Not a Book")
    }
}
```
