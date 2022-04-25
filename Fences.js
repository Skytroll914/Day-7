var num = 9;
for (j=0; j<num; j++){
  for (i=0; i<num; i++){
    var k = i % 2;
    var f = j % 2;
    if((k == 0 && f == 1) || (k == 1 && f == 0)){
      document.write("#");      
    }  
    else{
      document.write("0");      
    } 
  }

  document.write("<br/>")
}
