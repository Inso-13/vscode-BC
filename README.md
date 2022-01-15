# Borland C README


- 为了能够方便地在vscode中构建Borland C31环境下的项目
- 为了C课设
- 加油，课设人！  
  
# 功能特性

- 1.支持激活DOSBOX
- 2.支持激活BC
- 3.支持Borland C环境下的单文件编译
- 4.支持Borland C环境下的多文件工程构建
- 5.支持打开Borland C并直接定位到当前工程  

# 使用方法


***建议在使用扩展前，首先了解vscode的基本使用方法，可以先试着利用vscode与mingw64构建C/C++开发环境***

**首先，请使用VScode打开DISK_C文件夹（文件->打开文件夹）**

- 功能1.支持方便地激活DOSBOX
  + 作用域：在DISK_C文件夹内任何位置
  + 使用方法：按 "ctrl+shift+p" 后，键入 "启动dosbox" 并回车即可启动dosbox

- 功能2.支持方便地激活BC
  + 作用域：在DISK_C文件夹内任何位置
  + 使用方法：按 "ctrl+shift+p" 后，键入 "启动Borland C(BC)" 并回车即可启动bc

- 功能3.支持Borland C环境下的单文件编译
  + 作用域：在DISK_C文件夹内,请打开需要编译的*.c文件
  + 使用方法：按 "ctrl+shift+p" 后，键入 "BC单文件编译" 并回车即可编译运行

    注意：此功能仅适用于单文件编译，可以使用图形库，生成的exe与obj在同目录下


- 功能4.支持Borland C环境下的多文件工程构建
  + 作用域：在DISK_C文件夹内,请打开需要构建的*.prj文件

  + 使用方法：按 "ctrl+shift+p" 后，键入 "BC构建工程" 并回车即可构建运行

- 功能5.支持Borland C环境下的多文件工程构建
  + 作用域：在DISK_C文件夹内,请打开需要构建的*.prj文件

  + 使用方法：按 "ctrl+shift+p" 后，键入 "BC打开工程" 并回车即可

    注意：prj文件由bc创建工程生成，因此使用前请打开bc添加工程文件（*.c）

# 要求

* 来自`HUST AIA`的bc31

* 请保证bc31所在路径中`无非法字符`（如中文字符、括号等）  

# 配置

- `prj_out_dir` （可选）: 用于设置工程的输出目录，未设置时默认为`*.prj`文件的同目录 


# 更新日志

- 1.0.0

- 实现基础的bc编译、构建功能


- 1.0.1

- 修复了若干bug


- 1.0.2

- 添加"prj_out_dir"属性


- 1.0.4

- 因为真有人下载用，所以更新了README


- 1.0.5

- 修复了若干bug


- 1.0.6

- 新增功能，支持直接用bc打开工程


- 1.0.9

- 更新了 ReadMe.md


# 更多

* 源码下载 [https://github.com/Inso-13/vscode-BC](https://github.com/Inso-13/vscode-BC)

* IMouse源码及示例下载 [https://github.com/Inso-13/BC-IMouse](https://github.com/Inso-13/BC-IMouse)
