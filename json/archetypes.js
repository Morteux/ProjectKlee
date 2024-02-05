const archetypes = {
    "MonoGeo": {
        description: "Arquetipo basado en personajes del elemento Geo. Estos personajes suelen tener sinergia entre ellos. Se juegan con tres o cuatro personajes geo y un personaje flex. Destacan dps como Ningguang, Noelle o Itto. El uso de Gorou no es siempre obligatorio, pero si suele estar bastante presente en este arquetipo.",
        elements: ["Geo", "Geo", "Geo", "Flex"],
        pros_cons: "Fáciles de jugar, no se ve bloqueado por ningún tipo de escudo elemental, aunque no suelen ser muy efectivos contra estos",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "MonoHydro": {
        description: "Arquetipo basado en el uso de personajes del elemento Hydro. Está compuesto de tres personajes Hydro mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. También se puede usar a Zhongli para bajar esta resistencia y tener utilidad defensiva.",
        elements: ["Hydro", "Hydro", "Hydro", "Flex"],
        pros_cons: "Gracias a Furina este arquetipo ha mejorado muchísimo, y ya no depende de Xingqiu y Yelan, existiendo muchas alternativas. Destaca al romper escudos de fuego, y suelen tener un daño single-target muy potente. En algunas situaciones, añadir un personaje electro puede resultar en un mejor equipo.",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "MonoCryo": {
        description: "Arquetipo basado en el uso de personajes del elemento Cryo. Está compuesto de tres personajes Cryo mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. Suele usarse un DPS Cryo como Ganyu, Ayaka, Wriothesley... junto a Shenhe.",
        elements: ["Cryo", "Cryo", "Cryo", "Anemo"],
        pros_cons: "Es objetivamente inferior al arquetipo Freeze... a no ser que el enemigo no se pueda congelar. En estos casos, lo supera y se convierte en una muy buena alternativa, por ejemplo, contra jefes.",
        example_teams: [],
        color: "",
        forced_characters: ["Kaedehara Kazuha", "Shenhe"]
    },
    "MonoPyro": {
        description: "Arquetipo basado en el uso de personajes del elemento Pyro. Está compuesto de tres personajes Pyro mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. El arquetipo básico (aunque no el único) suele ser un DPS Pyro como Lyney, Dehya, Diluc, Klee... junto a Xiangling, Bennett, y Kazuha.",
        elements: ["Pyro", "Pyro", "Pyro", "Anemo"],
        pros_cons: "Muy fuerte y menos situacional que la mayoría de equipos mono elementos. Gracias a que suelen usar personajes como Bennett, Xiangling o Kazuha, tienen muchísimo daño base en cualquier situación. Unica desventaja, cuidado con los escudos pyro.",
        example_teams: [],
        color: "",
        forced_characters: ["Bennett", "Kaedehara Kazuha"]
    },
    "MonoElectro": {
        description: "Arquetipo basado en el uso de personajes del elemento Electro. Está arquetipo, suele aprovechar el buffo de Sara junto a dos personajes Electro mas un personaje Flex, que suele ser un anemo para bajar la resistencia via VV, u otros sources de buffos como Bennett o Zhongli.",
        elements: ["Electro", "Electro", "Electro", "Flex"],
        pros_cons: "Yae Miko y Raiden entre otros suelen aprovechar este arquetipo, aunque normalmente el uso de un equipo Hypercarry suele dar mejores resultados.",
        example_teams: [],
        color: "",
        forced_characters: ["Sara"]
    },
    "MonoAnemo": {
        description: "Estoy pensando en quitarlo",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Hypercarry": {
        description: "Equipos donde TODO el daño recae sobre un solo personaje. El resto de unidades son supports usados para potenciar a la unidad elegida como Hypercarry.",
        elements: ["Flex", "Flex", "Flex", "Flex"],
        pros_cons: "Todo el daño depende del investment del carry principal, para bien o para mal, y suelen necesitar vertical investment. La gran mayoría del tiempo onfield es del carry, por lo que si te gusta mucho el personaje es un buen arquetipo.",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Freeze": {
        description: "Se basan en mantener al enemigo congelado para poder aprovechar al máximo las distintas ventajas que esto aporta, como el CC, la consonancia Cryo, y el set de artefactos de congelados.",
        elements: ["Cryo", ["Cryo", "Hydro"], "Hydro", "Anemo"],
        pros_cons: "Es un arquetipo MUY potente cuando funciona. Y digo cuando funciona, porque hoyoverse está haciendo todo lo posible para que en muchos de los abismos no lo haga, como método de balance suelen poner enemigos inmunes al congelar.",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "National": {
        description: "Básicamente y sin explayarnos mucho, Xiangling haciendo vaporizados con cualquier cosa porque está balanceada junto a Bennett.",
        elements: ["Xiangling", "Bennett", "Hydro", "Flex"],
        pros_cons: "No tiene ninguna desventaja, suele funcionar donde sea cuando sea ya que tiene muchas variantes que se adaptan a distintas situaciones.",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Vaporize": {
        description: "Personajes que se basan si o si en la reacción de vaporizado, o al menos principalmente. Por ejemplo Hu Tao, Yoimiya... Están formados por un personaje pyro y otro hydro, pero el resto es muy polivalente, mientras sea un elemento que no cambie la reacción.",
        elements: ["Pyro", "Hydro", "Flex", "Flex"],
        pros_cons: "Es un arquetipo que se puede adaptar bien a distintas necesidades, al haber dos slots para personajes Flex, dependiendo de las necesidades del Carry o del abismo.",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Overvape": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Taser": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Soup": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Melt": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Aggravate": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Spread": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Bloom": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Burgeon": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Oven": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Curry": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Sauté": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Fridge": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Salad": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Airfryer": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Hyperbloom": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Quickbloom": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "HyperFridge": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Overload": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
    "Bain-Marie": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "",
        forced_characters: []
    },
};
