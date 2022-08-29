window.addEventListener('DOMContentLoaded', (event) => {

const allBtn = document.querySelectorAll(".rating-item");

  allBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const btns = e.currentTarget;
      const ratingVal = btns.innerText;
      localStorage.setItem("ratingVal", ratingVal);
      let ratingSelect = localStorage.getItem("ratingVal");
      console.log(ratingSelect)
    });
  })
});


// Function for edge cases



