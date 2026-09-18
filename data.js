// ============================================================
// 翻译数据 · 按考期整理
// 用法：在页面中引入本文件，通过 exam.session 获取对应翻译
// ============================================================

const translationsMap = {
  '2013年10月': {
    'After living in Europe for seven years, my parents decided that my family would move to the United States.': '在欧洲生活了七年后，我父母决定全家搬到美国。',
    'We all looked forward to this.': '我们都盼望着这一刻。',
    'What would people think of us?': '人们会怎么看我们呢？',
    'For me, I hoped to be the hero of the class.': '对我来说，我希望成为班里的英雄。',
    'I was not disappointed.': '我没有失望。',
    'All my classmates admired my experience, and I quickly became well known as "the French guy."': '所有同学都羡慕我的经历，我很快以“那个法国人”而闻名。',
    'I was very popular for a time.': '我一度很受欢迎。',
    'However, I was not interested in many things my classmates did, and it was hard for me to connect with them.': '然而，我对同学们做的许多事情不感兴趣，很难与他们打成一片。',
    'I enjoyed listening to classical music, never watched TV, and almost never watched movies.': '我喜欢听古典音乐，从不看电视，也几乎不看电影。',
    'I did not have a common background with my friends because I grew up in Europe.': '我和朋友们没有共同的背景，因为我在欧洲长大。',
    'I had few friends, and fewer good friends.': '我朋友很少，好朋友更少。',
    'When I look back now, I realize I was a bit of an idiot to many people around me.': '现在回想起来，我意识到对周围很多人来说我有点像个白痴。',
    'I kept talking proudly about my experience.': '我总是不停地骄傲地谈论自己的经历。',
    'And I thought myself better than those around me because I lived in Europe but they didn\'t.': '并且我认为自己比周围人优越，因为我住过欧洲而他们没有。',
    'I had decided I wanted better friends when my parents said that we were going to move again!': '我决心要交更好的朋友，这时父母说我们又要搬家了！',
    'I saw this as a perfect chance to get better friends, where people did not know of my unkind past.': '我把这看作一个获得更好朋友的绝佳机会，那里没人知道我过去的不友善。',
    'When we moved to California, I did not show off as I had done for five years.': '我们搬到加州后，我不再像过去五年那样炫耀。',
    'I did not tell everyone that I lived in Europe.': '我没有告诉每个人我住过欧洲。',
    'I still listened to classical music, but I just kept my music to myself.': '我仍然听古典音乐，但只是自己听。',
    'Sure enough, I found that people like someone who is not typical but does not boast about it.': '果然，我发现人们喜欢那些不寻常但不炫耀的人。',
    'Nothing can replace good friends, and if I had to control my temper and pride, it was well worth it.': '没有什么能取代好朋友，如果我必须控制自己的脾气和骄傲，那也非常值得。'
  },
  // ... 其他25个考期的翻译，按同样格式补充
  // 你可以按照 data.js 中的文章段落，逐句翻译填入
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translationsMap };
}