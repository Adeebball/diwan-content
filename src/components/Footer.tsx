import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'portfolio', label: 'أعمالنا' },
  ];

  const services = [
    'التسويق الرقمي',
    'إنتاج المحتوى الإبداعي',
    'تصميم وبرمجة المواقع',
    'استراتيجيات العلامة التجارية',
  ];

  return (
    <footer className="bg-black border-t border-orange-500/20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="gradient-orange p-2 rounded-lg ml-3">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="arabic-font text-xl">ديوان المحتوى</span>
            </div>
            <p className="arabic-font text-gray-300 leading-relaxed">
              وكالة متخصصة في التسويق الرقمي، إنتاج المحتوى الإبداعي، وتصميم البرمجيات. نحول الأفكار إلى تجارب رقمية ملهمة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-[#2ed3ea] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ed3ea] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ed3ea] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ed3ea] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="arabic-font text-lg text-[rgba(234,165,46,1)]">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="arabic-font text-gray-300 hover:text-[#2ed3ea] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="arabic-font text-lg text-[rgba(234,165,46,1)]">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="arabic-font text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="arabic-font text-lg text-[rgba(234,165,46,1)]">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={18} className="text-[#2ed3ea] ml-3" />
                <span className="english-font text-gray-300">info@diwan-content.com
</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-[#2ed3ea] ml-3" />
                <span className="english-font text-gray-300">+971 544331650</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-[#2ed3ea] ml-3" />
                <span className="arabic-font text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="arabic-font text-gray-400 text-center md:text-right">
            جميع الحقوق محفوظة © {currentYear} ديوان المحتوى
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="arabic-font text-gray-400 hover:text-[#2ed3ea] transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="arabic-font text-gray-400 hover:text-[#2ed3ea] transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}