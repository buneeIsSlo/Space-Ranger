export const loadResources = () => {
    loadSprite("starsbg", "/sprites/parallax-space-stars.png");
    loadSprite("labbg", "/sprites/back.png");
    loadSprite("pillarTile", "/sprites/pillar.png");
    loadSprite("plainTile", "/sprites/plain.png");
    loadSprite("lockedTile", "/sprites/pass.png");
    loadSprite("holeTile", "/sprites/hole.png");
    loadSprite("shutterTile", "/sprites/shutter.png");
    loadSprite("exitTile", "/sprites/exit.png");
    loadSprite("block", "/sprites/floor.png");
    loadSprite("stingerStone", "/sprites/stingerStone.png");
    loadSprite("servers", "/sprites/server-gabinetes.png");
    loadSprite("terminal", "/sprites/small-terminal.png");
    loadSprite("orb", "/sprites/orbby.png");
    loadSprite("clouds", "/sprites/clouds.png");
    loadSprite("grid", "/sprites/grid.png");
    loadSound("bipedalMech", "/sounds/bipedalMech.wav");
    loadSound("pickedOrb", "/sounds/pickedOrb.wav");
    loadSound("dies", "/sounds/dies.wav");
    loadSound("menuMusic", "/sounds/interstellarOdyssey.ogg");
    loadFont("spacy", "/sprites/spacy.png", 32, 32);

    loadSprite("planet", "/sprites/planets.png", {
        sliceX: 50,
    });

    loadSprite("impact", "/sprites/wall-impact-blast.png", {
        sliceX: 2,
        anims: {
            hit: {
                from: 0,
                to: 1,
                loop: true,
            },
        },
    });

    loadSprite("crawly", "/sprites/alien-enemy-walk.png", {
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
    loadSprite("stinger", "/sprites/flyer.png", {
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
    loadSprite("ranger", "/sprites/ranger64.png", {
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