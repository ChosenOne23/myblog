import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "阅读",
      icon: "book",
      prefix: "posts/reading/",
      children: [
          {
            text: "语句摘抄",
            icon: "pen-to-square",
            link: "insights",
          },
        ]
    },

    {
      text: "工作",
      icon: "book",
      prefix: "posts/work/",
      children: [
          { text: "算法",
            icon: "pen-to-square",
            link: "code",
          },
          { text: "深度学习",
            icon: "pen-to-square",
            link: "deeplearning",
          },

        ]
    },

    {
      text: "论文",
      icon: "book",
      prefix: "posts/paper/",
      children: [
          { text: "论文阅读",
            icon: "pen-to-square",
            link: "paper_reading",
          },
          { text: "论文写作",
            icon: "pen-to-square",
            link: "paper_writing",
          },

        ]
    },


    {
      text: "技术",
      icon: "pen-to-square",
      prefix: "/posts/tec/",
      children: [
          
            { text: "linux", icon: "pen-to-square", link: "linux" },
            { text: "frontend", icon: "pen-to-square", link: "vue" },
            { text: "typora", icon: "pen-to-square", link: "grammar" },
        ]
    },
      
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
