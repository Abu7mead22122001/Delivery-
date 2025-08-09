import {
  Gift,
  ShieldCheck,
  Truck,
  CreditCard,
  Phone,
  WhatsApp,
  Clock,
  Exchange,
  MapPin,
  PackageSearch,
  Star
} from 'lucide-react';

/**
 * EgyptianFeatures highlights the value proposition of the store.  Each card
 * represents a service benefit customers receive when shopping with us.  The
 * design uses Tailwind CSS for a clean, responsive layout.  Icons from
 * lucide-react illustrate each benefit at a glance.  Feel free to add or
 * modify feature items to reflect your unique selling points.
 */
export default function EgyptianFeatures() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          لماذا تختار متجرنا؟
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* توصيل سريع */}
          <FeatureCard
            Icon={Truck}
            title="توصيل سريع"
            description="خلال 24-48 ساعة في القاهرة والجيزة"
            iconBg="bg-indigo-100"
            iconColor="text-indigo-600"
          />

          {/* دفع عند الاستلام */}
          <FeatureCard
            Icon={CreditCard}
            title="دفع عند الاستلام"
            description="في جميع محافظات مصر"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />

          {/* دعم فوري */}
          <FeatureCard
            Icon={WhatsApp}
            title="دعم فوري"
            description="خدمة عملاء 24/7 عبر الواتساب"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />

          {/* إرجاع مجاني */}
          <FeatureCard
            Icon={Exchange}
            title="إرجاع مجاني"
            description="إمكانية الإرجاع خلال 14 يوم"
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
          />

          {/* ضمان الجودة */}
          <FeatureCard
            Icon={ShieldCheck}
            title="ضمان الجودة"
            description="ضمان أصالة جميع المنتجات"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
          />

          {/* هدايا مجانية */}
          <FeatureCard
            Icon={Gift}
            title="هدايا مجانية"
            description="مع كل طلب فوق 500 جنيه"
            iconBg="bg-pink-100"
            iconColor="text-pink-600"
          />

          {/* خدمة عملاء */}
          <FeatureCard
            Icon={Phone}
            title="خدمة عملاء"
            description="خط ساخن 16316"
            iconBg="bg-red-100"
            iconColor="text-red-600"
          />

          {/* توصيل في نفس اليوم */}
          <FeatureCard
            Icon={Clock}
            title="توصيل في نفس اليوم"
            description="متوفر في مناطق مختارة داخل القاهرة"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
          />

          {/* تتبع الطلب */}
          <FeatureCard
            Icon={PackageSearch}
            title="تتبع الطلب"
            description="تابع حالة طلبك خطوة بخطوة"
            iconBg="bg-cyan-100"
            iconColor="text-cyan-600"
          />

          {/* برنامج ولاء */}
          <FeatureCard
            Icon={Star}
            title="نقاط ولاء"
            description="اكسب نقاط مع كل عملية شراء"
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
          />

          {/* توصيل إلى جميع المحافظات */}
          <FeatureCard
            Icon={MapPin}
            title="توصيل لكل مصر"
            description="نغطي جميع المحافظات" 
            iconBg="bg-gray-100"
            iconColor="text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ Icon, title, description, iconBg, iconColor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
      <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}