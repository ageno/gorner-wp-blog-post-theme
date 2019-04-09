//Przenoszenie pojedyńczych liter do następnego wiersza

// var tekst = document.getElementById("contents").innerHTML;
// tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
//tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
//tekst = tekst.replace(/(\s)([^<][\S]{2})[\s]+/g,"$1$2&nbsp;"); //trzyznakowe
// document.getElementById("contents").innerHTML = tekst;

var tags = ['p', 'h3', 'a'];

for (var tag of tags) {


  var list = document.getElementsByTagName(tag);
  for (var item of list) {
    var temp = item.innerHTML;
    temp = temp.replace(/(\s)([\S]{1,3})[\s]+/g,"$1$2&nbsp;");
    item.innerHTML = temp;

  }

}