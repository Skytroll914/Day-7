var number = 6;
for (var j = 0; j < number; j++) {
  for (var i = 0; i < j + 1; i++) {
    document.write("#");
  }
  document.write("<br/>");
}

for (var k = number - 1; k > 0; k--) {
  for (var l = 0; l < k; l++) {
    document.write("#");
  }
  document.write("<br/>");
}
