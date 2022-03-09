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

        //set attribute value
        element[i].dataset.myattri = i

        //onclick event
        element[i].addEventListener("click", function(){
             
            console.log('--------------------------')
            console.log('data-atrrib dataset.myattri:'+this.dataset.myattri)

            console.log('this:')
            console.log(this)
            console.log('this.innerHTML:'+this.innerHTML)
           

            if(this.style.display === 'none'){
                console.log('display (before click) = none /// else')

                this.style.display = 'block';
                // el.innerHTML = "[ -- ]";
            }else{
                //element[i].style.display === 'block' or 'inline' etc
                console.log('display (before click) = block')

                this.style.display = 'none';
                // el.innerHTML = "[ + ]";
            }

            console.log('------END Click EVENT -------')
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