export function patrol(distance = 100, speed = 50, dir = 1) {
    return {
        id: "patrol",
        require: ["pos", "area",],
        // startingPos: vec2(0, 0),
        tranger: get("tranger")[0],
        add() {
            this.startingPos = this.pos;
            this.on("collide", (obj, side) => {
                if (side === "left" || side === "right") {
                    dir = -dir;
                }
            });
        },
        update() {
            if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
                dir = -dir;
            }
            this.move(speed * dir, 0);
        },
    };
}

export function chase(target) {

    return {
        id: "chase",
        require: ["pos"],
        add() {
            this.scanRadius = 200;
        },
        update() {
            if (target.isDead) {
                this.enterState("idle");
            }

            if (Math.abs(target.pos.dist(this.pos)) <= this.scanRadius) {
                if (target.isDead) return;
                if (this.state !== "chase") this.enterState("chase");

                this.moveTo(vec2(target.pos.x + 40, height() - 40), 80);
                if (this.pos.x < target.pos.x + 40) this.flipX(true);
                else this.flipX(false);
            }
            else {
                if (this.state !== "idle") this.enterState("idle");
            }
        }
    }
}