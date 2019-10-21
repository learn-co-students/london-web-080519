;[...items]
  .map(el => {
    return `<div class="card"><h2>${
      el.querySelector('.kltat > span').innerText
    }</h2><img src="${el.querySelector('.rISBZc.M4dUYb').src}" /><p>${
      el.querySelector('.ellip.klmeta').innerText
    }</p></div>`
  })
  .join('')
