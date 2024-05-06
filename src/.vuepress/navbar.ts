import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "网站配置",
    link: "/demo/"
  },
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "技术",
  //       icon: "pen-to-square",
  //       prefix: "tec/",
  //       children: [
  //         { text: "linux", icon: "pen-to-square", link: "linux" },
  //         { text: "frontend", icon: "pen-to-square", link: "vue" },
  //         { text: "typora", icon: "pen-to-square", link: "grammar" },
  //         // "3",
  //         // "4",
  //       ],
  //     },
  //     {
  //       text: "阅读",
  //       icon: "pen-to-square",
  //       prefix: "reading/",
  //       children: [
  //         {
  //           text: "阅读",
  //           icon: "pen-to-square",
  //           link: "insights",
  //         },
  //       ],
  //     },
  
  //   ],
  // },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
