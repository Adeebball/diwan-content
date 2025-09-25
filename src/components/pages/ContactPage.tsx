import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@diwanalmohattawa.com',
      description: 'راسلنا في أي وقت'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 50 123 4567',
      description: 'متاح من السبت إلى الخميس'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      description: 'مكتبنا الرئيسي'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: '9:00 ص - 6:00 م',
      description: 'من السبت إلى الخميس'
    }
  ];

  const services = [
    'التسويق الرقمي',
    'إنتاج المحتوى الإبداعي',
    'تصميم وبرمجة المواقع',
    'تطوير التطبيقات',
    'استراتيجيات العلامة التجارية',
    'تحسين محركات البحث',
    'إدارة وسائل التواصل الاجتماعي',
    'استشارة تقنية'
  ];

  const budgetRanges = [
    'أقل من 10,000 ريال',
    '10,000 - 25,000 ريال',
    '25,000 - 50,000 ريال',
    '50,000 - 100,000 ريال',
    'أكثر من 100,000 ريال'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <Card className="bg-black border-orange-500/20 max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="text-orange-500 mx-auto mb-4" size={64} />
            <h2 className="arabic-font text-2xl text-white mb-4">
              تم إرسال رسالتك بنجاح!
            </h2>
            <p className="arabic-font text-white/80 leading-relaxed">
              شكراً لتواصلك معنا. سنقوم بالرد عليك خلال 24 ساعة.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="arabic-font text-4xl md:text-5xl text-white mb-6">
            تواصل مع ديوان المحتوى – ابدأ مشروعك الرقمي اليوم
          </h1>
          <p className="arabic-font text-xl text-gray-300 leading-relaxed">
            نحن هنا لمساعدتك على تحويل أفكارك إلى محتوى رقمي مؤثر. تواصل معنا للحصول على استشارة مجانية أو لبدء مشروعك القادم.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-[#1a1a1a] border-gray-700 text-center hover:border-[#2ed3ea] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#2ed3ea] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} className="text-black" />
                    </div>
                    <h3 className="arabic-font text-lg text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="english-font text-[#2ed3ea] mb-2">
                      {info.value}
                    </p>
                    <p className="arabic-font text-sm text-gray-400">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="arabic-font text-3xl text-white mb-8">
                أرسل لنا رسالة
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="arabic-font text-white">
                      الاسم الكامل *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-[#2a2a2a] border-gray-600 text-white arabic-font"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="arabic-font text-white">
                      البريد الإلكتروني *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-[#2a2a2a] border-gray-600 text-white english-font"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="arabic-font text-white">
                    رقم الهاتف
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-[#2a2a2a] border-gray-600 text-white english-font"
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="arabic-font text-white">
                      الخدمة المطلوبة *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-[#2a2a2a] border-gray-600 text-white arabic-font">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#2a2a2a] border-gray-600">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="arabic-font text-white hover:bg-[#2ed3ea] hover:text-black">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="arabic-font text-white">
                      الميزانية المتوقعة
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-[#2a2a2a] border-gray-600 text-white arabic-font">
                        <SelectValue placeholder="اختر الميزانية" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#2a2a2a] border-gray-600">
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range} className="arabic-font text-white hover:bg-[#2ed3ea] hover:text-black">
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="arabic-font text-white">
                    تفاصيل المشروع *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-[#2a2a2a] border-gray-600 text-white arabic-font resize-none"
                    placeholder="أخبرنا عن مشروعك، أهدافك، والنتائج التي تريد تحقيقها..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2ed3ea] hover:bg-[#25b8d1] text-black arabic-font text-lg py-6"
                >
                  إرسال الرسالة
                  <Send className="mr-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="arabic-font text-3xl text-white mb-8">
                لماذا تختار ديوان المحتوى؟
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'استشارة مجانية',
                    description: 'نقدم استشارة مجانية لفهم احتياجاتك ووضع الخطة المناسبة'
                  },
                  {
                    title: 'فريق متخصص',
                    description: 'خبراء في مختلف مجالات التسويق الرقمي والتصميم والبرمجة'
                  },
                  {
                    title: 'نتائج مضمونة',
                    description: 'نركز على تحقيق نتائج ملموسة وقابلة للقياس'
                  },
                  {
                    title: 'دعم مستمر',
                    description: 'نقدم دعماً متواصلاً حتى بعد انتهاء المشروع'
                  },
                  {
                    title: 'أسعار تنافسية',
                    description: 'حلول احترافية بأسعار مناسبة لجميع الميزانيات'
                  },
                  {
                    title: 'سرعة في التنفيذ',
                    description: 'نلتزم بالمواعيد المحددة ونسلم المشاريع في الوقت المناسب'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#2ed3ea] rounded-full flex-shrink-0 mt-1 ml-4">
                      <div className="w-3 h-3 bg-black rounded-full m-1.5"></div>
                    </div>
                    <div>
                      <h3 className="arabic-font text-lg text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="arabic-font text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Methods */}
              <div className="mt-12 p-6 bg-[#2a2a2a] rounded-xl">
                <h3 className="arabic-font text-xl text-white mb-4">
                  طرق أخرى للتواصل
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="text-[#2ed3ea] ml-3" size={20} />
                    <span className="english-font text-gray-300">info@diwanalmohattawa.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[#2ed3ea] ml-3" size={20} />
                    <span className="english-font text-gray-300">+966 50 123 4567</span>
                  </div>
                </div>
                <p className="arabic-font text-sm text-gray-400 mt-4">
                  يمكنك التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني للحصول على رد سريع
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-[#2a2a2a] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="arabic-font text-3xl text-white mb-4">
              موقعنا
            </h2>
            <p className="arabic-font text-gray-300">
              يمكنك زيارتنا في مكتبنا الرئيسي بالرياض
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-[#2ed3ea] mx-auto mb-4" size={48} />
              <h3 className="arabic-font text-xl text-white mb-2">
                الرياض، المملكة العربية السعودية
              </h3>
              <p className="arabic-font text-gray-300">
                خريطة تفاعلية - قريباً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="arabic-font text-3xl text-white mb-4">
              أسئلة شائعة
            </h2>
            <p className="arabic-font text-gray-300">
              إجابات على أكثر الأسئلة شيوعاً
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'كم يستغرق الرد على استفساري؟',
                answer: 'نحن نرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى، وعادة ما نرد خلال ساعات قليلة.'
              },
              {
                question: 'هل الاستشارة الأولى مجانية؟',
                answer: 'نعم، نقدم استشارة مجانية لمدة 30 دقيقة لفهم احتياجاتك ووضع الخطة المناسبة.'
              },
              {
                question: 'ما هي المعلومات التي أحتاج لتقديمها؟',
                answer: 'نحتاج معرفة نوع الخدمة المطلوبة، أهدافك، الميزانية المتوقعة، والجدول الزمني المرغوب.'
              },
              {
                question: 'هل يمكنني تتبع تقدم مشروعي؟',
                answer: 'بالطبع! نوفر نظام متابعة مفصل يمكنك من خلاله تتبع جميع مراحل المشروع.'
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
    </div>
  );
}