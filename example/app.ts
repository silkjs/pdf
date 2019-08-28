import { makePDF } from '../';

makePDF(doc => {
  doc.text('dsfs');
  doc.end();
})
  .then(url => {
    document.querySelector('iframe').src = url;
  })
  .catch(err => {
    console.log(err);
  });
