export const favoriteWebSites: IWebSite[] = [
  {
    name: 'AI工具集',
    type: 'menu',
    children: [
      {
        name: '国内AI对话',
        type: 'menu',
        children: [
          {
            name: '豆包',
            url: 'https://www.doubao.com',
            desc: '豆包AI助手',
          },

          {
            name: '通义千问',
            url: 'https://tongyi.aliyun.com/qianwen/',
            desc: '阿里通义千问',
          },
          {
            name: '文心一言',
            url: 'https://yiyan.baidu.com',
            desc: '百度文心一言',
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
          {
            name: '混元助手',
            url: 'https://yuanbao.tencent.com/bot/chat',
            desc: '腾讯混元AI助手',
          },
          {
            name: '百小应',
            url: 'https://ying.baichuan-ai.com/',
            desc: '百川智能',
          },
          {
            name: '360智脑',
            url: 'https://ai.360.cn/',
            desc: '360智脑',
          },
          {
            name: '讯飞星火',
            url: 'https://xinghuo.xfyun.cn/',
            desc: '讯飞星火',
          },
        ],
      },
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
          {
            name: 'Monica',
            url: 'https://monica.im',
            desc: 'Monica AI',
          },
          {
            name: 'Claude',
            url: 'https://claude.ai',
            desc: 'Claude AI',
          },
        ],
      },
      {
        name: '深度学习',
        type: 'menu',
        children: [
          {
            name: '飞桨',
            url: 'https://www.paddlepaddle.org.cn/',
            desc: '飞桨致力于让深度学习技术的创新与应用更简单',
          },
          {
            name: '魔塔',
            url: 'https://www.modelscope.cn/home',
            desc: '共享 · 共创 · 共进，构建持续创新的 AI 开源生态',
          },
          {
            name: 'tensorflow',
            url: 'https://tensorflow.google.cn/?hl=zh-cn',
            desc: '借助 TensorFlow，轻松创建可在任何环境中运行的机器学习模型。 ',
          },
          {
            name: 'pytorch',
            url: 'https://pytorch.org/',
            desc: 'PyTorch 是一个开源的机器学习库，用于计算机视觉和自然语言处理等应用。',
          },
          {
            name: 'Yolo',
            url: 'https://docs.ultralytics.com/zh',
            desc: 'YOLO是一种实时目标检测系统',
          },
          {
            name: 'openCV',
            url: 'https://opencv.org/',
            desc: 'OpenCV是一个开源的计算机视觉和机器学习软件库',
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
        name: '教程论坛',
        type: 'menu',
        children: [
          {
            name: 'web dev',
            url: 'https://web.dev/',
            desc: 'web.dev 官方文档',
          },
          {
            name: 'MDN',
            url: 'https://developer.mozilla.org/zh-CN/',
            desc: 'MDN Web 文档',
          },
          {
            name: '书栈网',
            url: 'https://www.bookstack.cn/',
            desc: '书栈网',
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
          {
            name: '掘金',
            url: 'https://juejin.cn/',
            desc: '掘金, 一个帮助开发者成长的社区',
          },
          {
            name: '思否',
            url: 'https://segmentfault.com/',
            desc: 'SegmentFault 思否 为开发者提供问答、学习与交流编程知识的平台',
          },
          {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/',
            desc: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
          },
        ],
      },
      {
        name: 'vue技术栈',
        type: 'menu',
        children: [
          {
            name: 'vue',
            url: 'https://cn.vuejs.org/',
            desc: 'vue 官方文档',
          },
          {
            name: 'vue-router',
            url: 'https://router.vuejs.org/zh/',
            desc: 'vue-router 官方文档',
          },
          {
            name: 'pinia',
            url: 'https://pinia.vuejs.org/',
            desc: 'pinia 官方文档',
          },
          {
            name: 'vite',
            url: 'https://cn.vitejs.dev/',
            desc: 'vite 官方文档',
          },
          {
            name: 'vitepress',
            url: 'https://vitepress.vuejs.org/',
            desc: 'vitepress 官方文档',
          },
          {
            name: 'vueuse',
            url: 'https://vueuse.org/',
            desc: 'vueuse 官方文档',
          },
          {
            name: 'element-plus',
            url: 'https://element-plus.org/zh-CN/',
            desc: 'element-plus 官方文档',
          },
          {
            name: 'vant',
            url: 'https://vant-ui.github.io/vant/#/zh-CN',
            desc: 'vant 官方文档',
          },
        ],
      },
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
        name: 'web开发储备',
        type: 'menu',
        children: [
          {
            name: '富文本编辑器',
            url: 'https://github.com/JefMari/awesome-wysiwyg-editors',
            desc: '富文本编辑器汇总',
          },
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
      {
        name: '微前端',
        type: 'menu',
        children: [
          {
            name: 'qiankun',
            url: 'https://qiankun.umijs.org/zh',
            desc: 'qiankun  微前端框架',
          },
          {
            name: 'micro-app',
            url: 'https://zeroing.jd.com/micro-app/',
            desc: 'micro-app  微前端框架',
          },
          {
            name: '无界',
            url: 'https://wujie-micro.github.io/doc/',
            desc: '无界  微前端框架',
          },
          {
            name: 'single-spa',
            url: 'https://single-spa.js.org/',
            desc: 'single-spa  微前端框架',
          },
          {
            name: 'Alfa',
            url: 'https://alfajs.xconsole.cloud/docs/intro.html#%E4%BB%8B%E7%BB%8D',
            desc: 'Alibaba Cloud Alfa 微前端解决方案',
          },
        ],
      },

      {
        name: '小程序',
        type: 'menu',
        children: [
          {
            name: '微信小程序',
            url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
            desc: '微信小程序官方文档',
          },
          {
            name: '支付宝小程序',
            url: 'https://opendocs.alipay.com/mini/developer',
            desc: '支付宝小程序官方文档',
          },
          {
            name: '百度小程序',
            url: 'https://smartprogram.baidu.com/docs/develop/',
            desc: '百度小程序官方文档',
          },
          {
            name: '字节跳动小程序',
            url: 'https://microapp.bytedance.com/docs/develop/guide/',
            desc: '字节跳动小程序官方文档',
          },
          {
            name: '快应用',
            url: 'https://www.quickapp.cn/',
            desc: '快应用官方文档',
          },
          {
            name: 'taro',
            url: 'https://taro-docs.jd.com/taro/docs/README',
            desc: 'taro  多端统一开发框架',
          },
          {
            name: 'uni-app',
            url: 'https://uniapp.dcloud.io/',
            desc: 'uni-app  多端统一开发框架',
          },

          {
            name: 'chameleon',
            url: 'https://cml.js.org/',
            desc: 'chameleon  多端统一开发框架',
          },
          {
            name: 'kbone',
            url: 'https://wechat-miniprogram.github.io/kbone/docs/',
            desc: 'kbone  多端统一开发框架',
          },
        ],
      },

      {
        name: '算法',
        type: 'menu',
        children: [
          {
            name: 'leetcode',
            url: 'https://leetcode-cn.com/',
            desc: 'leetcode',
          },
          {
            name: 'codewars',
            url: 'https://www.codewars.com/',
            desc: 'codewars',
          },
          {
            name: '牛客网',
            url: 'https://www.nowcoder.com/',
            desc: '牛客网',
          },
          {
            name: 'codetop',
            url: 'https://codetop.cc/home',
            desc: 'codetop',
          },
          {
            name: 'hello 算法',
            url: 'https://www.hello-algo.com/',
            desc: 'hello 算法',
          },
          {
            name: 'the-algorithms',
            url: 'https://the-algorithms.com/language/javascript',
            desc: 'the-algorithms',
          },
        ],
      },
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
    ],
  },
  // {
  //   name: '常用工具',
  //   type: 'menu',
  //   children: [
  //     {
  //       name: '图片工具',
  //       type: 'menu',
  //       children: [
  //         {
  //           name: 'tinypng',
  //           url: 'https://tinypng.com/',
  //           desc: '图片压缩',
  //         },
  //         {
  //           name: 'tinify',
  //           url: 'https://tinify.cn/',
  //           desc: 'tinypng国内版',
  //         },
  //       ],
  //     },
  //   ],
  // },
]
