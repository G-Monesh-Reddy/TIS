import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Academics from './components/Academics';
import WhyTIS from './components/WhyTIS';
import Facilities from './components/Facilities';
import StudentLife from './components/StudentLife';
import Testimonials from './components/Testimonials';
import AdmissionsCTA from './components/AdmissionsCTA';
import Contact from './components/Contact';

function App() {
  return (
    <MainLayout>
      {({ onOpenAdmission }) => (
        <>
          <Hero onOpenAdmission={onOpenAdmission} />
          <IntroSection />
          <Academics onOpenAdmission={onOpenAdmission} />
          <WhyTIS />
          <Facilities />
          <StudentLife />
          <Testimonials />
          <AdmissionsCTA onOpenAdmission={onOpenAdmission} />
          <Contact />
        </>
      )}
    </MainLayout>
  );
}

export default App;
