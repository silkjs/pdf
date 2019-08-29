const PDFDocument = require('pdfkit').default;
const blobStream = require('blob-stream');
import './register-files';

function makePDF(callback) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = doc.pipe(blobStream());
      doc.registerFont('PingFang', 'fonts/苹方黑体-准-简.ttf');
      callback(doc);
      stream.on('finish', () => {
        resolve(stream.toBlobURL('application/pdf'));
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default {
  makePDF,
};
