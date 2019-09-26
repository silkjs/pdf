import { makePDF } from '../';

const options = {
  size: {
    width: 595,
    height: 842,
  },
  margin: 27.3,
  title_margin: 20,
  ratio: 3,
};
makePDF(
  {
    margin: options.title_margin,
    size: [options.size.width, options.size.height],
  },
  doc => {
    doc.text('hello,世界！');
  },
)
  .then(url => {
    document.querySelector('iframe').src = url;
  })
  .catch(err => {
    console.log(err);
  });
