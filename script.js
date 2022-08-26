const allBtn = document.querySelectorAll(".rating-item"),
  submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", allBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {

      const btns = e.currentTarget;
      const ratingVal = btns.innerText;
      localStorage.setItem("ratingVal", ratingVal);
      let ratingSelect = localStorage.getItem("ratingVal");
      document.querySelector(".rating-select").innerText = ratingSelect
      console.log(ratingSelect)
    });
  }))



  // allBtn.forEach(function(btn) {
  //   btn.addEventListener("click", function(e) {

  //     const btns = e.currentTarget;
  //     const ratingVal = btns.innerText;
  //     localStorage.setItem("ratingVal", ratingVal);
  //     let ratingSelect = localStorage.getItem("ratingVal");
  //     document.querySelector(".rating-select").innerText = ratingSelect
  //     console.log(ratingSelect)
  //   });
  // });

