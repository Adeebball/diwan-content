import { Star, Quote, Award, ThumbsUp, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface TestimonialsPageProps {
  onNavigate: (page: string) => void;
}

export function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد العلي',
      position: 'المدير التنفيذي',
      company: 'شركة التقنية المتقدمة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4ODM5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'ديوان المحتوى غيّر مسار علامتنا التجارية الرقمية بشكل كامل. النتائج فاقت توقعاتنا بكثير. زادت حركة المرور على موقعنا بنسبة 300% خلال 6 أشهر فقط، وتحسن معدل التحويل بشكل كبير.',
      project: 'موقع إلكتروني + تسويق رقمي',
      results: ['زيادة الزوار بنسبة 300%', 'تحسين معدل التحويل بنسبة 250%', 'زيادة المبيعات بنسبة 400%'],
      category: 'web'
    },
    {
      id: 2,
      name: 'فاطمة الزهراء أحمد',
      position: 'مديرة التسويق',
      company: 'متجر الأناقة للأزياء',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg4Mzk4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'المحتوى الذي أنتجوه لنا كان في غاية الإبداع والجودة. زاد تفاعل جمهورنا بشكل ملحوظ على جميع منصات التواصل الاجتماعي. الفريق محترف جداً ويفهم احتياجات السوق.',
      project: 'محتوى إبداعي + إدارة وسائل التواصل',
      results: ['زيادة المتابعين بنسبة 500%', 'تحسين التفاعل بنسبة 350%', 'زيادة الوعي بالعلامة التجارية بنسبة 400%'],
      category: 'content'
    },
    {
      id: 3,
      name: 'خالد عبدالله السعيد',
      position: 'صاحب المطعم',
      company: 'مطعم الشام الأصيل',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4ODM5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'الموقع الإلكتروني الذي صمموه لنا أدى إلى زيادة الطلبات بنسبة 300%. فريق محترف جداً ومتفهم لطبيعة عملنا. التطبيق الذي طوروه سهّل على عملائنا طلب الطعام.',
      project: 'موقع + تطبيق + حملة تسويقية',
      results: ['زيادة الطلبات بنسبة 300%', 'أكثر من 10,000 تحميل للتطبيق', 'تقييم 4.8 نجوم'],
      category: 'app'
    },
    {
      id: 4,
      name: 'ليلى محمود يوسف',
      position: 'مديرة العمليات',
      company: 'عيادة الجمال المتخصصة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODgzOTg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'الهوية البصرية الجديدة التي صمموها جعلت عيادتنا تبرز في السوق. العملاء يثقون بنا أكثر والحجوزات زادت بشكل كبير. التصميم عكس طبيعة خدماتنا بطريقة مميزة.',
      project: 'هوية بصرية + موقع إلكتروني',
      results: ['زيادة الحجوزات بنسبة 250%', 'تحسين الثقة بالعلامة التجارية', 'تميز في السوق المحلي'],
      category: 'branding'
    },
    {
      id: 5,
      name: 'محمد سعد الدين',
      position: 'مؤسس الشركة',
      company: 'شركة الرياضة النشطة',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4ODM5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'الحملة التسويقية التي نفذوها حققت وصولاً لأكثر من 2 مليون شخص. الفيديوهات الإبداعية التي أنتجوها حصلت على ملايين المشاهدات. شركاء نجاح حقيقيون.',
      project: 'حملة تسويقية شاملة + محتوى فيديو',
      results: ['وصول إلى 2 مليون شخص', '12 مليون مشاهدة للفيديوهات', 'زيادة المبيعات بنسبة 350%'],
      category: 'marketing'
    },
    {
      id: 6,
      name: 'سارة أحمد الخالد',
      position: 'مديرة التعليم',
      company: 'أكاديمية المستقبل التعليمية',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg4Mzk4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'المنصة التعليمية التي طوروها غيرت طريقة تقديمنا للتعليم. أكثر من 10,000 طالب سجلوا في دوراتنا. النظام سهل الاستخدام ويوفر تجربة تعليمية ممتازة.',
      project: 'منصة تعليمية + نظام إدارة',
      results: ['أكثر من 10,000 طالب مسجل', 'معدل إكمال الدورات 85%', 'تقييم المنصة 4.9 نجوم'],
      category: 'web'
    }
  ];

  const stats = [
    { 
      icon: Star, 
      number: '4.9', 
      label: 'متوسط التقييم',
      description: 'من أصل 5 نجوم'
    },
    { 
      icon: ThumbsUp, 
      number: '98%', 
      label: 'رضا العملاء',
      description: 'ينصحون بخدماتنا'
    },
    { 
      icon: Award, 
      number: '150+', 
      label: 'عميل راضي',
      description: 'حول العالم'
    },
    { 
      icon: TrendingUp, 
      number: '300%', 
      label: 'متوسط النمو',
      description: 'في نتائج العملاء'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="arabic-font text-4xl md:text-5xl text-white mb-6">
            آراء العملاء عن ديوان المحتوى
          </h1>
          <p className="arabic-font text-xl text-gray-300 leading-relaxed">
            تعرف على تجارب عملائنا الذين شهدوا تحول علاماتهم التجارية الرقمية وتحقيق نتائج ملموسة من خلال خدماتنا في التسويق الرقمي، إنتاج المحتوى، وتصميم المواقع والتطبيقات.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <div className="english-font text-3xl md:text-4xl text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="arabic-font text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="arabic-font text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              قصص نجاح حقيقية
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              كل عميل لديه قصة نجاح مختلفة، ولكن الهدف واحد: تحقيق نتائج استثنائية
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#2a2a2a] border-gray-700 hover:border-[#2ed3ea] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <Quote className="text-[#2ed3ea] flex-shrink-0 ml-4" size={32} />
                    <div className="flex-1">
                      <p className="arabic-font text-gray-300 leading-relaxed text-lg mb-6">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Avatar className="h-16 w-16 ml-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#2ed3ea] text-black arabic-font">
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="arabic-font text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="arabic-font text-[#2ed3ea] text-sm">
                        {testimonial.position}
                      </p>
                      <p className="arabic-font text-gray-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-6">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <Badge variant="outline" className="border-[#2ed3ea] text-[#2ed3ea] arabic-font">
                        {testimonial.project}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="arabic-font text-sm text-[#2ed3ea] mb-3">النتائج المحققة:</h4>
                      <div className="space-y-2">
                        {testimonial.results.map((result, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-[#2ed3ea] rounded-full ml-3"></div>
                            <span className="arabic-font text-sm text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              شهادات مرئية من عملائنا
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              استمع مباشرة من عملائنا عن تجربتهم معنا وكيف ساعدناهم في تحقيق أهدافهم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="bg-[#1a1a1a] border-gray-700 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-[#2ed3ea] to-[#25b8d1] flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent mr-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded p-2">
                      <p className="arabic-font text-white text-sm">شهادة عميل - مشروع تطوير موقع</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="arabic-font text-gray-400 mb-4">
              المزيد من الشهادات المرئية متوفرة على قناتنا على يوتيوب
            </p>
            <Button 
              variant="outline"
              className="border-[#2ed3ea] text-[#2ed3ea] hover:bg-[#2ed3ea] hover:text-black arabic-font"
            >
              زيارة قناتنا على يوتيوب
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              أسئلة شائعة من العملاء
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً التي يطرحها عملاؤنا
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'كم من الوقت يستغرق إنجاز المشروع؟',
                answer: 'يعتمد ذلك على نوع وحجم المشروع. عادة ما تستغرق المواقع البسيطة 2-4 أسابيع، بينما المشاريع المعقدة قد تحتاج 2-3 أشهر.'
              },
              {
                question: 'هل تقدمون دعم ما بعد التسليم؟',
                answer: 'نعم، نقدم دعماً تقنياً مجانياً لمدة 3 أشهر بعد التسليم، بالإضافة إلى خطط صيانة سنوية اختيارية.'
              },
              {
                question: 'ما هي طريقة الدفع المتاحة؟',
                answer: 'نقبل الدفع بالتقسيط على مراحل المشروع. عادة 50% عند البدء و50% عند التسليم. نقبل جميع طرق الدفع الإلكترونية.'
              },
              {
                question: 'هل يمكنني رؤية عينات من أعمالكم؟',
                answer: 'بالطبع! يمكنك زيارة صفحة أعمالنا لرؤية مجموعة واسعة من المشاريع التي أنجزناها في مختلف المجالات.'
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-6">
                  <h3 className="arabic-font text-lg text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="arabic-font text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2ed3ea] to-[#25b8d1] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="arabic-font text-3xl md:text-4xl text-black mb-4">
            هل أنت مستعد لتكون قصة النجاح التالية؟
          </h2>
          <p className="arabic-font text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            انضم إلى قائمة عملائنا الراضين واحصل على نتائج مماثلة أو أفضل
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-gray-800 text-white arabic-font text-lg px-8 py-6"
            >
              ابدأ مشروعك الآن
            </Button>
            <Button 
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white arabic-font text-lg px-8 py-6"
            >
              شاهد أعمالنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}