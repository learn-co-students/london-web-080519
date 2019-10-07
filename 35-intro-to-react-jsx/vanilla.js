const vanillaDomContainer = document.querySelector('#vanilla-app');

const createHeader = (elementType, props = {}) => {
    const h = document.createElement(elementType)
    h.innerText = props.innerText
    h.className = props.className
    h.style = props.style
    return h
}

const vanillaHeader = createHeader('p', {
    style: 'font-size: 10rem; color: green;',
    className: 'big-header',
    innerText: 'my vanilla app'
})

vanillaDomContainer.append(vanillaHeader)
