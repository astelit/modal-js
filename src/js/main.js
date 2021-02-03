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
      text: 'Ok', type: 'primary', handler() {
        console.log('Ok btn clicked');
      }
    },
    {
      text: 'Cancel', type: 'danger', handler() {
        console.log('Cancel btn clicked');
      }
    }
  ]
})

setTimeout(function() {
  zModal.open()
}, 2000)

// setTimeout(function() {
//   zModal.setContent(`<p>Новый контент</p>`)
// }, 4000)
//
// setTimeout(function() {
//   zModal.close()
// }, 6000)
//
// setTimeout(function() {
//   zModal.destroy()
// }, 8000)
