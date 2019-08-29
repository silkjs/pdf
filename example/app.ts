import { makePDF } from '../';

makePDF(doc => {
  doc.font('PingFang');
  doc.text('hello,世界！');
  doc.end();
})
  .then(url => {
    document.querySelector('iframe').src = url;
  })
  .catch(err => {
    console.log(err);
  });
