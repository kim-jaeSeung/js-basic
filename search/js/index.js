const fruits = [
  "사과",
  "바나나",
  "오렌지",
  "망고",
  "파인애플",
  "포도",
  "수박",
  "키위",
  "딸기",
  "블루베리",
  "체리",
  "복숭아",
  "자두",
  "레몬",
  "라임",
  "코코넛",
  "석류",
  "멜론",
  "귤",
  "자몽",
];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

renderList(fruits);

function renderList(list) {
  resultsContainer.innerHTML = "";
  if (list.length === 0) {
    resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
    return;
  }
  // list.forEach((item, index) => {
  //   const div = document.createElement("div");
  //   div.className = "item";
  //   div.textContent = item;
  //   resultsContainer.appendChild(div);
  // });

  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();
    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(keyword)
    );
    renderList(filtered);
  });
}
