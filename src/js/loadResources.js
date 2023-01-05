export const loadResources = () => {
    loadSprite("background", "../assets/sprites/parallax-space-stars.png");
    loadSprite("fullbg", "../assets/sprites/parallax-space-backgound.png");
    loadSprite("cori", "../assets/sprites/pillar.png");
    loadSprite("plain", "../assets/sprites/plain.png");
    loadSprite("pass", "../assets/sprites/pass.png");
    loadSprite("hole", "../assets/sprites/hole.png");
    loadSprite("shutter", "../assets/sprites/shutter.png");
    loadSprite("exit", "../assets/sprites/exit.png");

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