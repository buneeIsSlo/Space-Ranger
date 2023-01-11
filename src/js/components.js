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
        require: ["pos", "area", "solid", "body"],
        add() {
            this.scanRadius = 150
        },
        update() {
            if (Math.abs(target.pos.dist(this.pos)) <= this.scanRadius) {
                // console.log(Math.abs(target.pos.dist(this.pos)));
                // follow target
                // console.log("in the vicinity");
                // let dir = target.pos.sub(thi.pos).unit();
                this.moveTo(vec2(target.pos.x + 40, height() - 40), 80);
                console.log(this.pos);
                // console.log(vec2(target.pos.x, height() - 40))
                // this.moveTo(target.pos, 80);
                if (this.pos.x < target.pos.x) {
                    console.log("after")
                }
            }
        }
    }
}