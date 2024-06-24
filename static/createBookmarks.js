function createBookmarks(bookNumber) {
    document.querySelector('#bookmarks').innerHTML = `
        <a id="p0" href="/" class="list-group-item list-group-item-action">Strona główna</a>
        `
        for(i=1; i<=12; i++){
            document.querySelector('#bookmarks').innerHTML += `
            <a id="p${i}" href="/k${i}" class="list-group-item list-group-item-action">Księga ${i}</a>
            `
    }
    console.log()
    document.getElementById(`p${bookNumber}`).classList.add("active");
}
