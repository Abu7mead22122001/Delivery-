import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document to define global HTML attributes and meta tags for SEO.
 * Setting lang and dir improves accessibility for Arabic speakers.  The
 * meta tags provide descriptive information that helps search engines and
 * social networks understand and index the store correctly.
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* Basic SEO */}
          <meta name="description" content="متجر إكسورا - تسوق الملابس والعطور والكوتشيات بأفضل الأسعار داخل مصر. استمتع بعروض خاصة وتوصيل سريع إلى جميع المحافظات." />
          <meta name="keywords" content="ملابس, عطور, كوتشيات, تسوق عبر الإنترنت, متجر مصري, توصيل سريع" />
          {/* Open Graph for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="متجر إكسورا" />
          <meta property="og:description" content="تسوق أحدث صيحات الموضة والعطور والأحذية الرياضية مع خدمة التوصيل السريع والدفع عند الاستلام." />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://example.com" />
          {/* Twitter Card metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="متجر إكسورا" />
          <meta name="twitter:description" content="تسوق الآن واستمتع بأفضل العروض والمنتجات الأصلية في مصر." />
          <meta name="twitter:image" content="/images/og-image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}