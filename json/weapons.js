const weapons = {
    "A Thousand Floating Dreams": {},
    "Amos' Bow": {},
    "Aqua Simulacra": {},
    "Aquila Favonia": {},
    "Beacon of the Reed Sea": {},
    "Calamity Queller": {},
    "Cashflow Supervision": {},
    "Crane's Echoing Call": {},
    "Elegy for the End": {},
    "Engulfing Lightning": {},
    "Everlasting Moonglow": {},
    "Freedom-Sworn": {},
    "Haran Geppaku Futsu": {},
    "Hunter's Path": {},
    "Jadefall's Splendor": {},
    "Kagura's Verity": {},
    "Key of Khaj-Nisut": {},
    "Light of Foliar Incision": {},
    "Lost Prayer to the Sacred Winds": {},
    "Memory of Dust": {},
    "Mistsplitter Reforged": {},
    "Polar Star": {},
    "Primordial Jade Cutter": {},
    "Primordial Jade Winged-Spear": {},
    "Redhorn Stonethresher": {},
    "Skyward Atlas": {},
    "Skyward Blade": {},
    "Skyward Harp": {},
    "Skyward Pride": {},
    "Skyward Spine": {},
    "Song of Broken Pines": {},
    "Splendor of Tranquil Waters": {},
    "Staff of Homa": {},
    "Staff of the Scarlet Sands": {},
    "Summit Shaper": {},
    "The First Great Magic": {},
    "The Unforged": {},
    "Thundering Pulse": {},
    "Tome of the Eternal Flow": {},
    "Tulaytullah's Remembrance": {},
    "Verdict": {},
    "Vortex Vanquisher": {},
    "Wolf's Gravestone": {},
    "\"The Catch\"": {},
    "\"Ultimate Overlord's Mega Magic Sword\"": {},
    "Akuoumaru": {},
    "Alley Hunter": {},
    "Amenoma Kageuchi": {},
    "Ballad of the Boundless Blue": {},
    "Ballad of the Fjords": {},
    "Blackcliff Agate": {},
    "Blackcliff Longsword": {},
    "Blackcliff Pole": {},
    "Blackcliff Slasher": {},
    "Blackcliff Warbow": {},
    "Cinnabar Spindle": {},
    "Compound Bow": {},
    "Crescent Pike": {},
    "Deathmatch": {},
    "Dodoco Tales": {},
    "Dragon's Bane": {},
    "Dragonspine Spear": {},
    "End of the Line": {},
    "Eye of Perception": {},
    "Fading Twilight": {},
    "Favonius Codex": {},
    "Favonius Greatsword": {},
    "Favonius Lance": {},
    "Favonius Sword": {},
    "Favonius Warbow": {},
    "Festering Desire": {},
    "Finale of the Deep": {},
    "Fleuve Cendre Ferryman": {},
    "Flowing Purity": {},
    "Forest Regalia": {},
    "Frostbearer": {},
    "Fruit of Fulfillment": {},
    "Hakushin Ring": {},
    "Hamayumi": {},
    "Ibis Piercer": {},
    "Iron Sting": {},
    "Kagotsurube Isshin": {},
    "Katsuragikiri Nagamasa": {},
    "King's Squire": {},
    "Kitain Cross Spear": {},
    "Lion's Roar": {},
    "Lithic Blade": {},
    "Lithic Spear": {},
    "Luxurious Sea-Lord": {},
    "Mailed Flower": {},
    "Makhaira Aquamarine": {},
    "Mappa Mare": {},
    "Missive Windspear": {},
    "Mitternachts Waltz": {},
    "Moonpiercer": {},
    "Mouun's Moon": {},
    "Oathsworn Eye": {},
    "Portable Power Saw": {},
    "Predator": {},
    "Prospector's Drill": {},
    "Prototype Amber": {},
    "Prototype Archaic": {},
    "Prototype Crescent": {},
    "Prototype Rancour": {},
    "Prototype Starglitter": {},
    "Rainslasher": {},
    "Range Gauge": {},
    "Rightful Reward": {},
    "Royal Bow": {},
    "Royal Greatsword": {},
    "Royal Grimoire": {},
    "Royal Longsword": {},
    "Royal Spear": {},
    "Rust": {},
    "Sacrificial Bow": {},
    "Sacrificial Fragments": {},
    "Sacrificial Greatsword": {},
    "Sacrificial Jade": {},
    "Sacrificial Sword": {},
    "Sapwood Blade": {},
    "Scion of the Blazing Sun": {},
    "Serpent Spine": {},
    "Snow-Tombed Starsilver": {},
    "Solar Pearl": {},
    "Song of Stillness": {},
    "Sword of Descension": {},
    "Sword of Narzissenkreuz": {},
    "Talking Stick": {},
    "The Alley Flash": {},
    "The Bell": {},
    "The Black Sword": {},
    "The Dockhand's Assistant": {},
    "The Flute": {},
    "The Stringless": {},
    "The Viridescent Hunt": {},
    "The Widsith": {},
    "Tidal Shadow": {},
    "Toukabou Shigure": {},
    "Wandering Evenstar": {},
    "Wavebreaker's Fin": {},
    "Whiteblind": {},
    "Windblume Ode": {},
    "Wine and Song": {},
    "Wolf-Fang": {},
    "Xiphos' Moonlight": {},
    "Black Tassel": {},
    "Bloodtainted Greatsword": {},
    "Cool Steel": {},
    "Dark Iron Sword": {},
    "Debate Club": {},
    "Emerald Orb": {},
    "Ferrous Shadow": {},
    "Fillet Blade": {},
    "Halberd": {},
    "Harbinger of Dawn": {},
    "Magic Guide": {},
    "Messenger": {},
    "Otherworldly Story": {},
    "Raven Bow": {},
    "Recurve Bow": {},
    "Sharpshooter's Oath": {},
    "Skyrider Greatsword": {},
    "Skyrider Sword": {},
    "Slingshot": {},
    "Thrilling Tales of Dragon Slayers": {},
    "Traveler's Handy Sword": {},
    "Twin Nephrite": {},
    "White Iron Greatsword": {},
    "White Tassel": {},
    "Iron Point": {},
    "Old Merc's Pal": {},
    "Pocket Grimoire": {},
    "Seasoned Hunter's Bow": {},
    "Silver Sword": {},
    "Apprentice's Notes": {},
    "Beginner's Protector": {},
    "Dull Blade": {},
    "Hunter's Bow": {},
    "Waster Greatsword": {},
    "Silvershower Heartstrings": {},
    "Absolution": {},
    "Lumidouce Elegy": {},








    // "": {
    //     "id": 13507,
    //     "name": "Calamity Queller",
    //     "description": "A keenly honed weapon forged from some strange crystal. Its faint blue light seems to whisper of countless matters now past.",
    //     "descriptionRaw": "A keenly honed weapon forged from some strange crystal. Its faint blue light seems to whisper of countless matters now past.",
    //     "weaponType": "WEAPON_POLE",
    //     "weaponText": "Polearm",
    //     "rarity": 5,
    //     "story": "They say that this long polearm was forged using materials that are not from this world.\nThe weapon has passed through the hands of many loyal yet unfortunate souls.\nIt has seen many a slaughter begin and end, and tasted many a foul beast's flesh and blood.\n\nIt is said that a person whose job was to exorcise evil once came to the great chasm of crystal sands.\nThere, they retrieved an ominous, aqua-colored crystal from its depths.\nThen, they hired someone to forge it into a weapon, naming it \"Calamity Queller.\"\n\n\"If disaster should befall, this shall surely be used to calm it.\"\nThe tribespeople who made their living in the craggy mountains were not partial to either boasts or critique.\nBut since there was no contract signed, and such words were of no cost, they accepted them all the same.\n\nLater, the time came when the monstrous tides scaled the bedrock, turning the cinnabar-colored earth black.\nThe shield-wall of the Millelith and the dark forces clashed, and any stragglers were all slain.\nLike a cold star amidst the gloom, Calamity Queller flashed this way and that at the heart of the maelstrom...\n\nWhen, at last, the light of the setting sun split the mournful clouds, the dark sludge sunk back into the depths of the chasm.\nThe Calamity Queller was also lost, together with the Yaksha who wielded it — both returned to silence.\nIn times thereafter, those who wielded this spear would largely meet similar fates.\nBut there were people who would fight without requiring orders or protect people without taking any oaths.\nFor them, such a fate was hardly one to be lamented...\n\nIt is also said that this spear was once borrowed from someone.\nAnd in a deserted, water-eroded cave, it would bear witness to a clash between intimate friends.",
    //     "baseAtkValue": 49.137699127197266,
    //     "mainStatType": "FIGHT_PROP_ATTACK_PERCENT",
    //     "mainStatText": "ATK",
    //     "baseStatText": "3.6%",
    //     "effectName": "Extinguishing Precept",
    //     "effectTemplateRaw": "Gain <color=#99FFFFFF>{0}</color> All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by <color=#99FFFFFF>{1}</color> per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //     "r1": {
    //         "description": "Gain 12% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 3.2% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //         "values": [
    //             "12%",
    //             "3.2%"
    //         ]
    //     },
    //     "r2": {
    //         "description": "Gain 15% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 4% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //         "values": [
    //             "15%",
    //             "4%"
    //         ]
    //     },
    //     "r3": {
    //         "description": "Gain 18% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 4.8% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //         "values": [
    //             "18%",
    //             "4.8%"
    //         ]
    //     },
    //     "r4": {
    //         "description": "Gain 21% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 5.6% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //         "values": [
    //             "21%",
    //             "5.6%"
    //         ]
    //     },
    //     "r5": {
    //         "description": "Gain 24% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 6.4% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    //         "values": [
    //             "24%",
    //             "6.4%"
    //         ]
    //     },
    //     "costs": {
    //         "ascend1": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 10000
    //             },
    //             {
    //                 "id": 114017,
    //                 "name": "Mist Veiled Lead Elixir",
    //                 "count": 5
    //             },
    //             {
    //                 "id": 112026,
    //                 "name": "Mist Grass Pollen",
    //                 "count": 5
    //             },
    //             {
    //                 "id": 112038,
    //                 "name": "Whopperflower Nectar",
    //                 "count": 3
    //             }
    //         ],
    //         "ascend2": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 20000
    //             },
    //             {
    //                 "id": 114018,
    //                 "name": "Mist Veiled Mercury Elixir",
    //                 "count": 5
    //             },
    //             {
    //                 "id": 112026,
    //                 "name": "Mist Grass Pollen",
    //                 "count": 18
    //             },
    //             {
    //                 "id": 112038,
    //                 "name": "Whopperflower Nectar",
    //                 "count": 12
    //             }
    //         ],
    //         "ascend3": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 30000
    //             },
    //             {
    //                 "id": 114018,
    //                 "name": "Mist Veiled Mercury Elixir",
    //                 "count": 9
    //             },
    //             {
    //                 "id": 112027,
    //                 "name": "Mist Grass",
    //                 "count": 9
    //             },
    //             {
    //                 "id": 112039,
    //                 "name": "Shimmering Nectar",
    //                 "count": 9
    //             }
    //         ],
    //         "ascend4": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 45000
    //             },
    //             {
    //                 "id": 114019,
    //                 "name": "Mist Veiled Gold Elixir",
    //                 "count": 5
    //             },
    //             {
    //                 "id": 112027,
    //                 "name": "Mist Grass",
    //                 "count": 18
    //             },
    //             {
    //                 "id": 112039,
    //                 "name": "Shimmering Nectar",
    //                 "count": 14
    //             }
    //         ],
    //         "ascend5": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 55000
    //             },
    //             {
    //                 "id": 114019,
    //                 "name": "Mist Veiled Gold Elixir",
    //                 "count": 9
    //             },
    //             {
    //                 "id": 112028,
    //                 "name": "Mist Grass Wick",
    //                 "count": 14
    //             },
    //             {
    //                 "id": 112040,
    //                 "name": "Energy Nectar",
    //                 "count": 9
    //             }
    //         ],
    //         "ascend6": [
    //             {
    //                 "id": 202,
    //                 "name": "Mora",
    //                 "count": 65000
    //             },
    //             {
    //                 "id": 114020,
    //                 "name": "Mist Veiled Primo Elixir",
    //                 "count": 6
    //             },
    //             {
    //                 "id": 112028,
    //                 "name": "Mist Grass Wick",
    //                 "count": 27
    //             },
    //             {
    //                 "id": 112040,
    //                 "name": "Energy Nectar",
    //                 "count": 18
    //             }
    //         ]
    //     },
    //     "images": {
    //         "icon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Pole_Santika.png",
    //         "filename_icon": "UI_EquipIcon_Pole_Santika",
    //         "filename_awakenIcon": "UI_EquipIcon_Pole_Santika_Awaken",
    //         "filename_gacha": "UI_Gacha_EquipIcon_Pole_Santika",
    //         "mihoyo_icon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Pole_Santika.png",
    //         "mihoyo_awakenIcon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Pole_Santika_Awaken.png"
    //     },
    //     "version": ""
    // },
};