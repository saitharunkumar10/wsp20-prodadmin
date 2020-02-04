function add_page(){
    add_page_secured()
}

function add_page_secured(){
    glPageContent.innerHTML = '<h1>Add Page</h1>'
    glPageContent.innerHTML =`
    <a href='/add' class="btn btn-outline-primary">Home</a>
    <a href='/show' class="btn btn-outline-primary">Show Product</a>
    <div class ="form-group">
        Name: <input class="form-group" type="text" id="name" />
    </div>
    <div class="form-group">
    Summary:<br>
    <textarea class="form-control" id="summary" cols="40" rows="5"></textarea>
    </div>
    <div class ="form-group">
        Price: <input class="form-group" type="text" id="price" />
    </div>
    <div class ="form-group">
        Image: <input type="file" id="imageButton" value="upload" />
    </div>
    <button class="btn btn-primary" type="button" onclick="addProduct()">ADD</button>
    `;

    const imageButton = document.getElementById('imagebutton')
    imageButton.addEventListener('change', e =>{
        console.log('file upload', e.target.files[0])
    })
}