import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import heavy components to reduce initial bundle size
const HeroSlider = dynamic(() => import('@/components/home/HeroSlider'), { ssr: false });
const EgyptianFeatures = dynamic(() => import('@/components/home/EgyptianFeatures'));
const CategoriesSection = dynamic(() => import('@/components/home/CategoriesSection'));

/**
 * HomePage composes the main landing page of the store.  It includes
 * a promotional slider, a categories section to guide users, and
 * feature highlights that explain why shoppers should choose this store.
 */
export default function HomePage() {
  return (
    <>
      <Head>
        <title>متجر إكسورا | ملابس، عطور وكوتشيات</title>
        <meta
          name="description"
          content="مرحبًا بكم في متجر إكسورا – وجهتك الأولى للتسوق عبر الإنترنت في مصر. اكتشف مجموعتنا الواسعة من الملابس، العطور، الأحذية الرياضية وغيرها بأسعار تنافسية ودفع عند الاستلام."
        />
      </Head>
      <div className="space-y-12">
        <HeroSlider />
        <CategoriesSection />
        <EgyptianFeatures />
      </div>
    </>
  );
}