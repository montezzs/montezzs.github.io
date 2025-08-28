const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

const pre = document.getElementById("donut");
let A = 0, B = 0;

function render() {
    const b = [];
    const z = [];
    const width = 80, height = 22;

    for (let k = 0; k < width * height; k++) {
        b[k] = k % width === width - 1 ? "\n" : " ";
        z[k] = 0;
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            const c = Math.sin(i);
            const d = Math.cos(j);
            const e = Math.sin(A);
            const f = Math.sin(j);
            const g = Math.cos(A);
            const h = d + 2;
            const D = 1 / (c * h * e + f * g + 5);
            const l = Math.cos(i);
            const m = Math.cos(B);
            const n = Math.sin(B);
            const t = c * h * g - f * e;
            const x = 0 | (40 + 30 * D * (l * h * m - t * n));
            const y = 0 | (12 + 15 * D * (l * h * n + t * m));
            const o = x + width * y;
            const N = 0 | (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
            if (height > y && y > 0 && x > 0 && width > x && D > z[o]) {
                z[o] = D;
                b[o] = ".,-~:;=!*#$@"[Math.max(N, 0)];
            }
        }
    }

    pre.innerHTML = b.join("");
    A += 0.04;
    B += 0.02;
}

setInterval(render, 50);

// reformula do https://www.a1k0n.net/2011/07/20/donut-math.html?utm_source=chatgpt.com um pouco simplificada para javascript, codigo não autoral, porem com alterações minhas

  const limao = document.getElementById("limao");
  let rotation = 0;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    rotation += scrollY * 0.02;
  });

  function loop(){
    rotation += 0.2;
    limao.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(loop);
  }
  loop();
