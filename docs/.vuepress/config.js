module.exports = {
    title:'ljh blog',
    description:'welcomg to my blog',
    base: "/myblog/",
    plugins: ['fulltext-search'],
    // 处理路径问题
    markdown: {
        extendMarkdown: md => {
            md.set({breaks: true})
            md.use(require("markdown-it-disable-url-encode"), "./")
        }
    },
    // latex部分：
    markdown: {
        config: md => {
          md.use(require("markdown-it-katex"));
        }
      },
    head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
    ],
   
    // 导航栏，侧边栏
    themeConfig:{
        nav: [
                {text:'首页',link:"/"},// / 是读取docs文件夹下的README.md文件
                {text:'about',link:"/about/about"},
                {text:'Github',link:"https://github.com/ChosenOne23"}
        ],

        sidebar: [
            {
            title: "技术",
            path: "/tec/",// / 结尾的路径将会被视为 */README.md，
            collapsable: true,//是否折叠
            children:[
                {title:"linux",path:"/tec/linux/linux"},
                {title:"frontend",path:"/tec/frontend/vue"},
                {title:"typora",path:"/tec/typora/grammar"}

            ]// 仅以 / 开头，不写 .md 后缀，默认读取文件夹下对应的 markdown 文件
            },

            {
                title: "实验",
                path: "/exp/",// / 结尾的路径将会被视为 */README.md，
                collapsable: true,//是否折叠
                children:[
                    {title:"训练指令",path:"/exp/training_order"},
                    {title:"想法",path:"/exp/idea"}
                ]// 仅以 / 开头，不写 .md 后缀，默认读取文件夹下对应的 markdown 文件
                },
            {
                title: "论文",
                path: "/paper/",// / 结尾的路径将会被视为 */README.md，
                collapsable: true,//是否折叠
                children:[
                    {title:"阅读的相关文章",path:"/paper/paper"},
                    {title:"文章的撰写",path:"/paper/paper_writing"}
                ]// 仅以 / 开头，不写 .md 后缀，默认读取文件夹下对应的 markdown 文件
                },
            {
                title: "prepare4work",
                path: "/prepare4work/pre4work",// / 结尾的路径将会被视为 */README.md，
                },
            {
                title: "阅读",
                path: "/reading/insights",// / 结尾的路径将会被视为 */README.md，
                },

        ],
                

        
    }
}