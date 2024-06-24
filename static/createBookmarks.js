document.querySelector('#bookmarks').innerHTML = `
    <a id="p0" href="/" class="list-group-item list-group-item-action active">Strona główna</a>
    `
    for(i=1; i<=12; i++){
        document.querySelector('#bookmarks').innerHTML += `
        <a id="p${i}" href="/k${i}" class="list-group-item list-group-item-action active">Księga ${i}</a>
        `
}
