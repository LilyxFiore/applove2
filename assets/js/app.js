var nameProjects = ["", "TAYMAN GROUP", "NALIA ORGANICS", "BRASS COQ","SUNGENRE","LIVING BOTANICS",
"FOAM KING","VOLITION","INK","GILKON","OUTS APPLES","SHERWOOD","PLATINUM"];

var modal = document.getElementById('modal');
var modalImage = document.getElementById("modalImage");
var modalClose = document.getElementById("modalClose");
var grid = document.getElementById("grid");

//** Add images
for(i = 1; i < nameProjects.length; i++){
  addImages("assets/img/img-"+i+".jpg", nameProjects[i]);
}

function addImages(src, nameProjects){
  var figure = document.createElement("figure");
  figure.setAttribute("class","grid-figure");
  var img = document.createElement("img");
  img.src = src;
  var figcaption = document.createElement("figcaption");
  figcaption.appendChild(document.createTextNode(nameProjects));
  figure.appendChild(img);
  figure.appendChild(figcaption);
  grid.appendChild(figure);
  /** Call Modal **/
  img.addEventListener("click", function(){
      callModal(this.src);
  })
}

function callModal(src){
  modal.style.display = "block";
  modalImage.src = src;
  /**Close Modal **/
  modalClose.addEventListener("click",function(){
    modal.style.display = "none";
  })
}
