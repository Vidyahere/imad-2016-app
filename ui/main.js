var button= document.getElementById('counter');
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
     {
        if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200) {
                  var counter = request.responseText;
                  var svan = document.getElementById('count');
                   svan.innerHTML= counter.toString();
             }
        
          }
     }
     request.open("GET",'http://vidyahere.imad.hasura-app.io/',true);
     request.send(null);
};
    
    
    
    
    
