setup();
randomStars();
drawStars();

var play = setInterval(step, velocity);

function playStop() {
    isPaused = !isPaused;
    return isPaused;
}

function changeVelocity(isPaused, velocity, vel, play) {
    isPaused = !isPaused;
    clearInterval(play);
    velocity = vel;
    play = null;
    play = setInterval(step, velocity);
    isPaused = !isPaused;
    return velocity, play;
}

function changeSize(isPaused, size, scale, play) {
    isPaused = !isPaused;
    clearInterval(play);
    scale = size;
    play = setInterval(step, velocity);
    isPaused = !isPaused;
    return scale, play;
}

function setup() {
    canvas.width = sizeWidth;
    canvas.height = sizeHeight;
    context.fillStyle = "black";
    stars = createStars();
}

function createStars() {
    let arr = new Array(resolution);
    for (let x = 0; x < resolution; x++) {
        let cols = new Array(resolution);
        for (let y = 0; y < resolution; y++) {
            cols[y] = false;
        }
        arr[x] = cols;
    }
    return arr;
}

function randomStars() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (Math.random() < 0.5) stars[x][y] = true;
        }
    }
}

function drawStars() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (stars[x][y]) {
                if (x != resolution - 1) {
                    if (stars[x + 1][y]) {
                        context.beginPath();
                        context.moveTo((starRadius + x * spaceBetween) * scale, (starRadius * 2 + y * spaceBetween) * scale);
                        context.lineTo((starRadius * 2 + (x + 1) * spaceBetween) * scale, (starRadius * 2 + y * spaceBetween) * scale);
                        context.strokeStyle = "rgba(162, 196, 247, 0.5)";
                        context.stroke();
                    }
                }
                if (y != resolution - 1) {
                    if (stars[x][y + 1]) {
                        context.beginPath();
                        context.moveTo((starRadius * scale + x * spaceBetween) * scale, (starRadius * scale + y * spaceBetween) * scale);
                        context.lineTo((starRadius * scale + x * spaceBetween) * scale, (starRadius * scale + (y + 1) * spaceBetween) * scale);
                        context.strokeStyle = "rgba(162, 196, 247, 0.5)";
                        context.stroke();
                    }
                }
                if (y != resolution - 1 && x != resolution - 1) {
                    if (stars[x + 1][y + 1]) {
                        context.beginPath();
                        context.moveTo((starRadius * scale + x * spaceBetween) * scale, (starRadius * scale + y * spaceBetween) * scale);
                        context.lineTo((starRadius * scale + (x + 1) * spaceBetween) * scale, (starRadius * scale + (y + 1) * spaceBetween) * scale);
                        context.strokeStyle = "rgba(162, 196, 247, 0.5)";
                        context.stroke();
                    }
                }
                if (y != resolution - 1 && x != 0) {
                    if (stars[x - 1][y + 1]) {
                        context.beginPath();
                        context.moveTo((starRadius * scale + x * spaceBetween) * scale, (starRadius * scale + y * spaceBetween) * scale);
                        context.lineTo((starRadius * scale + (x - 1) * spaceBetween) * scale, (starRadius * scale + (y + 1) * spaceBetween) * scale);
                        context.strokeStyle = "rgba(162, 196, 247, 0.5)";
                        context.stroke();
                    }
                }
                context.beginPath();
                context.arc((starRadius * scale + x * spaceBetween) * scale, (starRadius * scale + y * spaceBetween) * scale, starRadius * scale, 0, Math.PI * 2, false);
                context.fillStyle = "rgb(74, 143, 246)";
                context.fill();
            }
        }
    }
}

function step() {
    if (!isPaused) {
        let newStars = createStars();
        for (let y = 0; y < resolution; y++) {
            for (let x = 0; x < resolution; x++) {
                const neighbours = getNeighbourCount(x, y);
                if (stars[x][y] && neighbours >= 2 && neighbours <= 3) newStars[x][y] = true;
                else if (!stars[x][y] && neighbours === 3) newStars[x][y] = true;
            }
        }
        stars = newStars;
        drawStars();
    }
}

function getNeighbourCount(x, y) {
    let count = 0;
    for (let yy = -1; yy < 2; yy++) {
        for (let xx = -1; xx < 2; xx++) {
            if (xx === 0 && yy === 0) continue;
            if (x + xx < 0 || x + xx > resolution - 1) continue;
            if (y + yy < 0 || y + yy > resolution - 1) continue;
            if (stars[x + xx][y + yy]) count++;
        }
    }
    return count;
}