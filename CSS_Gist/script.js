function selectElem(elem) {
    var d = document.getElementById('gists');
    var cs = d.children;
    for (var i = 0; i < cs.length; i++) {
        var element = cs[i];
        if (elem == element.id) {
            element.removeAttribute('hidden');
        } else
            element.setAttribute('hidden', 'true');
    }
    var heading = document.getElementById('heading');
    heading.innerHTML = elem.toUpperCase();
}