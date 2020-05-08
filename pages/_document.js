import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };

    return props;
  }

  render() {
    return (
      <html>
        <Head>
          {/* <title>{"Thiên Ngọc Mobile"}</title> */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="thien ngoc mobile" />
          <meta name="author" content="thienngoc.info" />

          <meta
            name="description"
            content={'Thiên Ngọc Mobile'}
          />
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, minimal-ui" />

          {/* <!-- fonts --> */}
          <link href="https://fonts.googleapis.com/css?family=Questrial|Raleway:700,900" rel="stylesheet" />
          
          {/* <link href="/static/theme1/rc-slider.css" rel="stylesheet" type="text/css" /> */}
          <link href="/static/theme1/css/me.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/bootstrap.extension.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/style.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/swiper.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/sumoselect.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme1/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/styles_caus.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />


        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`
            }}
          ></style>

        </body>

      </html>
    );
  }
}
