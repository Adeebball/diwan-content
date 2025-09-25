import { Monitor, PenTool, Smartphone, TrendingUp, Search, Share2, Palette, Code, Globe, BarChart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      title: 'التسويق الرقمي',
      description: 'استراتيجيات شاملة للوصول إلى جمهورك المستهدف وتحقيق أهدافك التسويقية',
      image: 'https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4ODMwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'إدارة الحملات الرقمية',
        'استراتيجيات للوصول إلى الجمهور المستهدف',
        'تحسين التفاعل وتحقيق النتائج',
        'تحليل البيانات والتقارير المفصلة'
      ],
      icon: TrendingUp
    },
    {
      title: 'إنتاج المحتوى الإبداعي',
      description: 'محتوى جذاب يحكي قصة علامتك التجارية بطريقة مؤثرة وفعالة',
      image: 'https://images.unsplash.com/photo-1758613656529-e3f28f3b413a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1ODgzOTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'كتابة وتصميم محتوى جذاب',
        'دمج السرد والعناصر البصرية',
        'محتوى يعزز ولاء الجمهور',
        'إنتاج الفيديوهات والمواد المرئية'
      ],
      icon: PenTool
    },
    {
      title: 'تصميم وبرمجة المواقع والتطبيقات',
      description: 'مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية وتحقق أهدافك',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTg3NTAyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'واجهات مستخدم سلسة وتجربة تفاعلية',
        'برمجة احترافية لأداء وسرعة عالية',
        'بيئة رقمية تعكس هوية العميل',
        'تطبيقات الجوال والويب'
      ],
      icon: Code
    },
    {
      title: 'استراتيجيات العلامة التجارية',
      description: 'بناء هوية قوية ومميزة لعلامتك التجارية في السوق الرقمي',
      image: 'https://images.unsplash.com/photo-1524086496832-aa348741b7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4ODM5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'تحليل السوق ووضع خطط متكاملة',
        'بناء هوية قوية ومميزة',
        'تطوير استراتيجيات مستدامة للتميز',
        'وضع خطط التسويق طويلة المدى'
      ],
      icon: BarChart
    }
  ];

  const additionalServices = [
    { title: 'تحسين محركات البحث (SEO)', icon: Search, description: 'تحسين ظهور موقعك في نتائج البحث' },
    { title: 'إدارة وسائل التواصل الاجتماعي', icon: Share2, description: 'إدارة احترافية لحساباتك على منصات التواصل' },
    { title: 'التصميم الجرافيكي', icon: Palette, description: 'تصاميم إبداعية تعكس هوية علامتك التجارية' },
    { title: 'تطوير التطبيقات المحمولة', icon: Smartphone, description: 'تطبيقات ذكية لأنظمة iOS و Android' },
    { title: 'حلول التجارة الإلكترونية', icon: Globe, description: 'متاجر إلكترونية احترافية وآمنة' },
    { title: 'الاستشارات التقنية', icon: Monitor, description: 'استشارات تقنية متخصصة لتطوير أعمالك' }
  ];

  return (
    <div className="min-h-screen bg-black pt-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="arabic-font text-4xl md:text-5xl text-white mb-6">
            خدمات ديوان المحتوى – تسويق رقمي، محتوى إبداعي وتصميم برمجي
          </h1>
          <p className="arabic-font text-xl text-gray-300 leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الرقمية المصممة لتلبية احتياجاتك وتحقيق أهدافك التجارية
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} group animate-slide-up`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg group-hover:shadow-orange-500/25 transition-all duration-500">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center space-x-4 space-x-reverse group/header">
                      <div className="w-12 h-12 gradient-orange rounded-full flex items-center justify-center group-hover/header:scale-110 group-hover/header:rotate-3 transition-all duration-300 animate-pulse-orange">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h2 className="arabic-font text-3xl text-white group-hover/header:text-orange-500 transition-colors duration-300">{service.title}</h2>
                    </div>
                    <p className="arabic-font text-xl text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group/feature cursor-pointer">
                          <div className="w-2 h-2 bg-orange-500 rounded-full ml-3 group-hover/feature:scale-150 transition-transform duration-300"></div>
                          <span className="arabic-font text-white/70 group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="gradient-orange hover:bg-orange-600 text-white arabic-font transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                    >
                      استفسر عن هذا الخدمة
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-black px-4 sm:px-6 lg:px-8 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-orange-500 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-orange-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-500 rounded-full"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4 animate-slide-up">
              خدمات إضافية
            </h2>
            <p className="arabic-font text-xl text-white/80 max-w-2xl mx-auto">
              مجموعة متنوعة من الخدمات المتخصصة لتلبية جميع احتياجاتك الرقمية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-black border-white/20 hover:border-orange-500 transition-all duration-300 group card-hover glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-pulse-orange">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="arabic-font text-lg text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="arabic-font text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              كيف نعمل
            </h2>
            <p className="arabic-font text-xl text-white/80 max-w-2xl mx-auto">
              عملية منهجية لضمان تحقيق أفضل النتائج لمشروعك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'التحليل والدراسة', description: 'ندرس احتياجاتك ونحلل السوق والمنافسين' },
              { step: '02', title: 'التخطيط والاستراتيجية', description: 'نضع خطة شاملة واستراتيجية فعالة' },
              { step: '03', title: 'التنفيذ والإنتاج', description: 'ننفذ المشروع بأعلى معايير الجودة' },
              { step: '04', title: 'التطوير والمتابعة', description: 'نقوم بالمتابعة والتطوير المستمر' }
            ].map((process, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 animate-pulse-orange">
                  <span className="english-font text-white text-xl">{process.step}</span>
                </div>
                <h3 className="arabic-font text-lg text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="arabic-font text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-orange px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto text-center relative">
          <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4 animate-slide-up">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="arabic-font text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-100 text-orange-600 arabic-font text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              احصل على استشارة مجانية
            </Button>
            <Button 
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 arabic-font text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
            >
              شاهد أعمالنا السابقة
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}