/// <reference types="node" />
/// <reference types="PDFKit" />

export function makePDF(
  options: PDFKit.PDFDocumentOptions,
  callback: (doc: PDFKit.PDFDocument) => void,
): Promise<string>;
