const thumbnails = [...document.querySelectorAll('.thumbnail')]

const routeTo = (event) => {
  window.location.href = event.target.attributes['data-route'].value
}

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (e) => { routeTo(e) }, true)
})
