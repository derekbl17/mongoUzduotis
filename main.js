document.getElementById("authorForm").addEventListener("submit",function (e){
    e.preventDefault()
    const firstname=document.getElementById("firstname").value
    const lastname=document.getElementById("lastname").value

    console.log("firstname: ",firstname)
    console.log("lastname: ",lastname)

    fetch("http://localhost:777/api/authors",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            firstname,lastname
        })
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Author created!")
        alert("Author Created!")
    })
    .catch(err=>{
        console.error("Error creating author: ",err)
        alert("Error creating author")
    })
})

document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value
    const authorId = document.getElementById("authorid").value;

    fetch("http://localhost:777/api/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            year,
            authorId
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Book Created:", data);
        alert("Book Created!");
    })
    .catch(error => {
        console.error("Error creating book:", error);
        alert("Error creating book.");
    });
});

const showAuthButton = document.getElementById("showAuth");
const showBookButton = document.getElementById("showBook");

const authorsList = document.getElementById("authorsList");
const booksList = document.getElementById("booksList");

showAuthButton.addEventListener("click", () => {
    fetch("http://localhost:777/api/authors")
        .then(response => response.json())
        .then(data => {
            authorsList.innerHTML = '';
            
            if (data.length === 0) {
                authorsList.innerHTML = "<p>No authors found</p>";
            } else {
                data.forEach(author => {
                    const authorDiv = document.createElement("div");
                    authorDiv.innerHTML = `<p>${author.firstname} ${author.lastname}</p>`;
                    authorsList.appendChild(authorDiv);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching authors:", error);
            authorsList.innerHTML = "<p>Error fetching authors</p>";
        });
});

showBookButton.addEventListener("click", () => {
    fetch("http://localhost:777/api/books")
        .then(response => response.json())
        .then(data => {

            booksList.innerHTML = '';
            
            if (data.length === 0) {
                booksList.innerHTML = "<p>No books found</p>";
            } else {
                data.forEach(book => {
                    const bookDiv = document.createElement("div");
                    const author = book.author ? `${book.author.firstname} ${book.author.lastname}` : "Unknown Author";
                    bookDiv.innerHTML = `
                        <p>Title: ${book.title}</p>
                        <p>Year: ${book.year}</p>
                        <p>Author: ${author}</p>
                    `;
                    booksList.appendChild(bookDiv);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching books:", error);
            booksList.innerHTML = "<p>Error fetching books</p>";
        });
});