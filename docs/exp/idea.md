- 实验1

  根据单模态一致性的emotion进行过滤得到的valence的distance均值会更加小，这种一致性是基于是否与文本模态一致进行判别的。

  > - 需要考虑的是生成的标签是否存在长尾
  >
  > - 准确率指标是难以再有提升的了

- 想法2

  直接用文本模态的预测引导音频和视觉

  > 每个样本级别的损失，100个
  >
  > 统计结果，有67%的样本，文本好于语音；有75%的样本，文本好于视觉
  
  

- 想法3

  之前模态不平衡的问题是不是因为过拟合方面的原因？

  > mosei数据集，过拟合文本模态
  >
  > mosi数据集，过拟合语音模态
  >

- 想法4
  $$
  Score_{m} = full_{acc} - remove(m)_{acc}
  $$

- 想法5

  数据增强，对增强后的数据(称为restricted view)进行与single modality feature的累加进行distill

- distill

  模型有没有学到交互信息？怎么定义是否学到交互信息？有的话需要保留特质信息吗

- 想法6

  过拟合就不要再训练了

- inconsistency

  self-mm,label,提取出不一致的/人工筛选，然后做实验，英语数据集上不一致的似乎还没有

  不一致问题本质上可不可以通过贡献来衡量

- modality noise/missing

  - video:blank screen,gaussian-blur
  - audio:mute,noise white/metro/office/park/diner
  - text:replace,remove

  