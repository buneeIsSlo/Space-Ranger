export const loadResources = () => {
    loadSprite("background", "../assets/sprites/back.png");
    loadSprite("foreground", "../assets/sprites/foreground.png");

    loadSprite("ranger", "../assets/sprites/space-ranger-idle.png", {
        sliceX: 4,
        sliceY: 0,
        anims: {
            idle: {
                from: 0,
                to: 3,
                speed: 5,
                loop: true,
            },
        },
    })
}