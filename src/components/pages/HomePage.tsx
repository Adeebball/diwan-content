import { ArrowLeft, Star, Users, Award, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { number: '200+', label: 'مشروع مكتمل', icon: Award, delay: '0s' },
    { number: '150+', label: 'عميل راضي', icon: Users, delay: '0.2s' },
    { number: '50+', label: 'حملة ناجحة', icon: Zap, delay: '0.4s' },
    { number: '5+', label: 'سنوات خبرة', icon: Star, delay: '0.6s' },
  ];

  const services = [
    {
      title: 'التسويق الرقمي',
      description: 'استراتيجيات متكاملة للوصول إلى جمهورك المستهدف وتحقيق أهدافك التسويقية',
      image: 'https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4ODMwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'إنتاج المحتوى الإبداعي',
      description: 'محتوى جذاب يحكي قصة علامتك التجارية بطريقة مؤثرة وفعالة',
      image: 'https://images.unsplash.com/photo-1758613656529-e3f28f3b413a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1ODgzOTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'تصميم وبرمجة المواقع',
      description: 'مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية وتحقق أهدافك',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTg3NTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      company: 'شركة التقنية المتقدمة',
      text: 'ديوان المحتوى غيّر مسار علامتنا التجارية الرقمية بشكل كامل. النتائج فاقت توقعاتنا.',
      rating: 5,
    },
    {
      name: 'فاطمة الزهراء',
      company: 'متجر الأناقة',
      text: 'المحتوى الذي أنتجوه لنا كان في غاية الإبداع والجودة. زاد تفاعل جمهورنا بشكل ملحوظ.',
      rating: 5,
    },
    {
      name: 'خالد العبدالله',
      company: 'مطعم الشام',
      text: 'الموقع الإلكتروني الذي صمموه لنا أدى إلى زيادة الطلبات بنسبة 300%. فريق محترف جداً.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="arabic-font text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              <span className="text-gradient-orange">ديوان المحتوى</span> – وكالة تسويق رقمي وإنتاج محتوى إبداعي
            </h1>
            <p className="arabic-font text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
              في عالم رقمي سريع، كل فكرة تحمل قصة تنتظر أن تُروى. في ديوان المحتوى، نحول الأفكار إلى تجارب رقمية ملهمة تجذب الانتباه، تزيد التفاعل، وتترك أثرًا دائمًا على جمهورك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button 
                onClick={() => onNavigate('contact')}
                className="gradient-orange hover:scale-105 text-white arabic-font text-lg px-8 py-6 shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                ابدأ مشروعك الآن
                <ArrowLeft className="mr-2" size={20} />
              </Button>
              <Button 
                onClick={() => onNavigate('portfolio')}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white arabic-font text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
              >
                شاهد أعمالنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-700 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group animate-slide-up" style={{animationDelay: stat.delay}}>
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-orange rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-orange">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="english-font text-3xl md:text-4xl text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="arabic-font text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              خدماتنا الأساسية
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الرقمية المصممة لتحقيق أهدافك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:border-orange-500 card-hover group glass-effect">
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden relative">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="arabic-font text-xl text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="arabic-font text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('services')}
              className="gradient-orange hover:scale-105 text-white arabic-font text-lg px-8 py-6 shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              اكتشف جميع خدماتنا
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-700 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              شهادات العملاء
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              تعرف على تجارب عملائنا الذين حققوا نتائج مميزة معنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600 hover:border-orange-500 card-hover group glass-effect">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-orange-400 fill-current group-hover:scale-110 transition-transform duration-300" size={20} style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <p className="arabic-font text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="arabic-font text-white group-hover:text-orange-500 transition-colors duration-300">{testimonial.name}</div>
                    <div className="arabic-font text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('testimonials')}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white arabic-font text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            >
              المزيد من الشهادات
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="gradient-orange rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300">
              هل أنت مستعد لتحويل علامتك التجارية؟
            </h2>
            <p className="arabic-font text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              ابدأ رحلتك الرقمية معنا اليوم ودع فريقنا المحترف يساعدك في تحقيق أهدافك
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-100 text-orange-500 hover:text-orange-600 arabic-font text-lg px-8 py-6 relative z-10 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              تواصل معنا الآن
              <ArrowLeft className="mr-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}