class Document {
  render() {
    return `
      <!doctype html>
      <html lang="en">
      <head></head>
      <body>
        <cat-pages-container cat-store="ActivePage"></cat-pages-container>
      </body>
      </html>
    `;
  }
}

module.exports = Document;

