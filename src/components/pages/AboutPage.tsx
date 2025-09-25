import image_e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a from 'figma:asset/e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a.png';
import image_e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a from 'figma:asset/e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a.png';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'الإبداع',
      description: 'نسعى دائماً لتقديم حلول إبداعية ومبتكرة تميز عملاءنا عن المنافسين',
    },
    {
      icon: Award,
      title: 'الاحترافية',
      description: 'نلتزم بأعلى معايير الجودة والاحترافية في جميع مراحل العمل',
    },
    {
      icon: Target,
      title: 'التأثير العاطفي',
      description: 'نركز على إنشاء محتوى يلامس قلوب الجمهور ويخلق علاقة عاطفية قوية',
    },
    {
      icon: Eye,
      title: 'التميز',
      description: 'نسعى للتميز في كل ما نقوم به ونضع أهداف عملاءنا كأولوية قصوى',
    },
  ];

  const team = [
    {
      name: 'سارة أحمد',
      position: 'مديرة المحتوى الإبداعي',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg4Mzk4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'محمد العلي',
      position: 'مطور ويب أول',
      image: image_e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a,
    },
    {
      name: 'ليلى محمود',
      position: 'أخصائية التسويق الرقمي',
      image: image_e8d3a1a2410e0369f20ac4eed4ab6fb23feca86a,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="arabic-font text-4xl md:text-5xl text-white mb-6">
              تعرف على ديوان المحتوى – خبراء التسويق الرقمي والمحتوى الإبداعي
            </h1>
            <p className="arabic-font text-xl text-white/80 leading-relaxed">
              ديوان المحتوى هو شريكك المثالي في إنشاء محتوى رقمي مؤثر واستراتيجيات تسويق متكاملة. نحن نركز على تحقيق نتائج ملموسة وجذب الجمهور عبر محتوى جذاب وعاطفي.
            </p>
          </div>

          {/* About Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4ODMwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="فريق ديوان المحتوى"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#1a1a1a] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye size={32} className="text-black" />
                </div>
                <h3 className="arabic-font text-xl text-white mb-4">رؤيتنا</h3>
                <p className="arabic-font text-gray-300 leading-relaxed">
                  أن نكون الخيار الأول في صناعة المحتوى الرقمي والتسويق الإبداعي
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} className="text-black" />
                </div>
                <h3 className="arabic-font text-xl text-white mb-4">مهمتنا</h3>
                <p className="arabic-font text-gray-300 leading-relaxed">
                  سرد قصص العملاء بأسلوب مميز يترك أثرًا دائمًا على جمهورهم
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} className="text-black" />
                </div>
                <h3 className="arabic-font text-xl text-white mb-4">قيمنا</h3>
                <p className="arabic-font text-gray-300 leading-relaxed">
                  الإبداع، الاحترافية، التأثير العاطفي، التميز
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Detail */}
          <div>
            <h2 className="arabic-font text-3xl md:text-4xl text-white text-center mb-12">
              قيمنا الأساسية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="bg-[#1a1a1a] border-gray-700 hover:border-[#2ed3ea] transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={24} className="text-black" />
                      </div>
                      <h3 className="arabic-font text-lg text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="arabic-font text-gray-300 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              لمحة عن فريقنا
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              فريق من المحترفين المتخصصين في مختلف مجالات التسويق الرقمي والمحتوى الإبداعي
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="arabic-font text-xl text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="arabic-font text-[#2ed3ea]">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-8">
              لماذا تختار ديوان المحتوى؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">خبرة واسعة</h3>
                    <p className="arabic-font text-gray-300">أكثر من 5 سنوات في مجال التسويق الرقمي</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">نتائج مضمونة</h3>
                    <p className="arabic-font text-gray-300">نحن نركز على تحقيق نتائج ملموسة وقابلة للقياس</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">فريق متخصص</h3>
                    <p className="arabic-font text-gray-300">خبراء في مختلف مجالات التسويق والتصميم</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">دعم مستمر</h3>
                    <p className="arabic-font text-gray-300">نقدم دعماً متواصلاً لعملائنا حتى بعد انتهاء المشروع</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">أسعار تنافسية</h3>
                    <p className="arabic-font text-gray-300">حلول احترافية بأسعار مناسبة لجميع الميزانيات</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4"></div>
                  <div>
                    <h3 className="arabic-font text-lg text-white mb-2">ابتكار مستمر</h3>
                    <p className="arabic-font text-gray-300">نواكب أحدث التقنيات والاتجاهات في السوق</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}