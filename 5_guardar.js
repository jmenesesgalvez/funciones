let color = 'write';

function changeColor(tecla) {
  switch (tecla) {
    case 'a':
      color = "pink";
      break;

    case 's':
      color = "orange";
      break;

    case 'd':
      color = "skyblue";
      break;

    case 'q':
      color = "purple";
      break;

    case 'w':
      color = "grey";
      break;

    case 'e':
      color = "brown";
      break;

  }
document.getElementById('guardar').style.backgroundColor = color; 
}


document.addEventListener("keydown", function (event) {
  changeColor(event.key.toLowerCase());
});
