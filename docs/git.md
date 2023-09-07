
# Git常用指令


::: tip
git在工作中常用的一些指令
:::

## 查看当前远程链接地址
```
git remote -v
```

## 查看用户名
```
 git config user.name
```

## 查看密码
```
git config user.email
```

## 当前本地目录新建git库
```
git init
```

## 将代码更新添加到本地存储库
```
git add .
```

## 给本次更新添加备注(xxx为备注内容)
```
git commit -m ＂xxx＂
```

## 提交代码到远程仓库
```
git push
```

## 从远程仓库更新代码到本地仓库
```
git pull
```

## 为本地仓库设置远程仓库地址
```
git remote add origin 'https://github.com/xxxxxxxx'
```

## 取消与远程仓库的连接
```
git remote remove origin
```

## 将当前分支重命名为xxx
```
git branch -M xxx
```

## 查看远程仓库的分支
```
git remote -v
```

## 切换到xxx分支
```
git checkout 分支名
```

## 删除xxx文件
```
git rm xxx
```