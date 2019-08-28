/// <reference types="node" />
/// <reference types="../node_modules/@types/pdfkit" />

export async function makePDF(
  callback: (doc: PDFKit.PDFDocument) => void
): Promise<string>;
