#!/bin/bash  

# 定义要进入的文件夹路径（WSL 中的路径）  
FOLDER_PATH="./dist/element-plus/"  

# 切换到该文件夹  
cd "$FOLDER_PATH"  

# 执行 npm publish 命令  
npm publish