declare module 'pdfjs-dist' {
  export = pdfjsLib;
}

declare module 'pdfjs-dist/build/pdf' {
  export = pdfjsLib;
}

declare namespace pdfjsLib {
  var GlobalWorkerOptions: {
    workerSrc: string;
  };

  function getDocument(src: string | Uint8Array | PDFSource): PDFLoadingTask;

  interface PDFSource {
    url?: string;
    data?: Uint8Array;
    httpHeaders?: Record<string, string>;
    withCredentials?: boolean;
    password?: string;
    cMapUrl?: string;
    cMapPacked?: boolean;
  }

  interface PDFLoadingTask {
    promise: Promise<PDFDocumentProxy>;
  }

  interface PDFDocumentProxy {
    numPages: number;
    getPage(number: number): Promise<PDFPageProxy>;
  }

  interface PDFPageProxy {
    getViewport(scale: number): PDFPageViewport;
    render(params: RenderParameters): PDFRenderTask;
  }

  interface PDFPageViewport {
    width: number;
    height: number;
  }

  interface PDFRenderTask {
    promise: Promise<void>;
  }

  interface RenderParameters {
    canvasContext: CanvasRenderingContext2D;
    viewport: PDFPageViewport;
  }
}
