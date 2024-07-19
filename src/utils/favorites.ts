export const favoriteWebSites: IWebSite[] = [
  {
    name: 'AI工具集',
    type: 'menu',
    children: [
      {
        name: '国外AI对话',
        type: 'menu',
        children: [
          {
            name: 'openAI',
            url: 'https://chat.openai.com/chat',
            desc: 'openAI ChatGPT',
          },
          {
            name: 'Gemini',
            url: 'https://gemini.google.com',
            desc: 'Google Gemini',
          },
        ],
      },
      {
        name: '国内AI对话',
        type: 'menu',
        children: [
          {
            name: '文心一言',
            url: 'https://yiyan.baidu.com',
            desc: '百度文心一言',
          },
          {
            name: '豆包',
            url: 'https://www.doubao.com',
            desc: '豆包AI助手',
          },
          {
            name: '讯飞星火',
            url: 'https://xinghuo.xfyun.cn/',
            desc: '讯飞星火',
          },
          {
            name: '通义千问',
            url: 'https://tongyi.aliyun.com/qianwen/',
            desc: '阿里通义千问',
          },
          {
            name: '混元助手',
            url: 'https://yuanbao.tencent.com/bot/chat',
            desc: '腾讯混元AI助手',
          },
          {
            name: '智谱清言',
            url: 'https://chatglm.cn/main/detail',
            desc: '智谱清言',
          },
          {
            name: 'kimi ai',
            url: 'https://kimi.moonshot.cn/',
            desc: '月之暗面（Moonshot AI）提供的 AI 智能助手',
          },
        ],
      },
    ],
  },
  {
    name: '前端开发',
    type: 'menu',
    children: [
      {
        name: '代码托管',
        type: 'menu',
        children: [
          {
            name: 'gitee',
            url: 'https://gitee.com/',
            desc: '码云',
          },
          {
            name: 'gitcode',
            url: 'https://gitcode.net/',
            desc: 'GitCode',
          },
          {
            name: 'GitHub',
            url: 'https://github.com',
            desc: 'GitHub',
          },
          {
            name: 'GitLab',
            url: 'https://gitlab.com',
            desc: 'GitLab',
          },
        ],
      },
      {
        name: '综合资料',
        type: 'menu',
        children: [
          {
            name: 'MDN',
            url: 'https://developer.mozilla.org/zh-CN/',
            desc: 'MDN Web 文档',
          },
          {
            name: '菜鸟教程',
            url: 'https://www.runoob.com/',
            desc: '菜鸟教程',
          },
          {
            name: 'W3School',
            url: 'https://www.w3school.com.cn/',
            desc: 'W3School 在线教程',
          },
        ],
      },
    ],
  },
  {
    name: '常用工具',
    type: 'menu',
    children: [
      {
        name: '图片工具',
        type: 'menu',
        children: [
          {
            name: 'tinypng',
            url: 'https://tinypng.com/',
            desc: '图片压缩',
          },
          {
            name: 'tinify',
            url: 'https://tinify.cn/',
            desc: 'tinypng国内版',
          },
        ],
      },
      {
        name: '有意思的前端库',
        type: 'menu',
        children: [
          {
            name: '纯前端文本转语音',
            url: 'https://mp.weixin.qq.com/s/yyMNFTffBlohEueSoH6XUQ',
            desc: 'vits-web  ONNX Runtime',
          },
          {
            name: 'es toolkit',
            url: 'https://es-toolkit.slash.page/zh_hans/',
            desc: '前端开发工具类库',
          },
        ],
      },
    ],
  },
]
