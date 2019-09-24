document.addEventListener("DOMContentLoaded", function () {

    //server 

    function get(url) {
        return fetch(url).then(resp => resp.json())
    }

    function patch(url, id, bookData) {
        return fetch(`${url}${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookData)
        }).then(resp => resp.json())
    }

    API = { get, patch }


    //const
    const user = { "id": 1, "username": "pouros" }
    const booksUrl = "http://localhost:3000/books/"
    const listPanel = document.querySelector("#list-panel")
    const showPanel = document.querySelector("#show-panel")
    const bookList = document.querySelector("#list")

    //functions

    function getAndAppendBooks() {
        API.get(booksUrl).then(books => appendAllBooks(books))
    }

    function appendAllBooks(books) {
        books.forEach(book => appendABookLi(book))
    }

    function appendABookLi(book) {
        const bookLi = document.createElement('li')
        bookLi.innerText = book.title
        bookLi.addEventListener('click', () => {
            expandBook(book)
        })
        bookList.append(bookLi)
    }

    function expandBook(book) {
        while (showPanel.firstChild) showPanel.removeChild(showPanel.firstChild)
     
    
        const h2 = document.createElement('h2')
        h2.innerText = book.title

        const p = document.createElement('p')
        p.innerText = book.description

        const img = document.createElement('img')
        img.src = book.img_url
        const ul = document.createElement('ul')
        book.users.forEach(bkUser => {
            let userLi = document.createElement('li')
            userLi.innerText = bkUser.username
            userLi.id = `user-${bkUser.id}`
            ul.append(userLi)
        }
        )
        const readBtn = document.createElement('button')
        readBtn.innerText = "Read Me"
        showPanel.append(h2, img, p, ul, readBtn)
        readBtn.addEventListener('click', () => { 
            if (!hasUserReadTheBook(book)) {
                book.users.push(user)
                API.patch(booksUrl, book.id, book)
                let userLi = document.createElement('li')
                userLi.innerText = user.username
                userLi.id = `user-${user.id}`
                ul.appendChild(userLi)
                readBtn.innerText = "Unread Me"
            } else { 
                book.users = book.users.filter(bookUsrs => bookUsrs.id !== user.id)
                API.patch(booksUrl, book.id, book)

                const findUserLi = document.querySelector(`#user-${user.id}`)
                ul.removeChild(findUserLi)
                readBtn.innerText = "Read Me"
                
            }
        })
    }

    function hasUserReadTheBook(book) { 
        return book.users.find(bookUsrs => bookUsrs.id === user.id)
    }

    //client


    getAndAppendBooks()
});
