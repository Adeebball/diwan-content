import { useState } from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'web', label: 'مواقع إلكترونية' },
    { id: 'app', label: 'تطبيقات' },
    { id: 'marketing', label: 'تسويق رقمي' },
    { id: 'branding', label: 'هوية تجارية' },
    { id: 'content', label: 'محتوى إبداعي' }
  ];

  const projects = [
    {
      id: 1,
      title: 'موقع شركة التقنية المتقدمة',
      category: 'web',
      client: 'شركة التقنية المتقدمة',
      date: '2024',
      description: 'موقع إلكتروني احترافي لشركة تقنية رائدة مع تصميم عصري وتجربة مستخدم متميزة',
      image: 'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODc4ODg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['تصميم ويب', 'تطوير', 'UX/UI'],
      results: ['زيادة الزوار بنسبة 250%', 'تحسين معدل التحويل بنسبة 180%', 'تحسين السرعة بنسبة 300%']
    },
    {
      id: 2,
      title: 'تطبيق التسوق الذكي',
      category: 'app',
      client: 'متجر الأناقة',
      date: '2024',
      description: 'تطبيق جوال متطور للتسوق الإلكتروني مع ميزات ذكية وتجربة تسوق سلسة',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NzczOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['تطبيق جوال', 'تجارة إلكترونية', 'React Native'],
      results: ['أكثر من 50,000 تحميل', 'تقييم 4.8 نجوم', 'زيادة المبيعات بنسبة 400%']
    },
    {
      id: 3,
      title: 'حملة تسويقية شاملة',
      category: 'marketing',
      client: 'مطعم الشام',
      date: '2024',
      description: 'حملة تسويق رقمي متكاملة شملت جميع منصات التواصل الاجتماعي وحققت نتائج استثنائية',
      image: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNhbXBhaWdufGVufDF8fHx8MTc1ODgzODgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['تسويق رقمي', 'وسائل التواصل', 'محتوى إبداعي'],
      results: ['زيادة المتابعين بنسبة 500%', 'وصول إلى 2 مليون شخص', 'زيادة الطلبات بنسبة 300%']
    },
    {
      id: 4,
      title: 'هوية بصرية متكاملة',
      category: 'branding',
      client: 'عيادة الجمال',
      date: '2023',
      description: 'تصميم هوية بصرية شاملة تشمل الشعار والألوان والخطوط ومواد التسويق',
      image: 'https://images.unsplash.com/photo-1524086496832-aa348741b7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4ODM5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['هوية بصرية', 'تصميم جرافيك', 'علامة تجارية'],
      results: ['تميز في السوق', 'زيادة الثقة بالعلامة التجارية', 'نمو العملاء بنسبة 200%']
    },
    {
      id: 5,
      title: 'محتوى إبداعي لوسائل التواصل',
      category: 'content',
      client: 'شركة الرياضة النشطة',
      date: '2023',
      description: 'إنتاج محتوى إبداعي متنوع لوسائل التواصل الاجتماعي مع التركيز على القصص المؤثرة',
      image: 'https://images.unsplash.com/photo-1758613656529-e3f28f3b413a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1ODgzOTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['محتوى إبداعي', 'فيديو', 'سرد'],
      results: ['12 مليون مشاهدة', 'تفاعل بنسبة 8%', 'زيادة الوعي بالعلامة التجارية بنسبة 350%']
    },
    {
      id: 6,
      title: 'منصة تعليمية تفاعلية',
      category: 'web',
      client: 'أكاديمية المستقبل',
      date: '2023',
      description: 'منصة تعليمية متطورة بميزات تفاعلية ونظام إدارة محتوى متقدم',
      image: 'https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4ODMwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['منصة تعليمية', 'تطوير ويب', 'نظام إدارة'],
      results: ['أكثر من 10,000 طالب', 'معدل إكمال الدورات 85%', 'تقييم 4.9 نجوم']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="arabic-font text-4xl md:text-5xl text-white mb-6">
            مشاريع ديوان المحتوى – أمثلة على أعمالنا الرقمية
          </h1>
          <p className="arabic-font text-xl text-gray-300 leading-relaxed">
            استعرض أبرز المشاريع الرقمية التي أنجزها فريقنا، بما في ذلك تصميم محتوى رقمي، تسويق رقمي، وبرمجة مواقع وتطبيقات. كل مشروع يعكس الإبداع والاحترافية والنتائج المميزة التي نحققها لعملائنا.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`arabic-font ${
                  activeFilter === category.id
                    ? 'bg-[#2ed3ea] hover:bg-[#25b8d1] text-black'
                    : 'border-gray-600 text-gray-300 hover:bg-[#2ed3ea] hover:text-black'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-[#2a2a2a] border-gray-700 overflow-hidden group hover:border-[#2ed3ea] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="ml-2" />
                      <span className="english-font">{project.date}</span>
                    </div>
                    <Badge variant="secondary" className="bg-[#2ed3ea] text-black">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                  </div>
                  
                  <h3 className="arabic-font text-xl text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="arabic-font text-sm text-gray-400 mb-3">
                    العميل: {project.client}
                  </p>
                  
                  <p className="arabic-font text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <div key={index} className="flex items-center">
                        <Tag size={12} className="text-[#2ed3ea] ml-1" />
                        <span className="arabic-font text-xs text-gray-400">{tag}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="arabic-font text-sm text-[#2ed3ea]">النتائج المحققة:</h4>
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-[#2ed3ea] rounded-full ml-2"></div>
                        <span className="arabic-font text-xs text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#2ed3ea] text-[#2ed3ea] hover:bg-[#2ed3ea] hover:text-black arabic-font"
                  >
                    عرض التفاصيل
                    <ExternalLink size={16} className="mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              أرقام تتحدث عن إنجازاتنا
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              نتائج حقيقية حققناها لعملائنا عبر مختلف المشاريع والقطاعات
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'مشروع مكتمل', description: 'في مختلف المجالات' },
              { number: '150+', label: 'عميل راضي', description: 'حول العالم' },
              { number: '50+', label: 'حملة ناجحة', description: 'حققت أهدافها' },
              { number: '5M+', label: 'وصول شهري', description: 'عبر منصاتنا' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="english-font text-3xl md:text-4xl text-[#2ed3ea] mb-2">
                  {stat.number}
                </div>
                <div className="arabic-font text-white mb-1">
                  {stat.label}
                </div>
                <div className="arabic-font text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl md:text-4xl text-white mb-4">
              منهجيتنا في العمل
            </h2>
            <p className="arabic-font text-xl text-gray-300 max-w-2xl mx-auto">
              نتبع منهجية علمية مدروسة لضمان تحقيق أفضل النتائج في كل مشروع
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'الاستكشاف والتحليل',
                description: 'نبدأ بفهم عميق لأهدافك ودراسة السوق والجمهور المستهدف'
              },
              { 
                step: '02', 
                title: 'التخطيط والاستراتيجية',
                description: 'نضع استراتيجية شاملة وخطة عمل مفصلة لتحقيق أهدافك'
              },
              { 
                step: '03', 
                title: 'التصميم والتطوير',
                description: 'ننفذ المشروع باستخدام أحدث التقنيات وأفضل الممارسات'
              },
              { 
                step: '04', 
                title: 'التطوير والتحسين',
                description: 'نقوم بالمتابعة المستمرة والتحسين المستمر للنتائج'
              }
            ].map((process, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="english-font text-black text-xl">{process.step}</span>
                  </div>
                  <h3 className="arabic-font text-lg text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="arabic-font text-gray-300 text-sm leading-relaxed">
                    {process.description}
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
            هل أعجبك ما رأيت؟
          </h2>
          <p className="arabic-font text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            ابدأ مشروعك التالي معنا واحصل على نتائج مماثلة أو أفضل
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-gray-800 text-white arabic-font text-lg px-8 py-6"
            >
              ابدأ مشروعك الآن
            </Button>
            <Button 
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white arabic-font text-lg px-8 py-6"
            >
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}