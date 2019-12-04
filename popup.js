window.onload = function() {

        var containers = document.getElementsByClassName("planetContainer");
        Array.from(containers).forEach(function(container){
          var img = container.getElementsByTagName("img")[0];
          var desc = container.getElementsByTagName("div")[0];

          img.onclick = function() {
            if (desc.style.display != "block") {
              desc.style.display = "block";
            }
            else {
              desc.style.display = "none";
            }
          }
        });
        //    var displayed = false;
        //    if (!displayed) {
        //   desc.style.display = "block";
        //   displayed = true;
        // }
        // else {
        //   desc.style.display = "none";
        //   displayed = false;
        // }
        // }






}
