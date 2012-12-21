Apricot = require('../lib/apricot').Apricot;
Array.prototype.unique = function () {
 var r = new Array();
 o:for(var i = 0, n = this.length; i < n; i++) {
   for(var x = 0, y = r.length; x < y; x++) {
     if(r[x]==this[i]) {
       continue o;
     }
   }
   r[r.length] = this[i];
 }
 return r;
}

// Use Case one
console.log("UC 1");

var links = [];
var stack = [];

// Another Example of looping
stack = [
"press.php",
"index.php",
"dd.php",
"ipad.php",
"free.php",
"paid.php",
"fame.php",
"wish.php",
"partners.php",
"contact.php",
]
for (var i =0;i < stack.length; i++ ) {
  console.log(stack[i]);
  Apricot.open('http://freeappaday.com/'+stack[i], function(err, doc){
    //console.log("Looping 2");
    doc.find('a');

    var root_url = 'http://freeappaday.com/';

    doc.each(function(el){
      if (el.href.indexOf("app.php") !== -1)
      {
        var l = el.href.substring(47,el.href.length)
        console.log(html_builder(root_url+l));
        //links.push(el.href);
        links.push(html_builder(root_url+l));
      }
      //else{
        //console.log(el.href.substring(47,el.href.length));
        //stack.push(el.href);
      //}
    });
    //console.log(links.length);
  });
  //for (var i= 0;i<links.length-1; i++){
    //console.log(links[i]);
  //}
  //console.log((links.unique()).join('\n\r'));

}

//for (var i= 0;i<stack.length-1; i++){
//  Apricot.open(stack[i], function(err, doc){
//    doc.find('a');
//    doc.each(function(el){
//      if (el.href.indexOf("app.php") !== -1)
//      {
//        //var l = el.href.substring(47,el.href.length)
//        //console.log(html_builder(root_url+l));
//        links.push(el.href);
//      }
//    });
//  });
//}
//
//for (var i= 0;i<links.length-1; i++){
//  var l = stack[i].substring(47,el.href.length)
//  console.log(html_builder(root_url+l));
//}
function html_builder(url) {
  return "<a href="+url+">"+url+"</a><br>";
}



