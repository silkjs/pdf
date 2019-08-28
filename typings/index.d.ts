/// <reference types="node" />
/// <reference types="PDFKit" />

export function makePDF(callback: (doc: PDFKit.PDFDocument) => void): Promise<string>;
