console.log("연결");

const input = document.getElementById("display");
let current = "";

document.querySelectorAll(".num").forEach((btn) => {
  btn.addEventListener("click", () => {
    current += btn.textContent;
    input.value = current;
    console.log("버튼 클릭" + current);
  });
});

document.querySelectorAll(".op").forEach((btn) => {
  btn.addEventListener("click", () => {
    current += btn.textContent;
    display.value = current;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    display.value = eval(current);
    current = display.value;
  } catch {
    display.value = "계산 실패";
    current = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  current = "";
  display.value = current;
});
