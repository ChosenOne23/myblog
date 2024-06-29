"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[983],{6262:(s,a)=>{a.A=(s,a)=>{const t=s.__vccOpts||s;for(const[s,l]of a)t[s]=l;return t}},3980:(s,a,t)=>{t.r(a),t.d(a,{comp:()=>d,data:()=>y});var l=t(641);const e=t.p+"assets/img/image-20240320140335166.c43c7d7e.png",n=t.p+"assets/img/image-20240320134318989.0388bc97.png",m=t.p+"assets/img/image-20240311144051942.281e140b.png",i=t.p+"assets/img/image-20240311150509143.2bba9701.png",r=t.p+"assets/img/image-20240314174857894.9c52b0dd.png",o=(0,l.Fv)('<h1 id="阅读的相关论文" tabindex="-1"><a class="header-anchor" href="#阅读的相关论文"><span>阅读的相关论文</span></a></h1><h3 id="a-facial-expression-aware-multimodal-multi-task-learning-framework-for-emotion-recognition-in-multi-party-conversations" tabindex="-1"><a class="header-anchor" href="#a-facial-expression-aware-multimodal-multi-task-learning-framework-for-emotion-recognition-in-multi-party-conversations"><span>A Facial Expression-Aware Multimodal Multi-task Learning Framework for Emotion Recognition in Multi-party Conversations</span></a></h3><hr><p>​ 一段视频输入talknet得到可能的说话人的帧序列（有可能是错误的，因此需要后续的匹配操作），将这些帧序列进行聚类，由于meld数据集包含6个不同的说话人，因此，预先从数据集中得到每个人20张不同角度的人脸图片，针对聚类完成得到可能说话人的帧序列，经由resnet-50(pretrained on face recongnition dataset)提取对应的特征，计算相似度得到最终的结果</p><p><img src="'+e+'" alt="image-20240320140335166" style="zoom:50%;"><img src="'+n+'" alt="image-20240320134318989" style="zoom:50%;"></p><h3 id="emt-dlfr" tabindex="-1"><a class="header-anchor" href="#emt-dlfr"><span>EMT_DLFR</span></a></h3><hr><p>前向两次，分别得到完整模态，缺失模态的结果</p><p>在不同epoch下的同一样本，缺失的time step是一样的。而cutoff则是不一样的。能否在训练时人为构造更多的缺失样本，一方面可以避免过拟合，一方面模拟更多真实世界的缺失模态情况</p><p>跨层参数共享，global2local的attention,将注意力的计算降低至线性复杂度</p><h3 id="robust-msa" tabindex="-1"><a class="header-anchor" href="#robust-msa"><span>Robust-MSA</span></a></h3><hr><p>端到端的方式；情感词的识别与replace；asr error；语音的背景噪声（人声分离？）；图像中人脸角度，不同光照，人脸缺失，运动模糊</p><h3 id="niat" tabindex="-1"><a class="header-anchor" href="#niat"><span>NIAT</span></a></h3><hr><p>三种模态在对齐的情况下，设置了三种不一样的缺失情况：三种模态缺失的位置均不一致（随机位置缺失）；三种模态缺失的位置一致（连续片段缺失，随机位置缺失）</p><h3 id="unimf" tabindex="-1"><a class="header-anchor" href="#unimf"><span>UniMF</span></a></h3><hr><p>提出不同的mask机制，解决未对齐序列缺失模态的问题</p><p>图中橘色部分有：</p>',20),p=(0,l.Lk)("p",{class:"katex-block"},[(0,l.Lk)("span",{class:"katex-display"},[(0,l.Lk)("span",{class:"katex"},[(0,l.Lk)("span",{class:"katex-mathml"},[(0,l.Lk)("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[(0,l.Lk)("semantics",null,[(0,l.Lk)("mrow",null,[(0,l.Lk)("msub",null,[(0,l.Lk)("mi",null,"Y"),(0,l.Lk)("mrow",null,[(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]")])]),(0,l.Lk)("mo",null,"="),(0,l.Lk)("mi",null,"C"),(0,l.Lk)("msub",null,[(0,l.Lk)("mi",null,"A"),(0,l.Lk)("mrow",null,[(0,l.Lk)("mi",null,"L"),(0,l.Lk)("mo",null,"−"),(0,l.Lk)("mo",null,">"),(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]")])]),(0,l.Lk)("mo",{stretchy:"false"},"("),(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]"),(0,l.Lk)("mo",{separator:"true"},","),(0,l.Lk)("msub",null,[(0,l.Lk)("mi",null,"Z"),(0,l.Lk)("mi",null,"L")]),(0,l.Lk)("mo",{stretchy:"false"},")"),(0,l.Lk)("mo",null,"+"),(0,l.Lk)("mi",null,"C"),(0,l.Lk)("msub",null,[(0,l.Lk)("mi",null,"A"),(0,l.Lk)("mrow",null,[(0,l.Lk)("mi",null,"A"),(0,l.Lk)("mo",null,"−"),(0,l.Lk)("mo",null,">"),(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]")])]),(0,l.Lk)("mo",{stretchy:"false"},"("),(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]"),(0,l.Lk)("mo",{separator:"true"},","),(0,l.Lk)("msub",null,[(0,l.Lk)("mi",null,"Z"),(0,l.Lk)("mi",null,"A")]),(0,l.Lk)("mo",{stretchy:"false"},")"),(0,l.Lk)("mo",null,"+"),(0,l.Lk)("mi",null,"S"),(0,l.Lk)("mi",null,"A"),(0,l.Lk)("mo",{stretchy:"false"},"("),(0,l.Lk)("mo",{stretchy:"false"},"["),(0,l.Lk)("mi",null,"m"),(0,l.Lk)("mi",null,"u"),(0,l.Lk)("mi",null,"l"),(0,l.Lk)("mi",null,"t"),(0,l.Lk)("mi",null,"i"),(0,l.Lk)("mo",{stretchy:"false"},"]"),(0,l.Lk)("mo",{stretchy:"false"},")")]),(0,l.Lk)("annotation",{encoding:"application/x-tex"}," Y_{[multi]} = CA_{L->[multi]}([multi],Z_{L})+CA_{A->[multi]}([multi],Z_{A})+SA([multi]) ")])])]),(0,l.Lk)("span",{class:"katex-html","aria-hidden":"true"},[(0,l.Lk)("span",{class:"base"},[(0,l.Lk)("span",{class:"strut",style:{height:"1.0385em","vertical-align":"-0.3552em"}}),(0,l.Lk)("span",{class:"mord"},[(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),(0,l.Lk)("span",{class:"msupsub"},[(0,l.Lk)("span",{class:"vlist-t vlist-t2"},[(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3448em"}},[(0,l.Lk)("span",{style:{top:"-2.5198em","margin-left":"-0.2222em","margin-right":"0.05em"}},[(0,l.Lk)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l.Lk)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l.Lk)("span",{class:"mord mtight"},[(0,l.Lk)("span",{class:"mopen mtight"},"["),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"m"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"u"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"i"),(0,l.Lk)("span",{class:"mclose mtight"},"]")])])])]),(0,l.Lk)("span",{class:"vlist-s"},"​")]),(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3552em"}},[(0,l.Lk)("span")])])])])]),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,l.Lk)("span",{class:"mrel"},"="),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,l.Lk)("span",{class:"base"},[(0,l.Lk)("span",{class:"strut",style:{height:"1.1052em","vertical-align":"-0.3552em"}}),(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),(0,l.Lk)("span",{class:"mord"},[(0,l.Lk)("span",{class:"mord mathnormal"},"A"),(0,l.Lk)("span",{class:"msupsub"},[(0,l.Lk)("span",{class:"vlist-t vlist-t2"},[(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3448em"}},[(0,l.Lk)("span",{style:{top:"-2.5198em","margin-left":"0em","margin-right":"0.05em"}},[(0,l.Lk)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l.Lk)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l.Lk)("span",{class:"mord mtight"},[(0,l.Lk)("span",{class:"mord mathnormal mtight"},"L"),(0,l.Lk)("span",{class:"mord mtight"},"−"),(0,l.Lk)("span",{class:"mrel mtight"},">"),(0,l.Lk)("span",{class:"mopen mtight"},"["),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"m"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"u"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"i"),(0,l.Lk)("span",{class:"mclose mtight"},"]")])])])]),(0,l.Lk)("span",{class:"vlist-s"},"​")]),(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3552em"}},[(0,l.Lk)("span")])])])])]),(0,l.Lk)("span",{class:"mopen"},"(["),(0,l.Lk)("span",{class:"mord mathnormal"},"m"),(0,l.Lk)("span",{class:"mord mathnormal"},"u"),(0,l.Lk)("span",{class:"mord mathnormal"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal"},"i"),(0,l.Lk)("span",{class:"mclose"},"]"),(0,l.Lk)("span",{class:"mpunct"},","),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),(0,l.Lk)("span",{class:"mord"},[(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),(0,l.Lk)("span",{class:"msupsub"},[(0,l.Lk)("span",{class:"vlist-t vlist-t2"},[(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3283em"}},[(0,l.Lk)("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[(0,l.Lk)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l.Lk)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l.Lk)("span",{class:"mord mtight"},[(0,l.Lk)("span",{class:"mord mathnormal mtight"},"L")])])])]),(0,l.Lk)("span",{class:"vlist-s"},"​")]),(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.15em"}},[(0,l.Lk)("span")])])])])]),(0,l.Lk)("span",{class:"mclose"},")"),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l.Lk)("span",{class:"mbin"},"+"),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l.Lk)("span",{class:"base"},[(0,l.Lk)("span",{class:"strut",style:{height:"1.1052em","vertical-align":"-0.3552em"}}),(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),(0,l.Lk)("span",{class:"mord"},[(0,l.Lk)("span",{class:"mord mathnormal"},"A"),(0,l.Lk)("span",{class:"msupsub"},[(0,l.Lk)("span",{class:"vlist-t vlist-t2"},[(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3448em"}},[(0,l.Lk)("span",{style:{top:"-2.5198em","margin-left":"0em","margin-right":"0.05em"}},[(0,l.Lk)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l.Lk)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l.Lk)("span",{class:"mord mtight"},[(0,l.Lk)("span",{class:"mord mathnormal mtight"},"A"),(0,l.Lk)("span",{class:"mord mtight"},"−"),(0,l.Lk)("span",{class:"mrel mtight"},">"),(0,l.Lk)("span",{class:"mopen mtight"},"["),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"m"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"u"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal mtight"},"i"),(0,l.Lk)("span",{class:"mclose mtight"},"]")])])])]),(0,l.Lk)("span",{class:"vlist-s"},"​")]),(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3552em"}},[(0,l.Lk)("span")])])])])]),(0,l.Lk)("span",{class:"mopen"},"(["),(0,l.Lk)("span",{class:"mord mathnormal"},"m"),(0,l.Lk)("span",{class:"mord mathnormal"},"u"),(0,l.Lk)("span",{class:"mord mathnormal"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal"},"i"),(0,l.Lk)("span",{class:"mclose"},"]"),(0,l.Lk)("span",{class:"mpunct"},","),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),(0,l.Lk)("span",{class:"mord"},[(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),(0,l.Lk)("span",{class:"msupsub"},[(0,l.Lk)("span",{class:"vlist-t vlist-t2"},[(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.3283em"}},[(0,l.Lk)("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[(0,l.Lk)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l.Lk)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l.Lk)("span",{class:"mord mtight"},[(0,l.Lk)("span",{class:"mord mathnormal mtight"},"A")])])])]),(0,l.Lk)("span",{class:"vlist-s"},"​")]),(0,l.Lk)("span",{class:"vlist-r"},[(0,l.Lk)("span",{class:"vlist",style:{height:"0.15em"}},[(0,l.Lk)("span")])])])])]),(0,l.Lk)("span",{class:"mclose"},")"),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l.Lk)("span",{class:"mbin"},"+"),(0,l.Lk)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l.Lk)("span",{class:"base"},[(0,l.Lk)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l.Lk)("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),(0,l.Lk)("span",{class:"mord mathnormal"},"A"),(0,l.Lk)("span",{class:"mopen"},"(["),(0,l.Lk)("span",{class:"mord mathnormal"},"m"),(0,l.Lk)("span",{class:"mord mathnormal"},"u"),(0,l.Lk)("span",{class:"mord mathnormal"},"lt"),(0,l.Lk)("span",{class:"mord mathnormal"},"i"),(0,l.Lk)("span",{class:"mclose"},"])")])])])])],-1),c=(0,l.Fv)('<p><img src="'+m+'" alt="image-20240311144051942"></p><blockquote><p>构造两种不同的mask,一种学习模态内部的交互，一种学习模态间的交互。并采用balence策略</p></blockquote><p><img src="'+i+'" alt="image-20240311150509143"></p><h3 id="半监督的paper" tabindex="-1"><a class="header-anchor" href="#半监督的paper"><span>半监督的paper</span></a></h3><hr><p>​ 第一篇，关键是balence所生成的样本类别数目，作者对每一类选取top-k置信度的样本，保证了重新训练时样本数量的平衡</p><ul><li><p>门控机制</p><img src="'+r+'" alt="image-20240314174857894" style="zoom:50%;"></li></ul><h3 id="my-paper" tabindex="-1"><a class="header-anchor" href="#my-paper"><span>my paper</span></a></h3><hr><p>单一视角（intra） vs 多视角（inter）</p><p>有的时候，我们仅仅通过单一一种模态，便能做出很好的感情推断，无需其他模态的帮助：</p><blockquote><p>only inf from text:</p><ol><li>a lot of sad parts</li><li>there is sad part</li></ol></blockquote><p>但有时我们需要借助其他模态的帮助(交互信息)从而准确判断主体的情感：</p><blockquote><p>inf from text and visual:</p><p>netural text: AND THERE BUT THEYRE NOT HUGE GLARING FLAWS</p><p>negative video: frown</p><p><video src="C:\\Users\\LinJinhao\\Desktop\\2WGyTLYerpo_49.mp4"></video></p></blockquote><h3 id="meta-noise" tabindex="-1"><a class="header-anchor" href="#meta-noise"><span>meta_noise</span></a></h3><blockquote><p>元学习相关资料：https://zhuanlan.zhihu.com/p/72920138，https://zhuanlan.zhihu.com/p/57864886</p></blockquote><h3 id="mask-autoencoder" tabindex="-1"><a class="header-anchor" href="#mask-autoencoder"><span>mask autoencoder</span></a></h3><blockquote><p>https://zhuanlan.zhihu.com/p/439554945</p></blockquote>',18),k={href:"https://blog.csdn.net/qq_43631827/article/details/124987612",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/70257427",target:"_blank",rel:"noopener noreferrer"},L=(0,l.Lk)("li",null,[(0,l.Lk)("p",null,"top-k准确率的计算"),(0,l.Lk)("blockquote",null,[(0,l.Lk)("p",null,"https://zhuanlan.zhihu.com/p/340760336")])],-1),u=(0,l.Lk)("li",null,[(0,l.Lk)("p",null,"项目使用的分类代码"),(0,l.Lk)("blockquote",null,[(0,l.Lk)("p",null,"https://github.com/bubbliiiing/classification-pytorch")])],-1),g={},d=(0,t(6262).A)(g,[["render",function(s,a){const t=(0,l.g2)("ExternalLinkIcon");return(0,l.uX)(),(0,l.CE)("div",null,[o,p,c,(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[(0,l.Lk)("p",null,[(0,l.Lk)("a",k,[(0,l.eW)("离线数据增强与在线数据增强"),(0,l.bF)(t)])])]),(0,l.Lk)("li",null,[(0,l.Lk)("p",null,[(0,l.Lk)("a",h,[(0,l.eW)("xlnet"),(0,l.bF)(t)])])]),L,u])])}]]),y=JSON.parse('{"path":"/posts/paper/paper_reading.html","title":"阅读的相关论文","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-04-12T00:00:00.000Z","category":["paper","paperreading"],"tag":["paper"],"description":"阅读的相关论文 A Facial Expression-Aware Multimodal Multi-task Learning Framework for Emotion Recognition in Multi-party Conversations ​ 一段视频输入talknet得到可能的说话人的帧序列（有可能是错误的，因此需要后续的匹配操作），...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myblog/posts/paper/paper_reading.html"}],["meta",{"property":"og:site_name","content":"Ljh\'s Blog"}],["meta",{"property":"og:title","content":"阅读的相关论文"}],["meta",{"property":"og:description","content":"阅读的相关论文 A Facial Expression-Aware Multimodal Multi-task Learning Framework for Emotion Recognition in Multi-party Conversations ​ 一段视频输入talknet得到可能的说话人的帧序列（有可能是错误的，因此需要后续的匹配操作），..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T07:54:44.000Z"}],["meta",{"property":"article:author","content":"Jinhao Lin"}],["meta",{"property":"article:tag","content":"paper"}],["meta",{"property":"article:published_time","content":"2024-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T07:54:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阅读的相关论文\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T07:54:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jinhao Lin\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"A Facial Expression-Aware Multimodal Multi-task Learning Framework for Emotion Recognition in Multi-party Conversations","slug":"a-facial-expression-aware-multimodal-multi-task-learning-framework-for-emotion-recognition-in-multi-party-conversations","link":"#a-facial-expression-aware-multimodal-multi-task-learning-framework-for-emotion-recognition-in-multi-party-conversations","children":[]},{"level":3,"title":"EMT_DLFR","slug":"emt-dlfr","link":"#emt-dlfr","children":[]},{"level":3,"title":"Robust-MSA","slug":"robust-msa","link":"#robust-msa","children":[]},{"level":3,"title":"NIAT","slug":"niat","link":"#niat","children":[]},{"level":3,"title":"UniMF","slug":"unimf","link":"#unimf","children":[]},{"level":3,"title":"半监督的paper","slug":"半监督的paper","link":"#半监督的paper","children":[]},{"level":3,"title":"my paper","slug":"my-paper","link":"#my-paper","children":[]},{"level":3,"title":"meta_noise","slug":"meta-noise","link":"#meta-noise","children":[]},{"level":3,"title":"mask autoencoder","slug":"mask-autoencoder","link":"#mask-autoencoder","children":[]}],"git":{"createdTime":1714982084000,"updatedTime":1714982084000,"contributors":[{"name":"ChosenOne23","email":"652994621@qq.com","commits":1}]},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"posts/paper/paper_reading.md","localizedDate":"2024年4月12日","excerpt":"\\n<h3>A Facial Expression-Aware Multimodal Multi-task Learning Framework for Emotion Recognition in Multi-party Conversations</h3>\\n<hr>\\n<p>​\\t一段视频输入talknet得到可能的说话人的帧序列（有可能是错误的，因此需要后续的匹配操作），将这些帧序列进行聚类，由于meld数据集包含6个不同的说话人，因此，预先从数据集中得到每个人20张不同角度的人脸图片，针对聚类完成得到可能说话人的帧序列，经由resnet-50(pretrained on face recongnition dataset)提取对应的特征，计算相似度得到最终的结果</p>","autoDesc":true}')}}]);