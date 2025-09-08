document.getElementById("calcBtn").addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight) {
    result.textContent = "키와 몸무게를 모두 입력해주세요.";
    return;
  } else {
    console.log(height, weight);
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    console.log(bmi);
    let status = "";
    if (bmi < 18.5) {
      staus = "저체중";
    } else if (bmi < 23) {
      status = "정상체중";
    } else if (bmi < 25) {
      status = "과체중";
    } else {
      status = "비만";
    }
    result.textContent = `BMI: ${bmi}, 상태: ${status}`;
  }
});
