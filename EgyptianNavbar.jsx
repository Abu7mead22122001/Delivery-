import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MapPin,
  ShoppingCart,
  User,
  LogIn,
  Phone,
  WhatsApp,
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import CartPopup from '@/components/cart/CartPopup';
import MegaMenu from '@/components/menu/MegaMenu';
import { governorates } from './governorates';

/**
 * EgyptianNavbar is the main navigation bar for the store.  It has been
 * enhanced to include a promotional bar, search functionality, dynamic
 * governorate selection and clear calls to action for customer support.
 * The dropdown lists for categories remain accessible on both desktop
 * and mobile views.  The governorate selector now uses the full list
 * of Egypt’s 27 governorates【38924399199811†L460-L512】 to personalise shipping.
 */
export default function EgyptianNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Keep track of the selected governorate for shipping.  Default to Cairo.
  const [selectedGovernorate, setSelectedGovernorate] = useState('Cairo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      {/* شريط العروض العلوي */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white text-center py-2 px-4 text-sm flex flex-wrap justify-center items-center space-x-4 rtl:space-x-reverse">
        <p>🔥 خصم يصل إلى 50% على جميع المنتجات - العرض ساري حتى نفاذ الكمية 🔥</p>
        <a
          href="tel:16316"
          className="flex items-center space-x-1 rtl:space-x-reverse hover:underline"
        >
          <Phone size={16} />
          <span>16316</span>
        </a>
        <a
          href="https://wa.me/201234567890"
          className="flex items-center space-x-1 rtl:space-x-reverse hover:underline"
        >
          <WhatsApp size={16} />
          <span>واتساب</span>
        </a>
      </div>

      {/* الشريط الرئيسي */}
      <header
        className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${isScrolled ? 'py-2' : 'py-3'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* الصف العلوي */}
          <div className="flex justify-between items-center">
            {/* زر القائمة للموبايل */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* الشعار */}
            <Link href="/" className="flex items-center" aria-label="العودة إلى الصفحة الرئيسية">
              <img
                src="/images/logo.png"
                alt="متجر إكسورا"
                className="h-10 md:h-12 mr-2"
              />
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                إكسورا
              </span>
            </Link>

            {/* شريط البحث */}
            <div className="hidden md:flex flex-1 mx-6 max-w-xl">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  placeholder="ابحث عن منتجاتك المفضلة..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                  aria-label="ابحث"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* أيقونات المستخدم والسلة */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link
                href="/account"
                className="hidden md:flex flex-col items-center p-2 hover:text-indigo-600"
              >
                <User size={22} />
                <span className="text-xs mt-1">حسابي</span>
              </Link>
              <Link
                href="/login"
                className="hidden md:flex flex-col items-center p-2 hover:text-indigo-600"
              >
                <LogIn size={22} />
                <span className="text-xs mt-1">تسجيل دخول</span>
              </Link>
              <CartPopup />
            </div>
          </div>

          {/* الصف السفلي */}
          <div className="mt-2 flex justify-between items-center">
            {/* أقسام المتجر */}
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              <MegaMenu
                title="الملابس"
                categories={[
                  { name: 'ملابس رجالي', href: '/clothing/men' },
                  { name: 'ملابس حريمي', href: '/clothing/women' },
                  { name: 'ملابس أطفال', href: '/clothing/kids' },
                  { name: 'أحدث الموديلات', href: '/clothing/new' }
                ]}
              />
              <MegaMenu
                title="العطور"
                categories={[
                  { name: 'عطور رجالية', href: '/perfumes/men' },
                  { name: 'عطور نسائية', href: '/perfumes/women' },
                  { name: 'عطور عالمية', href: '/perfumes/international' },
                  { name: 'عروض العطور', href: '/perfumes/offers' }
                ]}
              />
              <MegaMenu
                title="الكوتشيات"
                categories={[
                  { name: 'رياضية', href: '/shoes/sports' },
                  { name: 'كاجوال', href: '/shoes/casual' },
                  { name: 'كلاسيكية', href: '/shoes/classic' },
                  { name: 'عروض الأحذية', href: '/shoes/offers' }
                ]}
              />
              <Link href="/new-arrivals" className="font-medium hover:text-indigo-600 py-2">
                وصول جديد
              </Link>
              <Link href="/offers" className="font-medium text-red-600 hover:text-red-700 py-2">
                العروض
              </Link>
            </nav>

            {/* معلومات التوصيل */}
            <div className="flex items-center text-sm text-gray-600 space-x-1 rtl:space-x-reverse">
              <MapPin size={18} className="ml-1" />
              <span>التوصيل إلى:</span>
              <select
                className="border-none bg-transparent font-medium focus:outline-none focus:ring-0"
                value={selectedGovernorate}
                onChange={(e) => setSelectedGovernorate(e.target.value)}
              >
                {governorates.map((gov) => (
                  <option key={gov} value={gov}>
                    {gov}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="ابحث في المتجر..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <Search size={20} />
                </button>
              </form>

              <nav className="space-y-3">
                <MobileMenuDropdown title="الملابس">
                  <Link href="/clothing/men" className="block py-2 px-4 hover:bg-gray-50">
                    رجالي
                  </Link>
                  <Link href="/clothing/women" className="block py-2 px-4 hover:bg-gray-50">
                    حريمي
                  </Link>
                  <Link href="/clothing/kids" className="block py-2 px-4 hover:bg-gray-50">
                    أطفال
                  </Link>
                </MobileMenuDropdown>
                <MobileMenuDropdown title="العطور">
                  <Link href="/perfumes/men" className="block py-2 px-4 hover:bg-gray-50">
                    رجالي
                  </Link>
                  <Link href="/perfumes/women" className="block py-2 px-4 hover:bg-gray-50">
                    نسائي
                  </Link>
                </MobileMenuDropdown>
                <MobileMenuDropdown title="الكوتشيات">
                  <Link href="/shoes/sports" className="block py-2 px-4 hover:bg-gray-50">
                    رياضية
                  </Link>
                  <Link href="/shoes/casual" className="block py-2 px-4 hover:bg-gray-50">
                    كاجوال
                  </Link>
                </MobileMenuDropdown>
                <Link href="/new-arrivals" className="block py-3 px-4 font-medium hover:bg-gray-50">
                  وصول جديد
                </Link>
                <Link
                  href="/offers"
                  className="block py-3 px-4 font-medium text-red-600 hover:bg-gray-50"
                >
                  العروض
                </Link>
                <div className="pt-2 border-t">
                  <Link href="/account" className="flex items-center py-2 px-4 hover:bg-gray-50">
                    <User size={18} className="ml-2" /> حسابي
                  </Link>
                  <Link href="/login" className="flex items-center py-2 px-4 hover:bg-gray-50">
                    <LogIn size={18} className="ml-2" /> تسجيل دخول
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

const MobileMenuDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-3 px-4 font-medium hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className="bg-gray-50">{children}</div>}
    </div>
  );
};