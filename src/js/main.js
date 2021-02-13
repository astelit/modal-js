let arts = [
  {
    id: 1,
    title: 'Art',
    price: 30,
    img: 'img/arts/01.gif'
  },
  {
    id: 2,
    title: 'Art',
    price: 44,
    img: 'img/arts/02.jpg'
  },
  {
    id: 3,
    title: 'Love',
    price: 40,
    img: 'img/arts/03.jpg',
  },
  {
    id: 4,
    title: `Art`,
    price: 60,
    img: 'img/arts/04.jpg'
  },
  {
    id: 5,
    title: 'Art',
    price: 70,
    img: 'img/arts/05.jpg'
  },
  {
    id: 6,
    title: 'Art',
    price: 80,
    img: 'img/arts/06.jpg'
  },
  {
    id: 7,
    title: 'Art',
    price: 40,
    img: 'img/arts/07.gif'
  },
  {
    id: 8,
    title: 'Art',
    price: 50,
    img: 'img/arts/08.jpg'
  }
]

const toHTML = arts => {
  // let styles
  // if (arts.style) {
  //   styles = arts.style.span ? `grid-column: span ${arts.style.span};`: ''
  //   styles += arts.style.row ? `grid-row: span ${arts.style.row};`: ''
  //   styles += arts.style.order ? `order: ${arts.style.order};` : ''
  //   styles += arts.style.inline ? `${arts.style.inline}` : ''
  // }
  // return ` <div class="z-card" ${arts.style ? `style="${styles}"`: ''}>
  
  return ` <div class="z-card">
        <div class="z-card__thumb">
            <picture class="z-card__picture" style="--aspect-ratio: 350/550">
                <img  src="${arts.img}"
                      class="z-card__img"
                      width="563" height="705"
                      alt="${arts.title} - ${arts.id}">
            </picture>
        </div>
        <div class="z-card__body">
            <div class="z-card__name">${arts.title} - ${arts.id}</div>
            <div class="z-card__btns">
                <button class="z-btn z-btn_main z-card__btn"
                        data-zmodal-show="price" data-zcard-id="${arts.id}">
                    <span class="z-btn__txt">Посмотреть цену</span>
                </button>
                <button class="z-btn z-btn_secondary z-card__btn"
                        data-zmodal-show="remove" data-zcard-id="${arts.id}">
                    <span class="z-btn__txt">Удалить</span>
                </button>
            </div>
        </div>
    </div>
  
    `
}
function render() {
  document.querySelector('#arts').innerHTML = arts.map(toHTML).join('')
}
render()

// const zModal = zmodal({
//   closeBtnShow: true,
//   closeBtnInside: true,
//   heading: 'Modal Window',
//   content: `
//     <h4>Modal is working</h4>
//     <p>Lorem ipsum dolor sit amet.</p>
//   `,
//   width: '500px',
//   footerButtons: [
//     {
//       text: 'Ok', classes: 'z-btn z-btn_main', handler() {
//         console.log('Ok btn clicked');
//       }
//     },
//     {
//       text: 'Cancel', classes: 'z-btn z-btn_main', handler() {
//         console.log('Cancel btn clicked');
//         zModal.close();
//       }
//     }
//   ]
// })

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
  const art = arts.find(a => a.id === id)
  
  if (zmodalType === 'price') {
    zModalPrice.setContent(`
      <div class="z-thumb z-modal__thumb">
        <picture class="z-thumb__picture">
            <img src="${art.img}" class="z-thumb__img" alt="${art.title}">
        </picture>
        <div class="z-thumb__text">
            Цена на ${art.title}: <b>${art.price}$</b>
        </div>
      </div>
    `)
    zModalPrice.open()
  } else if (zmodalType === 'remove') {
    zconfirm({
      heading: 'Вы уверены?',
      content: `Удалить <b>${art.title}</b>?`
    }).then(() => {
      arts = arts.filter(f => f.id !== id)
      render()
    }).catch(() => {
      console.log('cancel')
    })
  }
})

