const keytable = document.querySelector('#insert');

window.addEventListener('keydown',(e)=>{
    keytable.innerHTML = `
    <div class="keys">
    <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Key Name</th>
  </tr>
  <tr>
    <td>${e.key == ' ' ? 'Space': e.key }</td> 
    <td>${e.keyCode} </td> 
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
    `
})
//e.key == ' ' ? 'Space': e.key it will give key that has type
// e.keyCode, it will give code of key
 // e.code it will give name of key