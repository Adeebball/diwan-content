import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Set document direction to RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Load Google Fonts for Arabic typography
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Update page title and meta description based on current page
  useEffect(() => {
    const pageInfo = {
      home: {
        title: 'ديوان المحتوى – وكالة تسويق رقمي وإنتاج محتوى إبداعي',
        description: 'ديوان المحتوى – وكالة متخصصة في التسويق الرقمي، إنتاج المحتوى الإبداعي، وتصميم البرمجيات.'
      },
      about: {
        title: 'تعرف على ديوان المحتوى – خبراء التسويق الرقمي والمحتوى الإبداعي',
        description: 'ديوان المحتوى – خبراء التسويق الرقمي وإنتاج المحتوى الإبداعي. نروي قصتك بطريقة جذابة وفعالة.'
      },
      services: {
        title: 'خدمات ديوان المحتوى – تسويق رقمي، محتوى إبداعي وتصميم برمجي',
        description: 'اكتشف خدمات ديوان المحتوى في التسويق الرقمي، إنتاج المحتوى الإبداعي، وتصميم المواقع والتطبيقات.'
      },
      portfolio: {
        title: 'مشاريع ديوان المحتوى – أمثلة على أعمالنا الرقمية',
        description: 'شاهد مشاريع ديوان المحتوى في التسويق الرقمي والمحتوى الإبداعي وتصميم المواقع.'
      },
      testimonials: {
        title: 'آراء العملاء عن ديوان المحتوى',
        description: 'آراء العملاء عن ديوان المحتوى – خبرة التسويق الرقمي والمحتوى الإبداعي التي تركت أثرًا ملموسًا.'
      },
      contact: {
        title: 'تواصل مع ديوان المحتوى – ابدأ مشروعك الرقمي اليوم',
        description: 'تواصل مع ديوان المحتوى لتحويل أفكارك إلى محتوى رقمي جذاب.'
      }
    };

    const info = pageInfo[currentPage as keyof typeof pageInfo];
    if (info) {
      document.title = info.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', info.description);

      // Add other SEO meta tags
      const metaTags = [
        { name: 'keywords', content: 'تسويق رقمي، محتوى إبداعي، تصميم مواقع، تطبيقات، الرياض، السعودية' },
        { name: 'author', content: 'ديوان المحتوى' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: info.title },
        { property: 'og:description', content: info.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ar_SA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: info.title },
        { name: 'twitter:description', content: info.description }
      ];

      metaTags.forEach(tag => {
        const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
        let metaTag = document.querySelector(selector);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          if (tag.name) {
            metaTag.setAttribute('name', tag.name);
          } else if (tag.property) {
            metaTag.setAttribute('property', tag.property);
          }
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', tag.content);
      });
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative overflow-hidden">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}