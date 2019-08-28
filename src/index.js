const PDFDocument = require("pdfkit").default;
const blobStream = require("blob-stream");
import "./register-files";

export async function makePDF(callback) {
  const doc = new PDFDocument();
  const stream = doc.pipe(blobStream());
  try {
    callback(doc);
  } catch (error) {
    Promise.reject(error);
  }
  stream.on("finish", function() {
    Promise.resolve(stream.toBlobURL("application/pdf"));
  });
}
