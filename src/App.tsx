import CtaBlock from './components/CtaBlock'
import Header from './components/Header'
import Title from './components/Title'
import CaseStudies from './sections/CaseStudies'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import LogoCarousel from './sections/LogoCarousel'
import Processes from './sections/Processes'
import Services from './sections/Services'
import Team from './sections/Team'
import Testamonials from './sections/Testimonials'

export default function App() {
  return (
    <div className="p-25 pb-0">
      <header className="mb-30">
        <Header />
      </header>   
 
      <section className="flex flex-col gap-10 mb-30">
        <Hero />
        <LogoCarousel logos={["src/assets/companies/zoom.png", "src/assets/companies/notion.png", "src/assets/companies/netflix.png", "src/assets/companies/hubspot.png", "src/assets/companies/amazon.png", "src/assets/companies/dribbble.png"]} />
      </section>
      
      <section className="flex flex-col gap-10 mb-30">
        <Title title="Services" desc="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <Services />
      </section>
      
      <section className="mb-30">
        <CtaBlock illustrationSrc="src/assets/cta_illustration.png" />
      </section>
      
      <section className="flex flex-col gap-10 mb-30">
        <Title title="Case Studies" desc="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"/>
        <CaseStudies studies={[
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
]} />
      </section>

      <section className="flex flex-col gap-10 mb-30">
        <Title title="Our Working Process" desc="Step-by-Step Guide to Achieving Your Business Goals"/>
        <Processes processes={[
  {
    number: "01",
    title: "Consultation",
    desc:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    desc:
      "We conduct in-depth market and competitor research to identify opportunities and gaps. Based on these insights, we develop a tailored strategy that aligns with your business goals and sets a clear roadmap for success.",
  },
  {
    number: "03",
    title: "Implementation",
    desc:
      "Our team executes the agreed-upon strategy across the relevant channels, ensuring every task is delivered on time and to the highest standard. We coordinate closely with your team to keep everything running smoothly.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    desc:
      "We continuously track the performance of your campaigns using key metrics and analytics. Based on the data, we refine and optimize our approach to maximize results and improve return on investment.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    desc:
      "You receive regular reports that clearly outline progress, results, and insights. We maintain open communication so you always know what's happening and can provide feedback at every stage.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    desc:
      "We treat every project as an ongoing journey. By analyzing outcomes and staying up to date with industry trends, we keep refining our strategies to ensure your business keeps growing over time.",
  },
]} />
      </section>

      <section className="flex flex-col gap-10 mb-30">
        <Title title="Team" desc="Meet the skilled and experienced team behind our successful digital marketing strategies"/>
        <Team members={[
  {
    id: "john-smith",
    image: "https://picsum.photos/id/106/103",
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    socialIcon: "https://picsum.photos/id/34/34",
  },
  {
    id: "jane-doe",
    image: "https://picsum.photos/id/103/103",
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    socialIcon: "https://picsum.photos/id/34/34",
  },
  {
    id: "michael-brown",
    image: "https://picsum.photos/id/103/103",
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    socialIcon: "https://picsum.photos/id/34/34",
  },
  {
    id: "emily-johnson",
    image: "https://picsum.photos/id/103/103",
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    socialIcon: "https://picsum.photos/id/34/34",
  },
  {
    id: "brian-williams",
    image: "https://picsum.photos/id/103/103",
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    socialIcon: "https://picsum.photos/id/34/34",
  },
  {
    id: "sarah-kim",
    image: "https://picsum.photos/id/103/103",
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    socialIcon: "https://picsum.photos/id/34/34",
  },
]} />
      </section>

      <section className="flex flex-col gap-10 mb-30">
        <Title title="Testamonials" desc="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"/>
        <Testamonials testimonials={[
          {
    id: "t1",
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: "t2",
    quote:
      "Positivus transformed our digital strategy completely. Their data-driven approach helped us double our conversion rate in just six months, and their team feels like an extension of ours. We couldn't be happier with the results.",
    name: "Sarah Johnson",
    role: "CEO at BrightWave",
  },
  {
    id: "t3",
    quote:
      "Working with Positivus has been a game changer for our business. Their SEO expertise put us on the first page for our key terms, and their ongoing reporting keeps us confident that every dollar is working hard.",
    name: "Michael Chen",
    role: "Founder at NextGen Retail",
  },
  {
    id: "t4",
    quote:
      "The team at Positivus is exceptional. They listen, they iterate, and they deliver. Our social media engagement is up 300% and our online sales are climbing every quarter.",
    name: "Emily Rodriguez",
    role: "CMO at Urban Threads",
  },
  {
    id: "t5",
    quote:
      "Positivus brought clarity to our marketing efforts. Their strategic guidance and hands-on execution helped us reach audiences we'd never tapped into before. Highly recommended.",
    name: "David Park",
    role: "VP of Growth at Lumen Labs",
  },
        ]} />
      </section>

      <section className="flex flex-col gap-10 mb-30">
        <Title title="Contact Us" desc="Connect with Us: Let's Discuss Your Digital Marketing Needs"/>
        <Contact />
      </section>

      <Footer />
    </div>
  )
}