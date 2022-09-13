
    let modal = document.getElementById("myModal");
    // let btn = document.getElementById("myBtn");
     let btn1 = document.getElementById("myBtn1");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
     btn1.onclick = function() {
      modal.style.display = "block";
    }
    
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
   
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
   