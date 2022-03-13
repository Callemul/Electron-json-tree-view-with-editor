exports.viewtree = function (DOMTreeElementId, JSONObject) {
    
    
    console.log('gg: ' + DOMTreeElementId.innerHTML)
    
    console.log(JSONObject)
    console.log('was2 JSONObject')

    const htmlGeneretedTreeHTML = logTheObj(JSONObject)
    DOMTreeElementId.innerHTML = htmlGeneretedTreeHTML;
    

    var menuParents = document.querySelectorAll("#tree .parent");
    menuParents.forEach(menuParent => {
        menuParent.addEventListener("click", ToggleTree);
    })



  };


  function logTheObj(obj) {
    var ret = "";
    for (var o in obj) {
        var data = obj[o];
        if (typeof data !== 'object') {
            ret += "<li>" + o + " : " + data + "</li>";
        } else {
            ret += "<li class=\"parent\">" + o + " : <div data-myAttri=\"_\" id='hide-show' class=\"hiso\" style=\"display: inline;\"> [ - ]" + logTheObj(data) + "</div></li>";
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


function ToggleTree(event) {
    event.stopPropagation();
    event.target.classList.toggle('active');
    event.target.firstElementChild.style.display = toggle[event.target.firstElementChild.style.display] || 'block';
}

const toggle = {
    block: 'none',
    none: 'block'
}