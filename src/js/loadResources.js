export const loadResources = () => {
    loadSprite("starsbg", "../assets/sprites/parallax-space-stars.png");
    loadSprite("labbg", "../assets/sprites/back.png");
    loadSprite("pillarTile", "../assets/sprites/pillar.png");
    loadSprite("plainTile", "../assets/sprites/plain.png");
    loadSprite("lockedTile", "../assets/sprites/pass.png");
    loadSprite("holeTile", "../assets/sprites/hole.png");
    loadSprite("shutterTile", "../assets/sprites/shutter.png");
    loadSprite("exitTile", "../assets/sprites/exit.png");
    loadSprite("block", "../assets/sprites/floor.png");
    loadSprite("stingerStone", "../assets/sprites/stingerStone.png");
    loadSprite("servers", "../assets/sprites/server-gabinetes.png");
    loadSprite("terminal", "../assets/sprites/small-terminal.png");
    loadSprite("orb", "../assets/sprites/orbby.png");
    loadSprite("clouds", "../assets/sprites/clouds.png");
    loadSprite("grid", "../assets/sprites/grid.png");
    loadSound("bipedalMech", "../assets/sounds/bipedalMech.wav");
    loadSound("pickedOrb", "../assets/sounds/pickedOrb.wav");
    loadSound("dies", "../assets/sounds/dies.wav");
    loadSound("menuMusic", "../assets/sounds/interstellarOdyssey.ogg");
    loadFont("spacy", "../assets/sprites/spacy.png", 32, 32);

    loadSprite("planet", "../assets/sprites/planets.png", {
        sliceX: 50,
    });

    loadSprite("impact", "../assets/sprites/wall-impact-blast.png", {
        sliceX: 2,
        anims: {
            hit: {
                from: 0,
                to: 1,
                loop: true,
            },
        },
    });

    loadSprite("crawly", "../assets/sprites/alien-enemy-walk.png", {
        sliceX: 6,
        anims: {
            idle: {
                from: 0,
                to: 0,
                loop: true,
            },
            crawl: {
                from: 0,
                to: 5,
                speed: 10,
                loop: true,
            },
        },
    });
    loadSprite("stinger", "../assets/sprites/flyer.png", {
        sliceX: 8,
        anims: {
            fly: {
                from: 0,
                to: 7,
                speed: 15,
                loop: true,
            },
        },
    });
    loadSprite("ranger", "../assets/sprites/ranger64.png", {
        sliceX: 27,
        anims: {
            idle: {
                from: 0,
                to: 4,
                speed: 5,
                loop: true,
            },
            run: {
                from: 5,
                to: 14,
                speed: 15,
                loop: true,
            },
            jump: {
                from: 15,
                to: 20,
                speed: 11,
            },
            die: {
                from: 21,
                to: 24,
                speed: 8,
            },
            shoot: {
                from: 25,
                to: 26,
                speed: 5,
            },
        },
    });
};