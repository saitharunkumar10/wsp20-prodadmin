function show_page() {
    glPageContent.innerHTML = '<h1>SHOW Page</h1>'
    glPageContent.innerHTML = `
    <div id="wrapper">
 <input type="file" accept="image/*" onchange="preview_image(event)">
 <img id="output_image"/>
</div>
    `;
}

function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}