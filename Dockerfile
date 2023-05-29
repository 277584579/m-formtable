# 使用官方 Node.js 16 镜像作为基础镜像
FROM node:16

# 在容器内创建项目目录并设置工作目录
RUN mkdir -p /usr/src/m-formtable
WORKDIR /usr/src/m-formtable

# 安装依赖
COPY package*.json ./
RUN yarn install


# 复制项目文件到容器中
COPY . .

# 打包
RUN npm run build

# 暴露端口
EXPOSE 3007

# 启动项目
CMD [ "npm", "run", "serve" ]

# docker build -t m-formtable .

# docker run -p 3007:3007 --name m-formtable-container -d m-formtable
