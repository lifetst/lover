export type PersonalityId = 'magician' | 'bossCat' | 'monster' | 'hachiko' | 'treasure' | 'chameleon';

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
  englishName: string;
  emoji: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  textGradient: string;
  // Rich profile
  loveLanguage: string;
  strength: string;
  weakness: string;
  breakupReason: string;
  bestMatch: string;
  worstMatch: string;
  classicScenario: string;
  loveTip: string;
  redFlag: string;
  greenFlag: string;
  praise: string[];
  roast: string[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: '第一次约会，你会穿什么？',
    options: [
      { text: '精心搭配，连袜子颜色都要呼应整体色调', type: 'magician' },
      { text: '研究了对方社交平台的穿搭风格后再决定', type: 'treasure' },
      { text: '两人一起做饭，然后窝在沙发上看部电影', type: 'hachiko' },
      { text: '全黑系，但会喷一款很特别的小众香水', type: 'bossCat' },
    ],
  },
  {
    id: 2,
    text: '对方三小时没回消息，你会？',
    options: [
      { text: '内心已经演完了一部 80 集连续剧', type: 'magician' },
      { text: '建立消息回复时间数据模型进行分析', type: 'treasure' },
      { text: '连发 20 条消息 + 表情包轰炸', type: 'monster' },
      { text: '"哦没回就算了" 然后去做自己的事', type: 'chameleon' },
    ],
  },
  {
    id: 3,
    text: '理想中的约会场景是？',
    options: [
      { text: '烛光晚餐后在海边散步看星星', type: 'magician' },
      { text: '一起逛超市买食材，回家做饭', type: 'hachiko' },
      { text: '临时决定的公路旅行，去哪不重要', type: 'chameleon' },
      { text: '两人安静地泡一家隐藏的咖啡馆', type: 'bossCat' },
    ],
  },
  {
    id: 4,
    text: '对方说"我需要一些个人空间"，你的反应是？',
    options: [
      { text: '"好的，我一直在你身边，需要我就叫我"', type: 'hachiko' },
      { text: '直接冲过去抱住对方说"我不允许！"', type: 'monster' },
      { text: '"好嘞！我也正好想和朋友出去玩！"', type: 'chameleon' },
      { text: '表面无所谓，但会偷偷刷对方朋友圈', type: 'bossCat' },
    ],
  },
  {
    id: 5,
    text: '你觉得恋爱中最重要的品质是？',
    options: [
      { text: '热情和浪漫 —— 永远保持心动的感觉', type: 'monster' },
      { text: '理智和沟通 —— 有问题就解决问题', type: 'treasure' },
      { text: '忠诚和守护 —— 我会永远保护你', type: 'hachiko' },
      { text: '自由和信任 —— 给彼此成长的空间', type: 'chameleon' },
    ],
  },
  {
    id: 6,
    text: '如果这段感情结束了，你会？',
    options: [
      { text: '用一个月写一封很长的告别信，然后删掉不寄', type: 'magician' },
      { text: '做个复盘笔记，分析这段关系的问题出在哪', type: 'treasure' },
      { text: '大哭一场，第二天精神抖擞地出门', type: 'monster' },
      { text: '默默开启新生活，不删不聊不回头', type: 'bossCat' },
    ],
  },
  {
    id: 7,
    text: '情人节到了，你会怎么过？',
    options: [
      { text: '提前一个月开始策划，从餐厅到礼物到惊喜全部安排', type: 'magician' },
      { text: '"今天是什么节？" 然后打开日历确认', type: 'treasure' },
      { text: '拉着对方满城跑，一定要找到最好吃的甜品店', type: 'monster' },
      { text: '两个人待在家里，各自玩手机也很开心', type: 'chameleon' },
    ],
  },
  {
    id: 8,
    text: '你发现对方偷偷翻了你手机，你会？',
    options: [
      { text: '心里一紧但假装没看到，晚上偷偷把密码换了', type: 'bossCat' },
      { text: '严肃地和对方聊一聊，建立信任的边界', type: 'hachiko' },
      { text: '"你看吧看吧我没什么好隐瞒的！" 然后主动递过去', type: 'monster' },
      { text: '冷静分析对方的不安全感来源，然后好好谈谈', type: 'treasure' },
    ],
  },
];

export const personalities: Record<PersonalityId, Personality> = {
  magician: {
    id: 'magician',
    name: '恋爱魔法师',
    englishName: 'Love Magician',
    emoji: '🎩',
    subtitle: '浪漫主义终极信徒 · 让每段感情都像电影',
    description:
      '你相信爱情应该像电影一样有配乐、有慢镜头、有雨中奔跑。你的恋爱信条是：如果不够浪漫，那就不叫恋爱。在你眼里，平凡的日常也能被你变成童话。',
    color: '#f43f5e',
    bgGradient: 'from-rose-500/20 via-pink-500/10 to-fuchsia-500/20',
    textGradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    loveLanguage: '制造惊喜 —— 没人比你更懂"仪式感"三个字',
    strength: '你能让另一半感受到被深深珍视，每一个细节都是你爱的证明',
    weakness: '对"浪漫"的执念太深，容易忽视平淡中的真实温暖',
    breakupReason: '"你变了，不再像以前那样浪漫了" —— 当蜜月期褪去，你开始怀疑对方是不是不爱你了',
    bestMatch: '忠犬八公 🐕 —— ta 的忠诚和踏实，能接住你所有的浪漫幻想',
    worstMatch: '老板猫 🐱 —— ta 永远理解不了你为什么要在纪念日搞那么多花样',
    classicScenario: '深夜 12 点，你突然灵感爆发，瞒着对方策划了一场"第 100 天纪念日惊喜"，结果对方那天加班到凌晨 1 点',
    loveTip: '浪漫很重要，但真实更重要。试着在平凡的日子里发现爱，而不是总在创造戏剧性时刻',
    redFlag: '当你发现自己在为对方"加戏"的时候 —— 那可能只是你的剧本，不是现实',
    greenFlag: '你开始享受两个人安静待着的时光，不再觉得必须做点什么才叫"在一起"',
    praise: [
      '你是这个越来越快餐化的时代里，最后一个还相信「一生一世一双人」的傻瓜——但也是最可爱的那种。',
      '你谈恋爱的方式就像在拍电影——每一帧都精心构图，每句台词都反复推敲。别人觉得累，但你觉得值得。',
      '你的浪漫不是花里胡哨的仪式感，而是「我记得你上次随口提过喜欢这个」的细水长流。这才是最高级的浪漫。',
      '别人谈恋爱靠技巧，你谈恋爱靠真心。老天爷一定给了你一颗比别人大两号的心。',
    ],
    roast: [
      '你把每段恋爱都当成《泰坦尼克号》来演，问题是——你既不是 Rose 也不是 Jack，你是那个在甲板上等船来的人。',
      '你的恋爱脑已经进化到了第四形态：不仅能给自己加戏，还能给别人加。一个「晚安」你都能脑补出一整集韩剧。',
      '人家说「我今天有点累」，你的脑内剧场已经演到「ta 是不是不爱我了，要不要分手」了。冷静点，人家只是困了。',
      '你的备胎名单比你的减肥计划还长，而且都一样——从未执行。下次别光写计划了，行动起来好吗？',
    ],
  },
  bossCat: {
    id: 'bossCat',
    name: '老板猫',
    englishName: 'Boss Cat',
    emoji: '🐱',
    subtitle: '高冷外表下的傲娇心 · 靠近需要通行证',
    description:
      '你不需要任何人，但如果有人值得你靠近，你才会伸出手。你的感情状态永远是薛定谔的恋爱——不打开盒子你永远不知道自己到底在不在谈。看似高冷，内心其实比谁都柔软。',
    color: '#a855f7',
    bgGradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
    textGradient: 'from-purple-500 via-violet-400 to-fuchsia-400',
    loveLanguage: '独处时间 —— "我不说话不代表我不在乎，我只是更喜欢用行动表达"',
    strength: '你的爱很珍贵，因为你不会轻易给出去。但一旦给了，就是最深沉、最持久的那种',
    weakness: '太擅长伪装不在乎，让对方根本读不懂你的心意，错过太多本该在一起的时刻',
    breakupReason: '"我们好像不太合适" —— 其实是你一直在等对方看穿你的伪装，但 ta 永远没做到',
    bestMatch: '恋爱魔法师 🎩 —— ta 的热情和执着，能融化你所有的防备',
    worstMatch: '恋爱怪兽 💖 —— ta 的热情太灼热，你的猫本体会想逃',
    classicScenario: '对方问"你是不是不喜欢我了"，你说"没有啊"，然后继续低头玩手机。其实你内心在想"我都已经把备注改成爱心了你还想怎样"',
    loveTip: '偶尔主动一次不会死的。说一句"我想你了"比你想象的有力量得多',
    redFlag: '当你开始用"随便""都行""无所谓"来回答所有问题的时候 —— 你在用冷漠推开真正关心你的人',
    greenFlag: '你主动发了一条消息，内容只是一个可爱的表情包 —— 这对老板猫来说已经是最高级别的表白了',
    praise: [
      '你的神秘感不是装出来的，而是一种天然的魅力——让人忍不住想靠近，又不敢太靠近。这就是你的魔力。',
      '你嘴上说「随便」，心里其实在想「我希望你能懂我」。这种笨拙的温柔，恰恰最打动人。',
      '你教会身边的人一件事：爱不一定要轰轰烈烈，两个灵魂安静地待在一起什么都不说，就是最好的约会。',
      '你不是不会爱，你只是在等一个配得上你那份爱的人。这份标准，说明你有多珍惜自己。',
    ],
    roast: [
      '你的感情状态永远是薛定谔的恋爱——不打开盒子你永远不知道自己到底在不在谈恋爱。',
      '别人暧昧期的聊天记录有 500 条，你的暧昧期就像在玩「你画我猜」——全是暗示，没一句明话。',
      '你的择偶标准大概写了一份 200 页的需求文档，最后一页写着「但如果是真心的，以上全部作废」。',
      '你最大的问题不是没人追，而是有人追你会在心里想「ta 到底有什么目的」然后开始反向推理。你是在谈恋爱还是在破案？',
    ],
  },
  monster: {
    id: 'monster',
    name: '恋爱怪兽',
    englishName: 'Love Monster',
    emoji: '💖',
    subtitle: '人间行走的充电宝 · 爱上就失去理智',
    description:
      '你的热情能融化北极的冰。你是那种走进任何房间都能让气氛升温三度的人，一谈恋爱就会变成完全不同的生物——可爱到让人窒息的那种。你的爱是热烈的、纯粹的、毫无保留的。',
    color: '#f97316',
    bgGradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
    textGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    loveLanguage: '肢体接触和陪伴 —— "让我待在你身边就什么都好了"',
    strength: '你的热情是真正的超能力——在你身边永远不会觉得孤单，被你爱着的人是世界上最幸福的人',
    weakness: '爱得太快太满，容易让对方感到窒息，也容易在投入与失落之间反复横跳',
    breakupReason: '"你太黏了，我需要空间" —— 你把 120% 的爱砸给只准备了 50% 接收能力的对方',
    bestMatch: '隐藏宝贝 💎 —— ta 的稳定和深沉，能让你找到一个可以安静停靠的港湾',
    worstMatch: '老板猫 🐱 —— 你追 ta 越紧，ta 跑得越快，最后你累 ta 也累',
    classicScenario: '恋爱的第一天你就已经在规划两个人以后住哪、养什么狗、孩子叫什么名字了。而对方还在想"我们是不是进展太快了"',
    loveTip: '爱是两杯水互相倒，而不是一杯水倒满另一杯。留一点爱给自己，你值得被同样热情地爱回来',
    redFlag: '当你发现自己为了对方放弃了所有朋友和爱好的时候 —— 你不是在爱，你是在燃烧自己',
    greenFlag: '你开始学会独处了，而且发现一个人去咖啡厅看书的下午也很快乐',
    praise: [
      '你的热情是真正的超能力——走进任何房间都能让空气温度上升三度。你就是人群中的小太阳。',
      '你把「爱」这个字活成了动词：爱是行动，爱是陪伴，爱是下雨天冲出去给对方送伞。你不只是说说而已。',
      '你证明了「恋爱脑」不一定是贬义词——你只是比别人更勇敢地去爱而已。这份勇气，很多人一辈子都没有。',
      '在你身边谈恋爱就像坐过山车——永远充满惊喜，永远热泪盈眶，永远不会觉得无聊。',
    ],
    roast: [
      '你的恋爱热情大概能点亮一整个小区的路灯，问题是你不挑对象——路过的流浪猫你也想谈一段。',
      '你的表白方式基本等于「你看看我！选我选我选我！」——像极了宠物展上疯狂求收养的金毛。',
      '别人吵架冷战三天，你冷战三分钟就受不了了，然后发了条 500 字小作文道歉——明明不是你的错。',
      '你把每段感情都投入了 120% 的热情，然后发现对方只投入了 20%，剩下的 80% 你分给了火锅和追剧。',
    ],
  },
  hachiko: {
    id: 'hachiko',
    name: '忠犬八公',
    englishName: 'Faithful Hachiko',
    emoji: '🐕',
    subtitle: '认定了就是一辈子 · 浮躁年代最稀缺的忠诚',
    description:
      '你是那种「外面风雨再大，回到我身边就是晴天」的存在。你的爱不是甜言蜜语，而是实打实的行动。一旦认定一个人，你会用全部的耐心和温柔去守护。你的忠诚，是这浮躁年代最稀缺的品质。',
    color: '#22c55e',
    bgGradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
    textGradient: 'from-green-500 via-emerald-400 to-teal-400',
    loveLanguage: '服务型付出 —— "你冷了我就脱外套给你，你饿了我就去做饭"',
    strength: '你让另一半感受到的，不是「ta 很好」，而是「和 ta 在一起，我很安全」。这是最高级的浪漫',
    weakness: '付出太多而不求回报，容易在关系中失去自我，也容易被不懂得珍惜的人消耗',
    breakupReason: '"你太好了，好到让我觉得配不上你" —— 或者更残酷的真相：你把对方当孩子养，对方却从未真正爱上你',
    bestMatch: '恋爱怪兽 💖 —— ta 的热情能让你感受到被热烈地回应，而不是单方面的付出',
    worstMatch: '完美变色龙 🦎 —— ta 太自由了，你的忠诚在 ta 眼里可能变成"束缚"',
    classicScenario: '对方凌晨两点说想吃烧烤，你二话不说穿好衣服出门。回来的时候对方已经睡着了，你把烧烤放进冰箱，帮 ta 盖好被子，第二天早上默默热好端到床边',
    loveTip: '爱别人之前先爱自己。你值得被同样用心地对待，不要把"好"当成留住一个人的唯一方式',
    redFlag: '当你发现自己把对方照顾得无微不至，却连一句"我也需要你"都说不出口的时候',
    greenFlag: '你学会了说"今天我有点累，你能陪我吗？" —— 学会示弱的忠犬，才是最强大的',
    praise: [
      '你是那种「外面风雨再大，回到我身边就是晴天」的存在。被人爱着的你爱的人，是这个世界上最幸运的人。',
      '你的爱是行动派的典范：不是说说而已，而是「你冷了我就脱外套给你」「你饿了我就去做饭」。这种爱，太珍贵了。',
      '在这个人人都想被宠的时代，你选择了成为那个宠别人的人——这份担当，比任何甜言蜜语都珍贵一百倍。',
      '你让另一半感受到的，不是「ta 很好」，而是「和 ta 在一起，我很安全」。你知道吗？这是恋爱中最高级的浪漫。',
    ],
    roast: [
      '你谈的不是恋爱，是做慈善——专门资助「感情不顺利人类」。你的对象在你的照顾下活得像个巨婴。',
      '你的恋爱模式基本就是「捡到一只流浪猫 → 精心喂养 → 猫跑了 → 再捡一只」。循环往复，永不停歇。',
      '你最大的问题就是把对方当儿子/女儿养，然后困惑「为什么 ta 对我没有那种心动的感觉」——因为你是妈，不是对象啊！',
      '别人的分手理由是「我们不合适」，你的分手理由是「我终于意识到我不是你亲妈」。醒醒吧，谈恋爱不是做慈善！',
    ],
  },
  treasure: {
    id: 'treasure',
    name: '隐藏宝贝',
    englishName: 'Hidden Treasure',
    emoji: '💎',
    subtitle: '冷冰冰的外壳下是巨大的宝藏 · 被懂的人才知道多珍贵',
    description:
      '你以为自己在谈恋爱，其实你在做项目管理。每段感情都是一个需要优化的系统。你看起来冷冰冰的，但靠近之后才发现内心是个巨大的宝藏。你处理感情问题的逻辑能力，简直是恋爱界的莫比乌斯环——在无解中找到了最优解。',
    color: '#06b6d4',
    bgGradient: 'from-cyan-500/20 via-sky-500/10 to-teal-500/20',
    textGradient: 'from-cyan-500 via-sky-400 to-teal-400',
    loveLanguage: '深度对话 —— "比起看电影，我更想和你聊聊看完电影之后的感受"',
    strength: '你的理性不是冷漠，而是一种更高级的温柔：在你身边，永远不需要猜。你用行动证明——爱可以很清醒',
    weakness: '太习惯用逻辑处理感情，有时候对方需要的只是一个拥抱，而不是一份问题分析报告',
    breakupReason: '"和你在一起太累了，像在考试" —— 你的理智让对方面对问题时感到压力，而不是温暖',
    bestMatch: '恋爱魔法师 🎩 —— ta 的感性可以软化你的理性，让你学会用心感受而不只是用脑分析',
    worstMatch: '恋爱怪兽 💖 —— ta 的情绪化让你觉得不可理喻，你的理性让 ta 觉得你冷血无情',
    classicScenario: '对方生气了说"你根本不在乎我的感受！"，你冷静地回答"根据过去 30 天的数据分析，我在乎你感受的频率是每天 3.7 次"，然后对方更生气了',
    loveTip: '感情不是一道数学题。有时候放下逻辑，用直觉去感受，你会发现爱比你想的简单',
    redFlag: '当你发现自己正在用 Excel 分析你们的聊天频率和情绪波动的时候 —— 放下电脑，去抱抱 ta',
    greenFlag: '你第一次没有分析就说了「对不起，是我不好」——那一刻的你，比任何数据都迷人',
    praise: [
      '在所有人都在感性的漩涡里越陷越深时，你是那个冷静地建造桥梁的人。别人需要你来拨开迷雾。',
      '你以为自己不够浪漫？不，你的浪漫是「我分析了你所有的习惯，所以每次约会都能让你感到被深深理解」。',
      '你处理感情问题的逻辑能力简直是恋爱界的莫比乌斯环——在看似无解的死循环中找到了最优解。',
      '你的理性不是冷漠，而是一种更高级的温柔：在你身边，永远不需要猜。你用行动证明——爱可以很清醒。',
    ],
    roast: [
      '你大概有一份名为「恋爱 KPI 追踪表」的 Excel，里面记录了对方的回复速度、主动次数和情绪波动曲线。',
      '约会时你脑子里在跑回归分析：「ta 笑了三次，看了手机两次，这个笑容的真诚度大约在 78.5%。」',
      '别人收到情书会感动，你收到情书会开始做文本分析——情感词汇占比、句式复杂度、是否使用排比句式。',
      '你最大的浪漫就是把「我有点想你」翻译成了「基于近期多巴胺水平波动，我判断对你的依恋指数上升了 15%」。',
    ],
  },
  chameleon: {
    id: 'chameleon',
    name: '完美变色龙',
    englishName: 'Perfect Chameleon',
    subtitle: '爱情里的酷盖/酷妹 · 不被定义的自由灵魂',
    description:
      '你活出了很多人想要但不敢要的状态——在感情中保持完整的自我。你不需要爱情来定义自己，但你选择爱情来丰富自己。你在爱情中永远保持自己的颜色，但也能在任何环境中优雅生存。你让这个世界相信：真的有人可以在爱情中既深情又自由。',
    color: '#eab308',
    bgGradient: 'from-yellow-500/20 via-amber-500/10 to-orange-500/20',
    textGradient: 'from-yellow-500 via-amber-500 to-orange-500',
    loveLanguage: '给彼此空间 —— "最好的爱情，是我可以一个人过得很好，但有你更好"',
    strength: '你的独立不是不想恋爱，而是「我可以一个人过得很好，但如果和你在一起能更好，那我才要」',
    weakness: '太过独立让人感觉不需要任何人，对方会疑惑"你到底喜不喜欢我"',
    breakupReason: '"我觉得你根本不需要我" —— 你的独立让对方在感情中找不到存在感和价值感',
    bestMatch: '忠犬八公 🐕 —— ta 的坚定能给你安全感，让你愿意慢慢打开心门',
    worstMatch: '恋爱怪兽 💖 —— ta 的黏人程度会让你的变色龙本能疯狂拉响警报',
    classicScenario: '你们在一起三年了，但你的朋友直到分手才知道你谈过恋爱。不是你隐瞒，是你觉得没必要事事宣告。你的恋爱哲学是：安静地爱，比大声说更有力量',
    loveTip: '偶尔的依赖不会让你失去自我。让那个人走进你的世界吧，两个人一起看风景比一个人更美',
    redFlag: '当你发现自己说"没事""不用管我"的频率比"我需要你"高出十倍的时候',
    greenFlag: '你第一次主动说"今天能来陪我吗" —— 这句话的重量，比你想象的要大得多',
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
    magician: 0,
    bossCat: 0,
    monster: 0,
    hachiko: 0,
    treasure: 0,
    chameleon: 0,
  };

  answers.forEach((type) => {
    counts[type]++;
  });

  let maxCount = 0;
  let result: PersonalityId = 'magician';

  (Object.keys(counts) as PersonalityId[]).forEach((key) => {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      result = key;
    }
  });

  return personalities[result];
}
