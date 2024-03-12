const characters_attributes = {
    "Aether": { HP: 911.791, ATK: 17.808, DEF: 57.225, max_ascension_value_HP: 3262.3718, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 204.75 },
    "Albedo": { HP: 1029.5856, ATK: 19.551, DEF: 68.2062, max_ascension_value_HP: 4228.035, max_ascension_value_ATK: 80.28111, max_ascension_value_DEF: 280.098 },
    "Alhaitham": { HP: 1039.1188, ATK: 24.3922, DEF: 60.84711, max_ascension_value_HP: 4267.1836, max_ascension_value_ATK: 100.16024, max_ascension_value_DEF: 249.8769 },
    "Aloy": { HP: 848.4548, ATK: 18.21036, DEF: 52.6504, max_ascension_value_HP: 3484.214, max_ascension_value_ATK: 74.77612, max_ascension_value_DEF: 216.216 },
    "Amber": { HP: 793.2582, ATK: 18.6984, DEF: 50.358, max_ascension_value_HP: 2838.2634, max_ascension_value_ATK: 66.90411, max_ascension_value_DEF: 180.18 },
    "Arataki Itto": { HP: 1000.986, ATK: 17.689, DEF: 74.66784, max_ascension_value_HP: 4110.59, max_ascension_value_ATK: 72.63529, max_ascension_value_DEF: 306.6336 },
    "Baizhu": { HP: 1039.1188, ATK: 14.9891, DEF: 38.8895, max_ascension_value_HP: 4267.1836, max_ascension_value_ATK: 61.54885, max_ascension_value_DEF: 159.705 },
    "Barbara": { HP: 820.6119, ATK: 13.356, DEF: 56.0805, max_ascension_value_HP: 2936.1348, max_ascension_value_ATK: 47.78865, max_ascension_value_DEF: 200.655 },
    "Beidou": { HP: 1094.1492, ATK: 18.87648, DEF: 54.36375, max_ascension_value_HP: 3914.8462, max_ascension_value_ATK: 67.54129, max_ascension_value_DEF: 194.5125 },
    "Bennett": { HP: 1039.4418, ATK: 16.0272, DEF: 64.66425, max_ascension_value_HP: 3719.104, max_ascension_value_ATK: 57.34638, max_ascension_value_DEF: 231.3675 },
    "Candace": { HP: 911.791, ATK: 17.808, DEF: 57.225, max_ascension_value_HP: 3262.3718, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 204.75 },
    "Charlotte": { HP: 902.67309570312, ATK: 14.513520240784, DEF: 45.78, max_ascension_value_HP: 3229.748046875, max_ascension_value_ATK: 51.930332183838, max_ascension_value_DEF: 163.8 },
    "Chevreuse": { HP: 1002.9700927734, ATK: 16.205280303955, DEF: 50.701351165771, max_ascension_value_HP: 3588.6091308594, max_ascension_value_ATK: 57.983562469482, max_ascension_value_DEF: 181.40849304199 },
    "Chongyun": { HP: 920.90894, ATK: 18.6984, DEF: 54.36375, max_ascension_value_HP: 3294.9956, max_ascension_value_ATK: 66.90411, max_ascension_value_DEF: 194.5125 },
    "Collei": { HP: 820.6119, ATK: 16.73952, DEF: 50.358, max_ascension_value_HP: 2936.1348, max_ascension_value_ATK: 59.895107, max_ascension_value_DEF: 180.18 },
    "Cyno": { HP: 972.3864, ATK: 24.7646, DEF: 66.88994, max_ascension_value_HP: 3993.1443, max_ascension_value_ATK: 101.68941, max_ascension_value_DEF: 274.6926 },
    "Dehya": { HP: 1220.2496, ATK: 20.6682, DEF: 48.88111, max_ascension_value_HP: 5011.0044, max_ascension_value_ATK: 84.8686, max_ascension_value_DEF: 200.7369 },
    "Diluc": { HP: 1010.5192, ATK: 26.068, DEF: 61.0266, max_ascension_value_HP: 4149.7383, max_ascension_value_ATK: 107.04148, max_ascension_value_DEF: 250.614 },
    "Diona": { HP: 802.3761, ATK: 17.808, DEF: 50.358, max_ascension_value_HP: 2870.8872, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 180.18 },
    "Dori": { HP: 1039.4418, ATK: 18.6984, DEF: 60.6585, max_ascension_value_HP: 3719.104, max_ascension_value_ATK: 66.90411, max_ascension_value_DEF: 217.035 },
    "Eula": { HP: 1029.5856, ATK: 26.6266, DEF: 58.45391, max_ascension_value_HP: 4228.035, max_ascension_value_ATK: 109.33523, max_ascension_value_DEF: 240.0489 },
    "Faruzan": { HP: 802.3761, ATK: 16.4724, DEF: 52.647, max_ascension_value_HP: 2870.8872, max_ascension_value_ATK: 58.939335, max_ascension_value_DEF: 188.37 },
    "Fischl": { HP: 770.4634, ATK: 20.4792, DEF: 49.78575, max_ascension_value_HP: 2756.704, max_ascension_value_ATK: 73.27593, max_ascension_value_DEF: 178.1325 },
    "Freminet": { HP: 1012.0880126953, ATK: 21.369600296021, DEF: 59.399551391602, max_ascension_value_HP: 3621.2326660156, max_ascension_value_ATK: 76.461837768555, max_ascension_value_DEF: 212.53050231934 },
    "Furina": { HP: 1191.65, ATK: 18.9924, DEF: 54.146148681641, max_ascension_value_HP: 4893.5590820312, max_ascension_value_ATK: 77.987365722656, max_ascension_value_DEF: 222.35850524902 },
    "Gaming": { HP: 957.38055419922, ATK: 25.287359237671, DEF: 58.941749572754, max_ascension_value_HP: 3425.4904785156, max_ascension_value_ATK: 90.479843139648, max_ascension_value_DEF: 210.89250183105 },
    "Ganyu": { HP: 762.656, ATK: 26.068, DEF: 49.0606, max_ascension_value_HP: 3131.878, max_ascension_value_ATK: 107.04148, max_ascension_value_DEF: 201.474 },
    "Gorou": { HP: 802.3761, ATK: 15.31488, DEF: 54.36375, max_ascension_value_HP: 2870.8872, max_ascension_value_ATK: 54.797653, max_ascension_value_DEF: 194.5125 },
    "Hu Tao": { HP: 1210.7164, ATK: 8.2859, DEF: 68.2062, max_ascension_value_HP: 4971.856, max_ascension_value_ATK: 34.0239, max_ascension_value_DEF: 280.098 },
    "Jean": { HP: 1143.984, ATK: 18.62, DEF: 59.83, max_ascension_value_HP: 4697.817, max_ascension_value_ATK: 76.4582, max_ascension_value_DEF: 245.7 },
    "Kaedehara Kazuha": { HP: 1039.1188, ATK: 23.0888, DEF: 62.8215, max_ascension_value_HP: 4267.1836, max_ascension_value_ATK: 94.80817, max_ascension_value_DEF: 257.985 },
    "Kaeya": { HP: 975.6164, ATK: 18.6984, DEF: 66.381, max_ascension_value_HP: 3490.7378, max_ascension_value_ATK: 66.90411, max_ascension_value_DEF: 237.51 },
    "Kamisato Ayaka": { HP: 1000.986, ATK: 26.6266, DEF: 61.0266, max_ascension_value_HP: 4110.59, max_ascension_value_ATK: 109.33523, max_ascension_value_DEF: 250.614 },
    "Kamisato Ayato": { HP: 1067.7184, ATK: 23.275, DEF: 59.83, max_ascension_value_HP: 4384.629, max_ascension_value_ATK: 95.57275, max_ascension_value_DEF: 245.7 },
    "Kaveh": { HP: 1002.9701, ATK: 19.5888, DEF: 62.9475, max_ascension_value_HP: 3588.6091, max_ascension_value_ATK: 70.09002, max_ascension_value_DEF: 225.225 },
    "Keqing": { HP: 1020.0524, ATK: 25.137, DEF: 62.2232, max_ascension_value_HP: 4188.8867, max_ascension_value_ATK: 103.21857, max_ascension_value_DEF: 255.528 },
    "Kirara": { HP: 1021.2059, ATK: 18.6984, DEF: 45.78, max_ascension_value_HP: 3653.8564453125, max_ascension_value_ATK: 66.904113769531, max_ascension_value_DEF: 163.8 },
    "Klee": { HP: 800.7888, ATK: 24.206, DEF: 47.864, max_ascension_value_HP: 3288.4717, max_ascension_value_ATK: 99.39566, max_ascension_value_DEF: 196.56 },
    "Kujou Sara": { HP: 802.3761, ATK: 16.38336, DEF: 52.647, max_ascension_value_HP: 2870.8872, max_ascension_value_ATK: 58.620743, max_ascension_value_DEF: 188.37 },
    "Kuki Shinobu": { HP: 1030.3239, ATK: 17.808, DEF: 62.9475, max_ascension_value_HP: 3686.4802, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 225.225 },
    "Layla": { HP: 930.0268, ATK: 18.16416, DEF: 54.936, max_ascension_value_HP: 3327.6194, max_ascension_value_ATK: 64.99256, max_ascension_value_DEF: 196.56 },
    "Lisa": { HP: 802.3761, ATK: 19.41072, DEF: 48.069, max_ascension_value_HP: 2870.8872, max_ascension_value_ATK: 69.452835, max_ascension_value_DEF: 171.99 },
    "Lumine": { HP: 911.791, ATK: 17.808, DEF: 57.225, max_ascension_value_HP: 3262.3718, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 204.75 },
    "Lynette": { HP: 1039.44177246, ATK: 19.41072, DEF: 59.6856765747, max_ascension_value_HP: 3719.104, max_ascension_value_ATK: 69.452835083, max_ascension_value_DEF: 213.554245 },
    "Lyney": { HP: 857.987976, ATK: 24.7646, DEF: 41.881, max_ascension_value_HP: 3523.3625488281, max_ascension_value_ATK: 101.6894, max_ascension_value_DEF: 171.99 },
    "Mika": { HP: 1048.5597, ATK: 18.6984, DEF: 59.800125, max_ascension_value_HP: 3751.7275, max_ascension_value_ATK: 66.90411, max_ascension_value_DEF: 213.96375 },
    "Mona": { HP: 810.322, ATK: 22.344, DEF: 50.8555, max_ascension_value_HP: 3327.62, max_ascension_value_ATK: 91.74984, max_ascension_value_DEF: 208.845 },
    "Nahida": { HP: 806.5087, ATK: 23.275, DEF: 49.0606, max_ascension_value_HP: 3311.961, max_ascension_value_ATK: 95.57275, max_ascension_value_DEF: 201.474 },
    "Navia": { HP: 984.78, ATK: 27.3714, DEF: 61.74456, max_ascension_value_HP: 4044.0373535156, max_ascension_value_ATK: 112.3935546875, max_ascension_value_DEF: 253.56239318848 },
    "Neuvillette": { HP: 1143.984, ATK: 16.218, DEF: 44.8725, max_ascension_value_HP: 4697.8169, max_ascension_value_ATK: 66.595, max_ascension_value_DEF: 184.275 },
    "Nilou": { HP: 1182.1168, ATK: 17.8752, DEF: 56.71884, max_ascension_value_HP: 4854.4106, max_ascension_value_ATK: 73.39987, max_ascension_value_DEF: 232.9236 },
    "Ningguang": { HP: 820.6119, ATK: 17.808, DEF: 48.069, max_ascension_value_HP: 2936.1348, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 171.99 },
    "Noelle": { HP: 1012.088, ATK: 16.0272, DEF: 66.95325, max_ascension_value_HP: 3621.2327, max_ascension_value_ATK: 57.34638, max_ascension_value_DEF: 239.5575 },
    "Qiqi": { HP: 962.8532, ATK: 22.344, DEF: 71.796, max_ascension_value_HP: 3953.9958, max_ascension_value_ATK: 91.74984, max_ascension_value_DEF: 294.84 },
    "Raiden Shogun": { HP: 1004.79926, ATK: 26.2542, DEF: 61.44541, max_ascension_value_HP: 4126.249, max_ascension_value_ATK: 107.80606, max_ascension_value_DEF: 252.3339 },
    "Razor": { HP: 1002.9701, ATK: 19.5888, DEF: 62.9475, max_ascension_value_HP: 3588.6091, max_ascension_value_ATK: 70.09002, max_ascension_value_DEF: 225.225 },
    "Rosaria": { HP: 1030.3239, ATK: 20.12304, DEF: 59.514, max_ascension_value_HP: 3686.4802, max_ascension_value_ATK: 72.001564, max_ascension_value_DEF: 212.94 },
    "Sangonomiya Kokomi": { HP: 1048.652, ATK: 18.2476, DEF: 51.15465, max_ascension_value_HP: 4306.332, max_ascension_value_ATK: 74.92904, max_ascension_value_DEF: 210.0735 },
    "Sayu": { HP: 993.8522, ATK: 20.4792, DEF: 62.432476, max_ascension_value_HP: 3555.9854, max_ascension_value_ATK: 73.27593, max_ascension_value_DEF: 223.38225 },
    "Shenhe": { HP: 1011.47253, ATK: 23.6474, DEF: 64.6164, max_ascension_value_HP: 4153.653, max_ascension_value_ATK: 97.10191, max_ascension_value_DEF: 265.356 },
    "Shikanoin Heizou": { HP: 893.5552, ATK: 18.87648, DEF: 57.33945, max_ascension_value_HP: 3197.1245, max_ascension_value_ATK: 67.54129, max_ascension_value_DEF: 205.1595 },
    "Sucrose": { HP: 775.02234, ATK: 14.2464, DEF: 58.94175, max_ascension_value_HP: 2773.016, max_ascension_value_ATK: 50.97456, max_ascension_value_DEF: 210.8925 },
    "Tartaglia": { HP: 1020.0524, ATK: 23.4612, DEF: 63.4198, max_ascension_value_HP: 4188.8867, max_ascension_value_ATK: 96.33733, max_ascension_value_DEF: 260.442 },
    "Thoma": { HP: 866.2015, ATK: 16.9176, DEF: 62.9475, max_ascension_value_HP: 3099.2532, max_ascension_value_ATK: 60.53229, max_ascension_value_DEF: 225.225 },
    "Tighnari": { HP: 844.64154, ATK: 20.8544, DEF: 49.0606, max_ascension_value_HP: 3468.5547, max_ascension_value_ATK: 85.63319, max_ascension_value_DEF: 201.474 },
    "Venti": { HP: 819.8552, ATK: 20.482, DEF: 52.0521, max_ascension_value_HP: 3366.7688, max_ascension_value_ATK: 84.10402, max_ascension_value_DEF: 213.759 },
    "Wanderer": { HP: 791.2556, ATK: 25.5094, DEF: 47.2657, max_ascension_value_HP: 3249.3232, max_ascension_value_ATK: 104.747734, max_ascension_value_DEF: 194.103 },
    "Wriothesley": { HP: 1058.18518, ATK: 24.206, DEF: 59.41119, max_ascension_value_HP: 4345.48, max_ascension_value_ATK: 99.39566, max_ascension_value_DEF: 243.9801 },
    "Xiangling": { HP: 911.791, ATK: 18.87648, DEF: 56.0805, max_ascension_value_HP: 3262.3718, max_ascension_value_ATK: 67.54129, max_ascension_value_DEF: 200.655 },
    "Xianyun": { HP: 810.32202148438, ATK: 26.068000793457, DEF: 44.573348999023, max_ascension_value_HP: 3327.6201171875, max_ascension_value_ATK: 107.04148101807, max_ascension_value_DEF: 183.04649353027 },
    "Xiao": { HP: 991.4528, ATK: 27.1852, DEF: 62.2232, max_ascension_value_HP: 4071.4412, max_ascension_value_ATK: 111.628975, max_ascension_value_DEF: 255.528 },
    "Xingqiu": { HP: 857.08356, ATK: 16.9176, DEF: 63.51975, max_ascension_value_HP: 3066.6296, max_ascension_value_ATK: 60.53229, max_ascension_value_DEF: 227.2725 },
    "Xinyan": { HP: 939.1447, ATK: 20.83536, DEF: 66.95325, max_ascension_value_HP: 3360.243, max_ascension_value_ATK: 74.55029, max_ascension_value_DEF: 239.5575 },
    "Yae Miko": { HP: 807.46204, ATK: 26.4404, DEF: 44.2742, max_ascension_value_HP: 3315.8757, max_ascension_value_ATK: 108.57064, max_ascension_value_DEF: 181.818 },
    "Yanfei": { HP: 784.14026, ATK: 20.12304, DEF: 49.2135, max_ascension_value_HP: 2805.64, max_ascension_value_ATK: 72.001564, max_ascension_value_DEF: 176.085 },
    "Yaoyao": { HP: 1030.3239, ATK: 17.808, DEF: 62.9475, max_ascension_value_HP: 3686.4802, max_ascension_value_ATK: 63.7182, max_ascension_value_DEF: 225.225 },
    "Yelan": { HP: 1124.9176, ATK: 18.9924, DEF: 42.65879, max_ascension_value_HP: 4619.52, max_ascension_value_ATK: 77.987366, max_ascension_value_DEF: 175.1841 },
    "Yoimiya": { HP: 791.2556, ATK: 25.137, DEF: 47.864, max_ascension_value_HP: 3249.3232, max_ascension_value_ATK: 103.21857, max_ascension_value_DEF: 196.56 },
    "Yun Jin": { HP: 893.5552, ATK: 16.0272, DEF: 61.5741, max_ascension_value_HP: 3197.1245, max_ascension_value_ATK: 57.34638, max_ascension_value_DEF: 220.311 },
    "Zhongli": { HP: 1143.984, ATK: 19.551, DEF: 57.4368, max_ascension_value_HP: 4697.817, max_ascension_value_ATK: 80.2811, max_ascension_value_DEF: 235.872 },
};

const character_section_scaling = {
    "2": 0,
    "3": 38 / 182,
    "4": 38 / 182,
    "5": 65 / 182,
    "6": 101 / 182,
    "7": 128 / 182,
    "8": 155 / 182,
    "9": 1,
};

const character_bonus_ascension_multiplier = {
    "2": 0.0,
    "3": 0.0,
    "4": 0.0,
    "5": 1.0,
    "6": 2.0,
    "7": 2.0,
    "8": 3.0,
    "9": 4.0,
};

const character_bonus_icon = {
        "Pyro DMG Bonus": "Icon_Attribute_Pyro.webp",
        "Electro DMG Bonus": "Icon_Attribute_Electro.webp",
        "Hydro DMG Bonus": "Icon_Attribute_Hydro.webp",
        "Cryo DMG Bonus": "Icon_Attribute_Cryo.webp",
        "Anemo DMG Bonus": "Icon_Attribute_Anemo.webp",
        "Geo DMG Bonus": "Icon_Attribute_Geo.webp",
        "Dendro DMG Bonus": "Icon_Attribute_Dendro.webp",

        "ATK": "Icon_Attribute_Attack.webp",
        "HP": "Icon_Attribute_Health.webp",
        "DEF": "Icon_Attribute_Defense.webp",
        "Physical DMG Bonus": "Icon_Attribute_Attack.webp",
        "Energy Recharge": "Icon_Attribute_Energy_Recharge.webp",
        "Elemental Mastery": "Icon_Attribute_Elemental_Mastery.webp",
        "Healing Bonus": "Icon_Attribute_Healing.webp",
        "CRIT Rate": "Icon_Attribute_Critical_Hit.webp",
        "CRIT DMG": "Icon_Attribute_Critical_Hit.webp",
};

const character_bonus_unit = {
        "Pyro DMG Bonus": "%",
        "Electro DMG Bonus": "%",
        "Hydro DMG Bonus": "%",
        "Cryo DMG Bonus": "%",
        "Anemo DMG Bonus": "%",
        "Geo DMG Bonus": "%",
        "Dendro DMG Bonus": "%",

        "ATK": "%",
        "HP": "%",
        "DEF": "%",
        "Physical DMG Bonus": "%",
        "Energy Recharge": "%",
        "Elemental Mastery": "",
        "Healing Bonus": "%",
        "CRIT Rate": "%",
        "CRIT DMG": "%",
};

const character_bonus_base_value = {
    "4": {
        "Pyro DMG Bonus": 6,
        "Electro DMG Bonus": 6,
        "Hydro DMG Bonus": 6,
        "Cryo DMG Bonus": 6,
        "Anemo DMG Bonus": 6,
        "Geo DMG Bonus": 6,
        "Dendro DMG Bonus": 6,

        "ATK": 6,
        "HP": 6,
        "DEF": 7.5,
        "Physical DMG Bonus": 7.5,
        "Energy Recharge": 6.7,
        "Elemental Mastery": 24,
        "Healing Bonus": 0,
        "CRIT Rate": 0,
        "CRIT DMG": 0
    },
    "5": {
        "Pyro DMG Bonus": 7.2,
        "Electro DMG Bonus": 7.2,
        "Hydro DMG Bonus": 7.2,
        "Cryo DMG Bonus": 7.2,
        "Anemo DMG Bonus": 7.2,
        "Geo DMG Bonus": 7.2,
        "Dendro DMG Bonus": 7.2,

        "ATK": 7.2,
        "HP": 7.2,
        "DEF": 0,
        "Physical DMG Bonus": 0,
        "Energy Recharge": 8,
        "Elemental Mastery": 28.8,
        "Healing Bonus": 5.5,
        "CRIT Rate": 4.8,
        "CRIT DMG": 9.6
    }
};

const character_level_multiplier = {
    "4": [
        1.000,
        1.083,
        1.165,
        1.248,
        1.330,
        1.413,
        1.495,
        1.578,
        1.661,
        1.743,
        1.826,
        1.908,
        1.991,
        2.073,
        2.156,
        2.239,
        2.321,
        2.404,
        2.486,
        2.569,
        2.651,
        2.734,
        2.817,
        2.899,
        2.982,
        3.064,
        3.147,
        3.229,
        3.312,
        3.394,
        3.477,
        3.560,
        3.642,
        3.725,
        3.807,
        3.890,
        3.972,
        4.055,
        4.138,
        4.220,
        4.303,
        4.385,
        4.468,
        4.550,
        4.633,
        4.716,
        4.798,
        4.881,
        4.963,
        5.046,
        5.128,
        5.211,
        5.294,
        5.376,
        5.459,
        5.541,
        5.624,
        5.706,
        5.789,
        5.872,
        5.954,
        6.037,
        6.119,
        6.202,
        6.284,
        6.367,
        6.450,
        6.532,
        6.615,
        6.697,
        6.780,
        6.862,
        6.945,
        7.028,
        7.110,
        7.193,
        7.275,
        7.358,
        7.440,
        7.523,
        7.606,
        7.688,
        7.771,
        7.853,
        7.936,
        8.018,
        8.101,
        8.183,
        8.266,
        8.349,
    ],
    "5": [
        1.000,
        1.083,
        1.166,
        1.250,
        1.333,
        1.417,
        1.500,
        1.584,
        1.668,
        1.751,
        1.835,
        1.919,
        2.003,
        2.088,
        2.172,
        2.256,
        2.341,
        2.425,
        2.510,
        2.594,
        2.679,
        2.764,
        2.849,
        2.934,
        3.019,
        3.105,
        3.190,
        3.275,
        3.361,
        3.446,
        3.532,
        3.618,
        3.704,
        3.789,
        3.875,
        3.962,
        4.048,
        4.134,
        4.220,
        4.307,
        4.393,
        4.480,
        4.567,
        4.653,
        4.740,
        4.827,
        4.914,
        5.001,
        5.089,
        5.176,
        5.263,
        5.351,
        5.438,
        5.526,
        5.614,
        5.702,
        5.790,
        5.878,
        5.966,
        6.054,
        6.142,
        6.230,
        6.319,
        6.407,
        6.496,
        6.585,
        6.673,
        6.762,
        6.851,
        6.940,
        7.029,
        7.119,
        7.208,
        7.297,
        7.387,
        7.476,
        7.566,
        7.656,
        7.746,
        7.836,
        7.926,
        8.016,
        8.106,
        8.196,
        8.286,
        8.377,
        8.467,
        8.558,
        8.649,
        8.739
    ]
};