export type PersonalityId = 'rose' | 'ice' | 'sun' | 'moon' | 'guard' | 'bird';

export interface QuizOption {
  text: string;
  type: PersonalityId;
}

export interface QuizQuestion {
  id: number;
  text: string;
 options: QuizOption[];
}

export interface Personality {
  id: PersonalityId;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  textGradient: string;
  praise: string[];
  roast: string[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: '第一次约会你会穿什么？',
    options: [
      { text: '精心搭配，连袜子颜色都要和整体呼应', type: 'rose' },
      { text: '研究了对方社交平台的穿搭风格后再决定', type: 'ice' },
      { text: '两人一起做饭，窝在沙发上看部电影', type: 'guard' },
      { text: '全黑系，但会喷一款很特别的小众香水', type: 'moon' },
    ],
  },
  {
    id: 2,
    text: '对方三小时没回消息，你会？',
    options: [
      { text: '内心已经演完了一部80集连续剧', type: 'rose' },
      { text: '建立消息回复时间数据模型进行分析', type: 'ice' },
      { text: '连发20条消息 + 表情包轰炸', type: 'sun' },
      { text: '"哦没回就算了" 然后去做自己的事', type: 'bird' },
    ],
  },
  {
    id: 3,
    text: '理想中的约会场景是？',
    options: [
      { text: '烛光晚餐后在海边看星星', type: 'rose' },
      { text: '一起做饭，窝在沙发上看电影', type: 'guard' },
      { text: '临时决定的公路旅行，目的地不重要', type: 'bird' },
      { text: '两人安静地泡一家隐藏的咖啡馆', type: 'moon' },
    ],
  },
  {
    id: 4,
    text: '对方说"我需要一些个人空间"，你的反应是？',
    options: [
      { text: '"好的，我一直在你身边，需要我就叫我"', type: 'guard' },
      { text: '直接冲过去抱住对方说"我不允许！"', type: 'sun' },
      { text: '"好嘞！我也正好想和朋友出去玩！"', type: 'bird' },
      { text: '表面无所谓，其实会偷偷刷对方朋友圈', type: 'moon' },
    ],
  },
  {
    id: 5,
    text: '你觉得恋爱中最重要的品质是？',
    options: [
      { text: '热情和浪漫 —— 永远保持心动', type: 'sun' },
      { text: '理智和沟通 —— 有问题就解决问题', type: 'ice' },
      { text: '忠诚和守护 —— 我会永远保护你', type: 'guard' },
      { text: '自由和信任 —— 给彼此成长的空间', type: 'bird' },
    ],
  },
  {
    id: 6,
    text: '如果这段感情结束了，你会？',
    options: [
      { text: '用一个月写一封很长的告别信，然后删掉不寄', type: 'rose' },
      { text: '做个复盘PPT，分析这段关系的问题', type: 'ice' },
      { text: '大哭一场，第二天精神抖擞地出门', type: 'sun' },
      { text: '默默开启新生活，不删不聊不回头', type: 'moon' },
    ],
  },
];

export const personalities: Record<PersonalityId, Personality> = {
  rose: {
    id: 'rose',
    name: '玫瑰骑士',
    emoji: '🌹',
    subtitle: '浪漫主义的终极信徒',
    description:
      '你相信爱情应该像电影一样——有配乐，有慢镜头，有雨中奔跑。你的恋爱信条是：如果不够浪漫，那就不叫恋爱。',
    color: '#f43f5e',
    bgGradient: 'from-rose-500/20 via-pink-500/10 to-fuchsia-500/20',
    textGradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    praise: [
      '你是这个越来越快餐化的时代里，最后一个还相信「一生一世一双人」的傻瓜——但也是最可爱的那种。',
      '你谈恋爱的方式就像在拍电影——每一帧都精心构图，每句台词都反复推敲。别人觉得累，但你觉得值得。',
      '你的浪漫不是花里胡哨的仪式感，而是「我记得你上次随口提过喜欢这个」的细水长流。这才是最高级的浪漫。',
      '别人谈恋爱靠技巧，你谈恋爱靠真心。老天爷一定给了你一颗比别人大两号的心。',
    ],
    roast: [
      '你把每段恋爱都当成《泰坦尼克号》来演，问题是——你既不是Rose也不是Jack，你是那个坐在船上等船来的人。',
      '你的恋爱脑已经进化到了第四形态：不仅能给自己加戏，还能给对方加。一个「晚安」你都能脑补出一整集韩剧。',
      '人家说「我今天有点累」，你的脑内剧场已经演到「ta是不是不爱我了，要不要分手」了。别否认，你就是这样。',
      '你的备胎名单比你的减肥计划还长，而且都一样——从未执行。下次别光写计划了，行动起来好吗？',
    ],
  },
  ice: {
    id: 'ice',
    name: '冰山分析家',
    emoji: '🧊',
    subtitle: '用 Excel 谈恋爱的狠人',
    description:
      '你以为你在谈恋爱，其实你在做项目管理。每段感情都是一个需要优化的系统，而你就是那个永远在调参的工程师。',
    color: '#06b6d4',
    bgGradient: 'from-cyan-500/20 via-sky-500/10 to-teal-500/20',
    textGradient: 'from-cyan-500 via-sky-400 to-teal-400',
    praise: [
      '在所有人都在感性的漩涡里越陷越深时，你是那个冷静地建造桥梁的人。别人需要你来拨开迷雾。',
      '你以为自己不够浪漫？不，你的浪漫是「我分析了你所有的习惯，所以每次约会都能让你感到被深深理解」。',
      '你处理感情问题的逻辑能力简直是恋爱界的莫比乌斯环——在看似无解的死循环中找到了最优解。',
      '你的理性不是冷漠，而是一种更高级的温柔：在你身边，永远不需要猜。你用行动证明——爱可以很清醒。',
    ],
    roast: [
      '你大概有一份名为「恋爱 KPI 追踪表」的 Excel，里面记录了对方的回复速度、主动次数和情绪波动曲线。',
      '约会时你脑子里在跑回归分析：「ta笑了三次，看了手机两次，这个笑容的真诚度大约在 78.5%。」',
      '别人收到情书会感动，你收到情书会开始做文本分析——情感词汇占比、句式复杂度、是否使用排比句式。',
      '你最大的浪漫就是把「我有点想你」翻译成了「基于近期多巴胺水平波动，我判断对你的依恋指数上升了 15%」。',
    ],
  },
  sun: {
    id: 'sun',
    name: '阳光金毛',
    emoji: '☀️',
    subtitle: '人间行走的充电宝',
    description:
      '你的热情能融化北极的冰。你是那种走进任何房间都能让气氛升温三度的人，谈恋爱更是全身心投入。',
    color: '#f97316',
    bgGradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
    textGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    praise: [
      '你的热情是真正的超能力——走进任何房间都能让空气温度上升三度。你就是人群中的小太阳。',
      '在你身边谈恋爱就像坐过山车——永远充满惊喜，永远热泪盈眶，永远不会觉得无聊。',
      '你把「爱」这个字活成了动词：爱是行动，爱是陪伴，爱是下雨天冲出去给对方送伞。你不只是说说而已。',
      '你证明了「恋爱脑」不一定是贬义词——你只是比别人更勇敢地去爱而已。这份勇气，很多人一辈子都没有。',
    ],
    roast: [
      '你的恋爱热情大概能点亮一整个小区的路灯，问题是你不挑对象——路过的流浪猫你也想谈一段。',
      '你的表白方式基本等于「你看看我！选我选我选我！」——像极了宠物展上疯狂求收养的金毛。',
      '别人吵架冷战三天，你冷战三分钟就受不了了，然后主动发了条 500 字小作文道歉——明明不是你的错。',
      '你把每段感情都投入了 120% 的热情，然后发现对方只投入了 20%，剩下的 80% 你分给了火锅和追剧。',
    ],
  },
  moon: {
    id: 'moon',
    name: '月影猫咪',
    emoji: '🌙',
    subtitle: '看起来高冷其实很软的矛盾体',
    description:
      '你的感情状态永远是个谜。外表高冷神秘，内心戏比谁都丰富。你以为你在装酷，其实你只是社恐。',
    color: '#a855f7',
    bgGradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
    textGradient: 'from-purple-500 via-violet-400 to-fuchsia-400',
    praise: [
      '你的神秘感不是装出来的，而是一种天然的魅力——让人忍不住想靠近，又不敢太靠近。这就是你的魔力。',
      '你的爱很珍贵，因为你不会轻易给出去。但一旦给了，就是那种最深、最沉、最让人安心的爱。',
      '你教会身边的人一件事：爱不一定要轰轰烈烈，两个灵魂安静地待在一起什么都不说，就是最好的约会。',
      '你嘴上说「随便」，心里其实在想「我希望你能懂我」。这种笨拙的温柔，恰恰最打动人。',
    ],
    roast: [
      '你的感情状态永远是薛定谔的恋爱——不打开盒子你永远不知道自己到底在不在谈恋爱。',
      '别人暧昧期的聊天记录有 500 条，你的暧昧期就像在玩「你画我猜」——全是暗示，没一句明话。',
      '你的择偶标准大概写了一份 200 页的需求文档，最后一页写着「但如果是真心的，以上全部作废」。',
      '你最大的问题不是没人追，而是有人追你会在心里想「ta到底有什么目的」然后开始反向推理。你是在谈恋爱还是在破案？',
    ],
  },
  guard: {
    id: 'guard',
    name: '骑士守护者',
    emoji: '🛡️',
    subtitle: '为爱冲锋的老母亲型选手',
    description:
      '你是那种「外面风雨再大，回到我身边就是晴天」的存在。你的爱不是甜言蜜语，而是实打实的行动。',
    color: '#22c55e',
    bgGradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
    textGradient: 'from-green-500 via-emerald-400 to-teal-400',
    praise: [
      '你是那种「外面风雨再大，回到我身边就是晴天」的存在。被人爱着的你爱的人，是这个世界上最幸运的人。',
      '你的爱是行动派的典范：不是说说而已，而是「你冷了我就脱外套给你」「你饿了我就去做饭」。这种爱，太珍贵了。',
      '在这个人人都想被宠的时代，你选择了成为那个宠别人的人——这份担当，比任何甜言蜜语都珍贵一百倍。',
      '你让另一半感受到的，不是「ta很好」，而是「和ta在一起，我很安全」。你知道吗？这是恋爱中最高级的浪漫。',
    ],
    roast: [
      '你谈的不是恋爱，是做慈善——专门资助「感情不顺利人类」。你的男朋友/女朋友在你的照顾下活得像个巨婴。',
      '你的恋爱模式基本就是「捡到一只流浪猫 → 精心喂养 → 猫跑了 → 再捡一只」。循环往复，永不停歇。',
      '你最大的问题就是把对方当儿子/女儿养，然后困惑「为什么ta对我没有那种心动的感觉」——因为你是妈，不是对象啊！',
      '别人的分手理由是「我们不合适」，你的分手理由是「我终于意识到我不是你亲妈」。醒醒吧，谈恋爱不是做慈善！',
    ],
  },
  bird: {
    id: 'bird',
    name: '自由飞鸟',
    emoji: '🦅',
    subtitle: '爱情里的酷盖/酷妹',
    description:
      '你活出了很多人想要但不敢要的状态——在感情中保持完整的自我。你不需要爱情来定义自己，但你选择爱情来丰富自己。',
    color: '#eab308',
    bgGradient: 'from-yellow-500/20 via-amber-500/10 to-orange-500/20',
    textGradient: 'from-yellow-500 via-amber-500 to-orange-500',
    praise: [
      '你活出了很多人想要但不敢要的状态——在感情中保持完整的自我。这份清醒和独立，真的很有魅力。',
      '你的独立不是不想恋爱，而是「我可以一个人过得很好，但如果和你在一起能更好，那我才要」。这标准，够高。',
      '你教会身边的人：最好的爱情不是互相依赖，而是两棵树并肩站立——根在地下交错，叶在云端相触。',
      '你让这个世界相信：真的有人可以在爱情中既深情又自由。不是所有人都能做到的，但你做到了。',
    ],
    roast: [
      '你的恋爱信条大概是「可以爱我，但不要粘我」，然后你发现不粘你的人都去粘别人了。这就是你的报应。',
      '别人谈恋爱是两个人的故事，你谈恋爱是「第一章：相遇；第二章：我需要空间；第三章：我们做朋友吧」。三集就完结。',
      '你的前任们大概能组一个「被自由放养协会」，定期聚会吐槽你的「突然消失术」和「已读不回技能」。',
      '你嘴上说着「我很好不需要爱情」，深夜两点偷偷刷恋爱帖子的手速比谁都快。别装了，你比谁都渴望被爱。',
    ],
  },
};

export function calculatePersonality(answers: PersonalityId[]): Personality {
  const counts: Record<PersonalityId, number> = {
    rose: 0,
    ice: 0,
    sun: 0,
    moon: 0,
    guard: 0,
    bird: 0,
  };

  answers.forEach((type) => {
    counts[type]++;
  });

  let maxCount = 0;
  let result: PersonalityId = 'rose';

  (Object.keys(counts) as PersonalityId[]).forEach((key) => {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      result = key;
    }
  });

  return personalities[result];
}
