function component() {
    const element = document.createElement('div');

    element.innerHTML = " type script _.join(['Hello', 'webpack'], ' ');"

    return element;
}

document.body.appendChild(component());