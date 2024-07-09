import { PrismaClient } from "@prisma/client";

//初始化为全局对象 global.prismadb，如果 global.prismadb 不存在，则创建一个新的 PrismaClient 实例
const client = global.prismadb || new PrismaClient();

//检查当前应用程序是否在生产环境中运行
if (process.env.NODE_ENV === "production") global.prismadb = client;
//client 对象赋值给了全局对象 global.prismadb

export default client;
