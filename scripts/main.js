const thumbnails = [...document.querySelectorAll('.thumbnail')]

const routeTo = (event) => {
  window.location.href = event.currentTarget.attributes['data-route'].value
}

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (e) => { console.log(this); routeTo(e) }, true)
})
