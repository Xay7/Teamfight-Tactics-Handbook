export const champions = {
    Aatrox: {
        image: require('./Champions/Aatrox.png'),
        origin: "Demon",
        class: "Blademaster",
        ability: {
            image: require('./Abilities/Aatrox.png'),
            name: "The Darkin Blade",
            description: "Deals 400 / 700 / 1000 magic damage to all enemies in a circle."
        },
        stats: {
            cost: 3,
            health: "750 / 1350 / 2700",
            mana: "75",
            damage: "65 / 117 / 234",
            attackSpeed: "0.65",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 3,
        name: "Aatrox",
    },
    Ahri: {
        image: require('./Champions/Ahri.png'),
        origin: "Wild",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Ahri.png'),
            name: "Orb of Deception",
            description: "Fires an orb in a line that returns to her, dealing 100 / 200 / 300 magic damage to enemies it passes through"
        },
        stats: {
            cost: 2,
            health: "450 / 810 / 1620",
            mana: "75",
            damage: "50 / 90 / 180",
            attackSpeed: "0.55",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 2,
        name: "Ahri"
    },
    Akali: {
        image: require('./Champions/Akali.png'),
        origin: "Ninja",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Akali.png'),
            name: "Five Point Strike",
            description: "Deals 200 / 375 / 550 magic damage to all enemies in a cone."
        },
        stats: {
            cost: 4,
            health: "650 / 1170 / 2340",
            mana: "25",
            damage: "70 / 126 / 252",
            attackSpeed: "0.75",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 4,
        name: "Akali"
    },
    Anivia: {
        image: require('./Champions/Anivia.png'),
        origin: "Glacial",
        class: "Elementalist",
        ability: {
            image: require('./Abilities/Anivia.png'),
            name: "Glacial Storm",
            description: "Channels a large hailstorm for 8 seconds, dealing 700 / 950 / 1200 magic damage and slowing the attack speed of enemies inside it by 50 / 70 / 90%."
        },
        stats: {
            cost: 5,
            health: "650 / 1170 / 2340",
            mana: "100",
            damage: "40 / 72 / 144",
            attackSpeed: "0.6",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 5,
        name: "Anivia"
    },
    Ashe: {
        image: require('./Champions/Ashe.png'),
        origin: "Glacial",
        class: "Ranger",
        ability: {
            image: require('./Abilities/Ashe.png'),
            name: "Enchanted Crystal Arrow",
            description: "Fires an arrow that stuns and deals 200 / 400 / 600 magic damage to the first enemy hit. The stun lasts 1 / 1.5 / 2 seconds per range traveled."
        },
        stats: {
            cost: 3,
            health: "550 / 990 / 1980",
            mana: "100",
            damage: "60 / 108 / 216",
            attackSpeed: "0.7",
            attackRange: "4 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Ashe"
    },
    "Aurelion Sol": {
        image: require('./Champions/Aurelion_Sol.png'),
        origin: "Dragon",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Aurelion_Sol.png'),
            name: "Voice of Light",
            description: "After a 0.35-second delay, deals 250 / 450 / 650 magic damage to all enemies in a line."
        },
        stats: {
            cost: 4,
            health: "600 / 1080 / 2160",
            mana: "125",
            damage: "40 / 72 / 144",
            attackSpeed: "0.6",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 4,
        name: "Aurelion Sol"
    },
    Blitzcrank: {
        image: require('./Champions/Blitzcrank.png'),
        origin: "Robot",
        class: "Brawler",
        ability: {
            image: require('./Abilities/Blitzcrank.png'),
            name: "Rocket Grab",
            description: "Pulls the farthest enemy into melee range, stunning them for 2.5 seconds, dealing 100 / 450 / 800 magic damage, and knocks them up (missile and pull speed: 3000)."
        },
        stats: {
            cost: 2,
            health: "600 / 1080 / 2160",
            mana: "150",
            damage: "50 / 90 / 180",
            attackSpeed: "0.5",
            attackRange: "1 range",
            magicResist: "20",
            armor: "35"
        },
        tier: 2,
        name: "Blitzcrank"
    },
    Brand: {
        image: require('./Champions/Brand.png'),
        origin: "Demon",
        class: "Elementalist",
        ability: {
            image: require('./Abilities/Brand.png'),
            name: "Pyroclasm",
            description: "Unleashes a fireball that bounces 4 / 6 / 20 times between enemies, dealing 200 / 300 / 400 magic damage with each bounce."
        },
        stats: {
            cost: 4,
            health: "700 / 1260 / 2520",
            mana: "125",
            damage: "60 / 108 / 216",
            attackSpeed: "0.6",
            attackRange: "3 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 4,
        name: "Brand"
    },
    Braum: {
        image: require('./Champions/Braum.png'),
        origin: "Glacial",
        class: "Guardian",
        ability: {
            image: require('./Abilities/Braum.png'),
            name: "Unbreakable",
            description: "Raises a barrier for 4 seconds that redirects all incoming damage to Braum, and reduces the damage he takes through the shield by 70% / 80% / 90%."
        },
        stats: {
            cost: 2,
            health: "750 / 1350 / 2700",
            mana: "50",
            damage: "40 / 72 / 144",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Braum"
    },
    "Cho'gath": {
        image: require('./Champions/Chogath.png'),
        origin: "Void",
        class: "Brawler",
        ability: {
            image: require('./Abilities/Chogath.png'),
            name: "Rupture",
            description: "After a 1.5-second delay, deals 200 / 400 / 600 magic damage and  knocks up all enemies in a 3x3 area, stunning them for 1.5 / 2 / 2.5 seconds."
        },
        stats: {
            cost: 4,
            health: "1000 / 1800 / 3600",
            mana: "150",
            damage: "70 / 126 / 252",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 4,
        name: "Cho'gath"
    },
    Darius: {
        image: require('./Champions/Darius.png'),
        origin: "Imperial",
        class: "Knight",
        ability: {
            image: require('./Abilities/Darius.png'),
            name: "Decimate",
            description: "Deals 150 / 200 / 250 magic damage to all nearby enemies and heals himself for 100 / 150 / 200 for each enemy hit."
        },
        stats: {
            cost: 1,
            health: "600 / 1080 / 2160",
            mana: "100",
            damage: "50 / 90 / 180",
            attackSpeed: "0.5",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 1,
        name: "Darius"
    },
    Draven: {
        image: require('./Champions/Draven.png'),
        origin: "Imperial",
        class: "Blademaster",
        ability: {
            image: require('./Abilities/Draven.png'),
            name: "Spinning Axes",
            description: "Basic attacks grant 150% / 200% / 250% bonus on-hit physical damage and 30 / 45 / 60% attack speed for 8 seconds, stacking up to two times."
        },
        stats: {
            cost: 4,
            health: "700 / 1260 / 2520",
            mana: "50",
            damage: "75 / 135 / 270",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 4,
        name: "Draven"
    },
    Elise: {
        image: require('./Champions/Elise.png'),
        origin: "Demon",
        class: "Shapeshifter",
        ability: {
            image: require('./Abilities/Elise.png'),
            name: "Spider form",
            description: "Summons 1 / 2 / 4 Spiderlings with 500 health, and transforms into a melee attacker for 60 seconds, gaining 60% / 90% / 120% life steal."
        },
        stats: {
            cost: 1,
            health: "450 / 810 / 1620",
            mana: "100",
            damage: "40 / 72 / 144",
            attackSpeed: "0.6",
            attackRange: "2 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 1,
        name: "Elise"
    },
    Evelynn: {
        image: require('./Champions/Evelynn.png'),
        origin: "Demon",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Evelynn.png'),
            name: "Last Caress",
            description: "Deals 200 / 250 / 300 magic damage to the 3 closest enemies and blinks back 3 ranges. Damage is increased to 600 / 1000 / 1500 against enemies below 50% health."
        },
        stats: {
            cost: 3,
            health: "550 / 990 / 1980",
            mana: "75",
            damage: "60 / 108 / 216",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Evelynn"
    },
    Fiora: {
        image: require('./Champions/Fiora.png'),
        origin: "Noble",
        class: "Blademaster",
        ability: {
            image: require('./Abilities/Fiora.png'),
            name: "Riposte",
            description: "Becomes immune to damage and spells for 1.5 seconds, and then  stuns for 1.5 seconds and deals 100 / 250 / 400 magic damage to the closest enemy."
        },
        stats: {
            cost: 1,
            health: "400 / 720 / 1440",
            mana: "75",
            damage: "40 / 72 / 144",
            attackSpeed: "1",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 1,
        name: "Fiora"
    },
    Gangplank: {
        image: require('./Champions/Gangplank.png'),
        origin: "Pirate",
        class: "Blademaster",
        classSecond: "Gunslinger",
        ability: {
            image: require('./Abilities/Gangplank.png'),
            name: "Powder Kegs",
            description: "Detonates all active Powder Kegs, dealing 200 / 325 / 450 magic damage to enemies caught in the blast."
        },
        stats: {
            cost: 3,
            health: "700 / 1260 / 2520",
            mana: "100",
            damage: "55 / 99 / 198",
            attackSpeed: "0.65",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Gangplank"
    },
    Garen: {
        image: require('./Champions/Garen.png'),
        origin: "Noble",
        class: "Knight",
        ability: {
            image: require('./Abilities/Garen.png'),
            name: "Judgment",
            description: "Spins his sword around his body for 4 seconds, becoming immune to magic damage and dealing 50 / 65 / 80 magic damage to nearby enemies each second. The spins can deal a total of 450 / 585 / 720 magic damage."
        },
        stats: {
            cost: 1,
            health: "600 / 1080 / 2160",
            mana: "100",
            damage: "55 / 99 / 198",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "20",
            armor: "35"
        },
        tier: 1,
        name: "Garen"
    },
    Gnar: {
        image: require('./Champions/Gnar.png'),
        origin: "Wild",
        originSecond: "Yordle",
        class: "Shapeshifter",
        ability: {
            image: require('./Abilities/Gnar.png'),
            name: "GNAR!",
            description: "Transforms into a melee attacker for 60 seconds, gaining 300 / 600 / 900 health, 30 / 60 / 90 attack damage, jumping behind the farthest enemy and then  shunts all surrounding enemies 2 rangees toward his team, stunning them for 2 seconds and dealing 200 / 300 / 400 magic damage."
        },
        stats: {
            cost: 4,
            health: "750 / 1350 / 2700",
            mana: "125",
            damage: "45 / 81 / 162",
            attackSpeed: "0.7",
            attackRange: "2 range",
            magicResist: "20",
            armor: "30"
        },
        tier: 4,
        name: "Gnar"
    },
    Graves: {
        image: require('./Champions/Graves.png'),
        origin: "Pirate",
        class: "Gunslinger",
        ability: {
            image: require('./Abilities/Graves.png'),
            name: "Buckshot",
            description: "Basic attacks deal 5% / 10% / 15% increased physical damage and hit all enemies in front of him."
        },
        stats: {
            cost: 1,
            health: "450 / 810 / 1620",
            mana: "0",
            damage: "55 / 99 / 198",
            attackSpeed: "0.5",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 1,
        name: "Graves"
    },
    Karthus: {
        image: require('./Champions/Karthus.png'),
        origin: "Phantom",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Karthus.png'),
            name: "Requiem",
            description: "Channel for 3 seconds to deal 350 / 600 / 850 magic damage to 4 / 7 / 10 random enemies."
        },
        stats: {
            cost: 5,
            health: "850 / 1530 / 3060",
            mana: "85",
            damage: "65 / 117 / 234",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 5,
        name: "Karthus"
    },
    Kassadin: {
        image: require('./Champions/Kassadin.png'),
        origin: "Void",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Kassadin.png'),
            name: "Nether Blade",
            description: "Basic attacks steal 20 / 40 / 60 mana, converting it into a shield for 4 seconds."
        },
        stats: {
            cost: 1,
            health: "550 / 990 / 1980",
            mana: "0",
            damage: "45 / 81 / 162",
            attackSpeed: "0.65",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 1,
        name: "Kassadin"
    },
    Katarina: {
        image: require('./Champions/Katarina.png'),
        origin: "Imperial",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Katarina.png'),
            name: "Death Lotus",
            description: "Channels for 2.5 seconds and fires daggers at 3 / 5 / 7 nearby enemies, dealing 40 / 60 / 80 magic damage per tick and reducing healing on them for 3 seconds. The channel can deal a total of 600 / 900 / 1200 magic damage."
        },
        stats: {
            cost: 3,
            health: "450 / 810 / 1620",
            mana: "100",
            damage: "50 / 90 / 180",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Katarina"
    },
    Kayle: {
        image: require('./Champions/Kayle.png'),
        origin: "Noble",
        class: "Knight",
        ability: {
            image: require('./Abilities/Kayle.png'),
            name: "Divine Judgement",
            description: "Targets the 1 / 2 / 3 weakest allies, making them immune to damage for 2 / 3 / 4 seconds, and dealing 500 / 800 / 1100 magic damage at the end of the duration."
        },
        stats: {
            cost: 5,
            health: "800 / 1440 / 2880",
            mana: "100",
            damage: "60 / 108 / 216",
            attackSpeed: "1.1",
            attackRange: "3 range",
            magicResist: "20",
            armor: "35"
        },
        tier: 5,
        name: "Kayle"
    },
    Kennen: {
        image: require('./Champions/Kennen.png'),
        origin: "Ninja",
        originSecond: "Yordle",
        class: "Elementalist",
        ability: {
            image: require('./Abilities/Kennen.png'),
            name: "Slicing Maelstorm",
            description: "Summons a storm around him for 3 seconds, dealing 66 / 108 / 150 magic damage each 0.5 seconds to nearby enemies, stunning for 1.5 seconds them after 3 hits. The storm can deal a total of 400 / 650 / 900 magic damage."
        },
        stats: {
            cost: 3,
            health: "550 / 990 / 1980",
            mana: "150",
            damage: "65 / 117 / 234",
            attackSpeed: "0.6",
            attackRange: "2 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Kennen"
    },
    Khazix: {
        image: require('./Champions/Khazix.png'),
        origin: "Void",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Khazix.png'),
            name: "Taste their Fear",
            description: "Deals 150 / 250 / 350 magic damage to the target enemy. Instead deals 400 / 600 / 800 magic damage if they have no allies adjacent to them."
        },
        stats: {
            cost: 1,
            health: "500 / 900 / 1800",
            mana: "50",
            damage: "50 / 90 / 180",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 1,
        name: "Kha'zix"
    },
    Kindred: {
        image: require('./Champions/Kindred.png'),
        origin: "Phantom",
        class: "Ranger",
        ability: {
            image: require('./Abilities/Kindred.png'),
            name: "Lamb's Respite",
            description: "Creates a zone around herself for 4 / 5 / 6 seconds that prevents nearby allies from dying. Additionally, allies in the zone cannot have their health go below 300 / 600 / 900."
        },
        stats: {
            cost: 4,
            health: "600 / 1080 / 2160",
            mana: "150",
            damage: "55 / 99 / 198",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 4,
        name: "Kindred"
    },
    Leona: {
        image: require('./Champions/Leona.png'),
        origin: "Noble",
        class: "Guardian",
        ability: {
            image: require('./Abilities/Leona.png'),
            name: "Solar Flare",
            description: "After a 0.625-second delay, calls down a solar ray that deals 175 / 250 / 325 magic damage and  slows all enemies within a 3x3 for 5 / 8 / 11 seconds. The enemy in the center is instead  stunned for the same duration."
        },
        stats: {
            cost: 4,
            health: "750 / 1350 / 2700",
            mana: "100",
            damage: "45 / 81 / 162",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "20",
            armor: "55"
        },
        tier: 4,
        name: "Leona"
    },
    Lissandra: {
        image: require('./Champions/Lissandra.png'),
        origin: "Glacial",
        class: "Elementalist",
        ability: {
            image: require('./Abilities/Lissandra.png'),
            name: "Frozen Tomb",
            description: "Encases the target in ice, stunning them for 1.5 seconds and dealing 225 / 300 / 375 magic damage to nearby enemies. She also creates a 2x2 zone for 3 seconds that slows enemies within for 3 seconds. If she is below 50% health, she instead encases herself for 2 seconds, becoming untargetable."
        },
        stats: {
            cost: 2,
            health: "450 / 810 / 1620",
            mana: "150",
            damage: "40 / 72 / 144",
            attackSpeed: "0.6",
            attackRange: "2 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 2,
        name: "Lissandra"
    },
    Lucian: {
        image: require('./Champions/Lucian.png'),
        origin: "Noble",
        class: "Gunslinger",
        ability: {
            image: require('./Abilities/Lucian.png'),
            name: "Relentless Pursuit",
            description: "Dashes away from nearby enemies and then attacks twice on his next attack. The first attack deals 25 / 45 / 65 physical damage, while the second deals 150 / 250 / 350 magic damage."
        },
        stats: {
            cost: 2,
            health: "600 / 1080 / 2160",
            mana: "35",
            damage: "65 / 117 / 234",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Lucian"
    },
    Lulu: {
        image: require('./Champions/Lulu.png'),
        origin: "Yordle",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Lulu.png'),
            name: "Wild Growth",
            description: "Grants 1 / 2 / 3 allies 300 / 475 / 650 bonus health for 6 seconds, knocking up enemies near them for 1.25 seconds."
        },
        stats: {
            cost: 2,
            health: "500 / 900 / 1800",
            mana: "150",
            damage: "50 / 90 / 180",
            attackSpeed: "0.6",
            attackRange: "2 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Lulu"
    },
    "Miss Fortune": {
        image: require('./Champions/Missfortune.png'),
        origin: "Pirate",
        class: "Gunslinger",
        ability: {
            image: require('./Abilities/Miss_Fortune.png'),
            name: "Bullet Time",
            description: "Channels for 3 seconds and fires 14 waves of bullets in a cone, dealing 57.14 / 89.29 / 121.43 magic damage with each wave. The channel can deal a total of 800 / 1250 / 1700 magic damage."
        },
        stats: {
            cost: 5,
            health: "650 / 1170 / 2340",
            mana: "100",
            damage: "75 / 135 / 270",
            attackSpeed: "0.85",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 5,
        name: "Miss Fortune"
    },
    Mordekaiser: {
        image: require('./Champions/Mordekaiser.png'),
        origin: "Phantom",
        class: "Knight",
        ability: {
            image: require('./Abilities/Mordekaiser.png'),
            name: "Obliterate",
            description: "Slams his mace in front of him, dealing 200 / 325 / 450 magic damage to two enemies in a line 3 rangees away."
        },
        stats: {
            cost: 1,
            health: "500 / 900 / 1800",
            mana: "100",
            damage: "50 / 90 / 198",
            attackSpeed: "0.5",
            attackRange: "1 range",
            magicResist: "20",
            armor: "35"
        },
        tier: 1,
        name: "Mordekaiser"
    },
    Morgana: {
        image: require('./Champions/Morgana.png'),
        origin: "Demon",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Morgana.png'),
            name: "Soul Shackles",
            description: "Fires chains to nearby enemies up to 3 rangees away, dealing 300 / 375 / 450 magic damage, and slowing them by 20% while the chains hold. After 3 seconds if the chains held, deals the same damage and stuns them for 2 / 4 / 6 seconds."
        },
        stats: {
            cost: 3,
            health: "650 / 1170 / 2340",
            mana: "150",
            damage: "50 / 90 / 198",
            attackSpeed: "0.6",
            attackRange: "2 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Morgana"
    },
    Nidalee: {
        image: require('./Champions/Nidalee.png'),
        origin: "Wild",
        class: "Shapeshifter",
        ability: {
            image: require('./Abilities/Nidalee.png'),
            name: "Primal Surge",
            description: "After a 0.5-second delay, heals herself and the weakest ally over 6 seconds, healing for a total of 150 / 375 / 600 health, then transforms into a melee attacker for 6 seconds, gaining 20 / 70 / 120 attack damage."
        },
        stats: {
            cost: 1,
            health: "500 / 900 / 1800",
            mana: "100",
            damage: "50 / 90 / 180",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 1,
        name: "Nidalee"
    },
    Poppy: {
        image: require('./Champions/Poppy.png'),
        origin: "Yordle",
        class: "Knight",
        ability: {
            image: require('./Abilities/Poppy.png'),
            name: "Keeper's Verdict",
            description: "After a 0.75-second delay, swings her hammer at the closest enemy, dealing 300 / 500 / 700 magic damage, knocking up for 1 second and stunning for 2 / 3 / 4 seconds."
        },
        stats: {
            cost: 3,
            health: "800 / 1440 / 2880",
            mana: "75",
            damage: "50 / 90 / 180",
            attackSpeed: "0.5",
            attackRange: "1 range",
            magicResist: "20",
            armor: "40"
        },
        tier: 3,
        name: "Poppy"
    },
    Pyke: {
        image: require('./Champions/Pyke.png'),
        origin: "Pirate",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Pyke.png'),
            name: "Phantom Undertow",
            description: "Dashes behind the furthest enemy, creating an afterimage that, after 1 second, deals 150 / 200 / 250 magic damage and  stuns all enemies it passes through for 2 / 2.5 / 3 seconds."
        },
        stats: {
            cost: 2,
            health: "600 / 1080 / 2160",
            mana: "125",
            damage: "60 / 108 / 216",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Pyke"
    },
    "Rek'sai": {
        image: require('./Champions/Reksai.png'),
        origin: "Void",
        class: "Brawler",
        ability: {
            image: require('./Abilities/Reksai.png'),
            name: "Burrow",
            description: " Burrows into the ground, becoming untargetable for 2 seconds while healing each 0.5 seconds for 300 / 400 / 500 health in total. She then unburrows, dealing 150 / 250 / 350 magic damage and knocking up for 1 second the closest enemy."
        },
        stats: {
            cost: 2,
            health: "650 / 1170 / 2340",
            mana: "150",
            damage: "40 / 72 / 144",
            attackSpeed: "0.65",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 2,
        name: "Rek'sai"
    },
    Rengar: {
        image: require('./Champions/Rengar.png'),
        origin: "Wild",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Rengar.png'),
            name: "Savagery",
            description: "Leaps at the weakest enemy, dealing 210% / 320% / 430% physical damage, and gaining 50% / 65% / 80% attack speed and 25% critical strike chance for 6 seconds."
        },
        stats: {
            cost: 3,
            health: "550 / 990 / 1980",
            mana: "75",
            damage: "65 / 117 / 234",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Rengar"
    },
    Sejuani: {
        image: require('./Champions/Sejuani.png'),
        origin: "Glacial",
        class: "Knight",
        ability: {
            image: require('./Abilities/Sejuani.png'),
            name: "Glacial Prison",
            description: "Creates a large glacial storm that detonates after 2 seconds, dealing 100 / 175 / 250 magic damage and  stunning for 2 / 3.5 / 5 seconds enemies within it."
        },
        stats: {
            cost: 4,
            health: "850 / 1530 / 3060",
            mana: "150",
            damage: "45 / 81 / 162",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "25",
            armor: "35"
        },
        tier: 4,
        name: "Sejuani"
    },
    Shen: {
        image: require('./Champions/Shen.png'),
        origin: "Ninja",
        class: "Blademaster",
        ability: {
            image: require('./Abilities/Shen.png'),
            name: "Spirit's Refuge",
            description: "Creates a zone around himself for 3 / 4 / 5 seconds, allowing allies inside to dodge all attacks."
        },
        stats: {
            cost: 2,
            health: "650 / 1170 / 2340",
            mana: "150",
            damage: "65 / 117 / 234",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "30"
        },
        tier: 2,
        name: "Shen"
    },
    Shyvana: {
        image: require('./Champions/Shyvana.png'),
        origin: "Dragon",
        class: "Shapeshifter",
        ability: {
            image: require('./Abilities/Shyvana.png'),
            name: "Dragon's Descent",
            description: "Dashes and transforms into a ranged attacker for 60 seconds, gaining 100 / 150 / 200 attack damage and attack range. When transformed, her attacks set enemies on fire, dealing 200 / 300 / 400 magic damage over 3 seconds."
        },
        stats: {
            cost: 2,
            health: "650 / 1170 / 2340",
            mana: "100",
            damage: "50 / 90 / 180",
            attackSpeed: "0.7",
            attackRange: "1 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Shyvana"
    },
    Swain: {
        image: require('./Champions/Swain.png'),
        origin: "Demon",
        originSecond: "Imperial",
        class: "Shapeshifter",
        ability: {
            image: require('./Abilities/Swain.png'),
            name: "Demonflare",
            description: "Transforms for 6 seconds, dealing 50 / 100 / 150 magic damage to all nearby enemies with each tick while healing for 50 / 90 / 130 health with each tick. At the end of his transformation, sends out a burst of energy dealing 300 / 600 / 900 magic damage to nearby enemies."
        },
        stats: {
            cost: 5,
            health: "850 / 1530 / 3060",
            mana: "100",
            damage: "65 / 117 / 234",
            attackSpeed: "0.65",
            attackRange: "2 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 5,
        name: "Swain"
    },
    Tristana: {
        image: require('./Champions/Tristana.png'),
        origin: "Yordle",
        class: "Gunslinger",
        ability: {
            image: require('./Abilities/Tristana.png'),
            name: "Explosive Charge",
            description: "Places a bomb on her current target, that detonates after 4 seconds or 3 attacks, dealing 60 / 90 / 120 magic damage to enemies up to 2 ranges away. The damage is increased by 50% with each attack, dealing up to 150 / 225 / 300 magic damage."
        },
        stats: {
            cost: 1,
            health: "500 / 900 / 1800",
            mana: "50",
            damage: "50 / 90 / 180",
            attackSpeed: "0.65",
            attackRange: "4 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 1,
        name: "Tristana"
    },
    Varus: {
        image: require('./Champions/Varus.png'),
        origin: "Demon",
        class: "Ranger",
        ability: {
            image: require('./Abilities/Varus.png'),
            name: "Piercing Arrow",
            description: "After charging for 1.5 seconds, fires an arrow up to 8 range away, dealing 400 / 600 / 800 magic damage to all enemies hit."
        },
        stats: {
            cost: 2,
            health: "500 / 900 / 1800",
            mana: "75",
            damage: "50 / 90 / 180",
            attackSpeed: "0.7",
            attackRange: "4 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Varus"
    },
    Vayne: {
        image: require('./Champions/Vayne.png'),
        origin: "Noble",
        class: "Ranger",
        ability: {
            image: require('./Abilities/Vayne.png'),
            name: "Silver Bolts",
            description: "Every third attack against the same target deals 8% / 10% / 12% of target's maximum health bonus true damage."
        },
        stats: {
            cost: 1,
            health: "550 / 990 / 1980",
            mana: "0",
            damage: "45 / 81 / 162",
            attackSpeed: "0.65",
            attackRange: "3 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 1,
        name: "Vayne"
    },
    Veigar: {
        image: require('./Champions/Veigar.png'),
        origin: "Yordle",
        class: "Sorcerer",
        ability: {
            image: require('./Abilities/Veigar.png'),
            name: "Primordial Burst",
            description: "Deals 300 / 500 / 700 magic damage to the target enemy. If the target is a lower star level than Veigar, the target is executed."
        },
        stats: {
            cost: 3,
            health: "450 / 810 / 1620",
            mana: "75",
            damage: "45 / 81 / 162",
            attackSpeed: "0.55",
            attackRange: "3 range",
            magicResist: "20",
            armor: "20"
        },
        tier: 3,
        name: "Veigar"
    },
    Volibear: {
        image: require('./Champions/Volibear.png'),
        origin: "Glacial",
        class: "Brawler",
        ability: {
            image: require('./Abilities/Volibear.png'),
            name: "Thunder Claws",
            description: "For 20 seconds, empowers his basic attacks to bounce to up to 3 / 4 / 5 enemies 1 range away, dealing 80% / 90% / 100% physical damage to secondary targets, and applying on-hit effects."
        },
        stats: {
            cost: 3,
            health: "700 / 1260 / 2520",
            mana: "75",
            damage: "75 / 135 / 270",
            attackSpeed: "0.55",
            attackRange: "1 range",
            magicResist: "20",
            armor: "30"
        },
        tier: 3,
        name: "Volibear"
    },
    Warwick: {
        image: require('./Champions/Warwick.png'),
        origin: "Wild",
        class: "Brawler",
        ability: {
            image: require('./Abilities/Warwick.png'),
            name: "Infinite Duress",
            description: "Pounces onto the lowest health enemy, stunning them for 1.5 seconds, dealing 150 / 225 / 300 magic damage over 3 hits and healing over the duration."
        },
        stats: {
            cost: 1,
            health: "600 / 1080 / 2160",
            mana: "150",
            damage: "50 / 90 / 180",
            attackSpeed: "0.6",
            attackRange: "1 range",
            magicResist: "20",
            armor: "30"
        },
        tier: 1,
        name: "Warwick"
    },
    Yasuo: {
        image: require('./Champions/Yasuo.png'),
        origin: "Exile",
        class: "Blademaster",
        ability: {
            image: require('./Abilities/Yasuo.png'),
            name: "Steel Tempest",
            description: "Stabs fowards, dealing 150 / 350 / 550 magic damage to two enemies in a line 2 range away. On third cast, instead launches a tornado, dealing the same magic damage and  knocking up enemies for 1.5 seconds in a line 6 range away."
        },
        stats: {
            cost: 5,
            health: "700 / 1260 / 2520",
            mana: "25",
            damage: "65 / 117 / 234         ",
            attackSpeed: "1.0",
            attackRange: "1 range",
            magicResist: "20",
            armor: "35"
        },
        tier: 5,
        name: "Yasuo"
    },
    Zed: {
        image: require('./Champions/Zed.png'),
        origin: "Ninja",
        class: "Assassin",
        ability: {
            image: require('./Abilities/Zed.png'),
            name: "Razor Shuriken",
            description: "Throws a shuriken, dealing 200 / 300 / 400 magic damage to enemies in a line 4 range away."
        },
        stats: {
            cost: 2,
            health: "500 / 900 / 1800",
            mana: "75",
            damage: "60 / 108 / 216",
            attackSpeed: "0.65",
            attackRange: "1 range",
            magicResist: "20",
            armor: "25"
        },
        tier: 2,
        name: "Zed"
    },
}

export const origin = {
    Demon: {
        name: "Demon",
        image: require('./Origin/Demon.png'),
        description: "Demons have a chance on-hit to deplete the target's current mana and deal true damage equal to the mana depleted.",
        ability: {
            1: {
                amount: 2,
                effect: "25% chance"
            },
            2: {
                amount: 4,
                effect: "50% chance"
            },
            3: {
                amount: 6,
                effect: "85% chance"
            },
        }
    },
    Dragon: {
        name: "Dragon",
        image: require('./Origin/Dragon.png'),
        description: "While 2 Dragons are in play, all Dragons are immune to magic damage."
    },
    Exile: {
        name: "Exile",
        image: require('./Origin/Exile.png'),
        description: "Exiles start combat with a shield equal to 100% of maximum health when not placed adjacent to an ally.",
    },
    Glacial: {
        name: "Glacial",
        image: require('./Origin/Glacial.png'),
        description: "Glacials have a chance on-hit to stun for 2 seconds.",
        ability: {
            1: {
                amount: 2,
                effect: "20% chance"
            },
            2: {
                amount: 4,
                effect: "30% chance"
            },
            3: {
                amount: 6,
                effect: "45% chance"
            },
        }
    },
    Imperial: {
        name: "Imperial",
        image: require('./Origin/Imperial.png'),
        description: "A select number of Imperials deal double damage.",
        ability: {
            1: {
                amount: 2,
                effect: "One random imperial"
            },
            2: {
                amount: 4,
                effect: "All imperials"
            }
        }
    },
    Ninja: {
        name: "Ninja",
        image: require('./Origin/Ninja.png'),
        description: "Ninjas gain a percentage of Attack Damage.",
        ability: {
            1: {
                amount: 1,
                effect: "This ninja gains 40% attack damage"
            },
            2: {
                amount: 4,
                effect: "All Ninjas gain 80% attack damage"
            }
        }
    },
    Noble: {
        name: "Noble",
        image: require('./Origin/Noble.png'),
        description: "Grants 100 armor and basic attacks restore 35 health on-hit to the follow",
        ability: {
            1: {
                amount: 3,
                effect: "A random ally."
            },
            2: {
                amount: 6,
                effect: "The whole team."
            }
        }
    },
    Phantom: {
        name: "Phantom",
        image: require('./Origin/Phantom.png'),
        description: "While 2 Phantoms are in play, a random enemy will begin combat with 100 health.",
    },
    Pirate: {
        name: "Pirate",
        image: require('./Origin/Pirate.png'),
        description: "While 3 Pirates are in play, you begin each PvP round with a chest that grants between Gold 0 and 4.",
    },
    Robot: {
        name: "Robot",
        image: require('./Origin/Robot.png'),
        description: "Robots begin combat with full mana.",
    },
    Void: {
        name: "Void",
        image: require('./Origin/Void.png'),
        description: "While 3 Voidlings are in play, your team gains 50% armor penetration.",
    },
    Wild: {
        name: "Wild",
        image: require('./Origin/Wild.png'),
        description: "Wildlings generate Fury on-hit, up to 5. Each stack gives 7% attack speed.",
        ability: {
            1: {
                amount: 2,
                effect: "Fury benefits all allied Wildlings."
            },
            2: {
                amount: 4,
                effect: "All allies"
            },
        }
    },
    Yordle: {
        name: "Yordle",
        image: require('./Origin/Yordle.png'),
        description: "Yordles have a chance to dodge enemy attacks",
        ability: {
            1: {
                amount: 3,
                effect: "25% chance"
            },
            2: {
                amount: 6,
                effect: "60% chance"
            }
        }
    },
}

export const classes = {
    Assassin: {
        name: "Assassin",
        image: require('./Class/Assassin.png'),
        description: "Assassins stealth for a short duration and jump behind the farthest enemy.",
        ability: {
            1: {
                amount: 3,
                effect: "125% critical damage"
            },
            2: {
                amount: 6,
                effect: "350% critical damage"
            }
        }
    },
    Blademaster: {
        name: "Blademaster",
        image: require('./Class/Blademaster.png'),
        description: "Blademasters have a 35% chance to perform a multi-attack.",
        ability: {
            1: {
                amount: 3,
                effect: "One additional strike"
            },
            2: {
                amount: 6,
                effect: "Two additional strikes"
            }
        }
    },
    Brawler: {
        name: "Brawler",
        image: require('./Class/Brawler.png'),
        description: "Brawlers gain additional maximum health.",
        ability: {
            1: {
                amount: 2,
                effect: "+300"
            },
            2: {
                amount: 4,
                effect: "+700"
            }
        }
    },
    Elementalist: {
        name: "Elementalist",
        image: require('./Class/Elementalist.png'),
        description: "Elementalists gain double mana from attacks.",
        ability: {
            1: {
                amount: 3,
                effect: "At the start of combat, summon a Golem with 2200 HP."
            },
        }
    },
    Guardian: {
        name: "Guardian",
        image: require('./Class/Guardian.png'),
        description: "Beginning combat with 2 Guardians will grant 40 armor to all units that start adjacent to a Guardian.",
        ability: {
            1: {
                amount: 2,
                effect: "At the start of combat, all Guardians and adjacent allies receive +40 armor."
            },
        }
    },
    Gunslinger: {
        name: "Gunslinger",
        image: require('./Class/Gunslinger.png'),
        description: "Gunslingers have a 50% chance for their attacks to hit additional enemies.",
        ability: {
            1: {
                amount: 2,
                effect: "One additional enemy"
            },
            2: {
                amount: 4,
                effect: "Two additional enemies"
            }
        }
    },
    Knight: {
        name: "Knight",
        image: require('./Class/Knight.png'),
        description: "Knights ignore a flat amount of damage from basic attacks.",
        ability: {
            1: {
                amount: 2,
                effect: "20"
            },
            2: {
                amount: 4,
                effect: "40"
            },
            3: {
                amount: 6,
                effect: "80"
            }
        }
    },
    Ranger: {
        name: "Ranger",
        image: require('./Class/Ranger.png'),
        description: "Every 3 seconds, Rangers have a chance to gain double attack speed for 3 seconds.",
        ability: {
            1: {
                amount: 2,
                effect: "25%"
            },
            2: {
                amount: 4,
                effect: "65%"
            }
        }
    },
    Shapeshifter: {
        name: "Shapeshifter",
        image: require('./Class/Shapeshifter.png'),
        description: "Shapeshifters gain bonus maximum Health when they transform.",
        ability: {
            1: {
                amount: 3,
                effect: "60% bonus maximum health"
            },
        }
    },
    Sorcerer: {
        name: "Sorcerer",
        image: require('./Class/Sorcerer.png'),
        description: "Sorcerers gain double mana from attacking and allies have increased spell damage.",
        ability: {
            1: {
                amount: 3,
                effect: "45%"
            },
            2: {
                amount: 6,
                effect: "100%"
            }
        }
    }
}

export const tiers = {
    2: {
        image: require('../assets/Tiers/2.png')
    },
    3: {
        image: require('../assets/Tiers/3.png')
    },
    4: {
        image: require('../assets/Tiers/4.png')
    },
    5: {
        image: require('../assets/Tiers/5.png')
    }
}

export const items = {
    "B.F Sword": {
        name: "B.F Sword",
        image: require("../assets/Items/B.F._Sword_item.png"),
        ad: 20,
        recipes: {
            "Infinity Edge": "B.F Sword",
            "Sword of the Divine": "Recurve Bow",
            "Hextech Gunblade": "Needlessly Large Rod",
            "Spear of Shojin": "Tear of the Goddess",
            "Guardian Angel": "Chain Vest",
            "Bloodthirster": "Negatron Cloak",
            "Zeke's Herald": "Giant's Belt",
            "Youmuu's Ghostblade": "Spatula"
        }
    },
    "Recurve Bow": {
        name: "Recurve Bow",
        image: require("../assets/Items/Recurve_Bow_item.png"),
        as: 15,
        recipes: {
            "Sword of the Divine": "B.F Sword",
            "Rapid Firecannon": "Recurve Bow",
            "Guinsoo's Rageblade": "Needlessly Large Rod",
            "Statikk Shiv": "Tear of the Goddess",
            "Phantom Dancer": "Chain Vest",
            "Cursed Blade": "Negatron Cloak",
            "Titanic Hydra": "Giant's Belt",
            "Blade of the Ruined King": "Spatula"
        }
    },
    "Needlessly Large Rod": {
        name: "Needlessly Large Rod",
        image: require("../assets/Items/Needlessly_Large_Rod_item.png"),
        ap: 15,
        recipes: {
            "Hextech Gunblade": "B.F Sword",
            "Guinsoo's Rageblade": "Recurve Bow",
            "Rabadon's Deathcap": "Needlessly Large Rod",
            "Luden's Echo": "Tear of the Goddess",
            "Locket of the Iron Solari": "Chain Vest",
            "Ionic Spark": "Negatron Cloak",
            "Morellonomicon": "Giant's Belt",
            "Yuumi": "Spatula"
        }
    },
    "Tear of the Goddess": {
        name: "Tear of the Goddess",
        image: require("../assets/Items/Tear_of_the_Goddess_item.png"),
        mana: 20,
        recipes: {
            "Spear of Shojin": "B.F Sword",
            "Statikk Shiv": "Recurve Bow",
            "Luden's Echo": "Needlessly Large Rod",
            "Seraph's Embrace": "Tear of the Goddess",
            "Frozen Heart": "Chain Vest",
            "Hush": "Negatron Cloak",
            "Redemption": "Giant's Belt",
            "Darkin": "Spatula"
        }
    },
    "Chain Vest": {
        name: "Chain Vest",
        image: require("../assets/Items/Chain_Vest_item.png"),
        armor: 20,
        recipes: {
            "Guardian Angel": "B.F Sword",
            "Phantom Dancer": "Recurve Bow",
            "Locket of the Iron Solari": "Needlessly Large Rod",
            "Frozen Heart": "Tear of the Goddess",
            "Thornmail": "Chain Vest",
            "Sword Breaker": "Negatron Cloak",
            "Red Buff": "Giant's Belt",
            "Knight's Vow": "Spatula"
        }
    },
    "Negatron Cloak": {
        name: "Negatron Cloak",
        image: require("../assets/Items/Negatron_Cloak_item.png"),
        mr: 20,
        recipes: {
            "Bloodthirster": "B.F Sword",
            "Cursed Blade": "Recurve Bow",
            "Ionic Spark": "Needlessly Large Rod",
            "Hush": "Tear of the Goddess",
            "Sword Breaker": "Chain Vest",
            "Dragon's Claw": "Negatron Cloak",
            "Zephyr": "Giant's Belt",
            "Runaan's Hurricane": "Spatula"
        }
    },
    "Giant's Belt": {
        name: "Giant's Belt",
        image: require("../assets/Items/Giant's_Belt_item.png"),
        hp: 200,
        recipes: {
            "Zeke's Herald": "B.F Sword",
            "Titanic Hydra": "Recurve Bow",
            "Morellonomicon": "Needlessly Large Rod",
            "Redemption": "Tear of the Goddess",
            "Red Buff": "Chain Vest",
            "Zephyr": "Negatron Cloak",
            "Warmog's Armor": "Giant's Belt",
            "Frozen Mallet": "Spatula"
        }
    },
    "Spatula": {
        name: "Spatula",
        image: require("../assets/Items/Spatula_item.png"),
        recipes: {
            "Youmuu's Ghostblade": "B.F Sword",
            "Blade of the Ruined King": "Recurve Bow",
            "Yuumi": "Needlessly Large Rod",
            "Darkin": "Tear of the Goddess",
            "Knight's Vow": "Chain Vest",
            "Runaan's Hurricane": "Negatron Cloak",
            "Frozen Mallet": "Giant's Belt",
            "Force of Nature": "Spatula"
        }
    },
    "Infinity Edge": {
        name: "Infinity Edge",
        image: require("../assets/Items/Infinity_Edge_item.png"),
        ad: 40,
        passive: "100% critical strike damage"
    },
    "Sword of the Divine": {
        name: "Sword of the Divine",
        image: require("../assets/Items/Sword_of_the_Divine_item.png"),
        ad: 20,
        as: 15,
        passive: "Every second, has a 5% chance to gain 100% critical strike chance until the end of combat."
    },
    "Spear of Shojin": {
        name: "Spear of Shojin",
        image: require("../assets/Items/Spear_of_Shojin_item.png"),
        ad: 20,
        mana: 20,
        passive: "After casting Special Ability for the first time, gain: Basic attacks restore an additional 15% of maximum mana on-hit."
    },
    "Hextech Gunblade": {
        name: "Hextech Gunblade",
        image: require("../assets/Items/Hextech_Gunblade_item.png"),
        ad: 20,
        ap: 20,
        passive: "Heal for 25% of damage dealt."
    },
    "Guardian Angel": {
        name: "Guardian Angel",
        image: require("../assets/Items/Guardian_Angel_item.png"),
        ad: 20,
        armor: 20,
        passive: "Upon death, revive with 500 health."
    },
    "Bloodthirster": {
        name: "Bloodthirster",
        image: require("../assets/Items/The_Bloodthirster_item.png"),
        ad: 20,
        mr: 20,
        passive: "Heal for 50% of damage dealt by basic attacks."
    },
    "Zeke's Herald": {
        name: "Zeke's Herald",
        image: require("../assets/Items/Zeke's_Herald_item.png"),
        ad: 20,
        hp: 200,
        passive: "At the beginning of combat, all adjacent allies gain 10% attack speed."
    },
    "Youmuu's Ghostblade": {
        name: "Youmuu's Ghostblade",
        image: require("../assets/Items/Youmuu's_Ghostblade_item.png"),
        ad: 20,
        passive: "Becomes an Assassin."
    },
    "Rapid Firecannon": {
        name: "Rapid Firecannon",
        image: require("../assets/Items/Rapid_Firecannon_item.png"),
        as: 30,
        passive: "Doubles attack range. Basic attacks cannot miss."
    },
    "Guinsoo's Rageblade": {
        name: "Guinsoo's Rageblade",
        image: require("../assets/Items/Guinsoo's_Rageblade_item.png"),
        as: 15,
        ap: 20,
        passive: "Gain 3% attack speed on-hit. Stacks with no upper limit."
    },
    "Redemption": {
        name: "Redemption",
        image: require("../assets/Items/Redemption_item.png"),
        mana: 20,
        hp: 200,
        passive: "On death, after a small delay, heal nearby allies for 1000 health."
    },
    "Red Buff": {
        name: "Red Buff",
        image: require("../assets/Items/Red_BramblebackSquare.png"),
        armor: 20,
        hp: 200,
        passive: "Basic attacks apply Grievous Wounds."
    },
    "Statikk Shiv": {
        name: "Statikk Shiv",
        image: require("../assets/Items/Statikk_Shiv_item.png"),
        mana: 20,
        as: 15,
        passive: "Every third attack deals 100 magic damage to the target and all adjacent enemies."
    },
    "Phantom Dancer": {
        name: "Phantom Dancer",
        image: require("../assets/Items/Phantom_Dancer_item.png"),
        armor: 20,
        as: 15,
        passive: "Dodge all critical strikes."
    },
    "Cursed Blade": {
        name: "Cursed Blade",
        image: require("../assets/Items/Dervish_Blade_item.png"),
        mr: 20,
        as: 15,
        passive: "Basic attacks have a chance to Subjugate shrink the target, removing 1 Star."
    },
    "Titanic Hydra": {
        name: "Titanic Hydra",
        image: require("../assets/Items/Titanic_Hydra_item.png"),
        hp: 200,
        as: 15,
        passive: "Basic attacks deal 10% of your maximum health bonus damage to the target and all adjacent enemies."
    },
    "Blade of the Ruined King": {
        name: "Blade of the Ruined King",
        image: require("../assets/Items/Blade_of_the_Ruined_King_item.png"),
        as: 15,
        passive: "Becomes a Blademaster."
    },
    "Rabadon's Deathcap": {
        name: "Rabadon's Deathcap",
        image: require("../assets/Items/Rabadon's_Deathcap_item.png"),
        ap: 40,
        passive: "Increases ability power by 50%."
    },
    "Luden's Echo": {
        name: "Luden's Echo",
        image: require("../assets/Items/Luden's_Echo_item.png"),
        ap: 20,
        mana: 20,
        passive: "Special Ability deals 200 magic damage to all adjacent enemies."
    },
    "Locket of the Iron Solari": {
        name: "Locket of the Iron Solari",
        image: require("../assets/Items/Locket_of_the_Iron_Solari_item.png"),
        ap: 20,
        armor: 20,
        passive: "At the beginning of combat, all adjacent allies gain a 200 health shield."
    },
    "Ionic Spark": {
        name: "Ionic Spark",
        image: require("../assets/Items/Ionic_Spark_item.png"),
        ap: 20,
        mr: 20,
        passive: "Enemies take 200 magic damage whenever they cast their Special Ability."
    },
    "Morellonomicon": {
        name: "Morellonomicon",
        image: require("../assets/Items/Morellonomicon_item.png"),
        ap: 20,
        health: 200,
        passive: "Spells deal burn damage equal to 10% of the enemy's maximum health per second."
    },
    "Yuumi": {
        name: "Yuumi",
        image: require("../assets/Items/You_and_Me!.png"),
        ap: 20,
        passive: "Becomes a Sorcerer."
    },
    "Seraph's Embrace": {
        name: "Seraph's Embrace",
        image: require("../assets/Items/Seraph's_Embrace_item.png"),
        mana: 40,
        passive: "After casting Special Ability, gain 20 mana."
    },
    "Frozen Heart": {
        name: "Frozen Heart",
        image: require("../assets/Items/Frozen_Heart_item.png"),
        mana: 20,
        armor: 20,
        passive: "Adjacent enemies have their attack speed reduced by 20%."
    },
    "Thornmail": {
        name: "Thornmail",
        image: require("../assets/Items/Thornmail_item.png"),
        armor: 40,
        passive: "Reflect 30% of damage taken from basic attacks."
    },
    "Sword Breaker": {
        name: "Sword Breaker",
        image: require("../assets/Items/Sword_Breaker_item.png"),
        armor: 20,
        mr: 20,
        passive: "Basic attacks have a chance to disarm the target."
    },
    "Dragon's Claw": {
        name: "Dragon's Claw",
        image: require("../assets/Items/Dragon's_Claw_item.png"),
        mr: 40,
        passive: "Gain 83% resistance to magic damage."
    },
    "Zephyr": {
        name: "Zephyr",
        image: require("../assets/Items/Zephyr_item.png"),
        health: 200,
        mr: 20,
        passive: "At the start of combat, banishes for 5 seconds the unit that mirrors the wielder placement on the other side of the board"
    },
    "Warmog's Armor": {
        name: "Warmog's Armor",
        image: require("../assets/Items/Warmog's_Armor_item.png"),
        health: 400,
        passive: "Regenerates 3% of maximum health per second."
    },
    "Frozen Mallet": {
        name: "Frozen Mallet",
        image: require("../assets/Items/Frozen_Mallet_item.png"),
        health: 200,
        passive: "Becomes a Glacial."
    },
    "Hush": {
        name: "Hush",
        image: require("../assets/Items/Hush_item.png"),
        mana: 20,
        mr: 20,
        passive: "Basic attacks have a high chance to silence the target."
    },
    "Darkin": {
        name: "Darkin",
        image: require("../assets/Items/World_Ender.png"),
        mana: 20,
        passive: "Becomes a Demon."
    },
    "Knight's Vow": {
        name: "Knight's Vow",
        image: require("../assets/Items/Knight's_Vow_item.png"),
        armor: 20,
        passive: "Becomes a Knight."
    },
    "Runaan's Hurricane": {
        name: "Runaan's Hurricane",
        image: require("../assets/Items/Runaan's_Hurricane_item.png"),
        mr: 20,
        passive: "Basic attacks hit 2 additional targets for 50% damage."
    },
    "Force of Nature": {
        name: "Force of Nature",
        image: require("../assets/Items/Force_of_Nature_item.png"),
        passive: "Increases the unit cap by 1."
    },
}