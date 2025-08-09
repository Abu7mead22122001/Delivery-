import Link from 'next/link';
import Image from 'next/image';

/**
 * CategoriesSection displays the main store categories (clothing, perfumes and
 * shoes) with inviting imagery and calls to action.  This encourages
 * visitors to quickly navigate to the section that interests them most.
 * Tailwind CSS classes ensure the grid is responsive across screen sizes.
 */
export default function CategoriesSection() {
  const categories = [
    {
      name: 'الملابس',
      href: '/clothing',
      image: '/images/categories/clothing.jpg',
      description: 'اكتشف أحدث صيحات الموضة للرجال والنساء والأطفال'
    },
    {
      name: 'العطور',
      href: '/perfumes',
      image: '/images/categories/perfumes.jpg',
      description: 'مجموعة مختارة من أرقى العطور الشرقية والعالمية'
    },
    {
      name: 'الكوتشيات',
      href: '/shoes',
      image: '/images/categories/shoes.jpg',
      description: 'أحذية رياضية، كاجوال وكلاسيكية من أفضل الماركات'
    }
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          تسوق حسب الفئة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4 text-right text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm leading-snug">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}