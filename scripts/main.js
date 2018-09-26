const thumbnails = [...document.querySelectorAll('.thumbnail')]

const routeTo = (event) => {
  window.location.href = event.currentTarget.attributes['data-route'].value
}

thumbnails.forEach(thumbnail => {
  if (thumbnail.id !== 'qs-api' || thumbnail.id !== 'rails-engine') {
    thumbnail.addEventListener('click', (e) => { console.log(this); routeTo(e) }, true)
  }
})

const qsApiThumbnail = document.querySelector('#qs-api')
qsApiThumbnail.addEventListener('click', () => { window.location = 'https://github.com/jude-lawson/quantified-self-phoenix' })

const railsEngineThumbnail = document.querySelector('#rails-engine')
railsEngineThumbnail.addEventListener('click', () => { window.location = 'https://github.com/jude-lawson/rales_engine' })
