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
      text: 'Ok', classes: 'primary', handler() {
        console.log('Ok btn clicked');
      }
    },
    {
      text: 'Cancel', classes: 'danger', handler() {
        console.log('Cancel btn clicked');
        zModal.close();
      }
    }
  ]
})

setTimeout(function() {
  zModal.open()
}, 2000)

