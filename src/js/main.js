const arts = [
  {
    id: 1,
    title: 'Dark and Light',
    price: 30,
    img: 'img/arts/01.gif'
  },
  {
    id: 2,
    title: 'Dark and Light',
    price: 44,
    img: 'img/arts/02.jpg'
  },
  {
    id: 3,
    title: 'Dark and Light',
    price: 40,
    img: 'img/arts/03.gif'
  },
  {
    id: 4,
    title: 'Dark and Light',
    price: 60,
    img: 'img/arts/04.jpg'
    
    
  },
  {
    id: 5,
    title: 'Dark and Light',
    price: 70,
    img: 'img/arts/05.jpg'
  },
  {
    id: 6,
    title: 'Dark and Light',
    price: 80,
    img: 'img/arts/06.jpg'
  },
  {
    id: 7,
    title: 'Dark and Light',
    price: 40,
    img: 'img/arts/07.jpg'
  },
  {
    id: 8,
    title: 'Dark and Light',
    price: 50,
    img: 'img/arts/08.jpg'
  }
]

const toHTML = arts => `
  <div class="z-row__col">
      <div class="z-card">
          <div class="z-card__thumb">
              <picture class="z-card__picture" style="--aspect-ratio: 350/550">
                  <img  class="z-card__img"
                        width="563" height="705"
                        alt="${arts.title}"
                        src="${arts.img}">
              </picture>
          </div>
          <div class="z-card__body">
              <div class="z-card__name">${arts.title}</div>
              <div class="z-card__btns">
                  <button class="z-btn z-btn_main z-card__btn"
                          data-zmodal-show="price" data-zcard-id="${arts.id}">
                      <span class="z-btn__txt">Посмотреть цену</span>
                  </button>
                  <button class="z-btn z-btn_secondary z-card__btn">
                      <span class="z-btn__txt">Удалить</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
`
function render() {
  const html = arts.map(toHTML).join('')
  document.querySelector('#arts').innerHTML = html
}
render()

const zModal = zmodal({
  closeBtnShow: true,
  closeBtnInside: true,
  heading: 'Modal Window',
  content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit amet.</p>
  `,
  width: '500px',
  footerButtons: [
    {
      text: 'Ok', classes: 'z-btn z-btn_main', handler() {
        console.log('Ok btn clicked');
      }
    },
    {
      text: 'Cancel', classes: 'z-btn z-btn_main', handler() {
        console.log('Cancel btn clicked');
        zModal.close();
      }
    }
  ]
})

const zModalPrice = zmodal({
  closeBtnShow: true,
  closeBtnInside: true,
  heading: 'Цена за товар',
  footerButtons: [
    {
      text: 'Закрыть', classes: 'z-btn z-btn_main', handler() {
        zModalPrice.close();
      }
    }
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const zmodalType = event.target.dataset.zmodalShow
  const id = +event.target.dataset.zcardId
  
  
  if (zmodalType === 'price') {
    const art = arts.find(a => a.id === id)
    zModalPrice.setContent(`
      <img src="${art.img}" alt="${art.title}">
      <p>Цена на ${art.title}: <b>${art.price}</b></p>
    `)
    zModalPrice.open()
  }
})

