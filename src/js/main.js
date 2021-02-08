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

