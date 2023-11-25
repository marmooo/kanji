import { JISCode1, JISCode2 } from "./jis-code.js";

// https://www.kanken.or.jp/kanken/outline/data/outline_degree_national_list20200217.pdf
// 漢検10級 = 小1
export const JKAT10 = Array.from(
  "一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六",
);
// 漢検9級 = 小2
export const JKAT9 = Array.from(
  "引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話",
);
// 漢検8級 = 小3
export const JKAT8 = Array.from(
  "悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和",
);
// 漢検7級 = 小4
export const JKAT7 = Array.from(
  "愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録",
);
// 漢検6級 = 小5
export const JKAT6 = Array.from(
  "圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴",
);
// 漢検5級 = 小6
export const JKAT5 = Array.from(
  "胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論",
);
// 漢検4級 ≒ 中1
export const JKAT4 = Array.from(
  "侵獣紫項兼況輝較援握振瞬雌稿剣狭儀獲煙扱浸旬執豪軒恐戯刈鉛依寝巡芝込圏響詰甘縁威慎盾斜婚堅驚却汗汚為震召煮鎖遣仰脚乾押偉薪床釈彩玄駆及勧奥違尽沼寂歳枯屈丘歓憶維陣称朱載誇掘朽監菓緯尋紹狩剤鼓繰巨環暇壱吹詳趣咲互恵拠鑑箇芋是丈需惨抗傾距含雅陰姓畳舟旨攻継御奇介隠征殖秀伺更迎凶祈戒影跡飾襲刺恒撃叫鬼皆鋭占触柔脂荒肩狂幾壊越麗腰漫柄微薄稲滴淡扇暦踊妙壁匹爆踏添嘆鮮劣謡眠捕描髪闘殿端訴烈翼矛舗浜抜胴吐弾僧恋雷霧抱敏罰峠途恥燥露頼娘峰怖般突渡致騒郎絡茂砲浮販鈍奴遅贈惑欄猛忙普搬曇怒蓄即腕離網坊腐範弐到跳俗粒黙肪敷繁悩逃徴耐慮紋冒膚盤濃倒澄替療躍傍賦彼杯唐沈沢隣雄帽舞疲輩桃珍拓涙与凡幅被拍透抵濁隷誉盆払避泊盗堤脱齢溶慢噴尾迫塔摘丹",
);
// 漢検3級 ≒ 中2
export const JKAT3 = Array.from(
  "婿譲殊削拘憩喫貫餓哀請嘱寿搾郊鶏虐喚怪慰斥辱潤錯控鯨虚換悔詠隻伸遵撮慌倹峡敢塊悦惜辛如擦硬賢脅緩慨閲籍審徐暫絞幻凝企該炎摂炊匠祉綱孤斤忌概宴潜粋昇施酵弧緊軌郭欧繕衰掌諮克雇愚既隔殴阻酔晶侍獄顧偶棋穫乙措遂焦慈恨娯遇棄岳卸粗穂衝軸紺悟刑騎掛穏礎随鐘疾魂孔契欺滑佳双髄冗湿墾巧啓犠肝架桑瀬嬢赦債甲掲菊冠華掃牲錠邪催坑携吉勘嫁励幽乏伏縛訂胆葬零誘妨覆伐締鍛遭霊憂房紛帆哲壇憎裂揚某墳伴斗稚促廉揺膨癖畔塗畜賊錬擁謀募藩凍窒怠炉抑墨慕蛮陶抽胎浪裸没簿卑痘鋳袋廊濫翻芳碑匿駐逮楼吏魔邦泌篤彫滞漏隆埋奉姫豚超滝湾了膜胞漂尿聴択猟又倣苗粘陳卓陵魅崩赴婆鎮託糧滅飽符排墜諾厘免縫封陪帝奪",
);
// 漢検準2級 ≒ 高校
export const JKAT2s = Array.from(
  "詔殉儒栽肯薫擬且寡亜奨循囚斎侯茎糾缶稼尉彰庶臭索洪渓窮陥蚊逸償緒愁酢貢蛍拒患拐姻礁叙酬桟溝慶享堪懐韻浄升醜傘衡傑挟棺劾畝剰抄汁肢購嫌恭款涯浦壌肖充嗣拷献矯閑垣疫醸尚渋賜剛謙暁寛核謁津宵銃璽酷繭菌憾殻猿唇症叔漆昆顕琴還嚇凹娠祥淑遮懇懸謹艦括翁紳渉粛蛇唆弦襟頑喝虞診訟塾酌詐呉吟飢渇渦刃硝俊爵砕碁隅宜褐禍迅粧准珠宰江勲偽轄靴寮悠堀憤煩尼艇挑霜践甚倫猶奔丙頒妊泥眺藻遷帥累裕麻併妃忍迭釣妥薦睡塁融摩塀披寧徹懲堕繊枢戻庸磨幣扉把撤勅惰禅崇鈴窯抹弊罷覇悼朕駄漸据賄羅岬偏猫廃搭塚泰租杉枠酪銘遍賓培棟漬濯疎斉痢妄泡頻媒筒坪但塑逝履盲俸瓶賠謄呈棚壮誓柳耗褒扶伯騰廷痴荘析竜厄剖附舶洞邸逐捜拙硫愉紡譜漠督亭秩挿窃虜諭朴侮肌凸貞嫡曹仙涼癒僕沸鉢屯逓衷喪栓僚唯撲雰閥軟偵弔槽旋",
);
// 漢検2級 ≒ 高校/大学/一般
export const JKAT2 = Array.from(
  "羞拶傲拳僅鎌楷唄挨蹴斬駒鍵錦韓潰鬱曖憧恣頃舷惧玩諧怨宛拭摯痕股串伎崖艶嵐尻餌沙虎窟亀蓋旺畏芯叱𠮟挫錮詣毀骸臆萎腎嫉采勾憬畿柿俺椅須腫塞梗稽臼顎苛彙裾呪柵喉隙嗅葛牙咽凄袖刹乞桁巾釜瓦淫賂沃蜜璧箸貪爪戴遡醒弄拉冥蔑氾丼鶴誰曽脊籠辣麺哺汎那諦旦爽戚麓藍冶蜂斑謎溺綻痩煎脇璃弥貌眉鍋塡緻踪羨慄闇頰膝匂妬酎捉腺侶喩睦肘虹賭貼遜詮瞭湧勃訃捻藤嘲汰箋瑠妖昧蔽罵瞳捗唾膳呂瘍枕餅剝頓椎堆狙",
);

function setDict(list) {
  const dict = {};
  for (let grade = 0; grade < list.length; grade++) {
    list[grade].forEach((kanji) => {
      dict[kanji] = grade;
    });
  }
  return dict;
}

function setJoyoDict() {
  const list = [
    JKAT10,
    JKAT9,
    JKAT8,
    JKAT7,
    JKAT6,
    JKAT5,
    JKAT4,
    JKAT3,
    JKAT2s,
    JKAT2,
  ];
  return setDict(list);
}

function setJKAT1s() {
  const result = [];
  JISCode1.forEach((kanji) => {
    if (kanji in joyoDict === false) {
      result.push(kanji);
    }
  });
  return result;
}

function setJKAT1() {
  const result = [];
  JISCode2.forEach((kanji) => {
    if (kanji in joyoDict === false) {
      result.push(kanji);
    }
  });
  return result;
}

// https://www.kanken.or.jp/kanken/outline/degree.html
const joyoDict = setJoyoDict();
export const JKAT1s = setJKAT1s();
export const JKAT1 = setJKAT1();

// 日本漢字能力検定 (Japan Kanji Aptitude Test)
export const JKAT = [
  JKAT10,
  JKAT9,
  JKAT8,
  JKAT7,
  JKAT6,
  JKAT5,
  JKAT4,
  JKAT3,
  JKAT2s,
  JKAT2,
  JKAT1s,
  JKAT1,
];
