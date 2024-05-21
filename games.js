/*
 Navicat Premium Data Transfer

 Source Server         : dotbet.tzyhwct.mongodb.net_27017
 Source Server Type    : MongoDB
 Source Server Version : 70008
 Source Host           : dotbet.tzyhwct.mongodb.net:27017
 Source Schema         : dotbet

 Target Server Type    : MongoDB
 Target Server Version : 70008
 File Encoding         : 65001

 Date: 24/04/2024 10:09:42
*/

// ----------------------------
// Collection structure for games
// ----------------------------
db.getCollection("games").drop();
db.createCollection("games");

// ----------------------------
// Documents of games
// ----------------------------
db.getCollection("games").insert([
  {
    _id: ObjectId("651f948d6ffc6bd2c68b64bf"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-002",
    gameName: "Sexy Vegas",
    img: "FastSpin-SLOT-002.png",
    date: ISODate("2023-10-06T05:01:01.958Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f965a6ffc6bd2c68b64cf"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-010",
    gameName: "Triple Happiness",
    img: "FastSpin-SLOT-010.png",
    date: ISODate("2023-10-06T05:08:42.176Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f98156ffc6bd2c68b64db"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-016",
    gameName: "Neon Fantasy",
    img: "FastSpin-SLOT-016.png",
    date: ISODate("2023-10-06T05:16:05.066Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9d116ffc6bd2c68b64f9"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-031",
    gameName: "Legend of Nian",
    img: "FastSpin-SLOT-031.png",
    date: ISODate("2023-10-06T05:37:21.338Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f95a86ffc6bd2c68b64c9"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-007",
    gameName: "Rich Caishen",
    img: "FastSpin-SLOT-007.png",
    date: ISODate("2023-10-06T05:05:44.592Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f960f6ffc6bd2c68b64cd"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-009",
    gameName: "Poker Ways",
    img: "FastSpin-SLOT-009.png",
    date: ISODate("2023-10-06T05:07:27.908Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f953c6ffc6bd2c68b64c5"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-005",
    gameName: "Wild Wet Win",
    img: "FastSpin-SLOT-005.png",
    date: ISODate("2023-10-06T05:03:56.499Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f997c6ffc6bd2c68b64e9"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-023",
    gameName: "Spin and Win",
    img: "FastSpin-SLOT-023.png",
    date: ISODate("2023-10-06T05:22:04.683Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9e486ffc6bd2c68b6503"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-036",
    gameName: "Mushroom Bandit",
    img: "FastSpin-SLOT-036.png",
    date: ISODate("2023-10-06T05:42:32.7Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ef6ee4bc98cd0d1ee3e1"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-013",
    gameName: "MAGIC BEANS",
    img: "FC-SLOT-013.png",
    date: ISODate("2023-10-07T05:41:02.746Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f085e4bc98cd0d1ee3f1"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-021",
    gameName: "Lucky Fortunes",
    img: "FC-SLOT-021.png",
    date: ISODate("2023-10-07T05:45:41.79Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f166e4bc98cd0d1ee3fd"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-027",
    gameName: "MERGE MAGIC",
    img: "FC-SLOT-027.png",
    date: ISODate("2023-10-07T05:49:26.245Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f252e4bc98cd0d1ee407"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-032",
    gameName: "NIGHT MARKET 2",
    img: "FC-SLOT-032.png",
    date: ISODate("2023-10-07T05:53:22.081Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217e29e4bc98cd0d1ee4ac"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-027",
    gameName: "Monkey King",
    img: "JDB-SLOT-027.png",
    date: ISODate("2023-10-07T15:50:01.14Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217ea5e4bc98cd0d1ee4b2"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-030",
    gameName: "Guan Gong",
    img: "JDB-SLOT-030.png",
    date: ISODate("2023-10-07T15:52:05.096Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218318e4bc98cd0d1ee4f6"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-052",
    gameName: "Flirting Scholar Tang II",
    img: "JDB-SLOT-052.png",
    date: ISODate("2023-10-07T16:11:04.992Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521850be4bc98cd0d1ee505"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-058",
    gameName: "One Punch Man",
    img: "JDB-SLOT-058.png",
    date: ISODate("2023-10-07T16:19:23.873Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218aeae4bc98cd0d1ee56e"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-085",
    gameName: "Miner Babe",
    img: "JDB-SLOT-085.png",
    date: ISODate("2023-10-07T16:44:26.116Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218c0be4bc98cd0d1ee588"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-092",
    gameName: "Dragons Gate",
    img: "JDB-SLOT-092.png",
    date: ISODate("2023-10-07T16:49:15.919Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218c5ee4bc98cd0d1ee58c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-094",
    gameName: "Kong",
    img: "JDB-SLOT-094.png",
    date: ISODate("2023-10-07T16:50:38.02Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e30ee4bc98cd0d1ee75c"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-002",
    gameName: "Texas Hold'em",
    img: "LUCKYPOKER-TABLE-002.png",
    date: ISODate("2023-10-07T23:00:30.15Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e949e4bc98cd0d1ee790"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-004",
    gameName: "Jin Qian Wa",
    img: "P8-SLOT-004.png",
    date: ISODate("2023-10-07T23:27:05.81Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521eeace4bc98cd0d1ee7c3"),
    platform: "PG",
    gameType: "TABLE",
    gameCode: "PG-TABLE-001",
    gameName: "Baccarat Deluxe",
    img: "baccarat-deluxe-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:50:04.144Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521eff9e4bc98cd0d1ee7d4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-011",
    gameName: "Win Win Won",
    img: "win-win-won-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:55:37.746Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f1b7e4bc98cd0d1ee7f1"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-025",
    gameName: "Symbols of Egypt",
    img: "symbols-of-egypt-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:03:03.192Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f205e4bc98cd0d1ee7f5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-028",
    gameName: "Emperors Favour",
    img: "emperor-s-favour-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:04:21.112Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222e2be4bc98cd0d1ee852"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-050",
    gameName: "Colour Game",
    img: "KM-TABLE-050.png",
    date: ISODate("2023-10-08T04:20:59.876Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222f70e4bc98cd0d1ee860"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-062",
    gameName: "KM Virtual Animal Race",
    img: "KM-TABLE-062.png",
    date: ISODate("2023-10-08T04:26:24.678Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c189e4bc98cd0d1ee8d1"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-006",
    gameName: "Force 1",
    img: "PP-EGAME-006.png",
    date: ISODate("2023-10-08T14:49:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c643e4bc98cd0d1ee90d"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-021",
    gameName: "Speed Baccarat 10",
    img: "PP-LIVE-021.png",
    date: ISODate("2023-10-08T15:09:55.75Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca42e4bc98cd0d1ee936"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-029",
    gameName: "Roulette 2",
    img: "PP-LIVE-029.png",
    date: ISODate("2023-10-08T15:26:58.308Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cdf7e4bc98cd0d1ee960"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-051",
    gameName: "No Comm Speed Baccarat 2",
    img: "PP-LIVE-051.png",
    date: ISODate("2023-10-08T15:42:47.79Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d67be4bc98cd0d1ee97e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-005",
    gameName: "The Hand of Midas",
    img: "PP-SLOT-005.png",
    date: ISODate("2023-10-08T16:19:07.266Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9d7e4bc98cd0d1ee9bc"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-026",
    gameName: "Wild Walker",
    img: "PP-SLOT-026.png",
    date: ISODate("2023-10-08T16:33:27.075Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dc41e4bc98cd0d1ee9ea"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-001",
    gameName: "BGLobby",
    img: "BG-LIVE-001.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dddae4bc98cd0d1eea07"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-051",
    gameName: "Dance Party",
    img: "PP-SLOT-051.png",
    date: ISODate("2023-10-08T16:50:34.294Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e2f9e4bc98cd0d1eea46"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-118",
    gameName: "Diamond Strike",
    img: "PP-SLOT-118.png",
    date: ISODate("2023-10-08T17:12:25.505Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e3a3e4bc98cd0d1eea50"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-135",
    gameName: "Journey to the West",
    img: "PP-SLOT-135.png",
    date: ISODate("2023-10-08T17:15:15.262Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e3fee4bc98cd0d1eea56"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-165",
    gameName: "Monkey Madness",
    img: "PP-SLOT-165.png",
    date: ISODate("2023-10-08T17:16:46.261Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e42ee4bc98cd0d1eea5c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-171",
    gameName: "Temujin Treasures",
    img: "PP-SLOT-171.png",
    date: ISODate("2023-10-08T17:17:34.881Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e521e4bc98cd0d1eea70"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-181",
    gameName: "The Magic Cauldron - Enchanted Brew",
    img: "PP-SLOT-181.png",
    date: ISODate("2023-10-08T17:21:37.946Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea86e4bc98cd0d1eeab2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-207",
    gameName: "Star Pirates Code",
    img: "PP-SLOT-207.png",
    date: ISODate("2023-10-08T17:44:38.769Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f5ee4bc98cd0d1eeaf1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-019",
    gameName: "Bet on Poker Live",
    img: "PT-LIVE-019.png",
    date: ISODate("2023-10-08T20:21:50.193Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f6ce4bc98cd0d1eeaf3"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-016",
    gameName: "Safari Heat",
    img: "PT-SLOT-016.png",
    date: ISODate("2023-10-08T20:22:04.105Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523123de4bc98cd0d1eeb1d"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-030",
    gameName: "Hot Gems",
    img: "PT-SLOT-030.png",
    date: ISODate("2023-10-08T20:34:05.326Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231400e4bc98cd0d1eeb36"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-043",
    gameName: "Asian Fantasy",
    img: "PT-SLOT-043.png",
    date: ISODate("2023-10-08T20:41:36.218Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231577e4bc98cd0d1eeb54"),
    platform: "RT",
    gameType: "TABLE",
    gameCode: "RT-TABLE-001",
    gameName: "Baccarat",
    img: "RT-TABLE-001.png",
    date: ISODate("2023-10-08T20:47:51.731Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231693e4bc98cd0d1eeb6e"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-067",
    gameName: "Easter Surprise",
    img: "PT-SLOT-067.png",
    date: ISODate("2023-10-08T20:52:35.885Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231921e4bc98cd0d1eebb5"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-087",
    gameName: "Teen Patti Live",
    img: "PT-LIVE-087.png",
    date: ISODate("2023-10-08T21:03:29.705Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523245fe4bc98cd0d1eec23"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-063",
    gameName: "Red Diamond",
    img: "RT-SLOT-063.png",
    date: ISODate("2023-10-08T21:51:27.222Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652324e1e4bc98cd0d1eec27"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-065",
    gameName: "Reel Heist",
    img: "RT-SLOT-065.png",
    date: ISODate("2023-10-08T21:53:37.387Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232892e4bc98cd0d1eec53"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-087",
    gameName: "Wild Wild Chest",
    img: "RT-SLOT-087.png",
    date: ISODate("2023-10-08T22:09:22.927Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232cfbe4bc98cd0d1eec8d"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-087",
    gameName: "Hit Bar™",
    img: "PT-SLOT-087.png",
    date: ISODate("2023-10-08T22:28:11.119Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240ddce4bc98cd0d1eed80"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-012",
    gameName: "Thor Fortune",
    img: "YesBingo-SLOT-012.png",
    date: ISODate("2023-10-09T14:27:40.914Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240efee4bc98cd0d1eed8c"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-020",
    gameName: "Rolling Fortune ",
    img: "YesBingo-SLOT-020.png",
    date: ISODate("2023-10-09T14:32:30.854Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244c896330ef07b4a522c7"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-019",
    gameName: "DragonGoldSA",
    img: "SG-SLOT-019.png",
    date: ISODate("2023-10-09T18:55:05.243Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524eddfdc63d752e8bbfc64"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-060",
    gameName: "LuckyMeow",
    img: "SG-SLOT-060.png",
    date: ISODate("2023-10-10T06:23:27.038Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f15fdc63d752e8bbfc8c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-086",
    gameName: "Mayan Gems",
    img: "SG-SLOT-086.png",
    date: ISODate("2023-10-10T06:38:23.462Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f21fdc63d752e8bbfc96"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-092",
    gameName: "Sugar Bonanza",
    img: "SG-SLOT-092.png",
    date: ISODate("2023-10-10T06:41:35.177Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f2b9dc63d752e8bbfc9e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-096",
    gameName: "Rich Caishen",
    img: "SG-SLOT-096.png",
    date: ISODate("2023-10-10T06:44:09.615Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521cc17dfaa815deca440d"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-067",
    gameName: "Worldie",
    img: "DRAGOONSOFT-SLOT-067.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523bb17dfaa815deca4422"),
    platform: "JDB",
    gameType: "FH",
    gameCode: "JDB-FISH-011",
    gameName: "Dragon Master",
    img: "JDB-FISH-011.png",
    date: ISODate("2023-10-07T15:23:49.033Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bcc7dfaa815deca4435"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-010",
    gameName: "God Of Martial",
    img: "JILI-SLOT-010.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bd77dfaa815deca4438"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-085",
    gameName: "Devil Fire",
    img: "JILI-SLOT-085.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c727dfaa815deca445a"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-026",
    gameName: "Charge Buffalo",
    img: "JILI-SLOT-026.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cc67dfaa815deca4463"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-077",
    gameName: "Master Tiger",
    img: "JILI-SLOT-077.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524ce17dfaa815deca446a"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-047",
    gameName: "TWINWINS",
    img: "JILI-SLOT-047.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d267dfaa815deca4477"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-060",
    gameName: "JILI CAISHEN",
    img: "JILI-SLOT-060.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d297dfaa815deca4478"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-044",
    gameName: "Party Night",
    img: "JILI-SLOT-044.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d317dfaa815deca447a"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-037",
    gameName: "Lucky Coming",
    img: "JILI-SLOT-037.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258b77dfaa815deca4491"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-034",
    gameName: "Bingo Adventure",
    img: "JILI-TABLE-034.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f8a336ffc6bd2c68b64b9"),
    platform: "SBO",
    gameType: "ESPORTS",
    gameCode: "SBO_SPORTSBOOK_001",
    gameName: "SportsBook",
    img: "SBOBET_568Win_Sports.png",
    date: ISODate("2023-10-08T22:33:36.064Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f187e4bc98cd0d1ee3ff"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-028",
    gameName: "GOLDEN GENIE",
    img: "FC-SLOT-028.png",
    date: ISODate("2023-10-07T05:49:59.925Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217805e4bc98cd0d1ee470"),
    platform: "JDB",
    gameType: "FH",
    gameCode: "JDB-FISH-012",
    gameName: "Fishing Disco",
    img: "JDB-FISH-012.png",
    date: ISODate("2023-10-07T15:23:49.033Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217af0e4bc98cd0d1ee488"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-011",
    gameName: "Winning Mask",
    img: "JDB-SLOT-011.png",
    date: ISODate("2023-10-07T15:36:16.414Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652180eae4bc98cd0d1ee4da"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-043",
    gameName: "Triple King Kong",
    img: "JDB-SLOT-043.png",
    date: ISODate("2023-10-07T16:01:46.388Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218749e4bc98cd0d1ee526"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-069",
    gameName: "Dragons World",
    img: "JDB-SLOT-069.png",
    date: ISODate("2023-10-07T16:28:57.99Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218b82e4bc98cd0d1ee57f"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-089",
    gameName: "Spindrift",
    img: "JDB-SLOT-089.png",
    date: ISODate("2023-10-07T16:46:58.003Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218d4ae4bc98cd0d1ee5a2"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-099",
    gameName: "Maya Gold Crazy",
    img: "JDB-SLOT-099.png",
    date: ISODate("2023-10-07T16:54:34.037Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d9abe4bc98cd0d1ee712"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-112",
    gameName: "CooCoo Farm",
    img: "JDB-SLOT-112.png",
    date: ISODate("2023-10-07T22:20:27.182Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e6d6e4bc98cd0d1ee77a"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-118",
    gameName: "Super Golf Drive",
    img: "super-golf-drive-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:16:38.227Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e7c5e4bc98cd0d1ee782"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-121",
    gameName: "Cruise Royale",
    img: "cruise-royale-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:20:37.524Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e9f7e4bc98cd0d1ee798"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-011",
    gameName: "Thai Paradise",
    img: "P8-SLOT-011.png",
    date: ISODate("2023-10-07T23:29:59.605Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f05ce4bc98cd0d1ee7da"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-015",
    gameName: "Hotpot",
    img: "hotpot-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:57:16.204Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f14ee4bc98cd0d1ee7eb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-022",
    gameName: "Gem Saviour Sword",
    img: "gem-saviour-sword-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:01:18.543Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522292ae4bc98cd0d1ee820"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-024",
    gameName: "FanTanClassic",
    img: "KM-TABLE-024.png",
    date: ISODate("2023-10-08T03:59:38.021Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222a5ae4bc98cd0d1ee82c"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-030",
    gameName: "jhandimunda",
    img: "KM-TABLE-030.png",
    date: ISODate("2023-10-08T04:04:42.364Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222d11e4bc98cd0d1ee844"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-043",
    gameName: "Bonus Dice",
    img: "KM-TABLE-043.png",
    date: ISODate("2023-10-08T04:16:17.868Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222f4ae4bc98cd0d1ee85e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-060",
    gameName: "Ludo",
    img: "KM-TABLE-060.png",
    date: ISODate("2023-10-08T04:25:46.465Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c706e4bc98cd0d1ee91d"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-014",
    gameName: "Speed Baccarat 2",
    img: "PP-LIVE-014.png",
    date: ISODate("2023-10-08T15:13:10.858Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca5de4bc98cd0d1ee938"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-030",
    gameName: "Roulette 4 - Russian",
    img: "PP-LIVE-030.png",
    date: ISODate("2023-10-08T15:27:25.241Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cd16e4bc98cd0d1ee954"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-043",
    gameName: "Andar Bahar",
    img: "PP-LIVE-043.png",
    date: ISODate("2023-10-08T15:39:02.452Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d5e6e4bc98cd0d1ee973"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-001",
    gameName: "Fishin Reels",
    img: "PP-SLOT-001.png",
    date: ISODate("2023-10-08T16:16:38.576Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d89ae4bc98cd0d1ee9a8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-016",
    gameName: "John Hunter and the Mayan Gods",
    img: "PP-SLOT-016.png",
    date: ISODate("2023-10-08T16:28:10.123Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9a6e4bc98cd0d1ee9b8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-024",
    gameName: "Return of the Dead",
    img: "PP-SLOT-024.png",
    date: ISODate("2023-10-08T16:32:38.202Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522db6ae4bc98cd0d1ee9d6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-031",
    gameName: "Wild Wild Riches",
    img: "PP-SLOT-031.png",
    date: ISODate("2023-10-08T16:40:10.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd3be4bc98cd0d1ee9f5"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-042",
    gameName: "Pyramid King",
    img: "PP-SLOT-042.png",
    date: ISODate("2023-10-08T16:47:55.917Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e41ee4bc98cd0d1eea5a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-169",
    gameName: "888 Gold",
    img: "PP-SLOT-169.png",
    date: ISODate("2023-10-08T17:17:18.563Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e60de4bc98cd0d1eea84"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-191",
    gameName: "Heart of Rio",
    img: "PP-SLOT-191.png",
    date: ISODate("2023-10-08T17:25:33.39Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea59e4bc98cd0d1eeaae"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-205",
    gameName: "Mystic Chief",
    img: "PP-SLOT-205.png",
    date: ISODate("2023-10-08T17:43:53.692Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea99e4bc98cd0d1eeab4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-208",
    gameName: "John Hunter and the Quest for Bermuda Riches",
    img: "PP-SLOT-208.png",
    date: ISODate("2023-10-08T17:44:57.166Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230d23e4bc98cd0d1eeacd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-007",
    gameName: "All Bets Blackjack",
    img: "PT-LIVE-007.png",
    date: ISODate("2023-10-08T20:12:19.37Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230ef7e4bc98cd0d1eeae9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-015",
    gameName: "Spin a Win",
    img: "PT-LIVE-015.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652312b9e4bc98cd0d1eeb25"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-034",
    gameName: "Tiger, Turtle, Dragon, Phoenix",
    img: "PT-SLOT-034.png",
    date: ISODate("2023-10-08T20:36:09.859Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652314b4e4bc98cd0d1eeb46"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-051",
    gameName: "Halloween Fortune 2",
    img: "PT-SLOT-051.png",
    date: ISODate("2023-10-08T20:44:36.659Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231776e4bc98cd0d1eeb82"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-070",
    gameName: "Heart of the Frontier",
    img: "PT-SLOT-070.png",
    date: ISODate("2023-10-08T20:56:22.575Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652317f0e4bc98cd0d1eeb91"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-072",
    gameName: "Legacy of the Wild",
    img: "PT-SLOT-072.png",
    date: ISODate("2023-10-08T20:58:24.401Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318a1e4bc98cd0d1eeba3"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-077",
    gameName: "Halloween Fortune",
    img: "PT-SLOT-077.png",
    date: ISODate("2023-10-08T21:01:21.48Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a90e4bc98cd0d1eebd9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-028",
    gameName: "Golden Offer",
    img: "RT-SLOT-028.png",
    date: ISODate("2023-10-08T21:09:36.859Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652321e2e4bc98cd0d1eec11"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-053",
    gameName: "Ninja Ways",
    img: "RT-SLOT-053.png",
    date: ISODate("2023-10-08T21:40:50.529Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bda2e4bc98cd0d1eecec"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-002",
    gameName: "Gold Shark",
    img: "YL-EGAME-002.png",
    date: ISODate("2023-10-09T08:45:22.826Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523beb7e4bc98cd0d1eecf6"),
    platform: "YL",
    gameType: "FH",
    gameCode: "YL-FISH-004",
    gameName: "Jackpot Fishery",
    img: "YL-FISH-004.png",
    date: ISODate("2023-10-09T08:49:59.107Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240398e4bc98cd0d1eed3b"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-020",
    gameName: "Hue",
    img: "VRLOTTO-LOTTO-020.png",
    date: ISODate("2023-10-09T13:43:52.613Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652405c2e4bc98cd0d1eed55"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-050",
    gameName: "VR Speed Racing",
    img: "VRLOTTO-LOTTO-050.png",
    date: ISODate("2023-10-09T13:53:06.396Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9c246ffc6bd2c68b64f7"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-030",
    gameName: "The Nutcrackers",
    img: "FastSpin-SLOT-030.png",
    date: ISODate("2023-10-06T05:33:24.354Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240d77e4bc98cd0d1eed7c"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-009",
    gameName: "Gladiator",
    img: "YesBingo-SLOT-009.png",
    date: ISODate("2023-10-09T14:25:59.884Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65241181e4bc98cd0d1eed97"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-014",
    gameName: "Thai Hi Lo",
    img: "MX-LIVE-014.png",
    date: ISODate("2023-10-09T14:43:13.148Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ee45e4bc98cd0d1ee3d1"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-005",
    gameName: "PONG PONG HU",
    img: "FC-SLOT-005.png",
    date: ISODate("2023-10-07T05:36:05.034Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244c1a6330ef07b4a522c1"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-016",
    gameName: "ZEUS",
    img: "SG-SLOT-016.png",
    date: ISODate("2023-10-09T18:53:14.506Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ef4de4bc98cd0d1ee3df"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-012",
    gameName: "LUXURY GOLDEN PANTHER",
    img: "FC-SLOT-012.png",
    date: ISODate("2023-10-07T05:40:29.883Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d006330ef07b4a522cd"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-022",
    gameName: "GreatStarsSA",
    img: "SG-SLOT-022.png",
    date: ISODate("2023-10-09T18:57:04.613Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f021e4bc98cd0d1ee3eb"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-018",
    gameName: "RICH MAN",
    img: "FC-SLOT-018.png",
    date: ISODate("2023-10-07T05:44:01.286Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244de66330ef07b4a522de"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-034",
    gameName: "KingPharaoh",
    img: "SG-SLOT-034.png",
    date: ISODate("2023-10-09T19:00:54.529Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f0d4e4bc98cd0d1ee3f5"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-023",
    gameName: "GRAND BLUE",
    img: "FC-SLOT-023.png",
    date: ISODate("2023-10-07T05:47:00.808Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f2d4dc63d752e8bbfca0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-097",
    gameName: "Muay Thai Fighter",
    img: "SG-SLOT-097.png",
    date: ISODate("2023-10-10T06:44:36.207Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652177b5e4bc98cd0d1ee46e"),
    platform: "JDB",
    gameType: "FH",
    gameCode: "JDB-FISH-010",
    gameName: "Fishing YiLuFa",
    img: "JDB-FISH-010.png",
    date: ISODate("2023-10-07T15:22:29.99Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f31bdc63d752e8bbfca6"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-100",
    gameName: "Gold Rush Cowboy",
    img: "SG-SLOT-100.png",
    date: ISODate("2023-10-10T06:45:47.089Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218bafe4bc98cd0d1ee581"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-090",
    gameName: "Spindrift 2",
    img: "JDB-SLOT-090.png",
    date: ISODate("2023-10-07T16:47:43.292Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218ddde4bc98cd0d1ee5ac"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-103",
    gameName: "Glamorous Girl",
    img: "JDB-SLOT-103.png",
    date: ISODate("2023-10-07T16:57:01.647Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f491dc63d752e8bbfcbc"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-111",
    gameName: "Gold Panther Maxways",
    img: "SG-SLOT-111.png",
    date: ISODate("2023-10-10T06:52:01.692Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fb7cdc63d752e8bbfcd8"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-126",
    gameName: "Gemstone Rush",
    img: "SG-SLOT-126.png",
    date: ISODate("2023-10-10T07:21:32.365Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e3dbe4bc98cd0d1ee770"),
    platform: "LUCKYPOKER",
    gameType: "TABLE",
    gameCode: "LUCKYPOKER-TABLE-012",
    gameName: "Gao Gae 3 Cards",
    img: "LUCKYPOKER-TABLE-012.png",
    date: ISODate("2023-10-07T23:03:55.006Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e92be4bc98cd0d1ee78e"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-003",
    gameName: "Great Blue",
    img: "P8-SLOT-003.png",
    date: ISODate("2023-10-07T23:26:35.253Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc30dc63d752e8bbfce0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-130",
    gameName: "Dragon Empire",
    img: "SG-SLOT-130.png",
    date: ISODate("2023-10-10T07:24:32.761Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc4cdc63d752e8bbfce2"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-131",
    gameName: "168 Fortunes",
    img: "SG-SLOT-131.png",
    date: ISODate("2023-10-10T07:25:00.951Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ea8be4bc98cd0d1ee7a0"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-022",
    gameName: "DragonGold",
    img: "P8-SLOT-022.png",
    date: ISODate("2023-10-07T23:32:27.703Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ebd9e4bc98cd0d1ee7a4"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-024",
    gameName: "WhiteKing",
    img: "P8-SLOT-024.png",
    date: ISODate("2023-10-07T23:38:01.315Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc66dc63d752e8bbfce4"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-132",
    gameName: "Pocket Mon Go",
    img: "SG-SLOT-132.png",
    date: ISODate("2023-10-10T07:25:26.225Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d52a7dfaa815deca43c2"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-006",
    gameName: "SpeedBaccarat",
    img: "BG-LIVE-006.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ec11e4bc98cd0d1ee7aa"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-025",
    gameName: "GoldenSlut",
    img: "P8-SLOT-025.png",
    date: ISODate("2023-10-07T23:38:57.671Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ec6ee4bc98cd0d1ee7ae"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-027",
    gameName: "SuperLuckyCat",
    img: "P8-SLOT-027.png",
    date: ISODate("2023-10-07T23:40:30.709Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0e57dfaa815deca43d5"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-011",
    gameName: "Diamond Mogul",
    img: "DRAGOONSOFT-SLOT-011.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f18c7dfaa815deca43df"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-021",
    gameName: "5 God Beast",
    img: "DRAGOONSOFT-SLOT-021.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ef24e4bc98cd0d1ee7c9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-003",
    gameName: "Fortune Gods",
    img: "fortune-gods-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:52:04.84Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f3ede4bc98cd0d1ee7f9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-006",
    gameName: "Medusa",
    img: "medusa-1-the-curse-of-athena-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:12:29.273Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c867dfaa815deca4409"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-063",
    gameName: "Bengal Tiger",
    img: "DRAGOONSOFT-SLOT-063.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c897dfaa815deca440a"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-064",
    gameName: "Dragonburst",
    img: "DRAGOONSOFT-SLOT-064.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222753e4bc98cd0d1ee810"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-015",
    gameName: "sicbo",
    img: "KM-TABLE-015.png",
    date: ISODate("2023-10-08T03:51:47.101Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222ddae4bc98cd0d1ee84e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-048",
    gameName: "HorseRacing",
    img: "KM-TABLE-048.png",
    date: ISODate("2023-10-08T04:19:38.988Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655239fb7dfaa815deca4416"),
    platform: "JDB",
    gameType: "FH",
    gameCode: "JDB-FISH-008",
    gameName: "Cai Shen Fishing",
    img: "JDB-FISH-008.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655242ec7dfaa815deca4425"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-119",
    gameName: "Open Sesame Mega",
    img: "JDB-SLOT-119.png",
    date: ISODate("2023-10-07T22:24:10.756Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222e50e4bc98cd0d1ee854"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-051",
    gameName: "Bingo Roll",
    img: "KM-TABLE-051.png",
    date: ISODate("2023-10-08T04:21:36.425Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a347dfaa815deca442c"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-006",
    gameName: "Dragon Fortune",
    img: "JILI-FISH-006.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652232f1e4bc98cd0d1ee87c"),
    platform: "LUDO",
    gameType: "TABLE",
    gameCode: "LUDO-TABLE-001",
    gameName: "LUDO",
    img: "LUDO-TABLE-001.png",
    date: ISODate("2023-10-08T04:41:21.94Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bf07dfaa815deca443c"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-003",
    gameName: "Chin Shi Huang",
    img: "JILI-SLOT-003.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c41de4bc98cd0d1ee8f4"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-007",
    gameName: "Baccarat 8",
    img: "PP-LIVE-007.png",
    date: ISODate("2023-10-08T15:00:45.547Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c097dfaa815deca4441"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-084",
    gameName: "Trial of Pheonix",
    img: "JILI-SLOT-084.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c625e4bc98cd0d1ee909"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-020",
    gameName: "Speed Baccarat 9",
    img: "PP-LIVE-020.png",
    date: ISODate("2023-10-08T15:09:25.839Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cc3be4bc98cd0d1ee94e"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-040",
    gameName: "One Blackjack",
    img: "PP-LIVE-040.png",
    date: ISODate("2023-10-08T15:35:23.951Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cd7be4bc98cd0d1ee95a"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-046",
    gameName: "Roulette 11 - Dutch",
    img: "PP-LIVE-046.png",
    date: ISODate("2023-10-08T15:40:43.153Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cf67e4bc98cd0d1ee966"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-055",
    gameName: "PowerUp Roulette",
    img: "PP-LIVE-055.png",
    date: ISODate("2023-10-08T15:48:55.619Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d987e4bc98cd0d1ee9b6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-023",
    gameName: "Book of Kingdoms",
    img: "PP-SLOT-023.png",
    date: ISODate("2023-10-08T16:32:07.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522da70e4bc98cd0d1ee9c7"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-030",
    gameName: "Great Rhino Deluxe",
    img: "PP-SLOT-030.png",
    date: ISODate("2023-10-08T16:36:00.834Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dae2e4bc98cd0d1ee9cf"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-386",
    gameName: "Tundra's Fortune",
    img: "PP-SLOT-386.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd6ee4bc98cd0d1ee9fb"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-045",
    gameName: "Starz Megaways",
    img: "PP-SLOT-045.png",
    date: ISODate("2023-10-08T16:48:46.207Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de55e4bc98cd0d1eea13"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-057",
    gameName: "Mysterious",
    img: "PP-SLOT-057.png",
    date: ISODate("2023-10-08T16:52:37.605Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de8fe4bc98cd0d1eea19"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-060",
    gameName: "Super 7s",
    img: "PP-SLOT-060.png",
    date: ISODate("2023-10-08T16:53:35.293Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522defae4bc98cd0d1eea23"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-059",
    gameName: "Master Joker",
    img: "PP-SLOT-059.png",
    date: ISODate("2023-10-08T16:55:22.054Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522df33e4bc98cd0d1eea27"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-069",
    gameName: "Fire Strike",
    img: "PP-SLOT-069.png",
    date: ISODate("2023-10-08T16:56:19.206Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e30ae4bc98cd0d1eea48"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-121",
    gameName: "Caishen's Gold",
    img: "PP-SLOT-121.png",
    date: ISODate("2023-10-08T17:12:42.856Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e35fe4bc98cd0d1eea4c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-127",
    gameName: "Wolf Gold",
    img: "PP-SLOT-127.png",
    date: ISODate("2023-10-08T17:14:07.205Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e6f1e4bc98cd0d1eea91"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-193",
    gameName: "Empty the Bank",
    img: "PP-SLOT-193.png",
    date: ISODate("2023-10-08T17:29:21.713Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652310d1e4bc98cd0d1eeb0a"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-022",
    gameName: "Ni Shu Shen Me",
    img: "PT-SLOT-022.png",
    date: ISODate("2023-10-08T20:28:01.823Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523110ae4bc98cd0d1eeb10"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-024",
    gameName: "Vacation Station Deluxe",
    img: "PT-SLOT-024.png",
    date: ISODate("2023-10-08T20:28:58.092Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652311afe4bc98cd0d1eeb18"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-028",
    gameName: "Yun Cong Long",
    img: "PT-SLOT-028.png",
    date: ISODate("2023-10-08T20:31:43.938Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652312d8e4bc98cd0d1eeb27"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-035",
    gameName: "Heart of the Jungle",
    img: "PT-SLOT-035.png",
    date: ISODate("2023-10-08T20:36:40.806Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231315e4bc98cd0d1eeb2b"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-037",
    gameName: "Ox Riches",
    img: "PT-SLOT-037.png",
    date: ISODate("2023-10-08T20:37:41.416Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523135ce4bc98cd0d1eeb31"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-040",
    gameName: "Si Xiang",
    img: "PT-SLOT-040.png",
    date: ISODate("2023-10-08T20:38:52.258Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652314f4e4bc98cd0d1eeb4a"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-053",
    gameName: "Amazon Wild",
    img: "PT-SLOT-053.png",
    date: ISODate("2023-10-08T20:45:40.286Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523159fe4bc98cd0d1eeb58"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-059",
    gameName: "A Night Out",
    img: "PT-SLOT-059.png",
    date: ISODate("2023-10-08T20:48:31.689Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231811e4bc98cd0d1eeb93"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-073",
    gameName: "Archer",
    img: "PT-SLOT-073.png",
    date: ISODate("2023-10-08T20:58:57.82Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231966e4bc98cd0d1eebbf"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-021",
    gameName: "Fortune House",
    img: "RT-SLOT-021.png",
    date: ISODate("2023-10-08T21:04:38.626Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652319cde4bc98cd0d1eebcb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-086",
    gameName: "Jurassic Island",
    img: "PT-SLOT-086.png",
    date: ISODate("2023-10-08T21:06:21.411Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523219be4bc98cd0d1eec0d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-051",
    gameName: "Mystery Reels MegaWays",
    img: "RT-SLOT-051.png",
    date: ISODate("2023-10-08T21:39:39.86Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232dbde4bc98cd0d1eec97"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-138",
    gameName: "Regal Steak",
    img: "RT-SLOT-138.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bd34e4bc98cd0d1eece6"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-010",
    gameName: "Diamond Deal",
    img: "YL-EGAME-010.png",
    date: ISODate("2023-10-09T08:43:32.595Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bd69e4bc98cd0d1eece8"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-011",
    gameName: "Mercedes-Benz BMW",
    img: "YL-EGAME-011.png",
    date: ISODate("2023-10-09T08:44:25.235Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240cdbe4bc98cd0d1eed78"),
    platform: "YESBINGO",
    gameType: "FH",
    gameCode: "YesBingo-FH-001",
    gameName: "OceanPhoenix",
    img: "YesBingo-FH-001.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240d36e4bc98cd0d1eed7a"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-006",
    gameName: "Power Mask",
    img: "YesBingo-SLOT-006.png",
    date: ISODate("2023-10-09T14:24:54.365Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240ed7e4bc98cd0d1eed8a"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-019",
    gameName: "Golden Aztec",
    img: "YesBingo-SLOT-019.png",
    date: ISODate("2023-10-09T14:31:51.905Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ebfddc63d752e8bbfc48"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-037",
    gameName: "CaiShen888",
    img: "SG-SLOT-037.png",
    date: ISODate("2023-10-10T06:15:25.354Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f630dc63d752e8bbfcc8"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-117",
    gameName: "Halloween Vacation",
    img: "SG-SLOT-117.png",
    date: ISODate("2023-10-10T06:58:56.474Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0da7dfaa815deca43d0"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-006",
    gameName: "Chef Lady",
    img: "DRAGOONSOFT-SLOT-006.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1807dfaa815deca43dd"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-019",
    gameName: "Monkey King",
    img: "DRAGOONSOFT-SLOT-019.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c147dfaa815deca43ea"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-032",
    gameName: "Greatest Circus",
    img: "DRAGOONSOFT-SLOT-032.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c407dfaa815deca43f6"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-044",
    gameName: "More Beauties",
    img: "DRAGOONSOFT-SLOT-044.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c4e7dfaa815deca43fa"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-048",
    gameName: "Icy Bar",
    img: "DRAGOONSOFT-SLOT-048.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c6b7dfaa815deca4402"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-056",
    gameName: "Dragon's Treasure",
    img: "DRAGOONSOFT-SLOT-056.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521ccb7dfaa815deca4410"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-070",
    gameName: "King's Sword",
    img: "DRAGOONSOFT-SLOT-070.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a327dfaa815deca442b"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-005",
    gameName: "Happy Fishing",
    img: "JILI-FISH-005.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f98de6ffc6bd2c68b64e3"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-020",
    gameName: "Honey Trap",
    img: "FastSpin-SLOT-020.png",
    date: ISODate("2023-10-06T05:19:26.303Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ec0ae4bc98cd0d1ee3b9"),
    platform: "FC",
    gameType: "EGAME",
    gameCode: "FC-EGAME-001",
    gameName: "MONEY TREE DOZER",
    img: "FC-EGAME-001.png",
    date: ISODate("2023-10-07T05:26:34.678Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520eeaee4bc98cd0d1ee3d7"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-008",
    gameName: "FORTUNE KOI",
    img: "FC-SLOT-008.png",
    date: ISODate("2023-10-07T05:37:50.543Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217919e4bc98cd0d1ee478"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-004",
    gameName: "Lucky Miner",
    img: "JDB-SLOT-004.png",
    date: ISODate("2023-10-07T15:28:25.24Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217fb6e4bc98cd0d1ee4cd"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-036",
    gameName: "Chef Panda",
    img: "JDB-SLOT-036.png",
    date: ISODate("2023-10-07T15:56:38.436Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e2f9e4bc98cd0d1ee75a"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-001",
    gameName: "Gao Gae",
    img: "LUCKYPOKER-TABLE-001.png",
    date: ISODate("2023-10-07T23:00:09.882Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e324e4bc98cd0d1ee75e"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-003",
    gameName: "Pok Deng",
    img: "LUCKYPOKER-TABLE-003.png",
    date: ISODate("2023-10-07T23:00:52.623Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e377e4bc98cd0d1ee766"),
    platform: "LUCKYPOKER",
    gameType: "TABLE",
    gameCode: "LUCKYPOKER-TABLE-007",
    gameName: "Dummy",
    img: "LUCKYPOKER-TABLE-007.png",
    date: ISODate("2023-10-07T23:02:15.755Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e9abe4bc98cd0d1ee796"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-007",
    gameName: "Highroad Kings JP",
    img: "P8-SLOT-007.png",
    date: ISODate("2023-10-07T23:28:43.822Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521efd2e4bc98cd0d1ee7d2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-009",
    gameName: "Hood vs Wolf",
    img: "hood-vs-wolf-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:54:58.926Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f130e4bc98cd0d1ee7e9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-021",
    gameName: "Santas Gift Rush",
    img: "santa-s-gift-rush-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:00:48.542Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222ce3e4bc98cd0d1ee842"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-042",
    gameName: "Minesweeper",
    img: "KM-TABLE-042.png",
    date: ISODate("2023-10-08T04:15:31.811Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c690e4bc98cd0d1ee915"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-025",
    gameName: "Mega Sic Bo",
    img: "PP-LIVE-025.png",
    date: ISODate("2023-10-08T15:11:12.979Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cafee4bc98cd0d1ee940"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-034",
    gameName: "Roulette 3 - Macao",
    img: "PP-LIVE-034.png",
    date: ISODate("2023-10-08T15:30:06.721Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d76fe4bc98cd0d1ee992"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-010",
    gameName: "Emerald King Rainbow Road",
    img: "PP-SLOT-010.png",
    date: ISODate("2023-10-08T16:23:11.018Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d826e4bc98cd0d1ee9a1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-014",
    gameName: "Big Bass Bonanza",
    img: "PP-SLOT-014.png",
    date: ISODate("2023-10-08T16:26:14.962Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f94c46ffc6bd2c68b64c1"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-003",
    gameName: "Roma",
    img: "FastSpin-SLOT-003.png",
    date: ISODate("2023-10-06T05:01:56.244Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dda6e4bc98cd0d1eea01"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-048",
    gameName: "Three Star Fortune",
    img: "PP-SLOT-048.png",
    date: ISODate("2023-10-08T16:49:42.692Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ddb6e4bc98cd0d1eea03"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-049",
    gameName: "Great Rhino Megaways",
    img: "PP-SLOT-049.png",
    date: ISODate("2023-10-08T16:49:58.933Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f987c6ffc6bd2c68b64df"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-018",
    gameName: "Loki",
    img: "FastSpin-SLOT-018.png",
    date: ISODate("2023-10-06T05:17:48.996Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e410e4bc98cd0d1eea58"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-167",
    gameName: "888 Dragons",
    img: "PP-SLOT-167.png",
    date: ISODate("2023-10-08T17:17:04.456Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e498e4bc98cd0d1eea66"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-176",
    gameName: "Buffalo King Megaways",
    img: "PP-SLOT-176.png",
    date: ISODate("2023-10-08T17:19:20.82Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9bae6ffc6bd2c68b64f3"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-028",
    gameName: "Heavenly Fortunes",
    img: "FastSpin-SLOT-028.png",
    date: ISODate("2023-10-06T05:31:26.905Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9bde6ffc6bd2c68b64f5"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-029",
    gameName: "Mining Bonanza",
    img: "FastSpin-SLOT-029.png",
    date: ISODate("2023-10-06T05:32:14.72Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e589e4bc98cd0d1eea7c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-187",
    gameName: "Pyramid Bonanza",
    img: "PP-SLOT-187.png",
    date: ISODate("2023-10-08T17:23:21.094Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9d936ffc6bd2c68b64fd"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-033",
    gameName: "Tiki Rush",
    img: "FastSpin-SLOT-033.png",
    date: ISODate("2023-10-06T05:39:31.685Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e63de4bc98cd0d1eea88"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-192",
    gameName: "Lucky Lightning",
    img: "PP-SLOT-192.png",
    date: ISODate("2023-10-08T17:26:21.756Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230da3e4bc98cd0d1eead3"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-008",
    gameName: "Majority Rules Speed Blackjack",
    img: "PT-LIVE-008.png",
    date: ISODate("2023-10-08T20:14:27.558Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ed3de4bc98cd0d1ee3c5"),
    platform: "FC",
    gameType: "FH",
    gameCode: "FC-FISH-004",
    gameName: "FIERCE FISHING",
    img: "FC-FISH-004.png",
    date: ISODate("2023-10-07T05:31:41.564Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ed65e4bc98cd0d1ee3c7"),
    platform: "FC",
    gameType: "FH",
    gameCode: "FC-FISH-005",
    gameName: "STAR HUNTER",
    img: "FC-FISH-005.png",
    date: ISODate("2023-10-07T05:32:21.68Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230fb4e4bc98cd0d1eeaf9"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-018",
    gameName: "Bonus Bears",
    img: "PT-SLOT-018.png",
    date: ISODate("2023-10-08T20:23:16.932Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f066e4bc98cd0d1ee3ef"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-020",
    gameName: "Robin Hood",
    img: "FC-SLOT-020.png",
    date: ISODate("2023-10-07T05:45:10.693Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231441e4bc98cd0d1eeb3c"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-046",
    gameName: "Fortune Day",
    img: "PT-SLOT-046.png",
    date: ISODate("2023-10-08T20:42:41.463Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f0f8e4bc98cd0d1ee3f7"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-024",
    gameName: "TREASURE RAIDERS",
    img: "FC-SLOT-024.png",
    date: ISODate("2023-10-07T05:47:36.898Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523155ae4bc98cd0d1eeb50"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-056",
    gameName: "Santa Surprise",
    img: "PT-SLOT-056.png",
    date: ISODate("2023-10-08T20:47:22.006Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520fc8ce4bc98cd0d1ee421"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-001",
    gameName: "Crazy King Kong",
    img: "JDB-EGAME-001.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231571e4bc98cd0d1eeb52"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-057",
    gameName: "Irish Luck",
    img: "PT-SLOT-057.png",
    date: ISODate("2023-10-08T20:47:45.509Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231883e4bc98cd0d1eeb9f"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-076",
    gameName: "Gold Hit: O'Reilly's Riches",
    img: "PT-SLOT-076.png",
    date: ISODate("2023-10-08T21:00:51.23Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217efbe4bc98cd0d1ee4b8"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-032",
    gameName: "Dragon Warrior",
    img: "JDB-SLOT-032.png",
    date: ISODate("2023-10-07T15:53:31.137Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217f35e4bc98cd0d1ee4c1"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-033",
    gameName: "Kingsman",
    img: "JDB-SLOT-033.png",
    date: ISODate("2023-10-07T15:54:29.984Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523193be4bc98cd0d1eebb7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-081",
    gameName: "Sinbad's Golden Voyage",
    img: "PT-SLOT-081.png",
    date: ISODate("2023-10-08T21:03:55.241Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523195ae4bc98cd0d1eebbd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-088",
    gameName: "Spin a Win Wild Live",
    img: "PT-LIVE-088.png",
    date: ISODate("2023-10-08T21:04:26.992Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652180bde4bc98cd0d1ee4d5"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-042",
    gameName: "Orient Animals",
    img: "JDB-SLOT-042.png",
    date: ISODate("2023-10-07T16:01:01.248Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231979e4bc98cd0d1eebc1"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-083",
    gameName: "Stars Awakening",
    img: "PT-SLOT-083.png",
    date: ISODate("2023-10-08T21:04:57.849Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521811de4bc98cd0d1ee4dc"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-044",
    gameName: "Legendary 5",
    img: "JDB-SLOT-044.png",
    date: ISODate("2023-10-07T16:02:37.727Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231da9e4bc98cd0d1eebf7"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-041",
    gameName: "Lucky Valentine",
    img: "RT-SLOT-041.png",
    date: ISODate("2023-10-08T21:22:49.176Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652320eae4bc98cd0d1eec05"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-047",
    gameName: "Mega Pyramid",
    img: "RT-SLOT-047.png",
    date: ISODate("2023-10-08T21:36:42.017Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521836ae4bc98cd0d1ee4fa"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-054",
    gameName: "Xi Yang Yang",
    img: "JDB-SLOT-054.png",
    date: ISODate("2023-10-07T16:12:26.586Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218ec3e4bc98cd0d1ee5b2"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-107",
    gameName: "Trump Card",
    img: "JDB-SLOT-107.png",
    date: ISODate("2023-10-07T17:00:51.983Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523227fe4bc98cd0d1eec19"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-057",
    gameName: "Piggy Pirates",
    img: "RT-SLOT-057.png",
    date: ISODate("2023-10-08T21:43:27.578Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652327d3e4bc98cd0d1eec49"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-082",
    gameName: "Vicky Ventura",
    img: "RT-SLOT-082.png",
    date: ISODate("2023-10-08T22:06:11.964Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d97be4bc98cd0d1ee710"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-111",
    gameName: "Elemental Link Water",
    img: "JDB-SLOT-111.png",
    date: ISODate("2023-10-07T22:19:39.34Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d9e5e4bc98cd0d1ee716"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-113",
    gameName: "CaiShen Coming",
    img: "JDB-SLOT-113.png",
    date: ISODate("2023-10-07T22:21:25.704Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652329c9e4bc98cd0d1eec63"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-095",
    gameName: "Golden Cryptex",
    img: "RT-SLOT-095.png",
    date: ISODate("2023-10-08T22:14:33.588Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652329e8e4bc98cd0d1eec65"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-096",
    gameName: "Leprechaun's Magic",
    img: "RT-SLOT-096.png",
    date: ISODate("2023-10-08T22:15:04.743Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f019e4bc98cd0d1ee7d6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-012",
    gameName: "Plushie Frenzy",
    img: "plushie-frenzy-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:56:09.808Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232bbde4bc98cd0d1eec7b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-107",
    gameName: "10001 Nights",
    img: "RT-SLOT-107.png",
    date: ISODate("2023-10-08T22:22:53.331Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65223205e4bc98cd0d1ee876"),
    platform: "LUCKYPOKER",
    gameType: "TABLE",
    gameCode: "LUCKYPOKER-TABLE-011",
    gameName: "Crazy Paikang",
    img: "LUCKYPOKER-TABLE-011.png",
    date: ISODate("2023-10-08T04:37:25.641Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232c98e4bc98cd0d1eec87"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-113",
    gameName: "Atlantis",
    img: "RT-SLOT-113.png",
    date: ISODate("2023-10-08T22:26:32.022Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232cdbe4bc98cd0d1eec8b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-115",
    gameName: "5 Families",
    img: "RT-SLOT-115.png",
    date: ISODate("2023-10-08T22:27:39.247Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c0f0e4bc98cd0d1ee8c0"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-002",
    gameName: "Penalty Shootout",
    img: "PP-EGAME-002.png",
    date: ISODate("2023-10-08T14:47:12.803Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232d61e4bc98cd0d1eec91"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-118",
    gameName: "Mega Dragon",
    img: "RT-SLOT-118.png",
    date: ISODate("2023-10-08T22:29:53.236Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c594e4bc98cd0d1ee8fd"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-015",
    gameName: "Speed Baccarat 3",
    img: "PP-LIVE-015.png",
    date: ISODate("2023-10-08T15:07:00.623Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bc42e4bc98cd0d1eece2"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-008",
    gameName: "Lucky Five",
    img: "YL-EGAME-008.png",
    date: ISODate("2023-10-09T08:39:30.789Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524061de4bc98cd0d1eed57"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-051",
    gameName: "VR LUCK",
    img: "VRLOTTO-LOTTO-051.png",
    date: ISODate("2023-10-09T13:54:37.16Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca06e4bc98cd0d1ee932"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-027",
    gameName: "Speed Roulette 1",
    img: "PP-LIVE-027.png",
    date: ISODate("2023-10-08T15:25:58.237Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d447e4bc98cd0d1ee96d"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-061",
    gameName: "Mega Baccarat",
    img: "PP-LIVE-061.png",
    date: ISODate("2023-10-08T16:09:43.175Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240db1e4bc98cd0d1eed7e"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-011",
    gameName: "Rolling 7",
    img: "YesBingo-SLOT-011.png",
    date: ISODate("2023-10-09T14:26:57.453Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d748e4bc98cd0d1ee98e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-392",
    gameName: "The Money Men Megaways",
    img: "PP-SLOT-392.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244dff6330ef07b4a522e0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-035",
    gameName: "WongPo",
    img: "SG-SLOT-035.png",
    date: ISODate("2023-10-09T19:01:19.607Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d91be4bc98cd0d1ee9b2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-021",
    gameName: "Emerald King",
    img: "PP-SLOT-021.png",
    date: ISODate("2023-10-08T16:30:19.425Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dc14e4bc98cd0d1ee9e4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-037",
    gameName: "The Tiger Warrior",
    img: "PP-SLOT-037.png",
    date: ISODate("2023-10-08T16:43:00.811Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524edc4dc63d752e8bbfc62"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-059",
    gameName: "LuckyCaiShen",
    img: "SG-SLOT-059.png",
    date: ISODate("2023-10-10T06:23:00.047Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f060dc63d752e8bbfc7a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-077",
    gameName: "BookofMyth",
    img: "SG-SLOT-077.png",
    date: ISODate("2023-10-10T06:34:08.878Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd5fe4bc98cd0d1ee9f9"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-044",
    gameName: "Money Money Money",
    img: "PP-SLOT-044.png",
    date: ISODate("2023-10-08T16:48:31.186Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f0cddc63d752e8bbfc80"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-080",
    gameName: "MagicalLamp",
    img: "SG-SLOT-080.png",
    date: ISODate("2023-10-10T06:35:57.276Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd96e4bc98cd0d1ee9ff"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-047",
    gameName: "John Hunter and the Book of Tut",
    img: "PP-SLOT-047.png",
    date: ISODate("2023-10-08T16:49:26.174Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc83dc63d752e8bbfce6"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-133",
    gameName: "Adventure Iceland",
    img: "SG-SLOT-133.png",
    date: ISODate("2023-10-10T07:25:55.602Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc9edc63d752e8bbfce8"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-134",
    gameName: "5 Fortune",
    img: "SG-SLOT-134.png",
    date: ISODate("2023-10-10T07:26:22.428Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ded2e4bc98cd0d1eea1d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-062",
    gameName: "Buffalo King",
    img: "PP-SLOT-062.png",
    date: ISODate("2023-10-08T16:54:42.785Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e4bde4bc98cd0d1eea6a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-178",
    gameName: "Panda Fortune 2",
    img: "PP-SLOT-178.png",
    date: ISODate("2023-10-08T17:19:57.966Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5317dfaa815deca43c5"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-009",
    gameName: "BullBull",
    img: "BG-LIVE-009.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0d77dfaa815deca43ce"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-004",
    gameName: "Get Money",
    img: "DRAGOONSOFT-SLOT-004.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e57ae4bc98cd0d1eea7a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-186",
    gameName: "Rise of Giza PowerNudge",
    img: "PP-SLOT-186.png",
    date: ISODate("2023-10-08T17:23:06.072Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e5abe4bc98cd0d1eea80"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-189",
    gameName: "Starlight Princess",
    img: "PP-SLOT-189.png",
    date: ISODate("2023-10-08T17:23:55.801Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bb47dfaa815deca43e5"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-027",
    gameName: "Tiger Lord",
    img: "DRAGOONSOFT-SLOT-027.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c297dfaa815deca43ef"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-037",
    gameName: "Fushen Coming",
    img: "DRAGOONSOFT-SLOT-037.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e80ee4bc98cd0d1eea9b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-197",
    gameName: "Lucky Grace And Charm",
    img: "PP-SLOT-197.png",
    date: ISODate("2023-10-08T17:34:06.851Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e8ede4bc98cd0d1eeaa4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-137",
    gameName: "Lucky Dragons",
    img: "PP-SLOT-137.png",
    date: ISODate("2023-10-08T17:37:49.071Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c2c7dfaa815deca43f0"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-038",
    gameName: "Pandaria",
    img: "DRAGOONSOFT-SLOT-038.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c827dfaa815deca4408"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-062",
    gameName: "Bakufu Shogun",
    img: "DRAGOONSOFT-SLOT-062.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea48e4bc98cd0d1eeaac"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-204",
    gameName: "Candy Village",
    img: "PP-SLOT-204.png",
    date: ISODate("2023-10-08T17:43:36.885Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522eab5e4bc98cd0d1eeab6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-209",
    gameName: "Big Juan",
    img: "PP-SLOT-209.png",
    date: ISODate("2023-10-08T17:45:25.488Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a3e7dfaa815deca4430"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-011",
    gameName: "Dinosaur Tycoon II",
    img: "JILI-FISH-011.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524beb7dfaa815deca443b"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-005",
    gameName: "Fortune Tree",
    img: "JILI-SLOT-005.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230e8be4bc98cd0d1eeae3"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-010",
    gameName: "Funky Monkey",
    img: "PT-SLOT-010.png",
    date: ISODate("2023-10-08T20:18:19.957Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c0c7dfaa815deca4442"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-086",
    gameName: "Bangla Beauty",
    img: "JILI-SLOT-086.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231187e4bc98cd0d1eeb16"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-027",
    gameName: "Fei Long Zai Tian",
    img: "PT-SLOT-027.png",
    date: ISODate("2023-10-08T20:31:03.736Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231588e4bc98cd0d1eeb56"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-058",
    gameName: "Cat Queen",
    img: "PT-SLOT-058.png",
    date: ISODate("2023-10-08T20:48:08.174Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524caf7dfaa815deca445d"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-074",
    gameName: "Golden Joker",
    img: "JILI-SLOT-074.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231737e4bc98cd0d1eeb7c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-006",
    gameName: "Crazy Genie",
    img: "RT-SLOT-006.png",
    date: ISODate("2023-10-08T20:55:19.79Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258c17dfaa815deca4495"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-016",
    gameName: "TeenPatti 20-20",
    img: "JILI-TABLE-016.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652317ece4bc98cd0d1eeb8f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-011",
    gameName: "Dragon's Luck Power Reels",
    img: "RT-SLOT-011.png",
    date: ISODate("2023-10-08T20:58:20.453Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318cae4bc98cd0d1eeba7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-078",
    gameName: "MagicalStacks",
    img: "PT-SLOT-078.png",
    date: ISODate("2023-10-08T21:02:02.656Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258fc7dfaa815deca44ab"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-009",
    gameName: "Callbreak",
    img: "JILI-TABLE-009.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655268347dfaa815deca44bb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-110",
    gameName: "Asgardian Rising",
    img: "asgardian-rising-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523193ee4bc98cd0d1eebb9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-020",
    gameName: "Fortune Fest",
    img: "RT-SLOT-020.png",
    date: ISODate("2023-10-08T21:03:58.387Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652319f7e4bc98cd0d1eebcf"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-025",
    gameName: "God Of Wealth",
    img: "RT-SLOT-025.png",
    date: ISODate("2023-10-08T21:07:03.872Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655268427dfaa815deca44be"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-091",
    gameName: "Mask Carnival",
    img: "mask-carnival-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231ba0e4bc98cd0d1eebe9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-034",
    gameName: "Jester Spins",
    img: "RT-SLOT-034.png",
    date: ISODate("2023-10-08T21:14:08.66Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231c6fe4bc98cd0d1eebeb"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-035",
    gameName: "Jingle Bells",
    img: "RT-SLOT-035.png",
    date: ISODate("2023-10-08T21:17:35.247Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231c97e4bc98cd0d1eebed"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-036",
    gameName: "Laser Fruit",
    img: "RT-SLOT-036.png",
    date: ISODate("2023-10-08T21:18:15.182Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523207ae4bc98cd0d1eebfe"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-044",
    gameName: "Masquerade",
    img: "RT-SLOT-044.png",
    date: ISODate("2023-10-08T21:34:50.76Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232789e4bc98cd0d1eec45"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-080",
    gameName: "Totem Lightning Power Reels",
    img: "RT-SLOT-080.png",
    date: ISODate("2023-10-08T22:04:57.556Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240195e4bc98cd0d1eed1d"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-001",
    gameName: "VR Venus 1.5 Lottery",
    img: "VRLOTTO-LOTTO-001.png",
    date: ISODate("2023-10-09T13:35:17.549Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652403f7e4bc98cd0d1eed41"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-022",
    gameName: "Dak Lak",
    img: "VRLOTTO-LOTTO-022.png",
    date: ISODate("2023-10-09T13:45:27.186Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240e34e4bc98cd0d1eed84"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-014",
    gameName: "FortuneCat",
    img: "YesBingo-SLOT-014.png",
    date: ISODate("2023-10-09T14:29:08.314Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244a6b6330ef07b4a522a5"),
    platform: "SPADE",
    gameType: "FH",
    gameCode: "SG-FISH-002",
    gameName: "Fishing War",
    img: "SG-FISH-002.png",
    date: ISODate("2023-10-09T18:46:03.296Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b0f6330ef07b4a522ad"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-002",
    gameName: "GoldenFist",
    img: "SG-SLOT-002.png",
    date: ISODate("2023-10-09T18:48:47.851Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b806330ef07b4a522b5"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-008",
    gameName: "FirstLove",
    img: "SG-SLOT-008.png",
    date: ISODate("2023-10-09T18:50:40.615Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244bcc6330ef07b4a522bb"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-013",
    gameName: "FistofGold",
    img: "SG-SLOT-013.png",
    date: ISODate("2023-10-09T18:51:56.949Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244c386330ef07b4a522c3"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-017",
    gameName: "HoYeahMonkey",
    img: "SG-SLOT-017.png",
    date: ISODate("2023-10-09T18:53:44.737Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524eeaddc63d752e8bbfc72"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-073",
    gameName: "ThreeLuckyStars",
    img: "SG-SLOT-073.png",
    date: ISODate("2023-10-10T06:26:53.005Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f24cdc63d752e8bbfc9a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-094",
    gameName: "Ruby Hood",
    img: "SG-SLOT-094.png",
    date: ISODate("2023-10-10T06:42:20.171Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f2ebdc63d752e8bbfca2"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-098",
    gameName: "Royal Katt",
    img: "SG-SLOT-098.png",
    date: ISODate("2023-10-10T06:44:59.43Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f337dc63d752e8bbfca8"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-101",
    gameName: "Candy Candy",
    img: "SG-SLOT-101.png",
    date: ISODate("2023-10-10T06:46:15.416Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f6c1dc63d752e8bbfcce"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-120",
    gameName: "Rabbit Riches",
    img: "SG-SLOT-120.png",
    date: ISODate("2023-10-10T07:01:21.271Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fb12dc63d752e8bbfcd4"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-123",
    gameName: "Candy Pop 2",
    img: "SG-SLOT-123.png",
    date: ISODate("2023-10-10T07:19:46.334Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ee1ee4bc98cd0d1ee3cf"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-004",
    gameName: "NIGHT MARKET",
    img: "FC-SLOT-004.png",
    date: ISODate("2023-10-07T05:35:26.503Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f1a7e4bc98cd0d1ee401"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-029",
    gameName: "ZEUS",
    img: "FC-SLOT-029.png",
    date: ISODate("2023-10-07T05:50:31.495Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217b71e4bc98cd0d1ee48e"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-014",
    gameName: "Formosa Bear",
    img: "JDB-SLOT-014.png",
    date: ISODate("2023-10-07T15:38:25.931Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217bf7e4bc98cd0d1ee496"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-017",
    gameName: "Four Treasures",
    img: "JDB-SLOT-017.png",
    date: ISODate("2023-10-07T15:40:39.168Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217e06e4bc98cd0d1ee4aa"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-026",
    gameName: "Rooster In Love",
    img: "JDB-SLOT-026.png",
    date: ISODate("2023-10-07T15:49:26.899Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652182e9e4bc98cd0d1ee4f4"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-051",
    gameName: "Open Sesame II",
    img: "JDB-SLOT-051.png",
    date: ISODate("2023-10-07T16:10:17.875Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652184d6e4bc98cd0d1ee503"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-057",
    gameName: "Mr Bao",
    img: "JDB-SLOT-057.png",
    date: ISODate("2023-10-07T16:18:30.039Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652188c1e4bc98cd0d1ee53a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-076",
    gameName: "Funky King Kong",
    img: "JDB-SLOT-076.png",
    date: ISODate("2023-10-07T16:35:13.385Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218ac5e4bc98cd0d1ee56b"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-084",
    gameName: "Golden Disco",
    img: "JDB-SLOT-084.png",
    date: ISODate("2023-10-07T16:43:49.331Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218bdce4bc98cd0d1ee583"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-091",
    gameName: "Jungle Jungle",
    img: "JDB-SLOT-091.png",
    date: ISODate("2023-10-07T16:48:28.152Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521da5ce4bc98cd0d1ee71e"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-117",
    gameName: "BigThreeDragons",
    img: "JDB-SLOT-117.png",
    date: ISODate("2023-10-07T22:23:24.672Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521df67e4bc98cd0d1ee745"),
    platform: "JDBFISH",
    gameType: "FH",
    gameCode: "JDB-FISH-002",
    gameName: "CaiShenFishing",
    img: "JDB-FISH-002.png",
    date: ISODate("2023-10-07T22:44:55.906Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e367e4bc98cd0d1ee764"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-006",
    gameName: "Domino",
    img: "LUCKYPOKER-TABLE-006.png",
    date: ISODate("2023-10-07T23:01:59.629Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e3ede4bc98cd0d1ee772"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-013",
    gameName: "MP Pok Deng",
    img: "LUCKYPOKER-TABLE-013.png",
    date: ISODate("2023-10-07T23:04:13.168Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e98fe4bc98cd0d1ee794"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-006",
    gameName: "Dolphin Reef",
    img: "P8-SLOT-006.png",
    date: ISODate("2023-10-07T23:28:15.612Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f089e4bc98cd0d1ee7dc"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-016",
    gameName: "Dragon Legend",
    img: "dragon-legend-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:58:01.366Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222b62e4bc98cd0d1ee836"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-036",
    gameName: "Coin Toss",
    img: "KM-TABLE-036.png",
    date: ISODate("2023-10-08T04:09:06.965Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca22e4bc98cd0d1ee934"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-028",
    gameName: "Roulette 1 - Azure",
    img: "PP-LIVE-028.png",
    date: ISODate("2023-10-08T15:26:26.749Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca75e4bc98cd0d1ee93a"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-031",
    gameName: "Roulette 5 - German",
    img: "PP-LIVE-031.png",
    date: ISODate("2023-10-08T15:27:49.761Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f97226ffc6bd2c68b64d3"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-012",
    gameName: "Fruits Mania",
    img: "FastSpin-SLOT-012.png",
    date: ISODate("2023-10-06T05:12:02.844Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ce5ae4bc98cd0d1ee964"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-053",
    gameName: "Roulette 14-Spanish",
    img: "PP-LIVE-053.png",
    date: ISODate("2023-10-08T15:44:26.62Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9dee6ffc6bd2c68b64ff"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-034",
    gameName: "Neko Riches",
    img: "FastSpin-SLOT-034.png",
    date: ISODate("2023-10-06T05:41:02.096Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d666e4bc98cd0d1ee97c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-004",
    gameName: "Joker King",
    img: "PP-SLOT-004.png",
    date: ISODate("2023-10-08T16:18:46.14Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ecb8e4bc98cd0d1ee3bf"),
    platform: "FC",
    gameType: "EGAME",
    gameCode: "FC-EGAME-004",
    gameName: "LIGHTNING BOMB",
    img: "FC-EGAME-004.png",
    date: ISODate("2023-10-07T05:29:28.231Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f1cbe4bc98cd0d1ee403"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-030",
    gameName: "WIN WIN NEKO",
    img: "FC-SLOT-030.png",
    date: ISODate("2023-10-07T05:51:07.249Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d6dce4bc98cd0d1ee986"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-007",
    gameName: "Dragon Kingdom Eyes of Fire",
    img: "PP-SLOT-007.png",
    date: ISODate("2023-10-08T16:20:44.083Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217c20e4bc98cd0d1ee498"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-018",
    gameName: "Open Sesame",
    img: "JDB-SLOT-018.png",
    date: ISODate("2023-10-07T15:41:20.866Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521826fe4bc98cd0d1ee4ee"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-049",
    gameName: "Lucky Phoenix",
    img: "JDB-SLOT-049.png",
    date: ISODate("2023-10-07T16:08:15.481Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9ece4bc98cd0d1ee9c0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-388",
    gameName: "Sweet Bonanza Dice",
    img: "PP-SLOT-388.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9fae4bc98cd0d1ee9c2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-028",
    gameName: "5 Lions Dance",
    img: "PP-SLOT-028.png",
    date: ISODate("2023-10-08T16:34:02.989Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218340e4bc98cd0d1ee4f8"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-053",
    gameName: "Fortune Horse",
    img: "JDB-SLOT-053.png",
    date: ISODate("2023-10-07T16:11:44.722Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652185a6e4bc98cd0d1ee509"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-060",
    gameName: "Street Fighter",
    img: "JDB-SLOT-060.png",
    date: ISODate("2023-10-07T16:21:58.137Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd4ce4bc98cd0d1ee9f7"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-043",
    gameName: "Ultra Burn",
    img: "PP-SLOT-043.png",
    date: ISODate("2023-10-08T16:48:12.81Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521889ae4bc98cd0d1ee538"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-075",
    gameName: "Treasure Bowl",
    img: "JDB-SLOT-075.png",
    date: ISODate("2023-10-07T16:34:34.424Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e042e4bc98cd0d1eea31"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-083",
    gameName: "Caishen's Cash",
    img: "PP-SLOT-083.png",
    date: ISODate("2023-10-08T17:00:50.314Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e541e4bc98cd0d1eea74"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-183",
    gameName: "5 Lions Megaways",
    img: "PP-SLOT-183.png",
    date: ISODate("2023-10-08T17:22:09.712Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d084e4bc98cd0d1ee6d1"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-055",
    gameName: "KM Virtual Greyhound Racing",
    img: "KM-TABLE-055.png",
    date: ISODate("2023-10-07T21:41:24.259Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521dfdde4bc98cd0d1ee74b"),
    platform: "JDBFISH",
    gameType: "FH",
    gameCode: "JDB-FISH-005",
    gameName: "Fishing YiLuFa",
    img: "JDB-FISH-005.png",
    date: ISODate("2023-10-07T22:46:53.095Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230d4ae4bc98cd0d1eeacf"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-002",
    gameName: "Arowanas Luck",
    img: "PT-SLOT-002.png",
    date: ISODate("2023-10-08T20:12:58.3Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e909e4bc98cd0d1ee78c"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-001",
    gameName: "Panther Moon",
    img: "P8-SLOT-001.png",
    date: ISODate("2023-10-07T23:26:01.084Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230db8e4bc98cd0d1eead5"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-004",
    gameName: "Captain Treasure",
    img: "PT-SLOT-004.png",
    date: ISODate("2023-10-08T20:14:48.699Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e962e4bc98cd0d1ee792"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-005",
    gameName: "Pan Jin Lian",
    img: "P8-SLOT-005.png",
    date: ISODate("2023-10-07T23:27:30.25Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652227b6e4bc98cd0d1ee814"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-018",
    gameName: "keno",
    img: "KM-TABLE-018.png",
    date: ISODate("2023-10-08T03:53:26.374Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230e66e4bc98cd0d1eeae1"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-009",
    gameName: "Golden Tour",
    img: "PT-SLOT-009.png",
    date: ISODate("2023-10-08T20:17:42.411Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f0ce4bc98cd0d1eeaeb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-013",
    gameName: "Jin Qian Wa",
    img: "PT-SLOT-013.png",
    date: ISODate("2023-10-08T20:20:28.185Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c1a9e4bc98cd0d1ee8d5"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-007",
    gameName: "Darts",
    img: "PP-EGAME-007.png",
    date: ISODate("2023-10-08T14:50:17.317Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523132be4bc98cd0d1eeb2d"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-038",
    gameName: "Ice Cave",
    img: "PT-SLOT-038.png",
    date: ISODate("2023-10-08T20:38:03.355Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c2abe4bc98cd0d1ee8e0"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-003",
    gameName: "Baccarat 3",
    img: "PP-LIVE-003.png",
    date: ISODate("2023-10-08T14:54:35.866Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231416e4bc98cd0d1eeb38"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-044",
    gameName: "Fortune Lions",
    img: "PT-SLOT-044.png",
    date: ISODate("2023-10-08T20:41:58.294Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652315b3e4bc98cd0d1eeb5a"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-060",
    gameName: "Chinese Kitchen",
    img: "PT-SLOT-060.png",
    date: ISODate("2023-10-08T20:48:51.003Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c5b4e4bc98cd0d1ee901"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-016",
    gameName: "Speed Baccarat 5",
    img: "PP-LIVE-016.png",
    date: ISODate("2023-10-08T15:07:32.62Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cb33e4bc98cd0d1ee944"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-036",
    gameName: "Roulette 9 - The Club",
    img: "PP-LIVE-036.png",
    date: ISODate("2023-10-08T15:30:59.214Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231864e4bc98cd0d1eeb9d"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-075",
    gameName: "Mighty Hat: Mine O' Mine",
    img: "PT-SLOT-075.png",
    date: ISODate("2023-10-08T21:00:20.796Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318dee4bc98cd0d1eebab"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-086",
    gameName: "The Greatest Cards Show",
    img: "PT-LIVE-086.png",
    date: ISODate("2023-10-08T21:02:22.715Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d68de4bc98cd0d1ee980"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-006",
    gameName: "Eye of the Storm",
    img: "PP-SLOT-006.png",
    date: ISODate("2023-10-08T16:19:25.671Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d7e7e4bc98cd0d1ee999"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-011",
    gameName: "Mysterious Egypt",
    img: "PP-SLOT-011.png",
    date: ISODate("2023-10-08T16:25:11.406Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231918e4bc98cd0d1eebb3"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-019",
    gameName: "Fortune Charm",
    img: "RT-SLOT-019.png",
    date: ISODate("2023-10-08T21:03:20.906Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523209ae4bc98cd0d1eec00"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-045",
    gameName: "Mayan Gods",
    img: "RT-SLOT-045.png",
    date: ISODate("2023-10-08T21:35:22.251Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d8bee4bc98cd0d1ee9ac"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-018",
    gameName: "Christmas Carol Megaways",
    img: "PP-SLOT-018.png",
    date: ISODate("2023-10-08T16:28:46.146Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522da0be4bc98cd0d1ee9c4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-029",
    gameName: "Star Bounty",
    img: "PP-SLOT-029.png",
    date: ISODate("2023-10-08T16:34:19.791Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232207e4bc98cd0d1eec13"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-054",
    gameName: "Ocean Fortune",
    img: "RT-SLOT-054.png",
    date: ISODate("2023-10-08T21:41:27.804Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652326a3e4bc98cd0d1eec39"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-074",
    gameName: "The Equalizer",
    img: "RT-SLOT-074.png",
    date: ISODate("2023-10-08T22:01:07.16Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dc00e4bc98cd0d1ee9e2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-036",
    gameName: "The Dog House Megaways",
    img: "PP-SLOT-036.png",
    date: ISODate("2023-10-08T16:42:40.917Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dc2ae4bc98cd0d1ee9e6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-038",
    gameName: "Street Racer",
    img: "PP-SLOT-038.png",
    date: ISODate("2023-10-08T16:43:22.268Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523284ce4bc98cd0d1eec4f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-085",
    gameName: "Wild Nords",
    img: "RT-SLOT-085.png",
    date: ISODate("2023-10-08T22:08:12.402Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523286de4bc98cd0d1eec51"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-086",
    gameName: "Wild Spartans",
    img: "RT-SLOT-086.png",
    date: ISODate("2023-10-08T22:08:45.098Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dcf5e4bc98cd0d1ee9f1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-040",
    gameName: "Drago-Jewels of Fortune",
    img: "PP-SLOT-040.png",
    date: ISODate("2023-10-08T16:46:45.036Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ddc6e4bc98cd0d1eea05"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-050",
    gameName: "Hot to Burn",
    img: "PP-SLOT-050.png",
    date: ISODate("2023-10-08T16:50:14.978Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232948e4bc98cd0d1eec5d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-092",
    gameName: "Dragon's Luck MegaWays™",
    img: "RT-SLOT-092.png",
    date: ISODate("2023-10-08T22:12:24.72Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232b40e4bc98cd0d1eec75"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-104",
    gameName: "Aurum Codex",
    img: "RT-SLOT-104.png",
    date: ISODate("2023-10-08T22:20:48.483Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dee3e4bc98cd0d1eea1f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-063",
    gameName: "Magic Journey",
    img: "PP-SLOT-063.png",
    date: ISODate("2023-10-08T16:54:59.802Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dfd1e4bc98cd0d1eea2d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-080",
    gameName: "5 Lions Gold",
    img: "PP-SLOT-080.png",
    date: ISODate("2023-10-08T16:58:57.075Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232bede4bc98cd0d1eec7d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-108",
    gameName: "Ancients' Blessing",
    img: "RT-SLOT-108.png",
    date: ISODate("2023-10-08T22:23:41.496Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240327e4bc98cd0d1eed35"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-014",
    gameName: "VR Vietnam-18-5 minute lottery",
    img: "VRLOTTO-LOTTO-014.png",
    date: ISODate("2023-10-09T13:41:59.127Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e076e4bc98cd0d1eea33"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-089",
    gameName: "Golden Pig",
    img: "PP-SLOT-089.png",
    date: ISODate("2023-10-08T17:01:42.811Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e6b7e4bc98cd0d1eea8e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-139",
    gameName: "Dwarven Gold Deluxe",
    img: "PP-SLOT-139.png",
    date: ISODate("2023-10-08T17:28:23.346Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652409c3e4bc98cd0d1eed62"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-002",
    gameName: "Baccarat Speed",
    img: "VN-LIVE-002.png",
    date: ISODate("2023-10-09T14:10:11.245Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652411eae4bc98cd0d1eed9e"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-017",
    gameName: "Sedie",
    img: "MX-LIVE-017.png",
    date: ISODate("2023-10-09T14:44:58.932Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e76be4bc98cd0d1eea98"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-196",
    gameName: "Chicken Drop",
    img: "PP-SLOT-196.png",
    date: ISODate("2023-10-08T17:31:23.548Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244a2b6330ef07b4a522a1"),
    platform: "SPADE",
    gameType: "EGAME",
    gameCode: "SG-EGAME-002",
    gameName: "MonkeyThunderBolt",
    img: "SG-EGAME-002.png",
    date: ISODate("2023-10-09T18:44:59.99Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e845e4bc98cd0d1eea9f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-199",
    gameName: "Chilli Heat Megaways",
    img: "PP-SLOT-199.png",
    date: ISODate("2023-10-08T17:35:01.554Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244a536330ef07b4a522a3"),
    platform: "SPADE",
    gameType: "FH",
    gameCode: "SG-FISH-001",
    gameName: "Fishing God",
    img: "SG-FISH-001.png",
    date: ISODate("2023-10-09T18:45:39.846Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244a856330ef07b4a522a7"),
    platform: "SPADE",
    gameType: "FH",
    gameCode: "SG-FISH-003",
    gameName: "Alien Hunter",
    img: "SG-FISH-003.png",
    date: ISODate("2023-10-09T18:46:29.198Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522eadde4bc98cd0d1eeabc"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-130",
    gameName: "Queen Of Gold",
    img: "PP-SLOT-130.png",
    date: ISODate("2023-10-08T17:46:05.114Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244ce66330ef07b4a522cb"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-021",
    gameName: "BigProsperitySA",
    img: "SG-SLOT-021.png",
    date: ISODate("2023-10-09T18:56:38.937Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230fabe4bc98cd0d1eeaf7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-022",
    gameName: "Deutsches Roulette",
    img: "PT-LIVE-022.png",
    date: ISODate("2023-10-08T20:23:07.042Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ec59dc63d752e8bbfc4e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-040",
    gameName: "GodsKitchen",
    img: "SG-SLOT-040.png",
    date: ISODate("2023-10-10T06:16:57.793Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524edabdc63d752e8bbfc60"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-058",
    gameName: "GoldenWhale",
    img: "SG-SLOT-058.png",
    date: ISODate("2023-10-10T06:22:35.718Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231163e4bc98cd0d1eeb14"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-026",
    gameName: "Golden Macaque",
    img: "PT-SLOT-026.png",
    date: ISODate("2023-10-08T20:30:27.379Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231528e4bc98cd0d1eeb4c"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-054",
    gameName: "Secrets of the Amazon",
    img: "PT-SLOT-054.png",
    date: ISODate("2023-10-08T20:46:32.174Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ee33dc63d752e8bbfc6a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-069",
    gameName: "888",
    img: "SG-SLOT-069.png",
    date: ISODate("2023-10-10T06:24:51.972Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f0b5dc63d752e8bbfc7e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-079",
    gameName: "FierySevens",
    img: "SG-SLOT-079.png",
    date: ISODate("2023-10-10T06:35:33.849Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231540e4bc98cd0d1eeb4e"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-055",
    gameName: "White King",
    img: "PT-SLOT-055.png",
    date: ISODate("2023-10-08T20:46:56.756Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231626e4bc98cd0d1eeb66"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-002",
    gameName: "Arcade Bomb",
    img: "RT-SLOT-002.png",
    date: ISODate("2023-10-08T20:50:46.298Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f112dc63d752e8bbfc86"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-083",
    gameName: "MrChuTycoon",
    img: "SG-SLOT-083.png",
    date: ISODate("2023-10-10T06:37:06.02Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f195dc63d752e8bbfc90"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-088",
    gameName: "MoodieFoodie",
    img: "SG-SLOT-088.png",
    date: ISODate("2023-10-10T06:39:17.335Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523175de4bc98cd0d1eeb80"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-069",
    gameName: "Atlantis Queen",
    img: "PT-SLOT-069.png",
    date: ISODate("2023-10-08T20:55:57.226Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523185de4bc98cd0d1eeb9b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-014",
    gameName: "Epic Journey",
    img: "RT-SLOT-014.png",
    date: ISODate("2023-10-08T21:00:13.979Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f303dc63d752e8bbfca4"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-099",
    gameName: "Wild Wet Win",
    img: "SG-SLOT-099.png",
    date: ISODate("2023-10-10T06:45:23.085Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f388dc63d752e8bbfcae"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-104",
    gameName: "Tiger Dance",
    img: "SG-SLOT-104.png",
    date: ISODate("2023-10-10T06:47:36.444Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652319a9e4bc98cd0d1eebc7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-085",
    gameName: "Jungle Trouble",
    img: "PT-SLOT-085.png",
    date: ISODate("2023-10-08T21:05:45.846Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523260de4bc98cd0d1eec33"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-071",
    gameName: "Sumo Spins",
    img: "RT-SLOT-071.png",
    date: ISODate("2023-10-08T21:58:37.108Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0de7dfaa815deca43d2"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-008",
    gameName: "Dracula",
    img: "DRAGOONSOFT-SLOT-008.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bb87dfaa815deca43e6"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-028",
    gameName: "Zeus",
    img: "DRAGOONSOFT-SLOT-028.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652326c8e4bc98cd0d1eec3b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-075",
    gameName: "The Greatest Train Robbery",
    img: "RT-SLOT-075.png",
    date: ISODate("2023-10-08T22:01:44.815Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652328b3e4bc98cd0d1eec55"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-088",
    gameName: "Winter Wonders",
    img: "RT-SLOT-088.png",
    date: ISODate("2023-10-08T22:09:55.423Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c187dfaa815deca43eb"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-033",
    gameName: "Midas Touch",
    img: "DRAGOONSOFT-SLOT-033.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c1f7dfaa815deca43ed"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-035",
    gameName: "Rich Dragon",
    img: "DRAGOONSOFT-SLOT-035.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232924e4bc98cd0d1eec5b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-091",
    gameName: "Dragon's Fire MegaWays™",
    img: "RT-SLOT-091.png",
    date: ISODate("2023-10-08T22:11:48.346Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232ad4e4bc98cd0d1eec71"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-102",
    gameName: "Zillard King",
    img: "RT-SLOT-102.png",
    date: ISODate("2023-10-08T22:19:00.77Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232b09e4bc98cd0d1eec73"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-103",
    gameName: "777 Strike",
    img: "RT-SLOT-103.png",
    date: ISODate("2023-10-08T22:19:53.013Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240206e4bc98cd0d1eed23"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-004",
    gameName: "VR Baccarat",
    img: "VRLOTTO-LOTTO-004.png",
    date: ISODate("2023-10-09T13:37:10.617Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240366e4bc98cd0d1eed37"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-018",
    gameName: "Hanoi",
    img: "VRLOTTO-LOTTO-018.png",
    date: ISODate("2023-10-09T13:43:02.899Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65241149e4bc98cd0d1eed94"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-009",
    gameName: "Roulette",
    img: "MX-LIVE-009.png",
    date: ISODate("2023-10-09T14:42:17.232Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ec39dc63d752e8bbfc4c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-039",
    gameName: "5FortuneDragons",
    img: "SG-SLOT-039.png",
    date: ISODate("2023-10-10T06:16:25.858Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ec74dc63d752e8bbfc50"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-041",
    gameName: "LuckyKoi",
    img: "SG-SLOT-041.png",
    date: ISODate("2023-10-10T06:17:24.263Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ee92dc63d752e8bbfc70"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-072",
    gameName: "SweetBakery",
    img: "SG-SLOT-072.png",
    date: ISODate("2023-10-10T06:26:26.838Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f013dc63d752e8bbfc74"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-074",
    gameName: "Mega7",
    img: "SG-SLOT-074.png",
    date: ISODate("2023-10-10T06:32:51.921Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f17edc63d752e8bbfc8e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-087",
    gameName: "Rise Of Werewolves",
    img: "SG-SLOT-087.png",
    date: ISODate("2023-10-10T06:38:54.678Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f3d1dc63d752e8bbfcb2"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-106",
    gameName: "Fiery Sevens Exclusive",
    img: "SG-SLOT-106.png",
    date: ISODate("2023-10-10T06:48:49.82Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fcbddc63d752e8bbfcea"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-135",
    gameName: "Big Prosperity",
    img: "SG-SLOT-135.png",
    date: ISODate("2023-10-10T07:26:53.141Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0dc7dfaa815deca43d1"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-007",
    gameName: "Doggy Wealth",
    img: "DRAGOONSOFT-SLOT-007.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f17c7dfaa815deca43dc"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-018",
    gameName: "Rich Lion",
    img: "DRAGOONSOFT-SLOT-018.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c1c7dfaa815deca43ec"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-034",
    gameName: "Fruits Bar",
    img: "DRAGOONSOFT-SLOT-034.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c447dfaa815deca43f7"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-045",
    gameName: "Immortal Heroes",
    img: "DRAGOONSOFT-SLOT-045.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521cd27dfaa815deca4411"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-071",
    gameName: "Party Night",
    img: "DRAGOONSOFT-SLOT-071.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a3e7dfaa815deca441b"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-005",
    gameName: "CAISHEN PARTY",
    img: "JDB-EGAME-005.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a3b7dfaa815deca442f"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-009",
    gameName: "All-star Fishing",
    img: "JILI-FISH-009.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f975d6ffc6bd2c68b64d5"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-013",
    gameName: "Fiery Lava",
    img: "FastSpin-SLOT-013.png",
    date: ISODate("2023-10-06T05:13:01.6Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9f266ffc6bd2c68b6509"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-039",
    gameName: "Leprechaun Bonanza",
    img: "FastSpin-SLOT-039.png",
    date: ISODate("2023-10-06T05:46:14.981Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217a9ae4bc98cd0d1ee484"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-009",
    gameName: "Wild Beauty",
    img: "JDB-SLOT-009.png",
    date: ISODate("2023-10-07T15:34:50.867Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217ba5e4bc98cd0d1ee490"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-015",
    gameName: "Lucky Qilin",
    img: "JDB-SLOT-015.png",
    date: ISODate("2023-10-07T15:39:17.402Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652186f7e4bc98cd0d1ee51a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-067",
    gameName: "Go Lai Fu",
    img: "JDB-SLOT-067.png",
    date: ISODate("2023-10-07T16:27:35.609Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218c3de4bc98cd0d1ee58a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-093",
    gameName: "Lucky Diamond",
    img: "JDB-SLOT-093.png",
    date: ISODate("2023-10-07T16:50:05.208Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218d90e4bc98cd0d1ee5a6"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-101",
    gameName: "BlossomOfWealth",
    img: "JDB-SLOT-101.png",
    date: ISODate("2023-10-07T16:55:44.513Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d94be4bc98cd0d1ee70c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-110",
    gameName: "Elemental Link Fire",
    img: "JDB-SLOT-110.png",
    date: ISODate("2023-10-07T22:18:51.596Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521da13e4bc98cd0d1ee718"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-114",
    gameName: "Fruity Bonanza",
    img: "JDB-SLOT-114.png",
    date: ISODate("2023-10-07T22:22:11.921Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e386e4bc98cd0d1ee768"),
    platform: "LUCKYPOKER",
    gameType: "TABLE",
    gameCode: "LUCKYPOKER-TABLE-008",
    gameName: "Thai Hold'em",
    img: "LUCKYPOKER-TABLE-008.png",
    date: ISODate("2023-10-07T23:02:30.458Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521eed8e4bc98cd0d1ee7c5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-001",
    gameName: "Honey Trap of Diao Chan",
    img: "honey-trap-of-diao-chan-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:50:48.236Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f1e8e4bc98cd0d1ee7f3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-026",
    gameName: "Ganesha Gold",
    img: "ganesha-gold-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:03:52.418Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522272be4bc98cd0d1ee80e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-014",
    gameName: "vn_fish-prawn-crab",
    img: "KM-TABLE-014.png",
    date: ISODate("2023-10-08T03:51:07.538Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222a90e4bc98cd0d1ee82e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-032",
    gameName: "Andar Bahar",
    img: "KM-TABLE-032.png",
    date: ISODate("2023-10-08T04:05:36.328Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222acae4bc98cd0d1ee830"),
    platform: "KINGMAKER",
    gameType: "THAI",
    gameCode: "KM-TABLE-033",
    gameName: "Pai Kang",
    img: "KM-TABLE-033.png",
    date: ISODate("2023-10-08T04:06:34.684Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c2c8e4bc98cd0d1ee8e2"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-004",
    gameName: "Baccarat 5",
    img: "PP-LIVE-004.png",
    date: ISODate("2023-10-08T14:55:04.6Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c345e4bc98cd0d1ee8eb"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-008",
    gameName: "Baccarat 9",
    img: "PP-LIVE-008.png",
    date: ISODate("2023-10-08T14:57:09.003Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cbd9e4bc98cd0d1ee94a"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-038",
    gameName: "Mega Wheel",
    img: "PP-LIVE-038.png",
    date: ISODate("2023-10-08T15:33:45.108Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d7c0e4bc98cd0d1ee997"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-390",
    gameName: "Rainbow Reels",
    img: "PP-SLOT-390.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d7fee4bc98cd0d1ee99d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-012",
    gameName: "Golden Ox",
    img: "PP-SLOT-012.png",
    date: ISODate("2023-10-08T16:25:34.598Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d815e4bc98cd0d1ee99f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-013",
    gameName: "Voodoo Magic",
    img: "PP-SLOT-013.png",
    date: ISODate("2023-10-08T16:25:57.275Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d936e4bc98cd0d1ee9b4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-022",
    gameName: "The Dragon Tiger",
    img: "PP-SLOT-022.png",
    date: ISODate("2023-10-08T16:30:46.876Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9e9e4bc98cd0d1ee9be"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-027",
    gameName: "Rise of Samurai",
    img: "PP-SLOT-027.png",
    date: ISODate("2023-10-08T16:33:45.994Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522da92e4bc98cd0d1ee9ca"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-387",
    gameName: "Cash Chips",
    img: "PP-SLOT-387.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de37e4bc98cd0d1eea0f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-055",
    gameName: "The Wild Machine",
    img: "PP-SLOT-055.png",
    date: ISODate("2023-10-08T16:52:07.747Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522df1de4bc98cd0d1eea25"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-067",
    gameName: "Sweet Bonanza Xmas",
    img: "PP-SLOT-067.png",
    date: ISODate("2023-10-08T16:55:57.335Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522df58e4bc98cd0d1eea2b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-073",
    gameName: "Tree of Riches",
    img: "PP-SLOT-073.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e4cde4bc98cd0d1eea6c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-179",
    gameName: "The Amazing Money Machine",
    img: "PP-SLOT-179.png",
    date: ISODate("2023-10-08T17:20:13.507Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea17e4bc98cd0d1eeaa6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-201",
    gameName: "Cash Bonanza",
    img: "PP-SLOT-201.png",
    date: ISODate("2023-10-08T17:42:47.784Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522eac8e4bc98cd0d1eeab8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-210",
    gameName: "Santa's Wonderland",
    img: "PP-SLOT-210.png",
    date: ISODate("2023-10-08T17:45:44.534Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230df0e4bc98cd0d1eeadb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-006",
    gameName: "Great Blue",
    img: "PT-SLOT-006.png",
    date: ISODate("2023-10-08T20:15:44.138Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f94e4bc98cd0d1eeaf5"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-017",
    gameName: "Buffalo Blitz II",
    img: "PT-SLOT-017.png",
    date: ISODate("2023-10-08T20:22:44.591Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231252e4bc98cd0d1eeb1f"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-031",
    gameName: "Lie Yan Zuan Shi",
    img: "PT-SLOT-031.png",
    date: ISODate("2023-10-08T20:34:26.597Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231344e4bc98cd0d1eeb2f"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-039",
    gameName: "Queen of Wands",
    img: "PT-SLOT-039.png",
    date: ISODate("2023-10-08T20:38:28.985Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523148de4bc98cd0d1eeb42"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-049",
    gameName: "Ji Xiang 8",
    img: "PT-SLOT-049.png",
    date: ISODate("2023-10-08T20:43:57.302Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523198be4bc98cd0d1eebc3"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-022",
    gameName: "Fruit Blox",
    img: "RT-SLOT-022.png",
    date: ISODate("2023-10-08T21:05:15.051Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a42e4bc98cd0d1eebd5"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-027",
    gameName: "Golden Lotus",
    img: "RT-SLOT-027.png",
    date: ISODate("2023-10-08T21:08:18.385Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231adfe4bc98cd0d1eebe1"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-030",
    gameName: "Imperial Palace",
    img: "RT-SLOT-030.png",
    date: ISODate("2023-10-08T21:10:55.903Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232112e4bc98cd0d1eec07"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-048",
    gameName: "Mega Rise",
    img: "RT-SLOT-048.png",
    date: ISODate("2023-10-08T21:37:22.497Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652327abe4bc98cd0d1eec47"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-081",
    gameName: "Treasure Mine",
    img: "RT-SLOT-081.png",
    date: ISODate("2023-10-08T22:05:31.118Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523280de4bc98cd0d1eec4b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-083",
    gameName: "Wild Circus",
    img: "RT-SLOT-083.png",
    date: ISODate("2023-10-08T22:07:09.477Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523282ee4bc98cd0d1eec4d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-084",
    gameName: "Wild Fight",
    img: "RT-SLOT-084.png",
    date: ISODate("2023-10-08T22:07:42.048Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232c11e4bc98cd0d1eec7f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-109",
    gameName: "10,001 Nights MegaWays™",
    img: "RT-SLOT-109.png",
    date: ISODate("2023-10-08T22:24:17.259Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232c56e4bc98cd0d1eec83"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-111",
    gameName: "4 Squad",
    img: "RT-SLOT-111.png",
    date: ISODate("2023-10-08T22:25:26.461Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bdd6e4bc98cd0d1eecee"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-001",
    gameName: "Fruit",
    img: "YL-EGAME-001.png",
    date: ISODate("2023-10-09T08:46:14.844Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523be89e4bc98cd0d1eecf4"),
    platform: "YL",
    gameType: "FH",
    gameCode: "YL-FISH-001",
    gameName: "Fishing 2",
    img: "YL-FISH-001.png",
    date: ISODate("2023-10-09T08:49:13.384Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652404a5e4bc98cd0d1eed4f"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-029",
    gameName: "Quang Ngai",
    img: "VRLOTTO-LOTTO-029.png",
    date: ISODate("2023-10-09T13:48:21.617Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524068de4bc98cd0d1eed5b"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-053",
    gameName: "VR Wan Fu Mark Six",
    img: "VRLOTTO-LOTTO-053.png",
    date: ISODate("2023-10-09T13:56:29.359Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65241102e4bc98cd0d1eed92"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-011",
    gameName: "Teen Patti 2020",
    img: "MX-LIVE-011.png",
    date: ISODate("2023-10-09T14:41:06.375Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65241262e4bc98cd0d1eeda1"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-012",
    gameName: "Extra Andar Bahar",
    img: "MX-LIVE-012.png",
    date: ISODate("2023-10-09T14:46:58.981Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d946330ef07b4a522d7"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-031",
    gameName: "BabyCaiShen",
    img: "SG-SLOT-031.png",
    date: ISODate("2023-10-09T18:59:32.446Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244dbf6330ef07b4a522db"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-033",
    gameName: "Mermaid",
    img: "SG-SLOT-033.png",
    date: ISODate("2023-10-09T19:00:15.159Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ecf3dc63d752e8bbfc56"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-047",
    gameName: "PirateKing",
    img: "SG-SLOT-047.png",
    date: ISODate("2023-10-10T06:19:31.77Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ed7ddc63d752e8bbfc5e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-055",
    gameName: "DaFuXiaoFu",
    img: "SG-SLOT-055.png",
    date: ISODate("2023-10-10T06:21:49.175Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f02ddc63d752e8bbfc76"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-075",
    gameName: "JokersTreasure",
    img: "SG-SLOT-075.png",
    date: ISODate("2023-10-10T06:33:17.474Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f0e6dc63d752e8bbfc82"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-081",
    gameName: "TriplePanda",
    img: "SG-SLOT-081.png",
    date: ISODate("2023-10-10T06:36:22.84Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d51c7dfaa815deca43be"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-002",
    gameName: "Baccarat",
    img: "BG-LIVE-002.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1097dfaa815deca43d8"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-014",
    gameName: "Ultra Treasure",
    img: "DRAGOONSOFT-SLOT-014.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521ba87dfaa815deca43e2"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-024",
    gameName: "Wolf Legend",
    img: "DRAGOONSOFT-SLOT-024.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655242297dfaa815deca4424"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-105",
    gameName: "BookOfMystery",
    img: "JDB-SLOT-105.png",
    date: ISODate("2023-10-07T16:58:46.694Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cb77dfaa815deca445f"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-032",
    gameName: "Matka India",
    img: "JILI-SLOT-032.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cbe7dfaa815deca4461"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-034",
    gameName: "DragonTiger",
    img: "JILI-SLOT-034.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cca7dfaa815deca4464"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-048",
    gameName: "Agent Ace",
    img: "JILI-SLOT-048.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cf27dfaa815deca446e"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-036",
    gameName: "Lucky Number",
    img: "JILI-SLOT-036.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258c57dfaa815deca4497"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-021",
    gameName: "Ludo Quick",
    img: "JILI-TABLE-021.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552682f7dfaa815deca44ba"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-109",
    gameName: "Diner Delights",
    img: "diner-delights-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269de7dfaa815deca44c9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-097",
    gameName: "Rooster Rumble",
    img: "PG-SLOT-097.png",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d047dfaa815deca44da"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-086",
    gameName: "Legendary Monkey King",
    img: "legendary-monkey-king-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d117dfaa815deca44df"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-075",
    gameName: "Wild Bandito",
    img: "wild-bandito-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270a97dfaa815deca44eb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-052",
    gameName: "Ganesha Fortune",
    img: "ganesha-fortune-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273227dfaa815deca4504"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-030",
    gameName: "Double Fortune",
    img: "double-fortune-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527e157dfaa815deca4509"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-057",
    gameName: "PowerUp Roulette",
    img: "PP-LIVE-057.png",
    date: ISODate("2023-10-08T15:48:55.619Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552910c7dfaa815deca452e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-247",
    gameName: "Disco Lady",
    img: "PP-SLOT-247.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292e97dfaa815deca4540"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-256",
    gameName: "Little Gem",
    img: "PP-SLOT-256.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292f77dfaa815deca4547"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-254",
    gameName: "Koi Pond",
    img: "PP-SLOT-254.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299917dfaa815deca455e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-272",
    gameName: "Gorilla Mayhem",
    img: "PP-SLOT-272.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b5c7dfaa815deca4567"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-304",
    gameName: "Big Bass Bonanza Keeping it Reel",
    img: "PP-SLOT-304.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d75c7dfaa815deca4580"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-311",
    gameName: "Hot Pepper",
    img: "PP-SLOT-311.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9417dfaa815deca458d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-342",
    gameName: "Diamonds of Egypt",
    img: "PP-SLOT-342.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9457dfaa815deca458f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-327",
    gameName: "The Dog House Multihold",
    img: "PP-SLOT-327.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d95d7dfaa815deca459b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-328",
    gameName: "Rabbit Garden",
    img: "PP-SLOT-328.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db147dfaa815deca45a7"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-359",
    gameName: "Hellvis Wild",
    img: "PP-SLOT-359.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db167dfaa815deca45a8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-345",
    gameName: "Knight Hot Spotz",
    img: "PP-SLOT-345.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374457dfaa815deca45dd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-039",
    gameName: "VIP Baccarat NC",
    img: "PT-LIVE-039.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375c87dfaa815deca45e6"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-066",
    gameName: "Bucharest French Roulette",
    img: "PT-LIVE-066.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375ef7dfaa815deca45e8"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-067",
    gameName: "Quantum Roulette Live",
    img: "PT-LIVE-067.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375f67dfaa815deca45ec"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-068",
    gameName: "Blackjack 9",
    img: "PT-LIVE-068.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655376087dfaa815deca45f5"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-060",
    gameName: "Roulette Italiana",
    img: "PT-LIVE-060.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553760b7dfaa815deca45f7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-063",
    gameName: "Bucharest Roulette",
    img: "PT-LIVE-063.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ad07dfaa815deca45fc"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-072",
    gameName: "Blackjack 6",
    img: "PT-LIVE-072.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382857dfaa815deca4615"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-133",
    gameName: "Diamond Blitz",
    img: "RT-SLOT-133.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553828e7dfaa815deca461a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-122",
    gameName: "Legend Of Athena",
    img: "RT-SLOT-122.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384667dfaa815deca461d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-158",
    gameName: "Mystery Reels Power Reels",
    img: "RT-SLOT-158.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553847e7dfaa815deca4628"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-152",
    gameName: "Hoard of Poseidon",
    img: "RT-SLOT-152.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384877dfaa815deca462c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-154",
    gameName: "Jingle Bells Power Reels",
    img: "RT-SLOT-154.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387347dfaa815deca462f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-167",
    gameName: "Vault Cracker",
    img: "RT-SLOT-167.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553873f7dfaa815deca4635"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-172",
    gameName: "Blazing Clusters",
    img: "RT-SLOT-172.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387497dfaa815deca463a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-164",
    gameName: "The Wild Hatter",
    img: "RT-SLOT-164.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389717dfaa815deca4649"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-184",
    gameName: "Flodder",
    img: "RT-SLOT-184.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c137dfaa815deca465d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-204",
    gameName: "Reptizillions Power Reels",
    img: "RT-SLOT-204.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c1e7dfaa815deca4663"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-218",
    gameName: "Wild Expedition",
    img: "RT-SLOT-218.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c237dfaa815deca4666"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-212",
    gameName: "Dynamite Riches MW + PowerWheel",
    img: "RT-SLOT-212.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a17d7dfaa815deca468a"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-008",
    gameName: "Heat Bingo",
    img: "YesBingo-BINGO-008.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb59ce955164383cbdd4"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-096",
    gameName: "Korean Speed Baccarat NC",
    img: "PT-LIVE-096.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc99ce955164383cbdda"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-102",
    gameName: "x1000 Quantum Roulette",
    img: "PT-LIVE-102.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc9bce955164383cbddb"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-103",
    gameName: "Blackjack 10",
    img: "PT-LIVE-103.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c387dfaa815deca444d"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-004",
    gameName: "War Of Dragons",
    img: "JILI-SLOT-004.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c467dfaa815deca4450"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-024",
    gameName: "Lucky Goldbricks",
    img: "JILI-SLOT-024.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d017dfaa815deca4471"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-061",
    gameName: "Win Drop",
    img: "JILI-SLOT-061.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d1a7dfaa815deca4474"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-071",
    gameName: "Neko Fortune",
    img: "JILI-SLOT-071.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d1e7dfaa815deca4475"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-081",
    gameName: "Elf Bingo",
    img: "JILI-SLOT-081.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d497dfaa815deca447f"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-078",
    gameName: "Cricket King 18",
    img: "JILI-SLOT-078.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258ee7dfaa815deca44a6"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-014",
    gameName: "Baccarat",
    img: "JILI-TABLE-014.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269c67dfaa815deca44bf"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-094",
    gameName: "Garuda Gems",
    img: "garuda-gems-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269cd7dfaa815deca44c1"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-099",
    gameName: "Battleground Royale",
    img: "battleground-royale-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269d67dfaa815deca44c5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-093",
    gameName: "Fortune Tiger",
    img: "fortune-tiger-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cf87dfaa815deca44d4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-085",
    gameName: "Buffalo Win",
    img: "buffalo-win-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d0e7dfaa815deca44de"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-066",
    gameName: "Jack Frost's Winter",
    img: "jack-frost-s-winter-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552707f7dfaa815deca44ea"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-046",
    gameName: "Shaolin Soccer",
    img: "shaolin-soccer-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273197dfaa815deca4501"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-035",
    gameName: "Dragon Tiger Luck",
    img: "dragon-tiger-luck-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552731b7dfaa815deca4502"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-034",
    gameName: "Captains Bounty",
    img: "captain-s-bounty-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552868e7dfaa815deca4511"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-084",
    gameName: "Pirate Gold",
    img: "PP-SLOT-084.png",
    date: ISODate("2023-10-08T17:00:50.314Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291207dfaa815deca4537"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-238",
    gameName: "Goblin Heist Powernudge",
    img: "PP-SLOT-238.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291257dfaa815deca4539"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-241",
    gameName: "Book of Aztec King",
    img: "PP-SLOT-241.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292f17dfaa815deca4544"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-258",
    gameName: "Cosmic Cash",
    img: "PP-SLOT-258.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b6b7dfaa815deca456f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-288",
    gameName: "Book of Golden Sands",
    img: "PP-SLOT-288.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9607dfaa815deca459d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-325",
    gameName: "Wild West Duels",
    img: "PP-SLOT-325.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd837dfaa815deca45bb"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-373",
    gameName: "Forge of Olympus",
    img: "PP-SLOT-373.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd8f7dfaa815deca45c0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-379",
    gameName: "8 Golden Dragon Challenge",
    img: "PP-SLOT-379.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536c687dfaa815deca45ca"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-010",
    gameName: "Unlimited Blackjack",
    img: "PT-LIVE-010.png",
    date: ISODate("2023-10-08T20:15:14.223Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655373ad7dfaa815deca45d3"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-027",
    gameName: "Spread Bet Roulette",
    img: "PT-LIVE-027.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374d87dfaa815deca45de"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-041",
    gameName: "Blackjack Italiano 1",
    img: "PT-LIVE-041.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374d97dfaa815deca45df"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-042",
    gameName: "Blackjack Italiano 2",
    img: "PT-LIVE-042.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374dd7dfaa815deca45e1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-044",
    gameName: "Deutsches Blackjack",
    img: "PT-LIVE-044.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375ed7dfaa815deca45e7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-057",
    gameName: "Prestige Roulette",
    img: "PT-LIVE-057.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375fd7dfaa815deca45f0"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-051",
    gameName: "Grand Blackjack",
    img: "PT-LIVE-051.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ae27dfaa815deca4601"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-077",
    gameName: "Ruleta Automatica Cuantica",
    img: "PT-LIVE-077.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537af07dfaa815deca4605"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-081",
    gameName: "Ruyi Roulette",
    img: "PT-LIVE-081.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382617dfaa815deca4609"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-129",
    gameName: "Cake and Ice Cream",
    img: "RT-SLOT-129.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553846f7dfaa815deca4621"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-159",
    gameName: "Piggy Riches™ MegaWays™",
    img: "RT-SLOT-159.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384787dfaa815deca4626"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-149",
    gameName: "Golden Leprechaun MegaWays™",
    img: "RT-SLOT-149.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553896b7dfaa815deca4646"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-188",
    gameName: "Majestic Mysteries Power Reels™",
    img: "RT-SLOT-188.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c177dfaa815deca465f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-200",
    gameName: "Harle Coin",
    img: "RT-SLOT-200.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c187dfaa815deca4660"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-207",
    gameName: "Neon Links",
    img: "RT-SLOT-207.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b5f7dfaa815deca4678"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-031",
    gameName: "Ho Chi Minh City",
    img: "VRLOTTO-LOTTO-031.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb56ce955164383cbdd3"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-095",
    gameName: "Korean Speed Baccarat",
    img: "PT-LIVE-095.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d067dfaa815deca44db"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-077",
    gameName: "Heist Stakes",
    img: "heist-stakes-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d167dfaa815deca44e0"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-084",
    gameName: "Supermarket Spree",
    img: "supermarket-spree-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d197dfaa815deca44e1"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-072",
    gameName: "Crypto Gold",
    img: "crypto-gold-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273067dfaa815deca44f8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-044",
    gameName: "Reel Love",
    img: "reel-love-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655286927dfaa815deca4512"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-085",
    gameName: "The Dog House",
    img: "PP-SLOT-085.png",
    date: ISODate("2023-10-08T17:00:50.314Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ae07dfaa815deca452b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-211",
    gameName: "Christmas Big Bass Bonanza",
    img: "PP-SLOT-211.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552997c7dfaa815deca4553"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-275",
    gameName: "Fire Hot 40",
    img: "PP-SLOT-275.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552999d7dfaa815deca4564"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-268",
    gameName: "Shining Hot 40",
    img: "PP-SLOT-268.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b637dfaa815deca456b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-305",
    gameName: "Lucky Fishing Megaways",
    img: "PP-SLOT-305.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7787dfaa815deca458b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-312",
    gameName: "Gates of Aztec",
    img: "PP-SLOT-312.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9487dfaa815deca4591"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-343",
    gameName: "Wild Bison Charge",
    img: "PP-SLOT-343.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db237dfaa815deca45af"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-357",
    gameName: "Heist for the Golden Nuggets",
    img: "PP-SLOT-357.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536bb37dfaa815deca45c8"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-004",
    gameName: "Andar Bahar Live",
    img: "PT-LIVE-004.png",
    date: ISODate("2023-10-08T20:11:02.163Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537adc7dfaa815deca45fe"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-074",
    gameName: "Blackjack 8",
    img: "PT-LIVE-074.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382807dfaa815deca4612"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-123",
    gameName: "Cash Ultimate",
    img: "RT-SLOT-123.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553846d7dfaa815deca4620"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-150",
    gameName: "Golden Tsar",
    img: "RT-SLOT-150.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384707dfaa815deca4622"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-153",
    gameName: "Jewel Scarabs",
    img: "RT-SLOT-153.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387507dfaa815deca463e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-163",
    gameName: "Sylvan Spirits",
    img: "RT-SLOT-163.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c1c7dfaa815deca4662"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-210",
    gameName: "Treasure Mine Power Reels™",
    img: "RT-SLOT-210.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b607dfaa815deca4679"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-038",
    gameName: "Can Tho",
    img: "VRLOTTO-LOTTO-038.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b707dfaa815deca4681"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-036",
    gameName: "Dong Nai",
    img: "VRLOTTO-LOTTO-036.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a33a7dfaa815deca468f"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-002",
    gameName: "MoneyHorse",
    img: "YesBingo-SLOT-002.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a3427dfaa815deca4693"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-001",
    gameName: "FortuneTreasure",
    img: "YesBingo-SLOT-001.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb4fce955164383cbdd1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-093",
    gameName: "Ru Yi Speed Baccarat",
    img: "PT-LIVE-093.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d52d7dfaa815deca43c3"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-007",
    gameName: "MiCardBaccarat",
    img: "BG-LIVE-007.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f10d7dfaa815deca43d9"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-015",
    gameName: "Egypt Oracle",
    img: "DRAGOONSOFT-SLOT-015.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c257dfaa815deca43ee"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-036",
    gameName: "JIN HOU YE",
    img: "DRAGOONSOFT-SLOT-036.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c3a7dfaa815deca43f4"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-042",
    gameName: "Booming Gems",
    img: "DRAGOONSOFT-SLOT-042.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c5d7dfaa815deca43fe"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-052",
    gameName: "Roman",
    img: "DRAGOONSOFT-SLOT-052.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c647dfaa815deca4400"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-054",
    gameName: "Muay Thai",
    img: "DRAGOONSOFT-SLOT-054.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a377dfaa815deca4419"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-011",
    gameName: "Jogo Do Bicho",
    img: "JDB-EGAME-011.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a517dfaa815deca4420"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-008",
    gameName: "Huaguoshan Legends",
    img: "JDB-EGAME-008.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523b6c7dfaa815deca4421"),
    platform: "JDB",
    gameType: "FH",
    gameCode: "JDB-FISH-009",
    gameName: "Shade Dragons Fishing",
    img: "JDB-FISH-009.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bfc7dfaa815deca443e"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-016",
    gameName: "Bao boon chin",
    img: "JILI-SLOT-016.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c3d7dfaa815deca444e"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-083",
    gameName: "Aztec Priestess",
    img: "JILI-SLOT-083.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cdd7dfaa815deca4469"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-058",
    gameName: "Mayan Empire",
    img: "JILI-SLOT-058.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cea7dfaa815deca446c"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-082",
    gameName: "Cricket Sah 75",
    img: "JILI-SLOT-082.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258a57dfaa815deca4489"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-040",
    gameName: "Keno",
    img: "JILI-TABLE-040.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258a77dfaa815deca448a"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-038",
    gameName: "Pusoy Go",
    img: "JILI-TABLE-038.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258ca7dfaa815deca4499"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-011",
    gameName: "7up7down",
    img: "JILI-TABLE-011.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552680d7dfaa815deca44b7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-092",
    gameName: "Oriental Prosperity",
    img: "oriental-prosperity-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269e27dfaa815deca44cb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-098",
    gameName: "The Queen's Banquet",
    img: "the-queen-s-banquet-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269ea7dfaa815deca44cf"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-102",
    gameName: "Speed Winner",
    img: "speed-winner-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cf67dfaa815deca44d3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-071",
    gameName: "Bali Vacation",
    img: "bali-vacation-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270737dfaa815deca44e5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-058",
    gameName: "Treasures of Aztec",
    img: "treasures-of-aztec-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270b87dfaa815deca44f3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-054",
    gameName: "Dream of Macau",
    img: "dreams-of-macau-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527e227dfaa815deca450a"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-056",
    gameName: "PowerUp Roulette",
    img: "8PP-LIVE-056.png",
    date: ISODate("2023-10-08T15:48:55.619Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291147dfaa815deca4531"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-239",
    gameName: "Eye of Cleopatra",
    img: "PP-SLOT-239.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291167dfaa815deca4532"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-248",
    gameName: "Tic Tac Take",
    img: "PP-SLOT-248.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291357dfaa815deca453f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-236",
    gameName: "Barn Festival",
    img: "PP-SLOT-236.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292ed7dfaa815deca4542"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-263",
    gameName: "Coffee Wild",
    img: "PP-SLOT-263.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292fa7dfaa815deca4549"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-250",
    gameName: "Drill that Gold",
    img: "PP-SLOT-250.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655293007dfaa815deca454c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-260",
    gameName: "Mahjong Panda",
    img: "PP-SLOT-260.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299877dfaa815deca4559"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-280",
    gameName: "Wildman Super Bonanza",
    img: "PP-SLOT-280.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552998b7dfaa815deca455b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-283",
    gameName: "MuertosMultiPlierMegaways",
    img: "PP-SLOT-283.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b627dfaa815deca456a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-296",
    gameName: "Aztec Blaze",
    img: "PP-SLOT-296.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b7a7dfaa815deca4577"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-287",
    gameName: "Wild Hop & Drop",
    img: "PP-SLOT-287.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d74f7dfaa815deca4579"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-313",
    gameName: "Fury of Odin Megaways",
    img: "PP-SLOT-313.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db1a7dfaa815deca45aa"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-348",
    gameName: "Sticky Bees",
    img: "PP-SLOT-348.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552e2dc7dfaa815deca45c5"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-114",
    gameName: "Gold Rush",
    img: "PP-SLOT-114.png",
    date: ISODate("2023-10-08T17:10:36.649Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553730d7dfaa815deca45cf"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-017",
    gameName: "Casino HoldÂ´em",
    img: "PT-LIVE-017.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553743f7dfaa815deca45d9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-035",
    gameName: "Speed 6 Scanner Baccarat",
    img: "PT-LIVE-035.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374407dfaa815deca45da"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-036",
    gameName: "VIP Baccarat",
    img: "PT-LIVE-036.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374437dfaa815deca45dc"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-038",
    gameName: "Speed 6 Scanner Baccarat NC",
    img: "PT-LIVE-038.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375f17dfaa815deca45e9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-064",
    gameName: "Turkish Roulette",
    img: "PT-LIVE-064.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382787dfaa815deca460e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-140",
    gameName: "Pirates' Plenty",
    img: "RT-SLOT-140.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382877dfaa815deca4616"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-157",
    gameName: "Lucky Oktoberfest",
    img: "RT-SLOT-157.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553847c7dfaa815deca4627"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-145",
    gameName: "Clash of the Beasts",
    img: "RT-SLOT-145.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387377dfaa815deca4631"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-174",
    gameName: "Get the Gold INFINIREELS™",
    img: "RT-SLOT-174.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389677dfaa815deca4643"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-196",
    gameName: "Lucky Little Devil",
    img: "RT-SLOT-196.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655396dd7dfaa815deca466b"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-139",
    gameName: "Clash of the Giants",
    img: "SG-SLOT-139.png",
    date: ISODate("2023-10-10T07:28:19.271Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b697dfaa815deca467e"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-033",
    gameName: "Thanh pho Ca Mau",
    img: "VRLOTTO-LOTTO-033.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a3447dfaa815deca4694"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-007",
    gameName: "FaFaDragon",
    img: "YesBingo-SLOT-007.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a5ec7dfaa815deca4695"),
    platform: "YL",
    gameType: "FH",
    gameCode: "YL-FISH-002",
    gameName: "Shark Hunter",
    img: "YL-FISH-002.png",
    date: ISODate("2023-10-09T08:49:13.384Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a5ee7dfaa815deca4696"),
    platform: "YL",
    gameType: "FH",
    gameCode: "YL-FISH-003",
    gameName: "New Season Fishing",
    img: "YL-FISH-003.png",
    date: ISODate("2023-10-09T08:49:13.384Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb47ce955164383cbdd0"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-092",
    gameName: "Japanese Squeeze Baccarat NC",
    img: "PT-LIVE-092.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb54ce955164383cbdd2"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-094",
    gameName: "Ru Yi Speed Baccarat NC",
    img: "PT-LIVE-094.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cb37dfaa815deca445e"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-042",
    gameName: "Golden Empire",
    img: "JILI-SLOT-042.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cd97dfaa815deca4468"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-070",
    gameName: "Samba",
    img: "JILI-SLOT-070.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cfb7dfaa815deca4470"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-076",
    gameName: "Fortune Gems 2",
    img: "JILI-SLOT-076.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d227dfaa815deca4476"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-080",
    gameName: "Golden Temple",
    img: "JILI-SLOT-080.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258a17dfaa815deca4487"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-032",
    gameName: "HILO",
    img: "JILI-TABLE-032.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258ab7dfaa815deca448c"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-048",
    gameName: "Pool Rummy",
    img: "JILI-TABLE-048.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258fe7dfaa815deca44ac"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-004",
    gameName: "Rummy",
    img: "JILI-TABLE-004.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655268047dfaa815deca44b6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-116",
    gameName: "Songkran Splash",
    img: "songkran-splash-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269d17dfaa815deca44c3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-096",
    gameName: "Butterfly Blossom",
    img: "butterfly-blossom-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270777dfaa815deca44e7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-050",
    gameName: "Mahjong Ways 2",
    img: "mahjong-ways-2-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270ab7dfaa815deca44ec"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-060",
    gameName: "Thai River Wonders",
    img: "thai-river-wonders-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270b67dfaa815deca44f2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-045",
    gameName: "Gem Saviour Conquest",
    img: "gem-saviour-conquest-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273147dfaa815deca44ff"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-037",
    gameName: "Journey To The Wealth",
    img: "journey-to-the-wealth-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528abc7dfaa815deca451b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-228",
    gameName: "Elemental Gems Megaways",
    img: "PP-SLOT-228.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528abf7dfaa815deca451c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-225",
    gameName: "Wild Depths",
    img: "PP-SLOT-225.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291187dfaa815deca4533"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-242",
    gameName: "Bull Fiesta",
    img: "PP-SLOT-242.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655293027dfaa815deca454d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-284",
    gameName: "CrownofFire",
    img: "PP-SLOT-284.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552930d7dfaa815deca4552"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-255",
    gameName: "Cleocatra",
    img: "PP-SLOT-255.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552998f7dfaa815deca455d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-276",
    gameName: "Fire Hot 100",
    img: "PP-SLOT-276.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b6c7dfaa815deca4570"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-295",
    gameName: "Santa's Great Gifts",
    img: "PP-SLOT-295.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b6e7dfaa815deca4571"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-291",
    gameName: "John Hunter & the Book of Tut Respin",
    img: "PP-SLOT-291.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b727dfaa815deca4573"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-322",
    gameName: "Fire Archer",
    img: "PP-SLOT-322.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7537dfaa815deca457b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-320",
    gameName: "Gatot Kaca's Fury",
    img: "PP-SLOT-320.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7637dfaa815deca4583"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-314",
    gameName: "Mammoth Gold Megaways",
    img: "PP-SLOT-314.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d95b7dfaa815deca459a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-335",
    gameName: "African Elephant",
    img: "PP-SLOT-335.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382897dfaa815deca4617"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-132",
    gameName: "Viral Spiral",
    img: "RT-SLOT-132.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387367dfaa815deca4630"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-177",
    gameName: "Doggy Riches Megaways™",
    img: "RT-SLOT-177.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553873b7dfaa815deca4633"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-169",
    gameName: "Well Of Wishes",
    img: "RT-SLOT-169.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387407dfaa815deca4636"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-165",
    gameName: "Thor's Veneance",
    img: "RT-SLOT-165.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389737dfaa815deca464a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-194",
    gameName: "Mystery Reels Deluxe",
    img: "RT-SLOT-194.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a8e7dfaa815deca4670"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-047",
    gameName: "Tien Giang",
    img: "VRLOTTO-LOTTO-047.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a9c7dfaa815deca4677"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-045",
    gameName: "Binh Phc",
    img: "VRLOTTO-LOTTO-045.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65542d687dfaa815deca4698"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-087",
    gameName: "Fortune Monkey",
    img: "JILI-SLOT-087.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb5dce955164383cbdd6"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-098",
    gameName: "Baccarat Brasileira NC",
    img: "PT-LIVE-098.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c2c7dfaa815deca444a"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-023",
    gameName: "GoldenBank",
    img: "JILI-SLOT-023.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c2f7dfaa815deca444b"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-056",
    gameName: "Happy Taxi",
    img: "JILI-SLOT-056.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c337dfaa815deca444c"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-050",
    gameName: "Medusa",
    img: "JILI-SLOT-050.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c657dfaa815deca4457"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-073",
    gameName: "Pirate Queen",
    img: "JILI-SLOT-073.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d3a7dfaa815deca447c"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-045",
    gameName: "Crazy Hunter",
    img: "JILI-SLOT-045.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258a97dfaa815deca448b"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-037",
    gameName: "Mines Gold",
    img: "JILI-TABLE-037.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258d27dfaa815deca449c"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-024",
    gameName: "Jackpot Bingo",
    img: "JILI-TABLE-024.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258d87dfaa815deca449e"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-027",
    gameName: "Golden Land",
    img: "JILI-TABLE-027.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655267ef7dfaa815deca44b4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-113",
    gameName: "Rave Party Fever",
    img: "rave-party-fever-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d1d7dfaa815deca44e3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-079",
    gameName: "Jurassic Kingdom",
    img: "jurassic-kingdom-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273087dfaa815deca44f9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-043",
    gameName: "Fortune Mouse",
    img: "fortune-mouse-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ad07dfaa815deca4525"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-215",
    gameName: "Hockey Attack",
    img: "PP-SLOT-215.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552912f7dfaa815deca453d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-243",
    gameName: "Might of Ra",
    img: "PP-SLOT-243.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292f97dfaa815deca4548"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-264",
    gameName: "Cheeky Emperor",
    img: "PP-SLOT-264.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655293097dfaa815deca4550"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-262",
    gameName: "Tropical Tiki",
    img: "PP-SLOT-262.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552930b7dfaa815deca4551"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-249",
    gameName: "Queenie",
    img: "PP-SLOT-249.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299847dfaa815deca4557"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-277",
    gameName: "Greedy Wolf",
    img: "PP-SLOT-277.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b747dfaa815deca4574"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-297",
    gameName: "Startlight Christmas",
    img: "PP-SLOT-297.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b767dfaa815deca4575"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-290",
    gameName: "Spin & Score Megaways",
    img: "PP-SLOT-290.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d75a7dfaa815deca457f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-318",
    gameName: "Monster Superlanche",
    img: "PP-SLOT-318.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7697dfaa815deca4585"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-317",
    gameName: "Pinup Girls",
    img: "PP-SLOT-317.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db1c7dfaa815deca45ab"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-355",
    gameName: "Fat Panda",
    img: "PP-SLOT-355.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db297dfaa815deca45b2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-364",
    gameName: "Starlight Princess 1000",
    img: "PP-SLOT-364.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dcd47dfaa815deca45b4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-367",
    gameName: "Diamond Cascade",
    img: "PP-SLOT-367.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dcd67dfaa815deca45b5"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-368",
    gameName: "Mustang Trail",
    img: "PP-SLOT-368.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553730b7dfaa815deca45ce"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-016",
    gameName: "3 Card Brag",
    img: "PT-LIVE-016.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553737f7dfaa815deca45d1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-024",
    gameName: "Football Roulette",
    img: "PT-LIVE-024.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374e47dfaa815deca45e5"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-048",
    gameName: "Soiree Elite Blackjack 1",
    img: "PT-LIVE-048.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537aec7dfaa815deca4603"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-079",
    gameName: "Quantum Ruleta España",
    img: "PT-LIVE-079.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553848d7dfaa815deca462e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-147",
    gameName: "Eagle Riches",
    img: "RT-SLOT-147.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389867dfaa815deca4653"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-179",
    gameName: "Cash or Nothing",
    img: "RT-SLOT-179.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c207dfaa815deca4664"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-209",
    gameName: "The Wisecrecker Lightning",
    img: "RT-SLOT-209.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b627dfaa815deca467a"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-034",
    gameName: "Thanh pho Vung Tau",
    img: "VRLOTTO-LOTTO-034.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a1787dfaa815deca4687"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-005",
    gameName: "Atlantis",
    img: "YesBingo-BINGO-005.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a33f7dfaa815deca4692"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-008",
    gameName: "MagicLamp",
    img: "YesBingo-SLOT-008.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552589d7dfaa815deca4485"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-041",
    gameName: "Plinko",
    img: "JILI-TABLE-041.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258b47dfaa815deca4490"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-043",
    gameName: "Candyland Bingo",
    img: "JILI-TABLE-043.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258be7dfaa815deca4494"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-022",
    gameName: "Go Goal Bingo",
    img: "JILI-TABLE-022.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552672c7dfaa815deca44b3"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-124",
    gameName: "Ninja Raccoon Frenzy",
    img: "ninja-raccoon-frenzy-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:23:16.409Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269d87dfaa815deca44c6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-107",
    gameName: "Totem WOnders",
    img: "totem-wonders-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269dc7dfaa815deca44c8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-104",
    gameName: "Wild Coaster",
    img: "wild-coaster-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d007dfaa815deca44d8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-081",
    gameName: "Mermaid Riches",
    img: "mermaid-riches-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d1b7dfaa815deca44e2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-087",
    gameName: "Spirited Wonders",
    img: "spirited-wonders-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270bc7dfaa815deca44f5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-051",
    gameName: "Egypt's Book of Mystery",
    img: "egypt-s-book-of-mystery-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552730a7dfaa815deca44fa"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-042",
    gameName: "Dragon Hatch",
    img: "dragon-hatch-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655285547dfaa815deca450f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-077",
    gameName: "John Hunter and the Aztec Treasure",
    img: "PP-SLOT-077.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655286967dfaa815deca4513"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-086",
    gameName: "Egyptian Fortunes",
    img: "PP-SLOT-086.png",
    date: ISODate("2023-10-08T17:00:50.314Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655287997dfaa815deca4517"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-122",
    gameName: "Pixie Wings",
    img: "PP-SLOT-122.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528acd7dfaa815deca4523"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-212",
    gameName: "Book of Fallen",
    img: "PP-SLOT-212.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655293057dfaa815deca454e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-259",
    gameName: "Bomb Bonanza",
    img: "PP-SLOT-259.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b5d7dfaa815deca4568"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-301",
    gameName: "Gems of Serengeti",
    img: "PP-SLOT-301.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9627dfaa815deca459e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-331",
    gameName: "Moonshot",
    img: "PP-SLOT-331.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655373af7dfaa815deca45d4"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-028",
    gameName: "Mega Fire Blaze Roulette Live",
    img: "PT-LIVE-028.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655373b37dfaa815deca45d6"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-030",
    gameName: "Bet On Dragon Tiger Live",
    img: "PT-LIVE-030.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374427dfaa815deca45db"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-037",
    gameName: "Grand Baccarat NC",
    img: "PT-LIVE-037.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375f57dfaa815deca45eb"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-059",
    gameName: "Roleta Brasileira",
    img: "PT-LIVE-059.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655376037dfaa815deca45f3"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-061",
    gameName: "Auto Roulette",
    img: "PT-LIVE-061.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382767dfaa815deca460d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-131",
    gameName: "Age Of Akkadia",
    img: "RT-SLOT-131.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553828d7dfaa815deca4619"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-135",
    gameName: "Mystic Staxx",
    img: "RT-SLOT-135.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a607dfaa815deca466e"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-023",
    gameName: "Da Nang",
    img: "VRLOTTO-LOTTO-023.png",
    date: ISODate("2023-10-09T13:45:27.186Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a987dfaa815deca4675"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-042",
    gameName: "Vinh Long",
    img: "VRLOTTO-LOTTO-042.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a0e97dfaa815deca4686"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-004",
    gameName: "BingoBingo",
    img: "YesBingo-BINGO-004.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bae2ce955164383cbdcf"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-091",
    gameName: "Japanese Squeeze Baccarat",
    img: "PT-LIVE-091.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc9dce955164383cbddc"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-104",
    gameName: "Blackjack 11",
    img: "PT-LIVE-104.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bca0ce955164383cbdde"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-106",
    gameName: "Mega Fire Blaze Blackjack Live",
    img: "PT-LIVE-106.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c737dfaa815deca4404"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-058",
    gameName: "Give You Money",
    img: "DRAGOONSOFT-SLOT-058.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c777dfaa815deca4405"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-059",
    gameName: "Rich Ox",
    img: "DRAGOONSOFT-SLOT-059.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c8d7dfaa815deca440b"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-065",
    gameName: "Buffalo Burst",
    img: "DRAGOONSOFT-SLOT-065.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a2e7dfaa815deca4417"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-006",
    gameName: "King Of Football",
    img: "JDB-EGAME-006.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655242fc7dfaa815deca4426"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-118",
    gameName: "Boom Fiesta",
    img: "JDB-SLOT-118.png",
    date: ISODate("2023-10-07T22:24:10.756Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a367dfaa815deca442d"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-007",
    gameName: "Mega Fishing",
    img: "JILI-FISH-007.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bcf7dfaa815deca4436"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-020",
    gameName: "Candy Baby",
    img: "JILI-SLOT-020.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c247dfaa815deca4448"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-052",
    gameName: "Thor X",
    img: "JILI-SLOT-052.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c4f7dfaa815deca4452"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-017",
    gameName: "Crazy FaFaFa",
    img: "JILI-SLOT-017.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c617dfaa815deca4456"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-013",
    gameName: "SevenSevenSeven",
    img: "JILI-SLOT-013.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cd17dfaa815deca4466"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-039",
    gameName: "Secret Treasure",
    img: "JILI-SLOT-039.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d137dfaa815deca4472"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-075",
    gameName: "Wild Ace",
    img: "JILI-SLOT-075.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258b07dfaa815deca448e"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-045",
    gameName: "Magic Lamp Bingo",
    img: "JILI-TABLE-045.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258e37dfaa815deca44a2"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-028",
    gameName: "PAPPU",
    img: "JILI-TABLE-028.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258e67dfaa815deca44a3"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-019",
    gameName: "Bingo Carnaval",
    img: "JILI-TABLE-019.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258f77dfaa815deca44a9"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-002",
    gameName: "AK47",
    img: "JILI-TABLE-002.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552730e7dfaa815deca44fc"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-040",
    gameName: "Ninja vs Samurai",
    img: "ninja-vs-samurai-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273127dfaa815deca44fe"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-038",
    gameName: "Leprechaun Riches",
    img: "leprechaun-riches-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552854d7dfaa815deca450c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-074",
    gameName: "The Great Chicken Escape",
    img: "PP-SLOT-074.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655287977dfaa815deca4516"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-116",
    gameName: "Panda's Fortune",
    img: "PP-SLOT-116.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552911c7dfaa815deca4535"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-245",
    gameName: "Sugar Rush",
    img: "PP-SLOT-245.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552998d7dfaa815deca455c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-269",
    gameName: "Shining Hot 20",
    img: "PP-SLOT-269.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299927dfaa815deca455f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-279",
    gameName: "Floating Dragon Megaways",
    img: "PP-SLOT-279.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7517dfaa815deca457a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-323",
    gameName: "Wild WIld Riches Megaways",
    img: "PP-SLOT-323.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7587dfaa815deca457e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-324",
    gameName: "Peak Power",
    img: "PP-SLOT-324.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db0a7dfaa815deca45a2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-346",
    gameName: "Zeus vs Hades - Gods of War",
    img: "PP-SLOT-346.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db177dfaa815deca45a9"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-352",
    gameName: "Pirates Pub",
    img: "PP-SLOT-352.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd7d7dfaa815deca45b9"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-371",
    gameName: "Pub Kings",
    img: "PP-SLOT-371.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536c707dfaa815deca45cb"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-011",
    gameName: "Adventures Beyond Wonderland",
    img: "PT-LIVE-011.png",
    date: ISODate("2023-10-08T20:15:14.223Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655376017dfaa815deca45f2"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-054",
    gameName: "Soho All Bets Blackjack",
    img: "PT-LIVE-054.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553760f7dfaa815deca45f9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-056",
    gameName: "Hindi Roulette",
    img: "PT-LIVE-056.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ad27dfaa815deca45fd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-073",
    gameName: "Blackjack 7",
    img: "PT-LIVE-073.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553827a7dfaa815deca460f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-134",
    gameName: "Crystal Mirror",
    img: "RT-SLOT-134.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384697dfaa815deca461f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-143",
    gameName: "Bombuster",
    img: "RT-SLOT-143.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384767dfaa815deca4625"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-142",
    gameName: "Belty, Boris and Boo",
    img: "RT-SLOT-142.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384857dfaa815deca462b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-144",
    gameName: "Cirque De La Fortune",
    img: "RT-SLOT-144.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387457dfaa815deca4638"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-161",
    gameName: "Regal Beasts",
    img: "RT-SLOT-161.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553897b7dfaa815deca464e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-190",
    gameName: "Bass Boss",
    img: "RT-SLOT-190.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538be27dfaa815deca4655"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-215",
    gameName: "Lion's Hoard",
    img: "RT-SLOT-215.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a907dfaa815deca4671"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-044",
    gameName: "Tra Vinh",
    img: "VRLOTTO-LOTTO-044.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a0e77dfaa815deca4685"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-003",
    gameName: "BingoBonanza",
    img: "YesBingo-BINGO-003.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65578772aecd3583e2735782"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-127",
    gameName: "Forge of Wealth",
    img: "PG-SLOT-127.png",
    date: ISODate("2023-11-20T09:00:00.000Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb5bce955164383cbdd5"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-097",
    gameName: "Baccarat Brasileira",
    img: "PT-LIVE-097.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc9fce955164383cbddd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-105",
    gameName: "Blackjack 12",
    img: "PT-LIVE-105.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f93e16ffc6bd2c68b64bb"),
    platform: "FASTSPIN",
    gameType: "FH",
    gameCode: "FastSpin-FISH-001",
    gameName: "Fishing Treasure",
    img: "FastSpin-FISH-001.png",
    date: ISODate("2023-10-06T04:58:09.011Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f941d6ffc6bd2c68b64bd"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-001",
    gameName: "Royale House",
    img: "FastSpin-SLOT-001.png",
    date: ISODate("2023-10-06T04:59:09.263Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ede9e4bc98cd0d1ee3cd"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-003",
    gameName: "HOT POT PARTY",
    img: "FC-SLOT-003.png",
    date: ISODate("2023-10-07T05:34:33.334Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ee6be4bc98cd0d1ee3d3"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-006",
    gameName: "PANDA DRAGON BOAT",
    img: "FC-SLOT-006.png",
    date: ISODate("2023-10-07T05:36:43.893Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217ecce4bc98cd0d1ee4b6"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-031",
    gameName: "Billionaire",
    img: "JDB-SLOT-031.png",
    date: ISODate("2023-10-07T15:52:44.899Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217f97e4bc98cd0d1ee4c9"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-035",
    gameName: "RollingIn Money",
    img: "JDB-SLOT-035.png",
    date: ISODate("2023-10-07T15:56:07.735Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652183ffe4bc98cd0d1ee4fd"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-055",
    gameName: "Panda Panda",
    img: "JDB-SLOT-055.png",
    date: ISODate("2023-10-07T16:14:55.282Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652188f2e4bc98cd0d1ee540"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-077",
    gameName: "Super Niubi Deluxe",
    img: "JDB-SLOT-077.png",
    date: ISODate("2023-10-07T16:36:02.04Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521da8ae4bc98cd0d1ee722"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-120",
    gameName: "Pop Pop Candy",
    img: "JDB-SLOT-120.png",
    date: ISODate("2023-10-07T22:24:10.756Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ea56e4bc98cd0d1ee79e"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-018",
    gameName: "Ice Land",
    img: "P8-SLOT-018.png",
    date: ISODate("2023-10-07T23:31:34.961Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521eb4de4bc98cd0d1ee7a2"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-023",
    gameName: "BigProsperity",
    img: "P8-SLOT-023.png",
    date: ISODate("2023-10-07T23:35:41.324Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521eef9e4bc98cd0d1ee7c7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-002",
    gameName: "Gem Saviour",
    img: "gem-saviour-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:51:21.67Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222e03e4bc98cd0d1ee850"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-049",
    gameName: "5 Card Poker",
    img: "KM-TABLE-049.png",
    date: ISODate("2023-10-08T04:20:19.378Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c13ae4bc98cd0d1ee8c8"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-004",
    gameName: "Fantastic League",
    img: "PP-EGAME-004.png",
    date: ISODate("2023-10-08T14:48:26.791Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c60ce4bc98cd0d1ee907"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-019",
    gameName: "Speed Baccarat 8",
    img: "PP-LIVE-019.png",
    date: ISODate("2023-10-08T15:09:00.525Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d389e4bc98cd0d1ee96b"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-060",
    gameName: "Speed Auto-Roulette 1",
    img: "PP-LIVE-060.png",
    date: ISODate("2023-10-08T16:06:33.056Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d9bfe4bc98cd0d1ee9ba"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-025",
    gameName: "Gems Bonanza",
    img: "PP-SLOT-025.png",
    date: ISODate("2023-10-08T16:33:03.124Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de80e4bc98cd0d1eea17"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-384",
    gameName: "Infective Wild",
    img: "PP-SLOT-384.png",
    date: ISODate("2023-10-08T16:53:20.283Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522def6e4bc98cd0d1eea21"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-064",
    gameName: "Money Mouse",
    img: "PP-SLOT-064.png",
    date: ISODate("2023-10-08T16:55:18.002Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522df46e4bc98cd0d1eea29"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-072",
    gameName: "John Hunter and the Tomb of the Scarab Queen",
    img: "PP-SLOT-072.png",
    date: ISODate("2023-10-08T16:56:38.968Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e3e0e4bc98cd0d1eea54"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-164",
    gameName: "Triple Tigers",
    img: "PP-SLOT-164.png",
    date: ISODate("2023-10-08T17:16:16.763Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e552e4bc98cd0d1eea76"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-184",
    gameName: "Dragon Hot Hold and Spin",
    img: "PP-SLOT-184.png",
    date: ISODate("2023-10-08T17:22:26.909Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522eadae4bc98cd0d1eeaba"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-227",
    gameName: "Gold Party",
    img: "PP-SLOT-227.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230ea9e4bc98cd0d1eeae5"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-011",
    gameName: "Highway Kings",
    img: "PT-SLOT-011.png",
    date: ISODate("2023-10-08T20:18:49.954Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652310f3e4bc98cd0d1eeb0c"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-023",
    gameName: "Chaoji 888",
    img: "PT-SLOT-023.png",
    date: ISODate("2023-10-08T20:28:35.722Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523163be4bc98cd0d1eeb68"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-064",
    gameName: "Wild Gambler",
    img: "PT-SLOT-064.png",
    date: ISODate("2023-10-08T20:51:07.861Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231844e4bc98cd0d1eeb99"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-074",
    gameName: "Fire Blaze Quattro: Celtic Charm",
    img: "PT-SLOT-074.png",
    date: ISODate("2023-10-08T20:59:48.69Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523188ae4bc98cd0d1eeba1"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-015",
    gameName: "Esqueleto Mariachi",
    img: "RT-SLOT-015.png",
    date: ISODate("2023-10-08T21:00:58.149Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523198ee4bc98cd0d1eebc5"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-084",
    gameName: "Sacred Stones",
    img: "PT-SLOT-084.png",
    date: ISODate("2023-10-08T21:05:18.165Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652321bde4bc98cd0d1eec0f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-052",
    gameName: "Mystic Wheel",
    img: "RT-SLOT-052.png",
    date: ISODate("2023-10-08T21:40:13.506Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652322a8e4bc98cd0d1eec1b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-059",
    gameName: "Puss'n Boots",
    img: "RT-SLOT-059.png",
    date: ISODate("2023-10-08T21:44:08.766Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652323f8e4bc98cd0d1eec21"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-062",
    gameName: "Reactor",
    img: "RT-SLOT-062.png",
    date: ISODate("2023-10-08T21:49:44.22Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523265fe4bc98cd0d1eec35"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-072",
    gameName: "Golden Temple",
    img: "RT-SLOT-072.png",
    date: ISODate("2023-10-08T21:59:59.2Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232769e4bc98cd0d1eec43"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-079",
    gameName: "Totem Lightning",
    img: "RT-SLOT-079.png",
    date: ISODate("2023-10-08T22:04:25.186Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523b982e4bc98cd0d1eecda"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-004",
    gameName: "Forest Dance",
    img: "YL-EGAME-004.png",
    date: ISODate("2023-10-09T08:27:46.786Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652402ace4bc98cd0d1eed29"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-010",
    gameName: "VR Vietnam-27-1.5 minute lottery",
    img: "VRLOTTO-LOTTO-010.png",
    date: ISODate("2023-10-09T13:39:56.908Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240435e4bc98cd0d1eed47"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-025",
    gameName: "Binh Dinh",
    img: "VRLOTTO-LOTTO-025.png",
    date: ISODate("2023-10-09T13:46:29.527Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524046ae4bc98cd0d1eed4b"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-027",
    gameName: "Gia Lai",
    img: "VRLOTTO-LOTTO-027.png",
    date: ISODate("2023-10-09T13:47:22.652Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240a04e4bc98cd0d1eed66"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-006",
    gameName: "DragonTiger",
    img: "VN-LIVE-006.png",
    date: ISODate("2023-10-09T14:11:16.499Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240a32e4bc98cd0d1eed6a"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-008",
    gameName: "FishPrawnCrab",
    img: "VN-LIVE-008.png",
    date: ISODate("2023-10-09T14:12:02.517Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240e70e4bc98cd0d1eed86"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-016",
    gameName: "Golden Bunny",
    img: "YesBingo-SLOT-016.png",
    date: ISODate("2023-10-09T14:30:08.481Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652411ace4bc98cd0d1eed99"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-015",
    gameName: "Thai Fish Prawn Crab",
    img: "MX-LIVE-015.png",
    date: ISODate("2023-10-09T14:43:56.763Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b2c6330ef07b4a522af"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-003",
    gameName: "FaFaFa2",
    img: "SG-SLOT-003.png",
    date: ISODate("2023-10-09T18:49:16.713Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b4b6330ef07b4a522b1"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-005",
    gameName: "PrincessWang",
    img: "SG-SLOT-005.png",
    date: ISODate("2023-10-09T18:49:47.089Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b676330ef07b4a522b3"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-006",
    gameName: "WowProsperity",
    img: "SG-SLOT-006.png",
    date: ISODate("2023-10-09T18:50:15.641Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f045dc63d752e8bbfc78"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-076",
    gameName: "DoubleFlame",
    img: "SG-SLOT-076.png",
    date: ISODate("2023-10-10T06:33:41.972Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f0fcdc63d752e8bbfc84"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-082",
    gameName: "GoldPanther",
    img: "SG-SLOT-082.png",
    date: ISODate("2023-10-10T06:36:44.142Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f36adc63d752e8bbfcac"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-103",
    gameName: "Sexy Vegas",
    img: "SG-SLOT-103.png",
    date: ISODate("2023-10-10T06:47:06.243Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f3b5dc63d752e8bbfcb0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-105",
    gameName: "Royale House",
    img: "SG-SLOT-105.png",
    date: ISODate("2023-10-10T06:48:21.806Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f5abdc63d752e8bbfcc4"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-115",
    gameName: "Sugar Party",
    img: "SG-SLOT-115.png",
    date: ISODate("2023-10-10T06:56:43.854Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fc16dc63d752e8bbfcde"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-129",
    gameName: "Wong Choy",
    img: "SG-SLOT-129.png",
    date: ISODate("2023-10-10T07:24:06.917Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5287dfaa815deca43c1"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-005",
    gameName: "Dragontiger",
    img: "BG-LIVE-005.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5367dfaa815deca43c7"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-011",
    gameName: "RedBlack",
    img: "BG-LIVE-011.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5397dfaa815deca43c8"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-012",
    gameName: "SpeedSicBo",
    img: "BG-LIVE-012.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0cf7dfaa815deca43cc"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-002",
    gameName: "Phoenix",
    img: "DRAGOONSOFT-SLOT-002.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521ba27dfaa815deca43e0"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-022",
    gameName: "Get High",
    img: "DRAGOONSOFT-SLOT-022.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a317dfaa815deca4418"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-007",
    gameName: "Super Super Fruit",
    img: "JDB-EGAME-007.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258b27dfaa815deca448f"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-036",
    gameName: "Wheel",
    img: "JILI-TABLE-036.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258e17dfaa815deca44a1"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-018",
    gameName: "Super Bingo",
    img: "JILI-TABLE-018.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258e97dfaa815deca44a4"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-025",
    gameName: "Tongits Go",
    img: "JILI-TABLE-025.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655259037dfaa815deca44ae"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-006",
    gameName: "Poker King",
    img: "JILI-TABLE-006.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655259087dfaa815deca44b0"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-008",
    gameName: "iRich Bingo",
    img: "JILI-TABLE-008.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655267247dfaa815deca44b2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-125",
    gameName: "Ultimate Striker",
    img: "ultimate-striker-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:23:16.409Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269e07dfaa815deca44ca"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-089",
    gameName: "Emoji Riches",
    img: "emoji-riches-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269e87dfaa815deca44ce"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-117",
    gameName: "Mystical Spirits",
    img: "mystical-spirits-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f97e56ffc6bd2c68b64d9"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-015",
    gameName: "Legend of Eagle",
    img: "FastSpin-SLOT-015.png",
    date: ISODate("2023-10-06T05:15:17.964Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f97976ffc6bd2c68b64d7"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-014",
    gameName: "God of Wealth",
    img: "FastSpin-SLOT-014.png",
    date: ISODate("2023-10-06T05:13:59.528Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f95d66ffc6bd2c68b64cb"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-008",
    gameName: "Muay Thai Fighter",
    img: "FastSpin-SLOT-008.png",
    date: ISODate("2023-10-06T05:06:30.521Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f950d6ffc6bd2c68b64c3"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-004",
    gameName: "Gold Rush Cowboy",
    img: "FastSpin-SLOT-004.png",
    date: ISODate("2023-10-06T05:03:09.091Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f99136ffc6bd2c68b64e5"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-021",
    gameName: "Oceanic Melodies",
    img: "FastSpin-SLOT-021.png",
    date: ISODate("2023-10-06T05:20:19.069Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f99476ffc6bd2c68b64e7"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-022",
    gameName: "The Maya Myth",
    img: "FastSpin-SLOT-022.png",
    date: ISODate("2023-10-06T05:21:11.797Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f99ca6ffc6bd2c68b64eb"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-024",
    gameName: "Safari Blitz",
    img: "FastSpin-SLOT-024.png",
    date: ISODate("2023-10-06T05:23:22.683Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ef2ce4bc98cd0d1ee3dd"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-011",
    gameName: "ANIMAL RACING",
    img: "FC-SLOT-011.png",
    date: ISODate("2023-10-07T05:39:56.177Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f043e4bc98cd0d1ee3ed"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-019",
    gameName: "GLORY OF ROME",
    img: "FC-SLOT-019.png",
    date: ISODate("2023-10-07T05:44:35.719Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f144e4bc98cd0d1ee3fb"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-026",
    gameName: "CRAZY BUFFALO",
    img: "FC-SLOT-026.png",
    date: ISODate("2023-10-07T05:48:52.258Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f340e4bc98cd0d1ee409"),
    platform: "HORSEBOOK",
    gameType: "LIVE",
    gameCode: "HRB-LIVE-001",
    gameName: "Horsebook",
    img: "HRB-LIVE-001.png",
    date: ISODate("2023-10-07T05:57:20.911Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217b39e4bc98cd0d1ee48c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-013",
    gameName: "Llama Adventure",
    img: "JDB-SLOT-013.png",
    date: ISODate("2023-10-07T15:37:29.407Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217bcde4bc98cd0d1ee492"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-016",
    gameName: "New Year",
    img: "JDB-SLOT-016.png",
    date: ISODate("2023-10-07T15:39:57.162Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217e7be4bc98cd0d1ee4b0"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-029",
    gameName: "Mahjong",
    img: "JDB-SLOT-029.png",
    date: ISODate("2023-10-07T15:51:23.568Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218144e4bc98cd0d1ee4de"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-045",
    gameName: "Lucky Dragons",
    img: "JDB-SLOT-045.png",
    date: ISODate("2023-10-07T16:03:16.15Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521879ce4bc98cd0d1ee52c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-071",
    gameName: "Egypt Treasure",
    img: "JDB-SLOT-071.png",
    date: ISODate("2023-10-07T16:30:20.86Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521df96e4bc98cd0d1ee747"),
    platform: "JDBFISH",
    gameType: "FH",
    gameCode: "JDB-FISH-004",
    gameName: "FiveDragonsFishing",
    img: "JDB-FISH-004.png",
    date: ISODate("2023-10-07T22:45:42.875Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e39be4bc98cd0d1ee76a"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-009",
    gameName: "Hoo Hey How",
    img: "LUCKYPOKER-TABLE-009.png",
    date: ISODate("2023-10-07T23:02:51.658Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f0a4e4bc98cd0d1ee7e0"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-017",
    gameName: "Hip Hop Panda",
    img: "hip-hop-panda-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:58:28.534Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f110e4bc98cd0d1ee7e7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-020",
    gameName: "Prosperity Lion",
    img: "prosperity-lion-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:00:16.488Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f16be4bc98cd0d1ee7ed"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-023",
    gameName: "Piggy Gold",
    img: "piggy_gold_by_pg_soft.avif",
    date: ISODate("2023-10-08T00:01:47.583Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652226a6e4bc98cd0d1ee808"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-010",
    gameName: "belangkai2",
    img: "KM-TABLE-010.png",
    date: ISODate("2023-10-08T03:48:54.787Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222828e4bc98cd0d1ee818"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-020",
    gameName: "Bài Cào",
    img: "KM-TABLE-020.png",
    date: ISODate("2023-10-08T03:55:20.162Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222988e4bc98cd0d1ee824"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-026",
    gameName: "Baccarat",
    img: "KM-TABLE-026.png",
    date: ISODate("2023-10-08T04:01:12.552Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652229f0e4bc98cd0d1ee828"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-028",
    gameName: "7 Up 7 Down",
    img: "KM-TABLE-028.png",
    date: ISODate("2023-10-08T04:02:56.415Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222e77e4bc98cd0d1ee856"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-052",
    gameName: "BolaTangkas",
    img: "KM-TABLE-052.png",
    date: ISODate("2023-10-08T04:22:15.305Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c28ce4bc98cd0d1ee8de"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-001",
    gameName: "Baccarat 1",
    img: "PP-LIVE-001.png",
    date: ISODate("2023-10-08T14:54:04.889Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c5ece4bc98cd0d1ee905"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-018",
    gameName: "Speed Baccarat 7",
    img: "PP-LIVE-018.png",
    date: ISODate("2023-10-08T15:08:28.258Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cbf8e4bc98cd0d1ee94c"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-039",
    gameName: "Mega Roulette",
    img: "PP-LIVE-039.png",
    date: ISODate("2023-10-08T15:34:16.175Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dc2ee4bc98cd0d1ee9e8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-385",
    gameName: "Gravity Bonanza",
    img: "PP-SLOT-385.png",
    date: ISODate("2023-10-08T16:43:26.13Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e3cfe4bc98cd0d1eea52"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-163",
    gameName: "7 Monkeys",
    img: "PP-SLOT-163.png",
    date: ISODate("2023-10-08T17:15:59.075Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e46ae4bc98cd0d1eea62"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-174",
    gameName: "Power of Thor Megaways",
    img: "PP-SLOT-174.png",
    date: ISODate("2023-10-08T17:18:34.748Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e486e4bc98cd0d1eea64"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-175",
    gameName: "Hot Fiesta",
    img: "PP-SLOT-175.png",
    date: ISODate("2023-10-08T17:19:02.117Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e62fe4bc98cd0d1eea86"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-190",
    gameName: "Bigger Bass Bonanza",
    img: "PP-SLOT-190.png",
    date: ISODate("2023-10-08T17:26:07.068Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e708e4bc98cd0d1eea93"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-194",
    gameName: "Fruit Party 2",
    img: "PP-SLOT-194.png",
    date: ISODate("2023-10-08T17:29:44.583Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e73be4bc98cd0d1eea96"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-195",
    gameName: "Phoenix Forge",
    img: "PP-SLOT-195.png",
    date: ISODate("2023-10-08T17:30:35.212Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230fdee4bc98cd0d1eeafd"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-023",
    gameName: "Football French Roulette",
    img: "PT-LIVE-023.png",
    date: ISODate("2023-10-08T20:23:58.291Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523128ce4bc98cd0d1eeb21"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-032",
    gameName: "Dolphin Reef",
    img: "PT-SLOT-032.png",
    date: ISODate("2023-10-08T20:35:24.815Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652312a2e4bc98cd0d1eeb23"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-033",
    gameName: "Jinns Moon",
    img: "PT-SLOT-033.png",
    date: ISODate("2023-10-08T20:35:46.281Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318f6e4bc98cd0d1eebad"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-018",
    gameName: "Flaming Fox",
    img: "RT-SLOT-018.png",
    date: ISODate("2023-10-08T21:02:46.509Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318fce4bc98cd0d1eebaf"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-079",
    gameName: "RomeandGlory",
    img: "PT-SLOT-079.png",
    date: ISODate("2023-10-08T21:02:52.943Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231957e4bc98cd0d1eebbb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-082",
    gameName: "Football Rules",
    img: "PT-SLOT-082.png",
    date: ISODate("2023-10-08T21:04:23.344Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652319aee4bc98cd0d1eebc9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-023",
    gameName: "Gems Gone Wild",
    img: "RT-SLOT-023.png",
    date: ISODate("2023-10-08T21:05:50.768Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231ab7e4bc98cd0d1eebdf"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-029",
    gameName: "Grand Wheel",
    img: "RT-SLOT-029.png",
    date: ISODate("2023-10-08T21:10:15.823Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231b1ae4bc98cd0d1eebe3"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-031",
    gameName: "Jack In A Pot",
    img: "RT-SLOT-031.png",
    date: ISODate("2023-10-08T21:11:54.718Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652324bee4bc98cd0d1eec25"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-064",
    gameName: "Phoenix",
    img: "RT-SLOT-064.png",
    date: ISODate("2023-10-08T21:53:02.977Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232551e4bc98cd0d1eec29"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-066",
    gameName: "Rocket Men",
    img: "RT-SLOT-066.png",
    date: ISODate("2023-10-08T21:55:29.331Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232570e4bc98cd0d1eec2b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-067",
    gameName: "Royal Gems",
    img: "RT-SLOT-067.png",
    date: ISODate("2023-10-08T21:56:00.059Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232596e4bc98cd0d1eec2d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-068",
    gameName: "Snow Wild And The 7 Features",
    img: "RT-SLOT-068.png",
    date: ISODate("2023-10-08T21:56:38.189Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232903e4bc98cd0d1eec59"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-090",
    gameName: "Cash Volt",
    img: "RT-SLOT-090.png",
    date: ISODate("2023-10-08T22:11:15.033Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232a7fe4bc98cd0d1eec6d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-100",
    gameName: "Vault Of Anubis",
    img: "RT-SLOT-100.png",
    date: ISODate("2023-10-08T22:17:35.881Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232b76e4bc98cd0d1eec77"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-105",
    gameName: "Gods of Troy",
    img: "RT-SLOT-105.png",
    date: ISODate("2023-10-08T22:21:42.031Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bee8e4bc98cd0d1eecf8"),
    platform: "YL",
    gameType: "FH",
    gameCode: "YL-FISH-005",
    gameName: "Heroes of the Deep Sea",
    img: "YL-FISH-005.png",
    date: ISODate("2023-10-09T08:50:48.812Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652401cfe4bc98cd0d1eed21"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-003",
    gameName: "VR 3 Lottery",
    img: "VRLOTTO-LOTTO-003.png",
    date: ISODate("2023-10-09T13:36:15.197Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244bb46330ef07b4a522b9"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-012",
    gameName: "JungleKing",
    img: "SG-SLOT-012.png",
    date: ISODate("2023-10-09T18:51:32.153Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244be46330ef07b4a522bd"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-014",
    gameName: "TigerWarrior",
    img: "SG-SLOT-014.png",
    date: ISODate("2023-10-09T18:52:20.339Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d2c6330ef07b4a522d1"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-023",
    gameName: "IcelandSA",
    img: "SG-SLOT-023.png",
    date: ISODate("2023-10-09T18:57:48.776Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d7e6330ef07b4a522d5"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-030",
    gameName: "5FortuneSA",
    img: "SG-SLOT-030.png",
    date: ISODate("2023-10-09T18:59:10.998Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244dab6330ef07b4a522d9"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-032",
    gameName: "GoldenLotusSE",
    img: "SG-SLOT-032.png",
    date: ISODate("2023-10-09T18:59:55.936Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f1e3dc63d752e8bbfc94"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-091",
    gameName: "Magic Kitty",
    img: "SG-SLOT-091.png",
    date: ISODate("2023-10-10T06:40:35.924Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f352dc63d752e8bbfcaa"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-102",
    gameName: "Roma",
    img: "SG-SLOT-102.png",
    date: ISODate("2023-10-10T06:46:42.716Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f402dc63d752e8bbfcb6"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-108",
    gameName: "Joker's Treasure Exclusive",
    img: "SG-SLOT-108.png",
    date: ISODate("2023-10-10T06:49:38.772Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f428dc63d752e8bbfcb8"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-109",
    gameName: "Caishen",
    img: "SG-SLOT-109.png",
    date: ISODate("2023-10-10T06:50:16.198Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f43fdc63d752e8bbfcba"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-110",
    gameName: "Space Conquest",
    img: "SG-SLOT-110.png",
    date: ISODate("2023-10-10T06:50:39.761Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f5dddc63d752e8bbfcc6"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-116",
    gameName: "Legacy Of Kong Maxways",
    img: "SG-SLOT-116.png",
    date: ISODate("2023-10-10T06:57:33.188Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fcefdc63d752e8bbfcee"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-137",
    gameName: "Emperor Gate",
    img: "SG-SLOT-137.png",
    date: ISODate("2023-10-10T07:27:43.591Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5237dfaa815deca43bf"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-003",
    gameName: "Roulette",
    img: "BG-LIVE-003.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551effc7dfaa815deca43cb"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-001",
    gameName: "Coin Cat",
    img: "DRAGOONSOFT-SLOT-001.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f96a56ffc6bd2c68b64d1"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-011",
    gameName: "Lucky Fortune",
    img: "FastSpin-SLOT-011.png",
    date: ISODate("2023-10-06T05:09:57.135Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9a5e6ffc6bd2c68b64ef"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-027",
    gameName: "Ganesha Luck",
    img: "FastSpin-SLOT-027.png",
    date: ISODate("2023-10-06T05:25:50.306Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9d5b6ffc6bd2c68b64fb"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-032",
    gameName: "The Great Safari",
    img: "FastSpin-SLOT-032.png",
    date: ISODate("2023-10-06T05:38:35.686Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9e1c6ffc6bd2c68b6501"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-035",
    gameName: "Mighty Sevens",
    img: "FastSpin-SLOT-035.png",
    date: ISODate("2023-10-06T05:41:48.311Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ec6ce4bc98cd0d1ee3bd"),
    platform: "FC",
    gameType: "EGAME",
    gameCode: "FC-EGAME-003",
    gameName: "CIRCUS DOZER",
    img: "FC-EGAME-003.png",
    date: ISODate("2023-10-07T05:28:12.632Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ef95e4bc98cd0d1ee3e3"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-014",
    gameName: "COWBOYS",
    img: "FC-SLOT-014.png",
    date: ISODate("2023-10-07T05:41:41.875Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217b0fe4bc98cd0d1ee48a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-012",
    gameName: "Wu kong",
    img: "JDB-SLOT-012.png",
    date: ISODate("2023-10-07T15:36:47.608Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652186aee4bc98cd0d1ee513"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-065",
    gameName: "Lucky Racing",
    img: "JDB-SLOT-065.png",
    date: ISODate("2023-10-07T16:26:22.158Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652187bfe4bc98cd0d1ee52e"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-072",
    gameName: "Fortune Treasure",
    img: "JDB-SLOT-072.png",
    date: ISODate("2023-10-07T16:30:55.763Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218d27e4bc98cd0d1ee5a0"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-098",
    gameName: "MarvelousIV",
    img: "JDB-SLOT-098.png",
    date: ISODate("2023-10-07T16:53:59.414Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e00fe4bc98cd0d1ee74f"),
    platform: "JDBFISH",
    gameType: "FH",
    gameCode: "JDB-FISH-006",
    gameName: "Dragon Master",
    img: "JDB-FISH-006.png",
    date: ISODate("2023-10-07T22:47:43.058Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e039e4bc98cd0d1ee751"),
    platform: "JDBFISH",
    gameType: "FH",
    gameCode: "JDB-FISH-007",
    gameName: "Fishing Disco",
    img: "JDB-FISH-007.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ea13e4bc98cd0d1ee79a"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-012",
    gameName: "Captain Treasure",
    img: "P8-SLOT-012.png",
    date: ISODate("2023-10-07T23:30:27.038Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f187e4bc98cd0d1ee7ef"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-024",
    gameName: "Jungle Delight",
    img: "jungle-delight-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:02:15.63Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522295ee4bc98cd0d1ee822"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-025",
    gameName: "Fruit Roulette",
    img: "KM-TABLE-025.png",
    date: ISODate("2023-10-08T04:00:30.5Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222a25e4bc98cd0d1ee82a"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-029",
    gameName: "bai buu",
    img: "KM-TABLE-029.png",
    date: ISODate("2023-10-08T04:03:49.494Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222b34e4bc98cd0d1ee834"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-035",
    gameName: "Bola Golek",
    img: "KM-TABLE-035.png",
    date: ISODate("2023-10-08T04:08:20.66Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222d3de4bc98cd0d1ee846"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-044",
    gameName: "Dota Hi-Lo",
    img: "KM-TABLE-044.png",
    date: ISODate("2023-10-08T04:17:01.829Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222d66e4bc98cd0d1ee848"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-045",
    gameName: "Monkey King Roulette",
    img: "KM-TABLE-045.png",
    date: ISODate("2023-10-08T04:17:42.134Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c11ae4bc98cd0d1ee8c2"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-003",
    gameName: "Horse Racing",
    img: "PP-EGAME-003.png",
    date: ISODate("2023-10-08T14:47:54.667Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9e776ffc6bd2c68b6505"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-037",
    gameName: "City of Jewels",
    img: "FastSpin-SLOT-037.png",
    date: ISODate("2023-10-06T05:43:19.304Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c2e2e4bc98cd0d1ee8e4"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-005",
    gameName: "Baccarat 6",
    img: "PP-LIVE-005.png",
    date: ISODate("2023-10-08T14:55:30.902Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c36ce4bc98cd0d1ee8ed"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-010",
    gameName: "Baccarat 11",
    img: "PP-LIVE-010.png",
    date: ISODate("2023-10-08T14:57:48.229Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9f016ffc6bd2c68b6507"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-038",
    gameName: "Sweet Frenzy",
    img: "FastSpin-SLOT-038.png",
    date: ISODate("2023-10-06T05:45:37.653Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c65ce4bc98cd0d1ee910"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-022",
    gameName: "Speed Baccarat 11",
    img: "PP-LIVE-022.png",
    date: ISODate("2023-10-08T15:10:20.42Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ee8de4bc98cd0d1ee3d5"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-007",
    gameName: "CHINESE NEW YEAR",
    img: "FC-SLOT-007.png",
    date: ISODate("2023-10-07T05:37:17.285Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ca8de4bc98cd0d1ee93c"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-032",
    gameName: "Roulette 7 - Italian",
    img: "PP-LIVE-032.png",
    date: ISODate("2023-10-08T15:28:13.663Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f119e4bc98cd0d1ee3f9"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-025",
    gameName: "SUGAR BANG BANG",
    img: "FC-SLOT-025.png",
    date: ISODate("2023-10-07T05:48:09.64Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217ddbe4bc98cd0d1ee4a8"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-025",
    gameName: "Dragon",
    img: "JDB-SLOT-025.png",
    date: ISODate("2023-10-07T15:48:43.931Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cc5ce4bc98cd0d1ee950"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-041",
    gameName: "ONE Blackjack 2 - Ruby",
    img: "PP-LIVE-041.png",
    date: ISODate("2023-10-08T15:35:56.661Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cd61e4bc98cd0d1ee958"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-045",
    gameName: "Super 8 Baccarat",
    img: "PP-LIVE-045.png",
    date: ISODate("2023-10-08T15:40:17.177Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521816ae4bc98cd0d1ee4e0"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-046",
    gameName: "Lucky Lion",
    img: "JDB-SLOT-046.png",
    date: ISODate("2023-10-07T16:03:54.128Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d88ce4bc98cd0d1ee704"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-017",
    gameName: "taixiu",
    img: "KM-TABLE-017.png",
    date: ISODate("2023-10-07T22:15:40.256Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cd94e4bc98cd0d1ee95c"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-048",
    gameName: "Roulette 12 - Romanian",
    img: "PP-LIVE-048.png",
    date: ISODate("2023-10-08T15:41:08.319Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d973e4bc98cd0d1ee70e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-019",
    gameName: "thai-fpc",
    img: "KM-TABLE-019.png",
    date: ISODate("2023-10-07T22:19:31.661Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dbeae4bc98cd0d1ee9e0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-035",
    gameName: "Aztec Gems Deluxe",
    img: "PP-SLOT-035.png",
    date: ISODate("2023-10-08T16:42:18.654Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652229bae4bc98cd0d1ee826"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-027",
    gameName: "european roulette",
    img: "KM-TABLE-027.png",
    date: ISODate("2023-10-08T04:02:02.427Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de46e4bc98cd0d1eea11"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-056",
    gameName: "Aztec Bonanza",
    img: "PP-SLOT-056.png",
    date: ISODate("2023-10-08T16:52:22.966Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222b9ce4bc98cd0d1ee838"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-037",
    gameName: "Cards Hi Lo",
    img: "KM-TABLE-037.png",
    date: ISODate("2023-10-08T04:10:04.981Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e15ce4bc98cd0d1eea39"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-093",
    gameName: "Mustang Gold",
    img: "PP-SLOT-093.png",
    date: ISODate("2023-10-08T17:05:32.255Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e263e4bc98cd0d1eea40"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-107",
    gameName: "Joker's Jewels",
    img: "PP-SLOT-107.png",
    date: ISODate("2023-10-08T17:09:55.031Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222bcee4bc98cd0d1ee83a"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-038",
    gameName: "Blackjack",
    img: "KM-TABLE-038.png",
    date: ISODate("2023-10-08T04:10:54.508Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222c25e4bc98cd0d1ee83e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-040",
    gameName: "Plinko",
    img: "KM-TABLE-040.png",
    date: ISODate("2023-10-08T04:12:21.104Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e34fe4bc98cd0d1eea4a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-126",
    gameName: "3 Kingdoms - Battle of Red Cliffs",
    img: "PP-SLOT-126.png",
    date: ISODate("2023-10-08T17:13:51.397Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e449e4bc98cd0d1eea5e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-172",
    gameName: "Juicy Fruits",
    img: "PP-SLOT-172.png",
    date: ISODate("2023-10-08T17:18:01.349Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c7a6e4bc98cd0d1ee929"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-026",
    gameName: "Auto-Roulette 1",
    img: "PP-LIVE-026.png",
    date: ISODate("2023-10-08T15:15:50.989Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cb18e4bc98cd0d1ee942"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-035",
    gameName: "Roulette 8 - Indian",
    img: "PP-LIVE-035.png",
    date: ISODate("2023-10-08T15:30:32.141Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e5c5e4bc98cd0d1eea82"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-156",
    gameName: "Great Reef",
    img: "PP-SLOT-156.png",
    date: ISODate("2023-10-08T17:24:21.788Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea3ae4bc98cd0d1eeaaa"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-203",
    gameName: "Day of Dead",
    img: "PP-SLOT-203.png",
    date: ISODate("2023-10-08T17:43:22.988Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cd3de4bc98cd0d1ee956"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-044",
    gameName: "Sweet Bonanza Candyland",
    img: "PP-LIVE-044.png",
    date: ISODate("2023-10-08T15:39:41.041Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d652e4bc98cd0d1ee97a"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-SLOT-003",
    gameName: "Hot to Burn Hold and Spin",
    img: "PP-SLOT-003.png",
    date: ISODate("2023-10-08T16:18:26.961Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230d0ce4bc98cd0d1eeacb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-001",
    gameName: "Triple Monkey",
    img: "PT-SLOT-001.png",
    date: ISODate("2023-10-08T20:11:56.194Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230dd1e4bc98cd0d1eead7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-005",
    gameName: "Long Long Long",
    img: "PT-SLOT-005.png",
    date: ISODate("2023-10-08T20:15:13.594Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d7ede4bc98cd0d1ee99b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-389",
    gameName: "Big Bass Halloween",
    img: "PP-SLOT-389.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522db7ce4bc98cd0d1ee9d8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-032",
    gameName: "Ultra Hold and Spin",
    img: "PP-SLOT-032.png",
    date: ISODate("2023-10-08T16:40:28.781Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230ee5e4bc98cd0d1eeae7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-012",
    gameName: "Zhao Cai Jin Bao",
    img: "PT-SLOT-012.png",
    date: ISODate("2023-10-08T20:19:49.123Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231429e4bc98cd0d1eeb3a"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-045",
    gameName: "Hot KTV",
    img: "PT-SLOT-045.png",
    date: ISODate("2023-10-08T20:42:17.734Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dbb1e4bc98cd0d1ee9db"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-033",
    gameName: "Curse of the Werewolf Megaways",
    img: "PP-SLOT-033.png",
    date: ISODate("2023-10-08T16:41:21.636Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dea4e4bc98cd0d1eea1b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-061",
    gameName: "Release the Kraken",
    img: "PP-SLOT-061.png",
    date: ISODate("2023-10-08T16:53:56.264Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652314a1e4bc98cd0d1eeb44"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-050",
    gameName: "Jade Emperor Yu Huang Da Di",
    img: "PT-SLOT-050.png",
    date: ISODate("2023-10-08T20:44:17.499Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652315cee4bc98cd0d1eeb5c"),
    platform: "RT",
    gameType: "TABLE",
    gameCode: "RT-TABLE-002",
    gameName: "European Roulette",
    img: "RT-TABLE-002.png",
    date: ISODate("2023-10-08T20:49:18.062Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e0fbe4bc98cd0d1eea35"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-082",
    gameName: "Sweet Bonanza",
    img: "PP-SLOT-082.png",
    date: ISODate("2023-10-08T17:03:55.852Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e253e4bc98cd0d1eea3e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-106",
    gameName: "Great Rhino",
    img: "PP-SLOT-106.png",
    date: ISODate("2023-10-08T17:09:39.831Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231610e4bc98cd0d1eeb64"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-063",
    gameName: "Mr. Cashback",
    img: "PT-SLOT-063.png",
    date: ISODate("2023-10-08T20:50:24.232Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e459e4bc98cd0d1eea60"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-173",
    gameName: "Wild Booster",
    img: "PP-SLOT-173.png",
    date: ISODate("2023-10-08T17:18:17.678Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652316abe4bc98cd0d1eeb72"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-003",
    gameName: "Blue Diamond",
    img: "RT-SLOT-003.png",
    date: ISODate("2023-10-08T20:52:59.616Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e4aae4bc98cd0d1eea68"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-177",
    gameName: "Floating Dragon",
    img: "PP-SLOT-177.png",
    date: ISODate("2023-10-08T17:19:38.372Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a91e4bc98cd0d1eebdb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-091",
    gameName: "Mega Fire Blaze: Wild Pistolero",
    img: "PT-SLOT-091.png",
    date: ISODate("2023-10-08T21:09:37.829Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e532e4bc98cd0d1eea72"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-182",
    gameName: "Cash Elevator",
    img: "PP-SLOT-182.png",
    date: ISODate("2023-10-08T17:21:54.151Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232138e4bc98cd0d1eec09"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-049",
    gameName: "Midas Gold",
    img: "RT-SLOT-049.png",
    date: ISODate("2023-10-08T21:38:00.322Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e598e4bc98cd0d1eea7e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-188",
    gameName: "Raging Bull",
    img: "PP-SLOT-188.png",
    date: ISODate("2023-10-08T17:23:36.255Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232728e4bc98cd0d1eec3f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-077",
    gameName: "Three Musketeers",
    img: "RT-SLOT-077.png",
    date: ISODate("2023-10-08T22:03:20.64Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea29e4bc98cd0d1eeaa8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-202",
    gameName: "Piggy Bank Bills",
    img: "PP-SLOT-202.png",
    date: ISODate("2023-10-08T17:43:05.407Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232a5be4bc98cd0d1eec6b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-099",
    gameName: "Rio Stars",
    img: "RT-SLOT-099.png",
    date: ISODate("2023-10-08T22:16:59.543Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230dd2e4bc98cd0d1eead9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-009",
    gameName: "Sette E Mezzo",
    img: "PT-LIVE-009.png",
    date: ISODate("2023-10-08T20:15:14.223Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230fd7e4bc98cd0d1eeafb"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-019",
    gameName: "Gem Queen",
    img: "PT-SLOT-019.png",
    date: ISODate("2023-10-08T20:23:51.773Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652403afe4bc98cd0d1eed3d"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-021",
    gameName: "Quang Nam",
    img: "VRLOTTO-LOTTO-021.png",
    date: ISODate("2023-10-09T13:44:15.89Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524041ce4bc98cd0d1eed44"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-024",
    gameName: "Khanh Hoa",
    img: "VRLOTTO-LOTTO-024.png",
    date: ISODate("2023-10-09T13:46:04.963Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231399e4bc98cd0d1eeb34"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-041",
    gameName: "Panther Moon",
    img: "PT-SLOT-041.png",
    date: ISODate("2023-10-08T20:39:53.344Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231475e4bc98cd0d1eeb40"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-048",
    gameName: "Sun WuKong",
    img: "PT-SLOT-048.png",
    date: ISODate("2023-10-08T20:43:33.658Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524044de4bc98cd0d1eed49"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-026",
    gameName: "Quang Binh",
    img: "VRLOTTO-LOTTO-026.png",
    date: ISODate("2023-10-09T13:46:53.582Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652404e9e4bc98cd0d1eed53"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-046",
    gameName: "Hau Giang",
    img: "VRLOTTO-LOTTO-046.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231656e4bc98cd0d1eeb6a"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-065",
    gameName: "Miss Fortune",
    img: "PT-SLOT-065.png",
    date: ISODate("2023-10-08T20:51:34.186Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652317cfe4bc98cd0d1eeb8d"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-071",
    gameName: "Thai Paradise",
    img: "PT-SLOT-071.png",
    date: ISODate("2023-10-08T20:57:51.683Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240951e4bc98cd0d1eed60"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-001",
    gameName: "Baccarat Classic",
    img: "VN-LIVE-001.png",
    date: ISODate("2023-10-09T14:08:17.754Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240dffe4bc98cd0d1eed82"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-013",
    gameName: "Fancy Egypt",
    img: "YesBingo-SLOT-013.png",
    date: ISODate("2023-10-09T14:28:15.52Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318b2e4bc98cd0d1eeba5"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-016",
    gameName: "Five Star",
    img: "RT-SLOT-016.png",
    date: ISODate("2023-10-08T21:01:38.013Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231cbae4bc98cd0d1eebef"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-037",
    gameName: "Lion Dance",
    img: "RT-SLOT-037.png",
    date: ISODate("2023-10-08T21:18:50.859Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652410abe4bc98cd0d1eed8e"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-001",
    gameName: "Baccarat Classic",
    img: "MX-LIVE-001.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652411bfe4bc98cd0d1eed9b"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-016",
    gameName: "Extra Sicbo",
    img: "MX-LIVE-016.png",
    date: ISODate("2023-10-09T14:44:15.404Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231dcae4bc98cd0d1eebf9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-042",
    gameName: "Lucky Wizard",
    img: "RT-SLOT-042.png",
    date: ISODate("2023-10-08T21:23:22.974Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244bfc6330ef07b4a522bf"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-015",
    gameName: "SeaEmperor",
    img: "SG-SLOT-015.png",
    date: ISODate("2023-10-09T18:52:44.382Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232253e4bc98cd0d1eec17"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-056",
    gameName: "Phoenix Fire Power Reels",
    img: "RT-SLOT-056.png",
    date: ISODate("2023-10-08T21:42:43.381Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ec8bdc63d752e8bbfc52"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-045",
    gameName: "Fafafa",
    img: "SG-SLOT-045.png",
    date: ISODate("2023-10-10T06:17:47.982Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ed60dc63d752e8bbfc5c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-053",
    gameName: "CaiYuanGuangJin",
    img: "SG-SLOT-053.png",
    date: ISODate("2023-10-10T06:21:20.098Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232976e4bc98cd0d1eec5f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-093",
    gameName: "Dynamite Riches",
    img: "RT-SLOT-093.png",
    date: ISODate("2023-10-08T22:13:10.738Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232994e4bc98cd0d1eec61"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-094",
    gameName: "Fruit Snap",
    img: "RT-SLOT-094.png",
    date: ISODate("2023-10-08T22:13:40.701Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f267dc63d752e8bbfc9c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-095",
    gameName: "Poker Ways",
    img: "SG-SLOT-095.png",
    date: ISODate("2023-10-10T06:42:47.271Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f4acdc63d752e8bbfcbe"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-112",
    gameName: "Fruits Mania",
    img: "SG-SLOT-112.png",
    date: ISODate("2023-10-10T06:52:28.315Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232e40e4bc98cd0d1eec99"),
    platform: "E1SPORT",
    gameType: "ESPORTS",
    gameCode: "E1-ESPORTS-001",
    gameName: "eSports",
    img: "E1-ESPORTS-001.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523b9e3e4bc98cd0d1eecdc"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-005",
    gameName: "Happy Fruit",
    img: "YL-EGAME-005.png",
    date: ISODate("2023-10-09T08:29:23.6Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f4fadc63d752e8bbfcc2"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-114",
    gameName: "Captain Golds Fortune",
    img: "SG-SLOT-114.png",
    date: ISODate("2023-10-10T06:53:46.006Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f6a9dc63d752e8bbfccc"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-119",
    gameName: "Christmas Miracles",
    img: "SG-SLOT-119.png",
    date: ISODate("2023-10-10T07:00:57.151Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bbdbe4bc98cd0d1eece0"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-007",
    gameName: "Solo King",
    img: "YL-EGAME-007.png",
    date: ISODate("2023-10-09T08:37:47.346Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240487e4bc98cd0d1eed4d"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-028",
    gameName: "Ninh Thuan",
    img: "VRLOTTO-LOTTO-028.png",
    date: ISODate("2023-10-09T13:47:51.026Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d52f7dfaa815deca43c4"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-008",
    gameName: "FullColorBaccarat",
    img: "BG-LIVE-008.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244c546330ef07b4a522c5"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-018",
    gameName: "GoldenChicken",
    img: "SG-SLOT-018.png",
    date: ISODate("2023-10-09T18:54:12.066Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f4e0dc63d752e8bbfcc0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-113",
    gameName: "Journey to the Wild",
    img: "SG-SLOT-113.png",
    date: ISODate("2023-10-10T06:53:20.512Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f7cedc63d752e8bbfcd0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-121",
    gameName: "CAISHEN DELUXE MAXWAYS",
    img: "SG-SLOT-121.png",
    date: ISODate("2023-10-10T07:05:50.875Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fbfadc63d752e8bbfcdc"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-128",
    gameName: "Legendary Beasts Saga",
    img: "SG-SLOT-128.png",
    date: ISODate("2023-10-10T07:23:38.477Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d53e7dfaa815deca43ca"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-014",
    gameName: "CasinoWar",
    img: "BG-LIVE-014.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c557dfaa815deca43fc"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-050",
    gameName: "Chicken Dinner",
    img: "DRAGOONSOFT-SLOT-050.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c597dfaa815deca43fd"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-051",
    gameName: "Farm Family",
    img: "DRAGOONSOFT-SLOT-051.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c607dfaa815deca43ff"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-053",
    gameName: "Big Diamond",
    img: "DRAGOONSOFT-SLOT-053.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552272b7dfaa815deca4412"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-040",
    gameName: "Money Empire",
    img: "FastSpin-SLOT-040.png",
    date: ISODate("2023-10-06T05:46:14.981Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f98be6ffc6bd2c68b64e1"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-019",
    gameName: "Fortune Lions",
    img: "FastSpin-SLOT-019.png",
    date: ISODate("2023-10-06T05:18:54.895Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a2b7dfaa815deca4428"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-002",
    gameName: "Bombing Fishing",
    img: "JILI-FISH-002.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a427dfaa815deca4431"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-012",
    gameName: "Ocean King Jackpot",
    img: "JILI-FISH-012.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ed12e4bc98cd0d1ee3c3"),
    platform: "FC",
    gameType: "FH",
    gameCode: "FC-FISH-002",
    gameName: "BAO CHUAN FISHING",
    img: "FC-FISH-002.png",
    date: ISODate("2023-10-07T05:30:58.293Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524b577dfaa815deca4432"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-007",
    gameName: "Hyper Burst",
    img: "JILI-SLOT-007.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520edbfe4bc98cd0d1ee3cb"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-002",
    gameName: "THREE LITTLE PIGS",
    img: "FC-SLOT-002.png",
    date: ISODate("2023-10-07T05:33:51.472Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bc67dfaa815deca4433"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-008",
    gameName: "Shanghai Beauty",
    img: "JILI-SLOT-008.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f000e4bc98cd0d1ee3e9"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-017",
    gameName: "GOLD RUSH",
    img: "FC-SLOT-017.png",
    date: ISODate("2023-10-07T05:43:28.436Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524be87dfaa815deca443a"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-006",
    gameName: "Lucky Ball",
    img: "JILI-SLOT-006.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217c46e4bc98cd0d1ee49c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-019",
    gameName: "Banana Saga",
    img: "JDB-SLOT-019.png",
    date: ISODate("2023-10-07T15:41:58.275Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c197dfaa815deca4445"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-031",
    gameName: "Boxing King",
    img: "JILI-SLOT-031.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217c7ee4bc98cd0d1ee49e"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-020",
    gameName: "Olympian Temple",
    img: "JDB-SLOT-020.png",
    date: ISODate("2023-10-07T15:42:54.061Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c207dfaa815deca4447"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-057",
    gameName: "Gold Rush",
    img: "JILI-SLOT-057.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521863ce4bc98cd0d1ee50f"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-063",
    gameName: "Daji",
    img: "JDB-SLOT-063.png",
    date: ISODate("2023-10-07T16:24:28.301Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c5d7dfaa815deca4455"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-014",
    gameName: "Crazy777",
    img: "JILI-SLOT-014.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c697dfaa815deca4458"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-012",
    gameName: "Hawaii Beauty",
    img: "JILI-SLOT-012.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652187f0e4bc98cd0d1ee534"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-073",
    gameName: "Pirate Treasure",
    img: "JDB-SLOT-073.png",
    date: ISODate("2023-10-07T16:31:44.055Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d2d7dfaa815deca4479"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-046",
    gameName: "Magic Lamp",
    img: "JILI-SLOT-046.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218b31e4bc98cd0d1ee57a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-087",
    gameName: "Double Wilds",
    img: "JDB-SLOT-087.png",
    date: ISODate("2023-10-07T16:45:37.619Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d923e4bc98cd0d1ee70a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-109",
    gameName: "Birds Party Deluxe",
    img: "JDB-SLOT-109.png",
    date: ISODate("2023-10-07T22:18:11.414Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d3e7dfaa815deca447d"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-059",
    gameName: "Bone Fortune",
    img: "JILI-SLOT-059.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258b97dfaa815deca4492"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-035",
    gameName: "Limbo",
    img: "JILI-TABLE-035.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521da38e4bc98cd0d1ee71c"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-115",
    gameName: "LanternWealth",
    img: "JDB-SLOT-115.png",
    date: ISODate("2023-10-07T22:22:48.423Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e790e4bc98cd0d1ee780"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-120",
    gameName: "Fruity Candy",
    img: "fruity-candy-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:19:44.058Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e864e4bc98cd0d1ee788"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-126",
    gameName: "Wild Heist Cashout",
    img: "wild-heist-cashout-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:23:16.409Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f0e4e4bc98cd0d1ee7e4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-018",
    gameName: "Legend of Hou Yi",
    img: "legend-of-hou-yi-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:59:32.535Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f40ee4bc98cd0d1ee7fb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-019",
    gameName: "Mr. Hallow-Win",
    img: "mr-hallow-win-by-pg-soft.avif",
    date: ISODate("2023-10-08T00:13:02.941Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652226fbe4bc98cd0d1ee80c"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-013",
    gameName: "fish-prawn-crab2",
    img: "KM-TABLE-013.png",
    date: ISODate("2023-10-08T03:50:19.734Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222bf7e4bc98cd0d1ee83c"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-039",
    gameName: "32 Cards",
    img: "KM-TABLE-039.png",
    date: ISODate("2023-10-08T04:11:35.234Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cae9e4bc98cd0d1ee93e"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-033",
    gameName: "Roulette 6 - Turkish",
    img: "PP-LIVE-033.png",
    date: ISODate("2023-10-08T15:29:45.074Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d73ee4bc98cd0d1ee98b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-008",
    gameName: "Madame Destiny Megaways",
    img: "PP-SLOT-008.png",
    date: ISODate("2023-10-08T16:22:22.789Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dd80e4bc98cd0d1ee9fd"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-046",
    gameName: "Fruit Party",
    img: "PP-SLOT-046.png",
    date: ISODate("2023-10-08T16:49:04.798Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de26e4bc98cd0d1eea0d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-054",
    gameName: "Fruit Rainbow",
    img: "PP-SLOT-054.png",
    date: ISODate("2023-10-08T16:51:50.921Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e384e4bc98cd0d1eea4e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-131",
    gameName: "Dragon Kingdom",
    img: "PP-SLOT-131.png",
    date: ISODate("2023-10-08T17:14:44.891Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e4dee4bc98cd0d1eea6e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-180",
    gameName: "Aztec King",
    img: "PP-SLOT-180.png",
    date: ISODate("2023-10-08T17:20:30.027Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e834e4bc98cd0d1eea9d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-198",
    gameName: "Aztec King Megaways",
    img: "PP-SLOT-198.png",
    date: ISODate("2023-10-08T17:34:44.621Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e85fe4bc98cd0d1eeaa1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-200",
    gameName: "Treasure Wild",
    img: "PP-SLOT-200.png",
    date: ISODate("2023-10-08T17:35:27.726Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230cd6e4bc98cd0d1eeac9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-002",
    gameName: "Dragon Tiger",
    img: "PT-LIVE-002.png",
    date: ISODate("2023-10-08T20:11:02.163Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230e0fe4bc98cd0d1eeadd"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-007",
    gameName: "Sky Queen",
    img: "PT-SLOT-007.png",
    date: ISODate("2023-10-08T20:16:15.557Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230e45e4bc98cd0d1eeadf"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-008",
    gameName: "Blue Wizard",
    img: "PT-SLOT-008.png",
    date: ISODate("2023-10-08T20:17:09.203Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f42e4bc98cd0d1eeaef"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-015",
    gameName: "Ugga Bugga",
    img: "PT-SLOT-015.png",
    date: ISODate("2023-10-08T20:21:22.495Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231713e4bc98cd0d1eeb78"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-005",
    gameName: "Cinderella's Ball",
    img: "RT-SLOT-005.png",
    date: ISODate("2023-10-08T20:54:43.972Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652317a4e4bc98cd0d1eeb89"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-009",
    gameName: "Dragon's Fire",
    img: "RT-SLOT-009.png",
    date: ISODate("2023-10-08T20:57:08.336Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231839e4bc98cd0d1eeb97"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-013",
    gameName: "Emerald Diamond",
    img: "RT-SLOT-013.png",
    date: ISODate("2023-10-08T20:59:37.815Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a62e4bc98cd0d1eebd7"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-090",
    gameName: "Leprechaun’s Luck: Cash Collect",
    img: "PT-SLOT-090.png",
    date: ISODate("2023-10-08T21:08:50.098Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652325d7e4bc98cd0d1eec31"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-070",
    gameName: "Stage 888",
    img: "RT-SLOT-070.png",
    date: ISODate("2023-10-08T21:57:43.683Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232aa0e4bc98cd0d1eec6f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-101",
    gameName: "Wild Cats Multiline",
    img: "RT-SLOT-101.png",
    date: ISODate("2023-10-08T22:18:08.589Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bda1e4bc98cd0d1eecea"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-012",
    gameName: "Guess",
    img: "YL-EGAME-012.png",
    date: ISODate("2023-10-09T08:45:21.715Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240a17e4bc98cd0d1eed68"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-007",
    gameName: "SicBo",
    img: "VN-LIVE-007.png",
    date: ISODate("2023-10-09T14:11:35.086Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ed22dc63d752e8bbfc58"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-049",
    gameName: "HighwayFortune",
    img: "SG-SLOT-049.png",
    date: ISODate("2023-10-10T06:20:18.06Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ed46dc63d752e8bbfc5a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-050",
    gameName: "FestiveLion",
    img: "SG-SLOT-050.png",
    date: ISODate("2023-10-10T06:20:54.429Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f234dc63d752e8bbfc98"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-093",
    gameName: "Love Idol",
    img: "SG-SLOT-093.png",
    date: ISODate("2023-10-10T06:41:56.974Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0d87dfaa815deca43cf"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-005",
    gameName: "Rich Now",
    img: "DRAGOONSOFT-SLOT-005.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1077dfaa815deca43d7"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-013",
    gameName: "Great Lion",
    img: "DRAGOONSOFT-SLOT-013.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bbf7dfaa815deca43e8"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-021",
    gameName: "Stone Hominid",
    img: "DRAGOONSOFT-SLOT-021.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bc37dfaa815deca43e9"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-031",
    gameName: "T-Rex",
    img: "DRAGOONSOFT-SLOT-031.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c337dfaa815deca43f2"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-040",
    gameName: "ZHAO YUN",
    img: "DRAGOONSOFT-SLOT-040.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c477dfaa815deca43f8"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-046",
    gameName: "Coin Rat",
    img: "DRAGOONSOFT-SLOT-046.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a457dfaa815deca441d"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-002",
    gameName: "Lucky Color Game",
    img: "JDB-EGAME-002.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a2f7dfaa815deca442a"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-004",
    gameName: "Dinosaur Tycoon",
    img: "JILI-FISH-004.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c107dfaa815deca4443"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-025",
    gameName: "Dragon Treasure",
    img: "JILI-SLOT-025.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c6d7dfaa815deca4459"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-027",
    gameName: "Super Ace",
    img: "JILI-SLOT-027.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cc27dfaa815deca4462"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-038",
    gameName: "Pharaoh Treasure",
    img: "JILI-SLOT-038.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258a37dfaa815deca4488"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-049",
    gameName: "Caribbean Stud Poker",
    img: "JILI-TABLE-049.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258cd7dfaa815deca449a"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-020",
    gameName: "Lucky Bingo",
    img: "JILI-TABLE-020.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258eb7dfaa815deca44a5"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-013",
    gameName: "Callbreak Quick",
    img: "JILI-TABLE-013.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526edf7dfaa815deca44e4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-048",
    gameName: "Candy Burst",
    img: "candy-burst-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270757dfaa815deca44e6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-047",
    gameName: "Caishen Wins",
    img: "caishen-wins-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270b27dfaa815deca44f0"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-061",
    gameName: "Secret of Cleopatra",
    img: "secrets-of-cleopatra-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552869a7dfaa815deca4514"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-092",
    gameName: "Leprechaun Carol",
    img: "PP-SLOT-092.png",
    date: ISODate("2023-10-08T17:00:50.314Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ac47dfaa815deca451e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-220",
    gameName: "Emperor Caishen",
    img: "PP-SLOT-220.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ae27dfaa815deca452c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-217",
    gameName: "Fortune of Giza",
    img: "PP-SLOT-217.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292f37dfaa815deca4545"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-267",
    gameName: "Shining Hot 100",
    img: "PP-SLOT-267.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299897dfaa815deca455a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-273",
    gameName: "Fire Hot 5",
    img: "PP-SLOT-273.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b687dfaa815deca456e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-302",
    gameName: "Shiled of Sparta",
    img: "PP-SLOT-302.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7707dfaa815deca4588"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-309",
    gameName: "Reel Banks",
    img: "PP-SLOT-309.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f95716ffc6bd2c68b64c7"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-006",
    gameName: "Royal Katt",
    img: "FastSpin-SLOT-006.png",
    date: ISODate("2023-10-06T05:04:49.78Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f98426ffc6bd2c68b64dd"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-017",
    gameName: "Space Conquest",
    img: "FastSpin-SLOT-017.png",
    date: ISODate("2023-10-06T05:16:50.635Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cfa7dfaa815deca44d5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-076",
    gameName: "Ways of the Qilin",
    img: "ways-of-the-qilin-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552879e7dfaa815deca4519"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-102",
    gameName: "Madame Destiny",
    img: "PP-SLOT-102.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299807dfaa815deca4555"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-282",
    gameName: "BlackBull",
    img: "PP-SLOT-282.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299977dfaa815deca4561"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-278",
    gameName: "Down The Rails",
    img: "PP-SLOT-278.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b5a7dfaa815deca4566"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-294",
    gameName: "Release the Kraken 2",
    img: "PP-SLOT-294.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b607dfaa815deca4569"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-289",
    gameName: "Sword of Ares",
    img: "PP-SLOT-289.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b667dfaa815deca456d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-292",
    gameName: "Bigger Bass Blizzard - Christmas Catch",
    img: "PP-SLOT-292.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d94a7dfaa815deca4592"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-337",
    gameName: "WIld Celebrity Bus Megaways",
    img: "PP-SLOT-337.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d94d7dfaa815deca4594"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-340",
    gameName: "Kingdom of The Dead",
    img: "PP-SLOT-340.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9527dfaa815deca4596"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-333",
    gameName: "Big Bass Bonanza - Hold & Spinner",
    img: "PP-SLOT-333.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9577dfaa815deca4598"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-336",
    gameName: "Gods of Giza",
    img: "PP-SLOT-336.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db047dfaa815deca459f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-351",
    gameName: "Lamp Of Infinity",
    img: "PP-SLOT-351.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db1e7dfaa815deca45ac"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-366",
    gameName: "Lobster Bob's Crazy Crab Shack",
    img: "PP-SLOT-366.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db277dfaa815deca45b1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-350",
    gameName: "Frogs & Bugs",
    img: "PP-SLOT-350.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd797dfaa815deca45b7"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-370",
    gameName: "Piggy Bankers",
    img: "PP-SLOT-370.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd897dfaa815deca45be"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-377",
    gameName: "Frozen Tropics",
    img: "PP-SLOT-377.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536c727dfaa815deca45cc"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-014",
    gameName: "Hi-Lo",
    img: "PT-LIVE-014.png",
    date: ISODate("2023-10-08T20:15:14.223Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374e27dfaa815deca45e4"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-047",
    gameName: "Soiree Blackjack 1",
    img: "PT-LIVE-047.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537acc7dfaa815deca45fa"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-070",
    gameName: "Blackjack 4",
    img: "PT-LIVE-070.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382837dfaa815deca4614"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-126",
    gameName: "Multiplier Riches",
    img: "RT-SLOT-126.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382917dfaa815deca461b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-128",
    gameName: "Shah Mat",
    img: "RT-SLOT-128.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553874c7dfaa815deca463c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-195",
    gameName: "Win Escalator",
    img: "RT-SLOT-195.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389797dfaa815deca464d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-183",
    gameName: "Diamond Royale",
    img: "RT-SLOT-183.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c067dfaa815deca4656"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-206",
    gameName: "What The Fox MegaWays",
    img: "RT-SLOT-206.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a9a7dfaa815deca4676"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-035",
    gameName: "Tinh Bac Lieu",
    img: "VRLOTTO-LOTTO-035.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bca4ce955164383cbde0"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-108",
    gameName: "Mega Fire Blaze Lucky Ball Brasileiro",
    img: "PT-LIVE-108.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ec44e4bc98cd0d1ee3bb"),
    platform: "FC",
    gameType: "EGAME",
    gameCode: "FC-EGAME-002",
    gameName: "FA CHAI DOZER",
    img: "FC-EGAME-002.png",
    date: ISODate("2023-10-07T05:27:32.772Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ece9e4bc98cd0d1ee3c1"),
    platform: "FC",
    gameType: "FH",
    gameCode: "FC-FISH-001",
    gameName: "MONKEY KING FISHING",
    img: "FC-FISH-001.png",
    date: ISODate("2023-10-07T05:30:17.275Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520ed94e4bc98cd0d1ee3c9"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-001",
    gameName: "GOLDEN PANTHER",
    img: "FC-SLOT-001.png",
    date: ISODate("2023-10-07T05:33:08.407Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217ac1e4bc98cd0d1ee486"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-010",
    gameName: "Flirting Scholar Tang",
    img: "JDB-SLOT-010.png",
    date: ISODate("2023-10-07T15:35:29.485Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521808ae4bc98cd0d1ee4d3"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-041",
    gameName: "Lucky Seven",
    img: "JDB-SLOT-041.png",
    date: ISODate("2023-10-07T16:00:10.095Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652181b7e4bc98cd0d1ee4e4"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-048",
    gameName: "Napoleon",
    img: "JDB-SLOT-048.png",
    date: ISODate("2023-10-07T16:05:11.568Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652186d5e4bc98cd0d1ee518"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-066",
    gameName: "Birds Party",
    img: "JDB-SLOT-066.png",
    date: ISODate("2023-10-07T16:27:01.828Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218775e4bc98cd0d1ee52a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-070",
    gameName: "Super Niubi",
    img: "JDB-SLOT-070.png",
    date: ISODate("2023-10-07T16:29:41.406Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e3b8e4bc98cd0d1ee76c"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-010",
    gameName: "Domino Qiu Qiu",
    img: "LUCKYPOKER-TABLE-010.png",
    date: ISODate("2023-10-07T23:03:20.05Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e6ace4bc98cd0d1ee778"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-112",
    gameName: "Fortune Rabbit",
    img: "fortune-rabbit-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ea31e4bc98cd0d1ee79c"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-017",
    gameName: "Emperor Gate",
    img: "P8-SLOT-017.png",
    date: ISODate("2023-10-07T23:30:57.996Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ef67e4bc98cd0d1ee7cf"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-005",
    gameName: "Medusa2",
    img: "medusa-2-the-quest-of-perseus-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:53:11.912Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222881e4bc98cd0d1ee81a"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-021",
    gameName: "NumberMatka",
    img: "KM-TABLE-021.png",
    date: ISODate("2023-10-08T03:56:49.745Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c0cde4bc98cd0d1ee8be"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-001",
    gameName: "Spaceman",
    img: "PP-EGAME-001.png",
    date: ISODate("2023-10-08T14:46:37.628Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c63ae4bc98cd0d1ee90b"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-003",
    gameName: "Shark",
    img: "YL-EGAME-003.png",
    date: ISODate("2023-10-08T15:09:46.99Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c676e4bc98cd0d1ee912"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-023",
    gameName: "Speed Baccarat 12",
    img: "PP-LIVE-023.png",
    date: ISODate("2023-10-08T15:10:46.624Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cddde4bc98cd0d1ee95e"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-050",
    gameName: "No Comm Speed Baccarat 1",
    img: "PP-LIVE-050.png",
    date: ISODate("2023-10-08T15:42:21.325Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d365e4bc98cd0d1ee969"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-058",
    gameName: "ONE Blackjack 3 - Dutch",
    img: "PP-LIVE-058.png",
    date: ISODate("2023-10-08T16:05:57.709Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d47de4bc98cd0d1ee96f"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-062",
    gameName: "Snakes & Ladders Live",
    img: "PP-LIVE-062.png",
    date: ISODate("2023-10-08T16:10:37.777Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d699e4bc98cd0d1ee982"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-002",
    gameName: "Gates of Olympus",
    img: "PP-SLOT-002.png",
    date: ISODate("2023-10-08T16:19:37.945Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d78ce4bc98cd0d1ee994"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-391",
    gameName: "888 Bonanza",
    img: "PP-SLOT-391.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d8ace4bc98cd0d1ee9aa"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-017",
    gameName: "Spartan King",
    img: "PP-SLOT-017.png",
    date: ISODate("2023-10-08T16:28:28.974Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dbd1e4bc98cd0d1ee9dd"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-034",
    gameName: "Jungle Gorilla",
    img: "PP-SLOT-034.png",
    date: ISODate("2023-10-08T16:41:53.009Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e00ee4bc98cd0d1eea2f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-081",
    gameName: "Wild Pixies",
    img: "PP-SLOT-081.png",
    date: ISODate("2023-10-08T16:59:58.094Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e193e4bc98cd0d1eea3c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-100",
    gameName: "Leprechaun Song",
    img: "PP-SLOT-100.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e28ce4bc98cd0d1eea44"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-111",
    gameName: "Aztec Gems",
    img: "PP-SLOT-111.png",
    date: ISODate("2023-10-08T17:10:36.649Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230f21e4bc98cd0d1eeaed"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-014",
    gameName: "Zhao Cai Tong Zi",
    img: "PT-SLOT-014.png",
    date: ISODate("2023-10-08T20:20:49.424Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231047e4bc98cd0d1eeb04"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-026",
    gameName: "Quantum Auto Roulette",
    img: "PT-LIVE-026.png",
    date: ISODate("2023-10-08T20:25:43.636Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652312f8e4bc98cd0d1eeb29"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-036",
    gameName: "Heavenly Ruler",
    img: "PT-SLOT-036.png",
    date: ISODate("2023-10-08T20:37:12.691Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523145be4bc98cd0d1eeb3e"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-047",
    gameName: "Ri Ri Jin Cai",
    img: "PT-SLOT-047.png",
    date: ISODate("2023-10-08T20:43:07.581Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652314dde4bc98cd0d1eeb48"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-052",
    gameName: "The Riches of Don Quixote",
    img: "PT-SLOT-052.png",
    date: ISODate("2023-10-08T20:45:17.524Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523175ae4bc98cd0d1eeb7e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-007",
    gameName: "Devil's Number",
    img: "RT-SLOT-007.png",
    date: ISODate("2023-10-08T20:55:54.363Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652317c6e4bc98cd0d1eeb8b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-010",
    gameName: "Dragon's Luck",
    img: "RT-SLOT-010.png",
    date: ISODate("2023-10-08T20:57:42.436Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231812e4bc98cd0d1eeb95"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-012",
    gameName: "Elven Magic",
    img: "RT-SLOT-012.png",
    date: ISODate("2023-10-08T20:58:58.533Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652318d5e4bc98cd0d1eeba9"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-017",
    gameName: "Five Star Power Reels",
    img: "RT-SLOT-017.png",
    date: ISODate("2023-10-08T21:02:13.863Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652319d1e4bc98cd0d1eebcd"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-024",
    gameName: "Gemtastic",
    img: "RT-SLOT-024.png",
    date: ISODate("2023-10-08T21:06:25.374Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231d3de4bc98cd0d1eebf1"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-038",
    gameName: "Lucky Easter",
    img: "RT-SLOT-038.png",
    date: ISODate("2023-10-08T21:21:01.649Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231d62e4bc98cd0d1eebf3"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-039",
    gameName: "Lucky Fortune Cat",
    img: "RT-SLOT-039.png",
    date: ISODate("2023-10-08T21:21:38.997Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652322cee4bc98cd0d1eec1d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-060",
    gameName: "Rainbow Jackpots",
    img: "RT-SLOT-060.png",
    date: ISODate("2023-10-08T21:44:46.273Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652323d3e4bc98cd0d1eec1f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-061",
    gameName: "Ra's Legend",
    img: "RT-SLOT-061.png",
    date: ISODate("2023-10-08T21:49:07.991Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652325b9e4bc98cd0d1eec2f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-069",
    gameName: "Spin Town",
    img: "RT-SLOT-069.png",
    date: ISODate("2023-10-08T21:57:13.042Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652326ede4bc98cd0d1eec3d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-076",
    gameName: "Thor's Lightning",
    img: "RT-SLOT-076.png",
    date: ISODate("2023-10-08T22:02:21.658Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232748e4bc98cd0d1eec41"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-078",
    gameName: "Tiki Fruits",
    img: "RT-SLOT-078.png",
    date: ISODate("2023-10-08T22:03:52.088Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232c30e4bc98cd0d1eec81"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-110",
    gameName: "Zeus' Lightning Power Reels",
    img: "RT-SLOT-110.png",
    date: ISODate("2023-10-08T22:24:48.487Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232c7be4bc98cd0d1eec85"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-112",
    gameName: "Agent Royale",
    img: "RT-SLOT-112.png",
    date: ISODate("2023-10-08T22:26:03.8Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523bbaee4bc98cd0d1eecde"),
    platform: "YL",
    gameType: "EGAME",
    gameCode: "YL-EGAME-006",
    gameName: "Cockfighting",
    img: "YL-EGAME-006.png",
    date: ISODate("2023-10-09T08:37:02.414Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652401b3e4bc98cd0d1eed1f"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-002",
    gameName: "VR Racetrack Lottery",
    img: "VRLOTTO-LOTTO-002.png",
    date: ISODate("2023-10-09T13:35:47.894Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524022ee4bc98cd0d1eed27"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-006",
    gameName: "VR Fu Xing 1.5 minute lottery",
    img: "VRLOTTO-LOTTO-006.png",
    date: ISODate("2023-10-09T13:37:50.894Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652402e7e4bc98cd0d1eed31"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-012",
    gameName: "VR Vietnam-18-1.5 minute lottery",
    img: "VRLOTTO-LOTTO-012.png",
    date: ISODate("2023-10-09T13:40:55.273Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240307e4bc98cd0d1eed33"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-013",
    gameName: "VR Vietnam-18-3minute lottery",
    img: "VRLOTTO-LOTTO-013.png",
    date: ISODate("2023-10-09T13:41:27.426Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240eaae4bc98cd0d1eed88"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-018",
    gameName: "Boom Boom Marmot",
    img: "YesBingo-SLOT-018.png",
    date: ISODate("2023-10-09T14:31:06.768Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244aa06330ef07b4a522a9"),
    platform: "SPADE",
    gameType: "FH",
    gameCode: "SG-FISH-004",
    gameName: "Zombie Party",
    img: "SG-FISH-004.png",
    date: ISODate("2023-10-09T18:46:56.137Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244b956330ef07b4a522b7"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-009",
    gameName: "GoldenMonkey",
    img: "SG-SLOT-009.png",
    date: ISODate("2023-10-09T18:51:01.207Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ec18dc63d752e8bbfc4a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-038",
    gameName: "DoubleFortunes",
    img: "SG-SLOT-038.png",
    date: ISODate("2023-10-10T06:15:52.11Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f143dc63d752e8bbfc8a"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-085",
    gameName: "ProsperityGods",
    img: "SG-SLOT-085.png",
    date: ISODate("2023-10-10T06:37:55.839Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f1c6dc63d752e8bbfc92"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-090",
    gameName: "Kungfu Dragon",
    img: "SG-SLOT-090.png",
    date: ISODate("2023-10-10T06:40:06.455Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fb4fdc63d752e8bbfcd6"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-124",
    gameName: "Hammer of Thunder",
    img: "SG-SLOT-124.png",
    date: ISODate("2023-10-10T07:20:47.229Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fbbadc63d752e8bbfcda"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-127",
    gameName: "Moji Mania",
    img: "SG-SLOT-127.png",
    date: ISODate("2023-10-10T07:22:34.241Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fcd7dc63d752e8bbfcec"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-136",
    gameName: "Dragon Gold",
    img: "SG-SLOT-136.png",
    date: ISODate("2023-10-10T07:27:19.051Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524fd13dc63d752e8bbfcf0"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-138",
    gameName: "Great Stars",
    img: "SG-SLOT-138.png",
    date: ISODate("2023-10-10T07:28:19.271Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1037dfaa815deca43d6"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-012",
    gameName: "Over Dragon's Gate",
    img: "DRAGOONSOFT-SLOT-012.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1107dfaa815deca43da"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-016",
    gameName: "Caishen Coming",
    img: "DRAGOONSOFT-SLOT-016.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c7b7dfaa815deca4406"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-060",
    gameName: "Diamond 7",
    img: "DRAGOONSOFT-SLOT-060.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c7f7dfaa815deca4407"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-061",
    gameName: "Bonus Cat",
    img: "DRAGOONSOFT-SLOT-061.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("651f9a016ffc6bd2c68b64ed"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-025",
    gameName: "Goddess Of Egypt",
    img: "FastSpin-SLOT-025.png",
    date: ISODate("2023-10-06T05:24:17.217Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520eef4e4bc98cd0d1ee3db"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-010",
    gameName: "DA LE MEN",
    img: "FC-SLOT-010.png",
    date: ISODate("2023-10-07T05:39:00.949Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520efb7e4bc98cd0d1ee3e5"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-015",
    gameName: "WAR OF THE UNIVERSE",
    img: "FC-SLOT-015.png",
    date: ISODate("2023-10-07T05:42:15.396Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520efe0e4bc98cd0d1ee3e7"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-016",
    gameName: "TREASURE CRUISE",
    img: "FC-SLOT-016.png",
    date: ISODate("2023-10-07T05:42:56.801Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217e51e4bc98cd0d1ee4ae"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-028",
    gameName: "Moonlight Treasure",
    img: "JDB-SLOT-028.png",
    date: ISODate("2023-10-07T15:50:41.627Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521894fe4bc98cd0d1ee545"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-079",
    gameName: "Lucky Fuwa",
    img: "JDB-SLOT-079.png",
    date: ISODate("2023-10-07T16:37:35.68Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218b11e4bc98cd0d1ee575"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-086",
    gameName: "Moneybags Man",
    img: "JDB-SLOT-086.png",
    date: ISODate("2023-10-07T16:45:05.069Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218eeee4bc98cd0d1ee5b4"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-108",
    gameName: "Moneybags Man 2",
    img: "JDB-SLOT-108.png",
    date: ISODate("2023-10-07T17:01:34.1Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e72de4bc98cd0d1ee77c"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-119",
    gameName: "Lucky Clover Lady",
    img: "lucky-clover-lady-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:18:05.325Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e806e4bc98cd0d1ee784"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-122",
    gameName: "Safari Wilds",
    img: "safari-wilds-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:21:42.849Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e82be4bc98cd0d1ee786"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-123",
    gameName: "Gladiator's Glory",
    img: "PG-SLOT-123.png",
    date: ISODate("2023-10-07T23:22:19.975Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521f038e4bc98cd0d1ee7d8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-013",
    gameName: "Tree of Fortune",
    img: "tree-of-fortune-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:56:40.768Z"),
    __v: NumberInt("0"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652224e4e4bc98cd0d1ee804"),
    platform: "KINGMAKER",
    gameType: "SLOT",
    gameCode: "KM-SLOT-001",
    gameName: "Sugar Blast",
    img: "KM-SLOT-001.png",
    date: ISODate("2023-10-08T03:41:24.718Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652226d2e4bc98cd0d1ee80a"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-011",
    gameName: "dragon-tiger2",
    img: "KM-TABLE-011.png",
    date: ISODate("2023-10-08T03:49:38.339Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652228fae4bc98cd0d1ee81e"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-023",
    gameName: "xocdia2",
    img: "KM-TABLE-023.png",
    date: ISODate("2023-10-08T03:58:50.862Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222d8ae4bc98cd0d1ee84a"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-046",
    gameName: "Teen Patti",
    img: "KM-TABLE-046.png",
    date: ISODate("2023-10-08T04:18:18.569Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c317e4bc98cd0d1ee8e6"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-006",
    gameName: "Baccarat 7",
    img: "PP-LIVE-006.png",
    date: ISODate("2023-10-08T14:56:23.434Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ce14e4bc98cd0d1ee962"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-052",
    gameName: "No Comm Baccarat 1",
    img: "PP-LIVE-052.png",
    date: ISODate("2023-10-08T15:43:16.412Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d75be4bc98cd0d1ee990"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-009",
    gameName: "Congo Cash",
    img: "PP-SLOT-009.png",
    date: ISODate("2023-10-08T16:22:51.515Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e110e4bc98cd0d1eea37"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-096",
    gameName: "Vegas Magic",
    img: "PP-SLOT-096.png",
    date: ISODate("2023-10-08T17:04:16.246Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e276e4bc98cd0d1eea42"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-109",
    gameName: "Fire 88",
    img: "PP-SLOT-109.png",
    date: ISODate("2023-10-08T17:10:14.003Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230d99e4bc98cd0d1eead1"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-003",
    gameName: "Buffalo Blitz",
    img: "PT-SLOT-003.png",
    date: ISODate("2023-10-08T20:14:17.765Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652311fee4bc98cd0d1eeb1b"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-029",
    gameName: "Jinfu Long",
    img: "PT-SLOT-029.png",
    date: ISODate("2023-10-08T20:33:02.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231671e4bc98cd0d1eeb6c"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-066",
    gameName: "Desert Treasure",
    img: "PT-SLOT-066.png",
    date: ISODate("2023-10-08T20:52:01.547Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652316abe4bc98cd0d1eeb70"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-068",
    gameName: "Lotto Madness",
    img: "PT-SLOT-068.png",
    date: ISODate("2023-10-08T20:52:59.269Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652316ebe4bc98cd0d1eeb75"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-004",
    gameName: "Chinese Treasures",
    img: "RT-SLOT-004.png",
    date: ISODate("2023-10-08T20:54:03.096Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523177ee4bc98cd0d1eeb85"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-008",
    gameName: "Divine Ways",
    img: "RT-SLOT-008.png",
    date: ISODate("2023-10-08T20:56:30.288Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231914e4bc98cd0d1eebb1"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-080",
    gameName: "Plenty O'Fortune",
    img: "PT-SLOT-080.png",
    date: ISODate("2023-10-08T21:03:16.048Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231b61e4bc98cd0d1eebe7"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-033",
    gameName: "Jade Charms",
    img: "RT-SLOT-033.png",
    date: ISODate("2023-10-08T21:13:05.563Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231e1be4bc98cd0d1eebfb"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-043",
    gameName: "Magic Gate",
    img: "RT-SLOT-043.png",
    date: ISODate("2023-10-08T21:24:43.501Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523222ee4bc98cd0d1eec15"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-055",
    gameName: "Persian Fortune",
    img: "RT-SLOT-055.png",
    date: ISODate("2023-10-08T21:42:06.3Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232681e4bc98cd0d1eec37"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-073",
    gameName: "Ten Elements",
    img: "RT-SLOT-073.png",
    date: ISODate("2023-10-08T22:00:33.2Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232a15e4bc98cd0d1eec67"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-097",
    gameName: "Pirates' Plenty Battle for Gold",
    img: "RT-SLOT-097.png",
    date: ISODate("2023-10-08T22:15:49.739Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232cbde4bc98cd0d1eec89"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-114",
    gameName: "24 Hour Grand Prix",
    img: "RT-SLOT-114.png",
    date: ISODate("2023-10-08T22:27:09.789Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232d47e4bc98cd0d1eec8f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-117",
    gameName: "Dragons Clusterbuster™",
    img: "RT-SLOT-117.png",
    date: ISODate("2023-10-08T22:29:27.343Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524021ee4bc98cd0d1eed25"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-005",
    gameName: "VR Mark Six",
    img: "VRLOTTO-LOTTO-005.png",
    date: ISODate("2023-10-09T13:37:34.816Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652402d0e4bc98cd0d1eed2f"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-011",
    gameName: "VR Vietnam-27-3minute lottery",
    img: "VRLOTTO-LOTTO-011.png",
    date: ISODate("2023-10-09T13:40:32.187Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240664e4bc98cd0d1eed59"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-052",
    gameName: "VR Bai Fu 3 Minute Lottery",
    img: "VRLOTTO-LOTTO-052.png",
    date: ISODate("2023-10-09T13:55:48.237Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65240a4fe4bc98cd0d1eed6c"),
    platform: "VENUS",
    gameType: "LIVE",
    gameCode: "VN-LIVE-009",
    gameName: "Roulette",
    img: "VN-LIVE-009.png",
    date: ISODate("2023-10-09T14:12:31.611Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244ca56330ef07b4a522c9"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-020",
    gameName: "EmperorGateSA",
    img: "SG-SLOT-020.png",
    date: ISODate("2023-10-09T18:55:33.106Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d616330ef07b4a522d3"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-029",
    gameName: "WongChoySA",
    img: "SG-SLOT-029.png",
    date: ISODate("2023-10-09T18:58:41.661Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ee6edc63d752e8bbfc6e"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-071",
    gameName: "MoneyMouse",
    img: "SG-SLOT-071.png",
    date: ISODate("2023-10-10T06:25:50.548Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f65cdc63d752e8bbfcca"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-118",
    gameName: "Panda Opera",
    img: "SG-SLOT-118.png",
    date: ISODate("2023-10-10T06:59:40.157Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f7efdc63d752e8bbfcd2"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-122",
    gameName: "Farmland Frenzy Maxways",
    img: "SG-SLOT-122.png",
    date: ISODate("2023-10-10T07:06:23.661Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5267dfaa815deca43c0"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-004",
    gameName: "Sicbo",
    img: "BG-LIVE-004.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d53b7dfaa815deca43c9"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-013",
    gameName: "SeDie",
    img: "BG-LIVE-013.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1157dfaa815deca43db"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-017",
    gameName: "Candy Dynasty",
    img: "DRAGOONSOFT-SLOT-017.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c307dfaa815deca43f1"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-039",
    gameName: "Triple Monkey",
    img: "DRAGOONSOFT-SLOT-039.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c377dfaa815deca43f3"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-041",
    gameName: "LU LING QI",
    img: "DRAGOONSOFT-SLOT-041.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c527dfaa815deca43fb"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-049",
    gameName: "Golden Eye",
    img: "DRAGOONSOFT-SLOT-049.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655241ac7dfaa815deca4423"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-100",
    gameName: "Prosperity Tiger",
    img: "JDB-SLOT-100.png",
    date: ISODate("2023-10-07T16:54:34.037Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a2d7dfaa815deca4429"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-003",
    gameName: "Jackpot Fishing",
    img: "JILI-FISH-003.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bf87dfaa815deca443d"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-015",
    gameName: "Bubble Beauty",
    img: "JILI-SLOT-015.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c067dfaa815deca4440"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-022",
    gameName: "Fengshen",
    img: "JILI-SLOT-022.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c587dfaa815deca4454"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-028",
    gameName: "Jungle King",
    img: "JILI-SLOT-028.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524ca87dfaa815deca445c"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-040",
    gameName: "RomaX",
    img: "JILI-SLOT-040.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d167dfaa815deca4473"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-063",
    gameName: "World Cup",
    img: "JILI-SLOT-063.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d357dfaa815deca447b"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-041",
    gameName: "Super Rich",
    img: "JILI-SLOT-041.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552588f7dfaa815deca4480"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-047",
    gameName: "Crash Bonus",
    img: "JILI-TABLE-047.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258937dfaa815deca4481"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-031",
    gameName: "Tower",
    img: "JILI-TABLE-031.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258f97dfaa815deca44aa"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-003",
    gameName: "Andar Bahar",
    img: "JILI-TABLE-003.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552632d7dfaa815deca44b1"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-063",
    gameName: "Tongits",
    img: "KM-TABLE-063.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552683d7dfaa815deca44bd"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-101",
    gameName: "Lucky Piggy",
    img: "lucky-piggy-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cfc7dfaa815deca44d6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-067",
    gameName: "Galactic Gems",
    img: "glassic-gem-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0d37dfaa815deca43cd"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-003",
    gameName: "777",
    img: "DRAGOONSOFT-SLOT-003.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0e27dfaa815deca43d4"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-010",
    gameName: "Pirate King",
    img: "DRAGOONSOFT-SLOT-010.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521ba57dfaa815deca43e1"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-023",
    gameName: "Arab",
    img: "DRAGOONSOFT-SLOT-023.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c4b7dfaa815deca43f9"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-047",
    gameName: "Ore Power",
    img: "DRAGOONSOFT-SLOT-047.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c6f7dfaa815deca4403"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-057",
    gameName: "You Will Win",
    img: "DRAGOONSOFT-SLOT-057.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521cc47dfaa815deca440e"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-068",
    gameName: "Grand Sheriff",
    img: "DRAGOONSOFT-SLOT-068.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552368b7dfaa815deca4414"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-033",
    gameName: "SUPER ELEMENTS",
    img: "FC-SLOT-033.png",
    date: ISODate("2023-10-07T05:53:22.081Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a417dfaa815deca441c"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-010",
    gameName: "Beer Tycoon",
    img: "JDB-EGAME-010.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a497dfaa815deca441e"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-004",
    gameName: "Happy New Year",
    img: "JDB-EGAME-004.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524a397dfaa815deca442e"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-008",
    gameName: "Boom Legend",
    img: "JILI-FISH-008.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bd27dfaa815deca4437"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-049",
    gameName: "Alibaba",
    img: "JILI-SLOT-049.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c027dfaa815deca443f"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-018",
    gameName: "XiYangYang",
    img: "JILI-SLOT-018.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258957dfaa815deca4482"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-046",
    gameName: "Blackjack Lucky Ladies",
    img: "JILI-TABLE-046.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258bc7dfaa815deca4493"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-030",
    gameName: "Go Rush",
    img: "JILI-TABLE-030.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258c87dfaa815deca4498"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-029",
    gameName: "West Hunter Bingo",
    img: "JILI-TABLE-029.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258de7dfaa815deca44a0"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-017",
    gameName: "Sic Bo",
    img: "JILI-TABLE-017.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655259017dfaa815deca44ad"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-005",
    gameName: "NumberKing",
    img: "JILI-TABLE-005.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655259057dfaa815deca44af"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-007",
    gameName: "Big small",
    img: "JILI-TABLE-007.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655267fc7dfaa815deca44b5"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-114",
    gameName: "Hawaiian Tiki",
    img: "hawaiian-tiki-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d0c7dfaa815deca44dd"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-074",
    gameName: "Candy Bonanza",
    img: "candy-bonanza-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552707c7dfaa815deca44e9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-055",
    gameName: "Wild Fireworks",
    img: "wild-fireworks-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270ae7dfaa815deca44ee"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-064",
    gameName: "Jewels of Prosperity",
    img: "jewels-of-prosperity-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527b597dfaa815deca4505"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-002",
    gameName: "Baccarat 2",
    img: "PP-LIVE-002.png",
    date: ISODate("2023-10-08T14:54:04.889Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527f1a7dfaa815deca450b"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-059",
    gameName: "ONE Blackjack 5 - Turkish",
    img: "PP-LIVE-059.png",
    date: ISODate("2023-10-08T16:06:33.056Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655285507dfaa815deca450d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-075",
    gameName: "Vampires VS Wolves",
    img: "PP-SLOT-075.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528acb7dfaa815deca4522"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-226",
    gameName: "Gates of Valhalla",
    img: "PP-SLOT-226.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528adc7dfaa815deca452a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-224",
    gameName: "Extra Juicy Megaways",
    img: "PP-SLOT-224.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292eb7dfaa815deca4541"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-266",
    gameName: "Magic Money Maze",
    img: "PP-SLOT-266.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552997e7dfaa815deca4554"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-285",
    gameName: "Snakes&LaddersSnakeEyes",
    img: "PP-SLOT-285.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299867dfaa815deca4558"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-286",
    gameName: "StrikingHot5",
    img: "PP-SLOT-286.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552999f7dfaa815deca4565"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-274",
    gameName: "Fire Hot 20",
    img: "PP-SLOT-274.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b707dfaa815deca4572"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-298",
    gameName: "Towering Fortunes",
    img: "PP-SLOT-298.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b7c7dfaa815deca4578"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-293",
    gameName: "Kingdom of Asgard",
    img: "PP-SLOT-293.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7567dfaa815deca457d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-315",
    gameName: "Wild Wild Bananas",
    img: "PP-SLOT-315.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7677dfaa815deca4584"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-310",
    gameName: "Sweet Powernudge",
    img: "PP-SLOT-310.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7737dfaa815deca4589"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-319",
    gameName: "Fish Eye",
    img: "PP-SLOT-319.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9407dfaa815deca458c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-332",
    gameName: "The Red Queen",
    img: "PP-SLOT-332.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9517dfaa815deca4595"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-326",
    gameName: "Mystery Of The Orient",
    img: "PP-SLOT-326.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db0e7dfaa815deca45a4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-362",
    gameName: "Power of Merlin Megaways",
    img: "PP-SLOT-362.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db257dfaa815deca45b0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-344",
    gameName: "Excalibur Unleashed",
    img: "PP-SLOT-344.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ae07dfaa815deca4600"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-076",
    gameName: "Greek Quantum Roulette",
    img: "PT-LIVE-076.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537aee7dfaa815deca4604"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-080",
    gameName: "Ruyi French Roulette",
    img: "PT-LIVE-080.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384647dfaa815deca461c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-148",
    gameName: "Gems Gone Wild Power Reels",
    img: "RT-SLOT-148.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553874e7dfaa815deca463d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-170",
    gameName: "Yucatan's Mystery",
    img: "RT-SLOT-170.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553896f7dfaa815deca4648"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-191",
    gameName: "Rock'n'Lock",
    img: "RT-SLOT-191.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c0f7dfaa815deca465b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-217",
    gameName: "Beriched",
    img: "RT-SLOT-217.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538f8c7dfaa815deca466a"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-010",
    gameName: "Red Blue Duel",
    img: "MX-LIVE-010.png",
    date: ISODate("2023-10-09T14:41:06.375Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a947dfaa815deca4673"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-039",
    gameName: "Tay Ninh",
    img: "VRLOTTO-LOTTO-039.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a967dfaa815deca4674"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-048",
    gameName: "Kien Giang",
    img: "VRLOTTO-LOTTO-048.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a17b7dfaa815deca4689"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-007",
    gameName: "MoneyBingo",
    img: "YesBingo-BINGO-007.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bb60ce955164383cbdd7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-099",
    gameName: "Speed SicBo",
    img: "PT-LIVE-099.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc96ce955164383cbdd9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-101",
    gameName: "Buffalo Blitz España",
    img: "PT-LIVE-101.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520eed5e4bc98cd0d1ee3d9"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-009",
    gameName: "HAPPY DUO BAO",
    img: "FC-SLOT-009.png",
    date: ISODate("2023-10-07T05:38:29.954Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db127dfaa815deca45a6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-349",
    gameName: "Robber Strike",
    img: "PP-SLOT-349.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553760a7dfaa815deca45f6"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-053",
    gameName: "Soiree Elite VIP Blackjack 2",
    img: "PT-LIVE-053.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258c37dfaa815deca4496"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-010",
    gameName: "TeenPatti Joker",
    img: "JILI-TABLE-010.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553760d7dfaa815deca45f8"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-050",
    gameName: "Soiree Elite VIP Blackjack",
    img: "PT-LIVE-050.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ace7dfaa815deca45fb"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-071",
    gameName: "Blackjack 5",
    img: "PT-LIVE-071.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258d57dfaa815deca449d"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-026",
    gameName: "Calaca Bingo",
    img: "JILI-TABLE-026.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382717dfaa815deca460a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-139",
    gameName: "Tricks and Treats",
    img: "RT-SLOT-139.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384817dfaa815deca4629"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-176",
    gameName: "Last Chance Saloon",
    img: "RT-SLOT-176.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d097dfaa815deca44dc"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-083",
    gameName: "Raider Jane's Crypt of Fortune",
    img: "raider-jane-s-crypt-of-fortune-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387557dfaa815deca4640"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-160",
    gameName: "Reel Keeper",
    img: "RT-SLOT-160.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270b07dfaa815deca44ef"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-057",
    gameName: "Genie's 3 Wishes",
    img: "genie-s-3-wishes-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553896a7dfaa815deca4645"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-181",
    gameName: "Mayhem",
    img: "RT-SLOT-181.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c117dfaa815deca465c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-211",
    gameName: "NFT Megaways™",
    img: "RT-SLOT-211.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527cc67dfaa815deca4507"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-024",
    gameName: "Speed Baccarat 13",
    img: "PP-LIVE-024.png",
    date: ISODate("2023-10-08T15:11:12.979Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527dfb7dfaa815deca4508"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-054",
    gameName: "Speed Roulette",
    img: "PP-LIVE-054.png",
    date: ISODate("2023-10-08T15:44:26.62Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a927dfaa815deca4672"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-032",
    gameName: "Dong Thap",
    img: "VRLOTTO-LOTTO-032.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539f5e7dfaa815deca4683"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-005",
    gameName: "PowerLion",
    img: "YesBingo-SLOT-005.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ad87dfaa815deca4528"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-221",
    gameName: "Crystal Caverns Megaways",
    img: "PP-SLOT-221.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291297dfaa815deca453b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-240",
    gameName: "The Great Stick-Up",
    img: "PP-SLOT-240.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a3387dfaa815deca468e"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-004",
    gameName: "PowerFortune",
    img: "YesBingo-SLOT-004.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65542a797dfaa815deca4697"),
    platform: "FC",
    gameType: "EGAME",
    gameCode: "FC-EGAME-005",
    gameName: "Super Color Game",
    img: "FC-EGAME-005.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552912c7dfaa815deca453c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-233",
    gameName: "Wild West Gold Megaways",
    img: "PP-SLOT-233.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292fc7dfaa815deca454a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-257",
    gameName: "Queen of Gods",
    img: "PP-SLOT-257.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299997dfaa815deca4562"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-271",
    gameName: "Octobeer Fortunes",
    img: "PP-SLOT-271.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d76c7dfaa815deca4586"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-341",
    gameName: "Jasmine Dreams",
    img: "PP-SLOT-341.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7757dfaa815deca458a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-306",
    gameName: "5 Rabiits Megaways",
    img: "PP-SLOT-306.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9437dfaa815deca458e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-339",
    gameName: "Cowboy Coins",
    img: "PP-SLOT-339.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d94c7dfaa815deca4593"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-330",
    gameName: "The Knight King",
    img: "PP-SLOT-330.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db0c7dfaa815deca45a3"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-353",
    gameName: "Jewel Rush",
    img: "PP-SLOT-353.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db107dfaa815deca45a5"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-356",
    gameName: "Big Bass Amazon Xtreme",
    img: "PP-SLOT-356.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd7b7dfaa815deca45b8"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-363",
    gameName: "Spellbinding Mystery",
    img: "PP-SLOT-363.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd857dfaa815deca45bc"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-375",
    gameName: "Cyclops Smash",
    img: "PP-SLOT-375.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd8d7dfaa815deca45bf"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-378",
    gameName: "Gold Oasis",
    img: "PP-SLOT-378.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552ddc87dfaa815deca45c3"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-382",
    gameName: "Fortunes of Aztec",
    img: "PP-SLOT-382.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536bac7dfaa815deca45c6"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-003",
    gameName: "SicBo Deluxe",
    img: "PT-LIVE-003.png",
    date: ISODate("2023-10-08T20:11:02.163Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536bb07dfaa815deca45c7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-001",
    gameName: "Baccarat",
    img: "PT-LIVE-001.png",
    date: ISODate("2023-10-08T20:11:02.163Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655373817dfaa815deca45d2"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-025",
    gameName: "French Roulette",
    img: "PT-LIVE-025.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553741b7dfaa815deca45d7"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-032",
    gameName: "Roulette",
    img: "PT-LIVE-032.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374e07dfaa815deca45e3"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-046",
    gameName: "Royale Blackjack 5",
    img: "PT-LIVE-046.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375f37dfaa815deca45ea"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-052",
    gameName: "Royale Blackjack 3",
    img: "PT-LIVE-052.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375ff7dfaa815deca45f1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-058",
    gameName: "Speed Auto Roulette",
    img: "PT-LIVE-058.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ade7dfaa815deca45ff"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-075",
    gameName: "Baccarat NC",
    img: "PT-LIVE-075.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382827dfaa815deca4613"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-130",
    gameName: "Reel King Mega",
    img: "RT-SLOT-130.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553897c7dfaa815deca464f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-198",
    gameName: "Wild Elements",
    img: "RT-SLOT-198.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389897dfaa815deca4654"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-185",
    gameName: "Risque Megaways™",
    img: "RT-SLOT-185.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655397357dfaa815deca466d"),
    platform: "SV388",
    gameType: "LIVE",
    gameCode: "SV-LIVE-001",
    gameName: "Cock Fight PHI",
    img: "SV-LIVE-001.png",
    date: ISODate("2023-10-09T13:35:17.549Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b667dfaa815deca467c"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-049",
    gameName: "Da Lat",
    img: "VRLOTTO-LOTTO-049.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b677dfaa815deca467d"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-040",
    gameName: "An Giang",
    img: "VRLOTTO-LOTTO-040.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a0dd7dfaa815deca4684"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-002",
    gameName: "OpenSesame",
    img: "YesBingo-BINGO-002.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a17f7dfaa815deca468b"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-009",
    gameName: "Lightning Bingo",
    img: "YesBingo-BINGO-009.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f0a8e4bc98cd0d1ee3f3"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-022",
    gameName: "CHINESE NEW YEAR 2",
    img: "FC-SLOT-022.png",
    date: ISODate("2023-10-07T05:46:16.628Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6520f1f7e4bc98cd0d1ee405"),
    platform: "FC",
    gameType: "SLOT",
    gameCode: "FC-SLOT-031",
    gameName: "FORTUNE EGG",
    img: "FC-SLOT-031.png",
    date: ISODate("2023-10-07T05:51:51.205Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65217fe8e4bc98cd0d1ee4cf"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-039",
    gameName: "Mining Upstart",
    img: "JDB-SLOT-039.png",
    date: ISODate("2023-10-07T15:57:28.682Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652182bfe4bc98cd0d1ee4f2"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-050",
    gameName: "WinningMask II",
    img: "JDB-SLOT-050.png",
    date: ISODate("2023-10-07T16:09:35.958Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521881ce4bc98cd0d1ee536"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-074",
    gameName: "Mjoinir",
    img: "JDB-SLOT-074.png",
    date: ISODate("2023-10-07T16:32:28.734Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218cf5e4bc98cd0d1ee59a"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-097",
    gameName: "Wonder Elephant",
    img: "JDB-SLOT-097.png",
    date: ISODate("2023-10-07T16:53:09.496Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65218e46e4bc98cd0d1ee5b0"),
    platform: "JDB",
    gameType: "SLOT",
    gameCode: "JDB-SLOT-106",
    gameName: "FortuneNeko",
    img: "JDB-SLOT-106.png",
    date: ISODate("2023-10-07T16:58:46.694Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d0a3e4bc98cd0d1ee6d5"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-058",
    gameName: "KM Virtual Treadmill Racing",
    img: "KM-TABLE-058.png",
    date: ISODate("2023-10-07T21:41:55.182Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521d587e4bc98cd0d1ee6ed"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-009",
    gameName: "thai-hi-lo2",
    img: "KM-TABLE-009.png",
    date: ISODate("2023-10-07T22:02:47.458Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521e355e4bc98cd0d1ee762"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-005",
    gameName: "Paikang",
    img: "LUCKYPOKER-TABLE-005.png",
    date: ISODate("2023-10-07T23:01:41.095Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6521ec3ee4bc98cd0d1ee7ac"),
    platform: "PLAY8",
    gameType: "SLOT",
    gameCode: "P8-SLOT-026",
    gameName: "RichMouse",
    img: "P8-SLOT-026.png",
    date: ISODate("2023-10-07T23:39:42.185Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652228c7e4bc98cd0d1ee81c"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-022",
    gameName: "CardMatka",
    img: "KM-TABLE-022.png",
    date: ISODate("2023-10-08T03:57:59.161Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222b08e4bc98cd0d1ee832"),
    platform: "KINGMAKER",
    gameType: "THAI",
    gameCode: "KM-TABLE-034",
    gameName: "Kingmaker Pok Deng",
    img: "KM-TABLE-034.png",
    date: ISODate("2023-10-08T04:07:36.949Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222c4ce4bc98cd0d1ee840"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-041",
    gameName: "Cash Rocket",
    img: "KM-TABLE-041.png",
    date: ISODate("2023-10-08T04:13:00.196Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222db4e4bc98cd0d1ee84c"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-047",
    gameName: "Heist",
    img: "KM-TABLE-047.png",
    date: ISODate("2023-10-08T04:19:00.261Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65222e9ce4bc98cd0d1ee858"),
    platform: "KINGMAKER",
    gameType: "TABLE",
    gameCode: "KM-TABLE-053",
    gameName: "Marble Knockout",
    img: "KM-TABLE-053.png",
    date: ISODate("2023-10-08T04:22:52.115Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c15de4bc98cd0d1ee8cd"),
    platform: "PP",
    gameType: "EGAME",
    gameCode: "PP-EGAME-005",
    gameName: "Greyhound Racing",
    img: "PP-EGAME-005.png",
    date: ISODate("2023-10-08T14:49:01.594Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522c5d3e4bc98cd0d1ee903"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-017",
    gameName: "Speed Baccarat 6",
    img: "PP-LIVE-017.png",
    date: ISODate("2023-10-08T15:08:03.883Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cb4ce4bc98cd0d1ee946"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-037",
    gameName: "Roulette 10 - Ruby",
    img: "PP-LIVE-037.png",
    date: ISODate("2023-10-08T15:31:24.197Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522cce4e4bc98cd0d1ee952"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-042",
    gameName: "Dragon Tiger",
    img: "PP-LIVE-042.png",
    date: ISODate("2023-10-08T15:38:12.659Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d631e4bc98cd0d1ee976"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-393",
    gameName: "Demon Pots",
    img: "PP-SLOT-393.png",
    date: ISODate("2023-11-15T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d87fe4bc98cd0d1ee9a6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-015",
    gameName: "Bonanza Gold",
    img: "PP-SLOT-015.png",
    date: ISODate("2023-10-08T16:27:43.33Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d8d0e4bc98cd0d1ee9ae"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-019",
    gameName: "Cowboys Gold",
    img: "PP-SLOT-019.png",
    date: ISODate("2023-10-08T16:29:04.946Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522d8f5e4bc98cd0d1ee9b0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-020",
    gameName: "Pirate Gold Deluxe",
    img: "PP-SLOT-020.png",
    date: ISODate("2023-10-08T16:29:41.707Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522dcdfe4bc98cd0d1ee9ee"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-039",
    gameName: "Fu Fu Fu",
    img: "PP-SLOT-039.png",
    date: ISODate("2023-10-08T16:46:23.32Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de01e4bc98cd0d1eea09"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-052",
    gameName: "Wild West Gold",
    img: "PP-SLOT-052.png",
    date: ISODate("2023-10-08T16:51:13.474Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522de16e4bc98cd0d1eea0b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-053",
    gameName: "Lucky Dragon Ball",
    img: "PP-SLOT-053.png",
    date: ISODate("2023-10-08T16:51:34.349Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522e569e4bc98cd0d1eea78"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-185",
    gameName: "Yum YumPowerways",
    img: "PP-SLOT-185.png",
    date: ISODate("2023-10-08T17:22:49.249Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6522ea6ae4bc98cd0d1eeab0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-206",
    gameName: "The Tweety House",
    img: "PP-SLOT-206.png",
    date: ISODate("2023-10-08T17:44:10.433Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65230ff8e4bc98cd0d1eeaff"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-020",
    gameName: "Feng Kuang Ma Jiang",
    img: "PT-SLOT-020.png",
    date: ISODate("2023-10-08T20:24:24.564Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6523106be4bc98cd0d1eeb06"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-021",
    gameName: "Epic Ape",
    img: "PT-SLOT-021.png",
    date: ISODate("2023-10-08T20:26:19.78Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652310f8e4bc98cd0d1eeb0e"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-031",
    gameName: "Italian Cashback Blackjack",
    img: "PT-LIVE-031.png",
    date: ISODate("2023-10-08T20:28:40.998Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231128e4bc98cd0d1eeb12"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-025",
    gameName: "Eternal Lady",
    img: "PT-SLOT-025.png",
    date: ISODate("2023-10-08T20:29:28.705Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652315d5e4bc98cd0d1eeb5e"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-061",
    gameName: "Geisha Story",
    img: "PT-SLOT-061.png",
    date: ISODate("2023-10-08T20:49:25.606Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652315e9e4bc98cd0d1eeb60"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-062",
    gameName: "Fortunes of the Fox",
    img: "PT-SLOT-062.png",
    date: ISODate("2023-10-08T20:49:45.664Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652315f9e4bc98cd0d1eeb62"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-001",
    gameName: "Ancient Script",
    img: "RT-SLOT-001.png",
    date: ISODate("2023-10-08T20:50:01.167Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a1be4bc98cd0d1eebd1"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-026",
    gameName: "Gold Star",
    img: "RT-SLOT-026.png",
    date: ISODate("2023-10-08T21:07:39.915Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231a3de4bc98cd0d1eebd3"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-089",
    gameName: "Fishin' Bonanza",
    img: "PT-SLOT-089.png",
    date: ISODate("2023-10-08T21:08:13.294Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231b3ce4bc98cd0d1eebe5"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-032",
    gameName: "Jackpot Quest",
    img: "RT-SLOT-032.png",
    date: ISODate("2023-10-08T21:12:28.678Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65231d87e4bc98cd0d1eebf5"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-040",
    gameName: "Lucky Halloween",
    img: "RT-SLOT-040.png",
    date: ISODate("2023-10-08T21:22:15.11Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652320c5e4bc98cd0d1eec02"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-046",
    gameName: "Mega Jade",
    img: "RT-SLOT-046.png",
    date: ISODate("2023-10-08T21:36:05.423Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232160e4bc98cd0d1eec0b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-050",
    gameName: "Mystery Reels",
    img: "RT-SLOT-050.png",
    date: ISODate("2023-10-08T21:38:40.264Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("652328dde4bc98cd0d1eec57"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-089",
    gameName: "Aztec Spins",
    img: "RT-SLOT-089.png",
    date: ISODate("2023-10-08T22:10:37.564Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232a3ee4bc98cd0d1eec69"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-098",
    gameName: "Rainbow Jackpots Power Lines",
    img: "RT-SLOT-098.png",
    date: ISODate("2023-10-08T22:16:30.504Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232b92e4bc98cd0d1eec79"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-106",
    gameName: "Santa Spins",
    img: "RT-SLOT-106.png",
    date: ISODate("2023-10-08T22:22:10.912Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232d7fe4bc98cd0d1eec93"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-119",
    gameName: "Dragon's Fire INFINIREELS",
    img: "RT-SLOT-119.png",
    date: ISODate("2023-10-08T22:30:23.734Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65232d9ee4bc98cd0d1eec95"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-120",
    gameName: "Dragon King: Legend of the Seas",
    img: "RT-SLOT-120.png",
    date: ISODate("2023-10-08T22:30:54.703Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524037ee4bc98cd0d1eed39"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-019",
    gameName: "Phu Yen",
    img: "VRLOTTO-LOTTO-019.png",
    date: ISODate("2023-10-09T13:43:26.486Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244a066330ef07b4a5229f"),
    platform: "SPADE",
    gameType: "EGAME",
    gameCode: "SG-EGAME-001",
    gameName: "DerbyExpress",
    img: "SG-EGAME-001.png",
    date: ISODate("2023-10-09T18:44:22.172Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65244d0e6330ef07b4a522cf"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-001",
    gameName: "Candy Pop",
    img: "SG-SLOT-001.png",
    date: ISODate("2023-10-09T18:57:18.766Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ecb4dc63d752e8bbfc54"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-046",
    gameName: "LuckyFengShui",
    img: "SG-SLOT-046.png",
    date: ISODate("2023-10-10T06:18:28.711Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524edfadc63d752e8bbfc66"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-064",
    gameName: "SantaGifts",
    img: "SG-SLOT-064.png",
    date: ISODate("2023-10-10T06:23:54.039Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ee15dc63d752e8bbfc68"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-068",
    gameName: "HeroesGame",
    img: "SG-SLOT-068.png",
    date: ISODate("2023-10-10T06:24:21.62Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524ee4cdc63d752e8bbfc6c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-070",
    gameName: "DancingFever",
    img: "SG-SLOT-070.png",
    date: ISODate("2023-10-10T06:25:16.735Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f079dc63d752e8bbfc7c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-078",
    gameName: "CrazyBomber",
    img: "SG-SLOT-078.png",
    date: ISODate("2023-10-10T06:34:33.499Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f12ddc63d752e8bbfc88"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-084",
    gameName: "BrothersKingdom",
    img: "SG-SLOT-084.png",
    date: ISODate("2023-10-10T06:37:33.724Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6524f3ebdc63d752e8bbfcb4"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-107",
    gameName: "Lucky Koi Exclusive",
    img: "SG-SLOT-107.png",
    date: ISODate("2023-10-10T06:49:15.35Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f0e07dfaa815deca43d3"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-009",
    gameName: "Maya King",
    img: "DRAGOONSOFT-SLOT-009.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551f1887dfaa815deca43de"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-020",
    gameName: "Bust Treasure",
    img: "DRAGOONSOFT-SLOT-020.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bb07dfaa815deca43e4"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-026",
    gameName: "Golf",
    img: "DRAGOONSOFT-SLOT-026.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bbc7dfaa815deca43e7"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-029",
    gameName: "Alice",
    img: "DRAGOONSOFT-SLOT-029.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c687dfaa815deca4401"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-055",
    gameName: "Egypt Dynasty",
    img: "DRAGOONSOFT-SLOT-055.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c987dfaa815deca440c"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-066",
    gameName: "Roll in Money",
    img: "DRAGOONSOFT-SLOT-066.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521cc87dfaa815deca440f"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-069",
    gameName: "Overload & Concubine",
    img: "DRAGOONSOFT-SLOT-069.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6551d5347dfaa815deca43c6"),
    platform: "BG",
    gameType: "LIVE",
    gameCode: "BG-LIVE-010",
    gameName: "WinThreeCards",
    img: "BG-LIVE-010.png",
    date: ISODate("2023-10-08T16:43:45.532Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521bad7dfaa815deca43e3"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-025",
    gameName: "Crystal Fruits",
    img: "DRAGOONSOFT-SLOT-025.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65521c3d7dfaa815deca43f5"),
    platform: "DRAGOONSOFT",
    gameType: "SLOT",
    gameCode: "DRAGOONSOFT-SLOT-043",
    gameName: "Many Beauties",
    img: "DRAGOONSOFT-SLOT-043.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65522be17dfaa815deca4413"),
    platform: "FASTSPIN",
    gameType: "SLOT",
    gameCode: "FastSpin-SLOT-026",
    gameName: "Heavenly Fortunes 2",
    img: "FastSpin-SLOT-026.png",
    date: ISODate("2023-10-06T05:25:50.306Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a3a7dfaa815deca441a"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-009",
    gameName: "Classic Mario",
    img: "JDB-EGAME-009.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c147dfaa815deca4444"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-030",
    gameName: "Golden Queen",
    img: "JILI-SLOT-030.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cba7dfaa815deca4460"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-033",
    gameName: "Dice",
    img: "JILI-SLOT-033.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cee7dfaa815deca446d"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-072",
    gameName: "Wild Racer",
    img: "JILI-SLOT-072.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258db7dfaa815deca449f"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-012",
    gameName: "Dragon & Tiger",
    img: "JILI-TABLE-012.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258f27dfaa815deca44a7"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-015",
    gameName: "Fortune Bingo",
    img: "JILI-TABLE-015.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552682a7dfaa815deca44b9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-115",
    gameName: "Bakery Bonanza",
    img: "bakery-bonanza-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269cf7dfaa815deca44c2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-090",
    gameName: "Cocktail Nights",
    img: "cocktail-nights-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269da7dfaa815deca44c7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-100",
    gameName: "Win Win Fish Prawn Crab",
    img: "win-win-fish-prawn-crab-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cf17dfaa815deca44d1"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-078",
    gameName: "Rise of Apollo",
    img: "rise-of-apollo-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270797dfaa815deca44e8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-063",
    gameName: "Queen of Bounty",
    img: "queen-of-bounty-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270ba7dfaa815deca44f4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-062",
    gameName: "Vampire's Charm",
    img: "vampire-s-charm-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552731d7dfaa815deca4503"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-032",
    gameName: "The Great Icescape",
    img: "the-great-icescape-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65527bf27dfaa815deca4506"),
    platform: "PP",
    gameType: "LIVE",
    gameCode: "PP-LIVE-013",
    gameName: "Speed Baccarat 1",
    img: "PP-LIVE-013.png",
    date: ISODate("2023-10-08T15:13:10.858Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ac77dfaa815deca4520"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-223",
    gameName: "Magician's Secrets",
    img: "PP-SLOT-223.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ac97dfaa815deca4521"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-216",
    gameName: "Big Bass Bonanza Megaways",
    img: "PP-SLOT-216.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ada7dfaa815deca4529"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-214",
    gameName: "Bounty Gold",
    img: "PP-SLOT-214.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291117dfaa815deca4530"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-232",
    gameName: "Colossal Cash Zone",
    img: "PP-SLOT-232.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291237dfaa815deca4538"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-234",
    gameName: "Spirit of Adventure",
    img: "PP-SLOT-234.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291277dfaa815deca453a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-265",
    gameName: "Hot to Burn Extreme",
    img: "PP-SLOT-265.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299827dfaa815deca4556"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-270",
    gameName: "Shining Hot 5",
    img: "PP-SLOT-270.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d76e7dfaa815deca4587"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-316",
    gameName: "Secret City Gold",
    img: "PP-SLOT-316.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9547dfaa815deca4597"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-329",
    gameName: "Fruits of the Amazon",
    img: "PP-SLOT-329.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9597dfaa815deca4599"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-360",
    gameName: "Cash Box",
    img: "PP-SLOT-360.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db087dfaa815deca45a1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-358",
    gameName: "Joker Race",
    img: "PP-SLOT-358.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db2b7dfaa815deca45b3"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-365",
    gameName: "3 Buzzling Wilds",
    img: "PP-SLOT-365.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd817dfaa815deca45ba"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-372",
    gameName: "Mahjong Wins",
    img: "PP-SLOT-372.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd877dfaa815deca45bd"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-376",
    gameName: "Big Bass Hold & Spinner Megaways",
    img: "PP-SLOT-376.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65536c287dfaa815deca45c9"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-005",
    gameName: "Bet on Baccarat Live",
    img: "PT-LIVE-005.png",
    date: ISODate("2023-10-08T20:12:19.37Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374de7dfaa815deca45e2"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-045",
    gameName: "Royale Blackjack 1",
    img: "PT-LIVE-045.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382737dfaa815deca460b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-136",
    gameName: "Hammer Gods",
    img: "RT-SLOT-136.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387477dfaa815deca4639"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-168",
    gameName: "War of Gods",
    img: "RT-SLOT-168.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c0c7dfaa815deca4659"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-201",
    gameName: "Joe Exotic",
    img: "RT-SLOT-201.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c227dfaa815deca4665"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-202",
    gameName: "Night Roller",
    img: "RT-SLOT-202.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538f4f7dfaa815deca4669"),
    platform: "SEXYBCRT",
    gameType: "LIVE",
    gameCode: "MX-LIVE-002",
    gameName: "Baccarat",
    img: "MX-LIVE-001.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539f5b7dfaa815deca4682"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-003",
    gameName: "DragoNova",
    img: "YesBingo-SLOT-003.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564ba50ce955164383cbdce"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-090",
    gameName: "Big Bad Wolf Live",
    img: "PT-LIVE-090.png",
    date: ISODate("2023-11-29T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bc6fce955164383cbdd8"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-100",
    gameName: "Auto Roulette 2",
    img: "PT-LIVE-100.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bca6ce955164383cbde1"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-109",
    gameName: "Speed Baccarat",
    img: "PT-LIVE-109.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c1c7dfaa815deca4446"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-019",
    gameName: "FortunePig",
    img: "JILI-SLOT-019.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c287dfaa815deca4449"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-051",
    gameName: "Mega Ace",
    img: "JILI-SLOT-051.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c4b7dfaa815deca4451"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-029",
    gameName: "Money Coming",
    img: "JILI-SLOT-029.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cd57dfaa815deca4467"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-054",
    gameName: "Crazy Pusher",
    img: "JILI-SLOT-054.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524ce57dfaa815deca446b"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-035",
    gameName: "SevenUpDown",
    img: "JILI-SLOT-035.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cf67dfaa815deca446f"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-053",
    gameName: "Book of Gold",
    img: "JILI-SLOT-053.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524d427dfaa815deca447e"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-079",
    gameName: "Sweet Land",
    img: "JILI-SLOT-079.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552589b7dfaa815deca4484"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-044",
    gameName: "Blackjack",
    img: "JILI-TABLE-044.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269cb7dfaa815deca44c0"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-106",
    gameName: "Prosperity Fortune Tree",
    img: "prosperity-fortune-tree-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269d37dfaa815deca44c4"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-103",
    gameName: "Legend of Perseus",
    img: "legend-of-perseus-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269e67dfaa815deca44cd"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-095",
    gameName: "Destiny of sun and moon",
    img: "destiny-of-sun-moon-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cc67dfaa815deca44d0"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-069",
    gameName: "Opera Dynasty",
    img: "opera-dynasty-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cf47dfaa815deca44d2"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-068",
    gameName: "Guardians of Ice and Fire",
    img: "guardians-of-ice-fire-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270ac7dfaa815deca44ed"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-049",
    gameName: "Bikini Paradise",
    img: "bikini-paradise-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ac27dfaa815deca451d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-213",
    gameName: "Bubble Pop",
    img: "PP-SLOT-213.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ad27dfaa815deca4526"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-222",
    gameName: "Smugglers Cove",
    img: "PP-SLOT-222.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ad57dfaa815deca4527"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-246",
    gameName: "Snakes and Ladders Megadice",
    img: "PP-SLOT-246.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292fe7dfaa815deca454b"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-253",
    gameName: "North Guardians",
    img: "PP-SLOT-253.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552999b7dfaa815deca4563"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-281",
    gameName: "CandyStars",
    img: "PP-SLOT-281.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7607dfaa815deca4582"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-307",
    gameName: "Dragon Hero",
    img: "PP-SLOT-307.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d9477dfaa815deca4590"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-334",
    gameName: "3 Dancing Monkeys",
    img: "PP-SLOT-334.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd917dfaa815deca45c1"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-380",
    gameName: "John Hunter and the Book of Tut Megaways",
    img: "PP-SLOT-380.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655372c97dfaa815deca45cd"),
    platform: "PT",
    gameType: "SLOT",
    gameCode: "PT-SLOT-088",
    gameName: "Diamond Rise",
    img: "PT-SLOT-088.png",
    date: ISODate("2023-10-08T22:28:11.119Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553743d7dfaa815deca45d8"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-034",
    gameName: "Grand Baccarat",
    img: "PT-LIVE-034.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375fb7dfaa815deca45ef"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-065",
    gameName: "UK Roulette",
    img: "PT-LIVE-065.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537af27dfaa815deca4606"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-082",
    gameName: "Xiang Long Roulette",
    img: "PT-LIVE-082.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384727dfaa815deca4623"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-146",
    gameName: "Da Vinci's Mystery",
    img: "RT-SLOT-146.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384837dfaa815deca462a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-151",
    gameName: "Gonzo's Quest™ MegaWays™",
    img: "RT-SLOT-151.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387397dfaa815deca4632"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-162",
    gameName: "Riddle Of The Sphinx",
    img: "RT-SLOT-162.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553873d7dfaa815deca4634"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-178",
    gameName: "Genie Nights",
    img: "RT-SLOT-178.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553874b7dfaa815deca463b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-171",
    gameName: "Jingle Ways Megaways™",
    img: "RT-SLOT-171.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387577dfaa815deca4641"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-166",
    gameName: "Trillionaire",
    img: "RT-SLOT-166.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389657dfaa815deca4642"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-186",
    gameName: "Zaida's Fortune",
    img: "RT-SLOT-186.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553896d7dfaa815deca4647"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-197",
    gameName: "Three Kingdoms",
    img: "RT-SLOT-197.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389817dfaa815deca4651"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-182",
    gameName: "Big Cat Rescue Megaways™",
    img: "RT-SLOT-182.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c0a7dfaa815deca4658"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-213",
    gameName: "Forever 7's",
    img: "RT-SLOT-213.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c0d7dfaa815deca465a"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-208",
    gameName: "Wild Hot Chilli Reels",
    img: "RT-SLOT-208.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c277dfaa815deca4668"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-205",
    gameName: "Tiki Fruits Totem Frenzy",
    img: "RT-SLOT-205.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539a8c7dfaa815deca466f"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-037",
    gameName: "Soc Trang",
    img: "VRLOTTO-LOTTO-037.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b6d7dfaa815deca4680"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-030",
    gameName: "Kon Tum",
    img: "VRLOTTO-LOTTO-030.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6564bca2ce955164383cbddf"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-107",
    gameName: "Jet Set Racing Roulette Live",
    img: "PT-LIVE-107.png",
    date: ISODate("2023-11-30T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526cfe7dfaa815deca44d7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-073",
    gameName: "Majestic Treasure",
    img: "majestic-treasures-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65526d027dfaa815deca44d9"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-070",
    gameName: "Fortune Ox",
    img: "fortune-ox-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270be7dfaa815deca44f6"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-065",
    gameName: "Lucky Neko",
    img: "lucky-neko-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270c07dfaa815deca44f7"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-059",
    gameName: "Circus Delight",
    img: "circus-delight-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273177dfaa815deca4500"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-036",
    gameName: "Flirting Scholar",
    img: "flirting-scholar-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655285527dfaa815deca450e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-076",
    gameName: "Hot Chilli",
    img: "PP-SLOT-076.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655285567dfaa815deca4510"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-078",
    gameName: "Monkey Warrior",
    img: "PP-SLOT-078.png",
    date: ISODate("2023-10-08T16:56:56.815Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655287947dfaa815deca4515"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-123",
    gameName: "Gold Train",
    img: "PP-SLOT-123.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552879b7dfaa815deca4518"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-104",
    gameName: "5 Lions",
    img: "PP-SLOT-104.png",
    date: ISODate("2023-10-08T17:06:27.554Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ab97dfaa815deca451a"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-218",
    gameName: "Super X",
    img: "PP-SLOT-218.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ac57dfaa815deca451f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-229",
    gameName: "Rock Vegas",
    img: "PP-SLOT-229.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65528ace7dfaa815deca4524"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-219",
    gameName: "Lucky New Year - Tiger Treasures",
    img: "PP-SLOT-219.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552910a7dfaa815deca452d"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-237",
    gameName: "Chicken Chase",
    img: "PP-SLOT-237.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655291317dfaa815deca453e"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-230",
    gameName: "Cash Patrol",
    img: "PP-SLOT-230.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292ef7dfaa815deca4543"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-251",
    gameName: "Clover Gold",
    img: "PP-SLOT-251.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b787dfaa815deca4576"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-300",
    gameName: "Pirate Golden Age",
    img: "PP-SLOT-300.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d95e7dfaa815deca459c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-338",
    gameName: "Jane Hunter and the Mask of Montezuma",
    img: "PP-SLOT-338.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db1f7dfaa815deca45ad"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-354",
    gameName: "Wisdom of Athena",
    img: "PP-SLOT-354.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db217dfaa815deca45ae"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-347",
    gameName: "Floating Dragon - Dragon Boat Festival",
    img: "PP-SLOT-347.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552dd777dfaa815deca45b6"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-369",
    gameName: "Rocket Blast Megaways",
    img: "PP-SLOT-369.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552e10a7dfaa815deca45c4"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-383",
    gameName: "Yi Sun Shin",
    img: "PP-SLOT-383.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655374db7dfaa815deca45e0"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-043",
    gameName: "Blackjack Italiano VIP",
    img: "PT-LIVE-043.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655376067dfaa815deca45f4"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-069",
    gameName: "Blackjack 3",
    img: "PT-LIVE-069.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537af47dfaa815deca4607"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-083",
    gameName: "Slingshot Ruleta Espana",
    img: "PT-LIVE-083.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382277dfaa815deca4608"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-116",
    gameName: "Dragon's Luck Deluxe",
    img: "RT-SLOT-116.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553827b7dfaa815deca4610"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-127",
    gameName: "Dice Dice Dice",
    img: "RT-SLOT-127.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384687dfaa815deca461e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-155",
    gameName: "Legendary Excalibur",
    img: "RT-SLOT-155.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387537dfaa815deca463f"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-173",
    gameName: "Hustling",
    img: "RT-SLOT-173.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389687dfaa815deca4644"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-193",
    gameName: "Great Gold",
    img: "RT-SLOT-193.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553897f7dfaa815deca4650"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-189",
    gameName: "Wild Tundra",
    img: "RT-SLOT-189.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389847dfaa815deca4652"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-192",
    gameName: "Gonzita's Quest",
    img: "RT-SLOT-192.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c087dfaa815deca4657"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-216",
    gameName: "Fortune House Power Reels™",
    img: "RT-SLOT-216.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c157dfaa815deca465e"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-214",
    gameName: "Well of WIlds MegaWays + PowerWheel",
    img: "RT-SLOT-214.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c257dfaa815deca4667"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-199",
    gameName: "Wild O'Clock",
    img: "RT-SLOT-199.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655396df7dfaa815deca466c"),
    platform: "SPADE",
    gameType: "SLOT",
    gameCode: "SG-SLOT-089",
    gameName: "Hugon Quest",
    img: "SG-SLOT-089.png",
    date: ISODate("2023-10-10T07:28:19.271Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b647dfaa815deca467b"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-041",
    gameName: "Binh Thuan",
    img: "VRLOTTO-LOTTO-041.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65539b6b7dfaa815deca467f"),
    platform: "VRLOTTO",
    gameType: "LOTTO",
    gameCode: "VRLOTTO-LOTTO-043",
    gameName: "Binh Dng",
    img: "VRLOTTO-LOTTO-043.png",
    date: ISODate("2023-10-09T13:49:29.615Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a1797dfaa815deca4688"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-006",
    gameName: "Beasty Bingo",
    img: "YesBingo-BINGO-006.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a3367dfaa815deca468d"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-010",
    gameName: "LuckyStar",
    img: "YesBingo-SLOT-010.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a33c7dfaa815deca4690"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-015",
    gameName: "CasinoFantasy",
    img: "YesBingo-SLOT-015.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a33e7dfaa815deca4691"),
    platform: "YESBINGO",
    gameType: "SLOT",
    gameCode: "YesBingo-SLOT-017",
    gameName: "King Arthur Gold",
    img: "YesBingo-SLOT-017.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655237127dfaa815deca4415"),
    platform: "HOTROAD",
    gameType: "LIVE",
    gameCode: "HOTROAD-LIVE-001",
    gameName: "BACCARAT",
    img: "HOTROAD-LIVE-001.png",
    date: ISODate("2023-10-07T05:57:20.911Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65523a4d7dfaa815deca441f"),
    platform: "JDB",
    gameType: "EGAME",
    gameCode: "JDB-EGAME-003",
    gameName: "Birds and Animals",
    img: "JDB-EGAME-003.png",
    date: ISODate("2023-10-07T06:37:00.625Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655245517dfaa815deca4427"),
    platform: "JILI",
    gameType: "FH",
    gameCode: "JILI-FISH-001",
    gameName: "Royal Fishing",
    img: "JILI-FISH-001.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524bca7dfaa815deca4434"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-009",
    gameName: "Fa Fa Fa",
    img: "JILI-SLOT-009.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c417dfaa815deca444f"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-002",
    gameName: "Hot Chilli",
    img: "JILI-SLOT-002.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524c537dfaa815deca4453"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-021",
    gameName: "DiamondParty",
    img: "JILI-SLOT-021.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524ca57dfaa815deca445b"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-062",
    gameName: "Bonus Hunter",
    img: "JILI-SLOT-062.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65524cce7dfaa815deca4465"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-043",
    gameName: "Fortune Gems",
    img: "JILI-SLOT-043.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258977dfaa815deca4483"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-042",
    gameName: "MiniFlush",
    img: "JILI-TABLE-042.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552589f7dfaa815deca4486"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-039",
    gameName: "Color Prediction",
    img: "JILI-TABLE-039.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258ad7dfaa815deca448d"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-033",
    gameName: "Mines",
    img: "JILI-TABLE-033.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258cf7dfaa815deca449b"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-023",
    gameName: "Color Game",
    img: "JILI-TABLE-023.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655258f47dfaa815deca44a8"),
    platform: "JILI",
    gameType: "TABLE",
    gameCode: "JILI-TABLE-001",
    gameName: "Teen Patti",
    img: "JILI-TABLE-001.png",
    date: ISODate("2023-10-07T22:48:25.976Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655268267dfaa815deca44b8"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-108",
    gameName: "Alchemy Gold",
    img: "PG-SLOT-108.png",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655268397dfaa815deca44bc"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-111",
    gameName: "Midas Fortune",
    img: "midas-fortune-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655269e47dfaa815deca44cc"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-105",
    gameName: "Wild Bounty Showdown",
    img: "wild-bounty-showdown-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655270b47dfaa815deca44f1"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-053",
    gameName: "Phoenix Rises",
    img: "phoenix-rises-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552730c7dfaa815deca44fb"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-041",
    gameName: "Mahjong Ways",
    img: "mahjong-ways-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655273107dfaa815deca44fd"),
    platform: "PG",
    gameType: "SLOT",
    gameCode: "PG-SLOT-039",
    gameName: "Muay Thai Champion",
    img: "muay-thai-champion-by-pg-soft.avif",
    date: ISODate("2023-10-07T23:15:56.194Z"),
    isDelete: false,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552910e7dfaa815deca452f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-244",
    gameName: "Rainbow Gold",
    img: "PP-SLOT-244.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552911a7dfaa815deca4534"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-235",
    gameName: "Fire Strike 2",
    img: "PP-SLOT-235.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552911e7dfaa815deca4536"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-231",
    gameName: "The Ultimate 5",
    img: "PP-SLOT-231.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655292f57dfaa815deca4546"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-261",
    gameName: "Big Bass Splash",
    img: "PP-SLOT-261.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655293077dfaa815deca454f"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-252",
    gameName: "Zombie Carnival",
    img: "PP-SLOT-252.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655299957dfaa815deca4560"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-303",
    gameName: "Gates of Gatot Kaca",
    img: "PP-SLOT-303.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65529b657dfaa815deca456c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-299",
    gameName: "Firebird Spirit",
    img: "PP-SLOT-299.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d7547dfaa815deca457c"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-308",
    gameName: "PIZZA! PIZZA? PIZZA!",
    img: "PP-SLOT-308.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552d75e7dfaa815deca4581"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-321",
    gameName: "Club Tropicana",
    img: "PP-SLOT-321.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552db067dfaa815deca45a0"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-361",
    gameName: "Kraken's Sky Bounty",
    img: "PP-SLOT-361.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6552ddc67dfaa815deca45c2"),
    platform: "PP",
    gameType: "SLOT",
    gameCode: "PP-SLOT-381",
    gameName: "Candy Blitz",
    img: "PP-SLOT-381.png",
    date: ISODate("2023-10-08T17:46:02.77Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553735f7dfaa815deca45d0"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-021",
    gameName: "American Roulette",
    img: "PT-LIVE-021.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655373b17dfaa815deca45d5"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-029",
    gameName: "Quantum Blackjack Plus",
    img: "PT-LIVE-029.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375f87dfaa815deca45ed"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-062",
    gameName: "Speed Roulette",
    img: "PT-LIVE-062.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655375fa7dfaa815deca45ee"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-055",
    gameName: "Greek Roulette",
    img: "PT-LIVE-055.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65537ae47dfaa815deca4602"),
    platform: "PT",
    gameType: "LIVE",
    gameCode: "PT-LIVE-078",
    gameName: "Arabic Roulette",
    img: "PT-LIVE-078.png",
    date: ISODate("2023-10-08T20:20:07.191Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655382757dfaa815deca460c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-124",
    gameName: "Bounty Raid",
    img: "RT-SLOT-124.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553827d7dfaa815deca4611"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-137",
    gameName: "Peggy Sweets",
    img: "RT-SLOT-137.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    isDelete: true,
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553828b7dfaa815deca4618"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-125",
    gameName: "Path of Destiny",
    img: "RT-SLOT-125.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384747dfaa815deca4624"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-156",
    gameName: "Lucky Fridays",
    img: "RT-SLOT-156.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655384897dfaa815deca462d"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-141",
    gameName: "Wings Of Ra",
    img: "RT-SLOT-141.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655387437dfaa815deca4637"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-175",
    gameName: "Fa Fa Babies",
    img: "RT-SLOT-175.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389757dfaa815deca464b"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-180",
    gameName: "Bulls Run Wild",
    img: "RT-SLOT-180.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("655389777dfaa815deca464c"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-187",
    gameName: "Apache Way",
    img: "RT-SLOT-187.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65538c1a7dfaa815deca4661"),
    platform: "RT",
    gameType: "SLOT",
    gameCode: "RT-SLOT-203",
    gameName: "Primate King",
    img: "RT-SLOT-203.png",
    date: ISODate("2023-10-08T22:31:25.805Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("6553a2f87dfaa815deca468c"),
    platform: "YESBINGO",
    gameType: "BINGO",
    gameCode: "YesBingo-BINGO-001",
    gameName: "WinCaiShen",
    img: "YesBingo-BINGO-001.png",
    date: ISODate("2023-10-09T14:23:23.589Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65542d767dfaa815deca4699"),
    platform: "JILI",
    gameType: "SLOT",
    gameCode: "JILI-SLOT-088",
    gameName: "Dabanggg",
    img: "JILI-SLOT-088.png",
    date: ISODate("2023-11-16T09:00:00.000Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65887fa31b5a00006a000912"),
    platform: "PT",
    gameType: "THAI",
    gameCode: "PT-SLOT-071",
    gameName: "Thai Paradise",
    img: "PT-SLOT-071.png",
    date: ISODate("2023-10-08T20:57:51.683Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65887fc81b5a00006a000913"),
    platform: "LUCKYPOKER",
    gameType: "THAI",
    gameCode: "LUCKYPOKER-TABLE-004",
    gameName: "Hilo",
    img: "LUCKYPOKER-TABLE-004.png",
    date: ISODate("2023-10-07T23:01:18.008Z"),
    __v: NumberInt("0")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65887fec1b5a00006a000914"),
    platform: "DRAGOONSOFT",
    gameType: "THAI",
    gameCode: "DRAGOONSOFT-SLOT-054",
    gameName: "Muay Thai",
    img: "DRAGOONSOFT-SLOT-054.png",
    date: ISODate("2023-10-06T04:16:51.631Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("658c077e767b00001e003d42"),
    platform: "JDB",
    gameType: "THAI",
    gameCode: "JDB-SLOT-026",
    gameName: "Rooster In Love",
    img: "JDB-SLOT-026.png",
    date: ISODate("2023-10-07T15:49:26.899Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("658c0798767b00001e003d43"),
    platform: "PP",
    gameType: "THAI",
    gameCode: "PP-SLOT-206",
    gameName: "The Tweety House",
    img: "PP-SLOT-206.png",
    date: ISODate("2023-10-08T17:44:10.433Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("658c07b3767b00001e003d44"),
    platform: "YL",
    gameType: "THAI",
    gameCode: "YL-EGAME-006",
    gameName: "Cockfighting",
    img: "YL-EGAME-006.png",
    date: ISODate("2023-10-09T08:37:02.414Z"),
    __v: NumberInt("0"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e970cea31300003b007a52"),
    platform: "EVOLUTION",
    gameType: "LIVE",
    gameCode: "EVOLUTION-LIVE-001",
    gameName: "Roulette",
    img: "EVOLUTION-LIVE-001.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e9710fa31300003b007a53"),
    platform: "EVOLUTION",
    gameType: "LIVE",
    gameCode: "EVOLUTION-LIVE-002",
    gameName: "Blackjack A",
    img: "EVOLUTION-LIVE-002.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97151a31300003b007a54"),
    platform: "EVOLUTION",
    gameType: "LIVE",
    gameCode: "EVOLUTION-LIVE-003",
    gameName: "Craps",
    img: "EVOLUTION-LIVE-003.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97167a31300003b007a55"),
    platform: "EVOLUTION",
    gameType: "LIVE",
    gameCode: "EVOLUTION-LIVE-004",
    gameName: "Dragon Tiger",
    img: "EVOLUTION-LIVE-004.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: false
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97197a31300003b007a56"),
    gameCode: "EVOLUTION-LIVE-005",
    gameName: "Super Sic Bo",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-005.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971b0a31300003b007a57"),
    gameCode: "EVOLUTION-LIVE-006",
    gameName: "Crazy Time",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-006.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971b7a31300003b007a58"),
    gameCode: "EVOLUTION-LIVE-007",
    gameName: "MONOPOLY Live",
    platform: "EVOLUTION",
    gameType: "LIVE",
    img: "EVOLUTION-LIVE-007.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971bba31300003b007a59"),
    gameCode: "EVOLUTION-LIVE-008",
    gameName: "Instant Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-008.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971bea31300003b007a5a"),
    gameCode: "EVOLUTION-LIVE-009",
    gameName: "Triple Card Poker",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-009.jpg",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971c4a31300003b007a5b"),
    gameCode: "EVOLUTION-LIVE-010",
    gameName: "Mega Ball",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-010.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971caa31300003b007a5c"),
    gameCode: "EVOLUTION-LIVE-011",
    gameName: "Lightning Dice",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-011.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971cca31300003b007a5d"),
    gameCode: "EVOLUTION-LIVE-012",
    gameName: "Infinite Blackjack",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-012.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971d1a31300003b007a5e"),
    gameCode: "EVOLUTION-LIVE-013",
    gameName: "First Person Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-013.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971d4a31300003b007a5f"),
    gameCode: "EVOLUTION-LIVE-014",
    gameName: "Crazy Coin Flip",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-014.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971d7a31300003b007a60"),
    gameCode: "EVOLUTION-LIVE-015",
    gameName: "Casino Hold'em",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-015.jpg",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971dba31300003b007a61"),
    gameCode: "EVOLUTION-LIVE-016",
    gameName: "Power Blackjack",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-016.jpg",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971dea31300003b007a62"),
    gameCode: "EVOLUTION-LIVE-017",
    gameName: "First Person Baccarat",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-017.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971e1a31300003b007a63"),
    gameCode: "EVOLUTION-LIVE-018",
    gameName: "MONOPOLY Big Baller",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-018.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971e4a31300003b007a64"),
    gameCode: "EVOLUTION-LIVE-019",
    gameName: "Gonzo's Treasure Hunt",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971e7a31300003b007a65"),
    gameCode: "EVOLUTION-LIVE-020",
    gameName: "American Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-020.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971eaa31300003b007a66"),
    gameCode: "EVOLUTION-LIVE-021",
    gameName: "2 Hand Casino Hold'em",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-021.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971eda31300003b007a67"),
    gameCode: "EVOLUTION-LIVE-022",
    gameName: "Side Bet City",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-022.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971f0a31300003b007a68"),
    gameCode: "EVOLUTION-LIVE-023",
    gameName: "First Person Dream Catcher",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-023.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971f3a31300003b007a69"),
    gameCode: "EVOLUTION-LIVE-024",
    gameName: "Caribbean Stud Poker",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971f5a31300003b007a6a"),
    gameCode: "EVOLUTION-LIVE-025",
    gameName: "Deal or No Deal",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-025.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971f8a31300003b007a6b"),
    gameCode: "EVOLUTION-LIVE-026",
    gameName: "Teen Patti",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-026.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971fba31300003b007a6c"),
    gameCode: "EVOLUTION-LIVE-027",
    gameName: "Texas Hold'em Bonus Poker",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-027.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e971ffa31300003b007a6d"),
    gameCode: "EVOLUTION-LIVE-029",
    gameName: "First Person Blackjack",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-029.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97202a31300003b007a6e"),
    gameCode: "EVOLUTION-LIVE-030",
    gameName: "First Person Football Studio",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-030.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97205a31300003b007a6f"),
    gameCode: "EVOLUTION-LIVE-031",
    gameName: "First Person Craps",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-031.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97208a31300003b007a70"),
    gameCode: "EVOLUTION-LIVE-032",
    gameName: "Extreme Texas Hold'em",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-032.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e9720ca31300003b007a71"),
    gameCode: "EVOLUTION-LIVE-033",
    gameName: "First Person Dragon Tiger",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-033.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e9720fa31300003b007a72"),
    gameCode: "EVOLUTION-LIVE-034",
    gameName: "First Person Mega Ball",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-034.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97211a31300003b007a73"),
    gameCode: "EVOLUTION-LIVE-035",
    gameName: "Dream Catcher",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-035.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97214a31300003b007a74"),
    gameCode: "EVOLUTION-LIVE-036",
    gameName: "Baccarat Squeeze",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-036.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e97217a31300003b007a75"),
    gameCode: "EVOLUTION-LIVE-037",
    gameName: "Infinite Free Bet Blackjack",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-037.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65e9721ba31300003b007a76"),
    gameCode: "EVOLUTION-LIVE-038",
    gameName: "No Commission Baccarat",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-038.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea066fa31300003b007a78"),
    gameCode: "EVOLUTION-LIVE-039",
    gameName: "Blackjack VIP B",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-039.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0675a31300003b007a79"),
    gameCode: "EVOLUTION-LIVE-040",
    gameName: "Lightning Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-040.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0679a31300003b007a7a"),
    gameCode: "EVOLUTION-LIVE-041",
    gameName: "Baccarat Control Squeeze",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-041.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea067ca31300003b007a7b"),
    gameCode: "EVOLUTION-LIVE-042",
    gameName: "Blackjack Party",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-042.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0680a31300003b007a7c"),
    gameCode: "EVOLUTION-LIVE-043",
    gameName: "Double Ball Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-043.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0684a31300003b007a7d"),
    gameCode: "EVOLUTION-LIVE-044",
    gameName: "Football Studio Dice",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-044.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0687a31300003b007a7e"),
    gameCode: "EVOLUTION-LIVE-045",
    gameName: "Football Studio",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-045.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea068aa31300003b007a7f"),
    gameCode: "EVOLUTION-LIVE-046",
    gameName: "First Person Golden Wealth Baccarat",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-046.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea068da31300003b007a80"),
    gameCode: "EVOLUTION-LIVE-047",
    gameName: "Emperor Sic Bo",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-047.png",
    date: ISODate("2023-10-09T14:39:39.982Z")
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0691a31300003b007a81"),
    gameCode: "EVOLUTION-LIVE-049",
    gameName: "Blackjack VIP U",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0694a31300003b007a82"),
    gameCode: "EVOLUTION-LIVE-050",
    gameName: "Blackjack VIP 1",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0697a31300003b007a83"),
    gameCode: "EVOLUTION-LIVE-051",
    gameName: "Blackjack Silver E",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea069aa31300003b007a84"),
    gameCode: "EVOLUTION-LIVE-052",
    gameName: "Blackjack VIP 25",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    date: ISODate("2023-10-09T14:39:39.982Z"),
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea069ea31300003b007a85"),
    gameCode: "EVOLUTION-LIVE-053",
    gameName: "Blackjack Silver B",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06a1a31300003b007a86"),
    gameCode: "EVOLUTION-LIVE-054",
    gameName: "Blackjack VIP 12",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06a4a31300003b007a87"),
    gameCode: "EVOLUTION-LIVE-055",
    gameName: "Blackjack VIP 15",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06a8a31300003b007a88"),
    gameCode: "EVOLUTION-LIVE-056",
    gameName: "Blackjack Silver C",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06b4a31300003b007a89"),
    gameCode: "EVOLUTION-LIVE-057",
    gameName: "Blackjack VIP X",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06b8a31300003b007a8a"),
    gameCode: "EVOLUTION-LIVE-058",
    gameName: "Blackjack VIP Alpha",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06bba31300003b007a8b"),
    gameCode: "EVOLUTION-LIVE-059",
    gameName: "Blackjack VIP D",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06bea31300003b007a8c"),
    gameCode: "EVOLUTION-LIVE-060",
    gameName: "Blackjack VIP Gamma",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06c2a31300003b007a8d"),
    gameCode: "EVOLUTION-LIVE-061",
    gameName: "Blackjack VIP G",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06c5a31300003b007a8e"),
    gameCode: "EVOLUTION-LIVE-062",
    gameName: "Blackjack VIP V",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06c8a31300003b007a8f"),
    gameCode: "EVOLUTION-LIVE-063",
    gameName: "Blackjack VIP 20",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06cba31300003b007a90"),
    gameCode: "EVOLUTION-LIVE-064",
    gameName: "Blackjack VIP 7",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06cea31300003b007a91"),
    gameCode: "EVOLUTION-LIVE-065",
    gameName: "Blackjack VIP I",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06d0a31300003b007a92"),
    gameCode: "EVOLUTION-LIVE-066",
    gameName: "Blackjack VIP 16",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06d3a31300003b007a93"),
    gameCode: "EVOLUTION-LIVE-067",
    gameName: "Blackjack VIP Beta",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06d6a31300003b007a94"),
    gameCode: "EVOLUTION-LIVE-068",
    gameName: "Blackjack Silver G",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06d8a31300003b007a95"),
    gameCode: "EVOLUTION-LIVE-069",
    gameName: "Blackjack VIP E",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06dba31300003b007a96"),
    gameCode: "EVOLUTION-LIVE-070",
    gameName: "Blackjack Silver F",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06dea31300003b007a97"),
    gameCode: "EVOLUTION-LIVE-071",
    gameName: "Blackjack VIP M",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06e0a31300003b007a98"),
    gameCode: "EVOLUTION-LIVE-072",
    gameName: "Blackjack VIP 14",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06e4a31300003b007a99"),
    gameCode: "EVOLUTION-LIVE-073",
    gameName: "Blackjack VIP 10",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06e7a31300003b007a9a"),
    gameCode: "EVOLUTION-LIVE-074",
    gameName: "Blackjack Silver D",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06e9a31300003b007a9b"),
    gameCode: "EVOLUTION-LIVE-075",
    gameName: "Blackjack Silver A",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06eca31300003b007a9c"),
    gameCode: "EVOLUTION-LIVE-076",
    gameName: "Blackjack VIP Z",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06efa31300003b007a9d"),
    gameCode: "EVOLUTION-LIVE-077",
    gameName: "Emperor Dragon Tiger",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-077.png"
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06f1a31300003b007a9e"),
    gameCode: "EVOLUTION-LIVE-078",
    gameName: "Speed Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-078.png"
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06f4a31300003b007a9f"),
    gameCode: "EVOLUTION-LIVE-079",
    gameName: "VIP Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-079.png"
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06f7a31300003b007aa0"),
    gameCode: "EVOLUTION-LIVE-080",
    gameName: "Emperor Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-080.png"
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06f9a31300003b007aa1"),
    gameCode: "EVOLUTION-LIVE-081",
    gameName: "Salon Privé Roulette",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "EVOLUTION-LIVE-081.png"
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06fca31300003b007aa2"),
    gameCode: "EVOLUTION-LIVE-082",
    gameName: "Blackjack B",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea06fea31300003b007aa3"),
    gameCode: "EVOLUTION-LIVE-083",
    gameName: "Blackjack C",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0701a31300003b007aa4"),
    gameCode: "EVOLUTION-LIVE-084",
    gameName: "Blackjack VIP 11",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0705a31300003b007aa5"),
    gameCode: "EVOLUTION-LIVE-085",
    gameName: "Blackjack VIP 13",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea070aa31300003b007aa6"),
    gameCode: "EVOLUTION-LIVE-086",
    gameName: "Blackjack VIP 17",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0718a31300003b007aa7"),
    gameCode: "EVOLUTION-LIVE-087",
    gameName: "Blackjack VIP 18",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea071ba31300003b007aa8"),
    gameCode: "EVOLUTION-LIVE-088",
    gameName: "Blackjack VIP 19",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea071ea31300003b007aa9"),
    gameCode: "EVOLUTION-LIVE-089",
    gameName: "Blackjack VIP 2",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0721a31300003b007aaa"),
    gameCode: "EVOLUTION-LIVE-090",
    gameName: "Blackjack VIP 21",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0723a31300003b007aab"),
    gameCode: "EVOLUTION-LIVE-091",
    gameName: "Blackjack VIP 22",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0726a31300003b007aac"),
    gameCode: "EVOLUTION-LIVE-092",
    gameName: "Blackjack VIP 26",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0729a31300003b007aad"),
    gameCode: "EVOLUTION-LIVE-093",
    gameName: "Blackjack VIP 27",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea072ba31300003b007aae"),
    gameCode: "EVOLUTION-LIVE-094",
    gameName: "Blackjack VIP 3",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea072ea31300003b007aaf"),
    gameCode: "EVOLUTION-LIVE-095",
    gameName: "Blackjack VIP 4",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0731a31300003b007ab0"),
    gameCode: "EVOLUTION-LIVE-096",
    gameName: "Blackjack VIP 5",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0734a31300003b007ab1"),
    gameCode: "EVOLUTION-LIVE-097",
    gameName: "Blackjack VIP 6",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0737a31300003b007ab2"),
    gameCode: "EVOLUTION-LIVE-098",
    gameName: "Blackjack VIP 8",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea0739a31300003b007ab3"),
    gameCode: "EVOLUTION-LIVE-099",
    gameName: "Blackjack VIP 9",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("65ea073ca31300003b007ab4"),
    gameCode: "EVOLUTION-LIVE-100",
    gameName: "Blackjack VIP A",
    gameType: "LIVE",
    platform: "EVOLUTION",
    img: "evolution-default.png",
    isDelete: true
  }
]);
db.getCollection("games").insert([
  {
    _id: ObjectId("660d88bb4d5a000071002ed2"),
    platform: "SABA",
    gameType: "ESPORTS",
    gameCode: "SABA-VIRTUAL-001",
    gameName: "Virtual Sports",
    img: "SABA-VIRTUAL-001.png",
    date: ISODate("2023-10-08T22:33:36.064Z")
  }
]);
