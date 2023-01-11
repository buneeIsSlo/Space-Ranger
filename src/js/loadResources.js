export const loadResources = () => {
    loadSprite("background", "../assets/sprites/parallax-space-stars.png");
    loadSprite("fullbg", "../assets/sprites/parallax-space-backgound.png");
    loadSprite("pillarTile", "../assets/sprites/pillar.png");
    loadSprite("plainTile", "../assets/sprites/plain.png");
    loadSprite("lockedTile", "../assets/sprites/pass.png");
    loadSprite("holeTile", "../assets/sprites/hole.png");
    loadSprite("shutterTile", "../assets/sprites/shutter.png");
    loadSprite("exitTile", "../assets/sprites/exit.png");
    loadSprite("block", "../assets/sprites/floor.png");

    loadSprite("crawly", "../assets/sprites/alien-enemy-walk.png", {
        sliceX: 6,
        anims: {
            crawl: {
                from: 0,
                to: 5,
                speed: 10,
                loop: true,
            }
        }
    })
    loadSprite("flyer", "../assets/sprites/flyer.png", {
        sliceX: 8,
    })
    loadSprite("tranger", "../assets/sprites/ranger64.png", {
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
                speed: 5
            }
        },
    });

    loadSprite("floor", "../assets/sprites/floor.png");
}