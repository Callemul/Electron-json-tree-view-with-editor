exports.viewtree = function (DOMTreeElementId, JSONObject) {
    console.log('gg: ' + DOMTreeElementId.innerHTML)
    
    console.log(JSONObject)
    console.log('was2 JSONObject')

    const htmlGeneretedTreeHTML = logTheObj(JSONObject)
    DOMTreeElementId.innerHTML = htmlGeneretedTreeHTML;
    
   console.log(
       "document.getElementsByClassName('hiso')[0].style.display:"+
          document.getElementsByClassName('hiso')[0].style.display)

    var element= document.getElementsByClassName('hiso');
    console.log('element[0]:'+element[0])
    for(var i=0;i<element.length;i++){
        console.log('i:'+i)

        element[i].addEventListener("click", function(){
             
            console.log('i:'+i)
            console.log('element:'+element)
            console.log('element[0]:'+element[0])
            console.log('element[0].style.display:'+element[0].style.display)
            console.log('element[4].style.display:'+element[4].style.display)

            console.log('element[i]:'+element[i])
            console.log('element[i].style.display:'+element[i].style.display)

            // myInput.setAttribute('custom-attr', 'custom-value');
            // alert(myInput.getAttribute('custom-attr'));

            console.log('element[i].style.display:'+element[i].getAttribute('data-myAttri'))
            element[i].setAttribute('data-myAttri', i);

            // element[i].setAttribute('myatrr-num-of-div', i);
            element[i].dataset.myatrr = i;

            if(element[i].style.display === 'block'){
                console.log('display (before click) = block')

                element[i].style.display = 'none';
                // el.innerHTML = "[ + ]";
            }else{
                console.log('display (before click) = none /// else')

                element[i].style.display = 'block';
                // el.innerHTML = "[ -- ]";

            }

            // if(element[i].getAttribute('style') === 'block'){
            //     console.log('display (before click) = block')

            //     element[i].setAttribute("style", "display = 'none'");
            //     // element[i].style.display = 'none';
            //     // el.innerHTML = "[ + ]";
            // }else{
            //     console.log('display (before click) = none /// else')

            //     element[i].setAttribute("style", "display = 'block'");

            //     // element[i].style.display = 'block';
            //     // el.innerHTML = "[ -- ]";

            // }
        }
        , false);   
    }

  };


  function logTheObj(obj) {
    var ret = "";
    for (var o in obj) {
        var data = obj[o];
        if (typeof data !== 'object') {
            ret += "<li>" + o + " : " + data + "</li>";
        } else {
            ret += "<li>" + o + " : <div data-myAttri=\"_\" id='hide-show' class=\"hiso\" style=\"display: inline;\"> [ - ]" + logTheObj(data) + "</div></li>";
        }
    }
    return "<ul>" + ret + "</ul>";
  }


  //simple tree without collapse
  function logTheObj_v1(obj) {
    var ret = "";
    for (var o in obj) {
        var data = obj[o];
        if (typeof data !== 'object') {
            ret += "<li>" + o + " : " + data + "</li>";
        } else {
            ret += "<li>" + o + " : " + logTheObj(data) + "</li>";
        }
    }
    return "<ul>" + ret + "</ul>";
}