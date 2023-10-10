let clickBtn = document.getElementById("click-btn");
function dated() {
  let ma = new Date();

  clickBtn.textContent = ma;
}
console.log(ma);
// clickBtn.textContent = ma
dated();
