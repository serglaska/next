import Document, { Html, NextScript, Main, Head } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='extrahtml' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
