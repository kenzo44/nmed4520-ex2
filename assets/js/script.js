var colors = ['#89BFDB','#4FBBC7','#10A682', '#77B82A', "#BCCD05", "#EFB122", "#EF8219", "#EB504E", "#C54E62", "#9B619C", "#5A7CB6", "#069BD5"]
var month = document.querySelectorAll(".month");

for (i = 0; i < month.length; i++) {
  // Pick a random color from the array 'colors'.
  month[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
