const arts = [
  {
    id: 1,
    title: 'Dark and Light',
    price: 30,
    img: 'https://i.pinimg.com/originals/f3/34/ee/f334eeef4979c6c7c0279e16565fe06e.gif'
    
  },
  {
    id: 2,
    title: 'Dark and Light',
    price: 44,
    img: 'https://i.pinimg.com/564x/b8/56/97/b85697b1f550fd3943eadfc52a0170d6.jpg'
  },
  {
    id: 3,
    title: 'Dark and Light',
    price: 40,
    img: 'https://i.pinimg.com/originals/14/29/77/1429772573b8e2c7a0da6724e5c8190f.gif'
  },
  {
    id: 4,
    title: 'Dark and Light',
    price: 60,
    img: 'https://i.pinimg.com/564x/13/5a/18/135a1863a85e2d409ebc38d7628ce520.jpg'
    
    
  },
  {
    id: 5,
    title: 'Dark and Light',
    price: 70,
    img: 'https://i.pinimg.com/564x/7f/32/d3/7f32d3415a7f45e6cb09976b359c0fce.jpg'
  },
  {
    id: 6,
    title: 'Dark and Light',
    price: 80,
    img: 'https://i.pinimg.com/564x/89/9e/8e/899e8ed1fdf4ccac3236c5a81e13327e.jpg'
  },
  {
    id: 7,
    title: 'Dark and Light',
    price: 40,
    img: 'https://i.pinimg.com/564x/bf/95/f0/bf95f0fafe73f88805dbe757e29ef8e0.jpg'
  },
  {
    id: 8,
    title: 'Dark and Light',
    price: 50,
    img: 'https://i.pinimg.com/564x/54/e0/10/54e0101c2ab5acb30ae61cfc63a25fe5.jpg'
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
                  <button class="z-btn z-btn_main z-card__btn">
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

setTimeout(function() {
  zModal.open()
}, 2000)

