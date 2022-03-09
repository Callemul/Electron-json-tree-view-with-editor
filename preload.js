// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})




const { ipcRenderer } = require('electron')

/**
 * Це було в renderer.js а тут - додається прослуховування чи загрузилась сторінка повністю,
 * і той самий код, але вже є можливість nodejs використовувати (require)
 */
document.addEventListener('DOMContentLoaded', function(){



    const btn = document.getElementById('myButton')
    const filePathElement = document.getElementById('filePath')
    const textareaElement = document.getElementById('textarea1')
    const file_input = document.getElementById('file-input2')
    const tviewDiv = document.getElementById('tree')

    btn.addEventListener("click", () => {
        
      file_input.click();

    });


    file_input.addEventListener('change', () => {

      let files = Array.from(file_input.files);
      console.log(files[0])
      const pathToFile = files[0].path

      //? global electron variable? local? for path? between Main and Renderer?

      //https://codex.so/electron-ipc see more : sync return VS async return value !!
      const fileText = ipcRenderer.sendSync("openFileDialogAndReadFile", pathToFile)
      console.log('d: '+ fileText)


      //tree block
      const tviewlib = require('./tree-view-ivanov/js/tree-view')

      tviewlib.viewtree(tviewDiv, fileText)
      

      console.log('ipcRenderer.send("openFileDialogAndReadFile", true)')

    })


    ipcRenderer.on('json_from_file-reply', (event, json_obj_from_file) => {
        console.log("ipcRenderer.on('json_from_file', ");
        console.log(json_obj_from_file);
        console.log("was ipcRenderer.on('json_from_file', ");

        //view json object getted from an opening file
        filePathElement.innerText = json_obj_from_file;
    });




    
})