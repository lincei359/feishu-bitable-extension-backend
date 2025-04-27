const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 启用CORS和请求体解析
app.use(cors());
app.use(bodyParser.json());

// 飞书应用凭证，实际部署时应通过环境变量配置
const FEISHU_APP_ID = process.env.FEISHU_APP_ID;
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET;

// 获取飞书访问令牌函数和API端点定义
// ...其余代码...

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 默认路由
app.get('/', (req, res) => {
  res.status(200).json({ message: '飞书多维表格API服务已启动' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，监听端口 ${PORT}`);
});
