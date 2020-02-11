
function home_page(){
    home_page_secured()
}

function home_page_secured(){
    glPageContent.innerHTML ='<h1>Home Page</h1>'
    glPageContent.innerHTML +=`
    <a href='/add' class="btn btn-outline-primary">Add A Product</a>
    <a href='/show' class="btn btn-outline-primary">Show Product</a>
    <button class ="btn btn-outline-danger" type="button" onclick="logOut()">Log Out</button>  
    `;
}

async function logOut(){
    try {
        await firebase.auth().signOut()
         window.location.href = '/login'
    } catch (e) {
        window.location.href = '/login'
    }
}

