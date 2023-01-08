

export const LEVEL1 = [
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                       ?                                                     ",
    "                                                                                             ",
    "                                   -?-                                                       ",
    "                                                                                             ",
    "      -?-b-                  -?-                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "       _                                            _                                        ",
    "       |                                            |          E    E            H           ",
    "================     ========================================================================",
    "================     ========================================================================",
];

export const LEVEL = [
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '                                                                ',
    '               ===               =                              ',
    '          >                                       <             ',
    '================================================================',
]


export const addTiles = (tiles) => {
    let prevWidths = 0;

    tiles.forEach((tile, i) => {
        const back = add([
            sprite(tile.name, { height: height() }),
            layer("tile"),
        ]);

        const w = back.width;
        // back.pos = vec2((i * prevWidths), 0);
        back.pos = vec2((prevWidths), 0);

        add([
            rect(w, tile.floor.height),
            pos((prevWidths), height() - 20),
            area(),
            solid(),
            outline(2, BLUE),
            opacity(0),
        ])

        prevWidths += w;

    })
}