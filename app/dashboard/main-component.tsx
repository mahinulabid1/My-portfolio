import {
  HeroSection,
  AboutSection,
  EducationSection,
  ServicesSection,
  SkillsSection,
  ProjectsSection,
  BlogSection,
  SectionCounter,
  AvailableForSection,
  ExperienceSection,
} from "@/app/dashboard";

export const Main = () => {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      {/*<ServicesSection />*/}
      {/*<SkillsSection />*/}
      <ProjectsSection />
      <BlogSection />
      {/*<SectionCounter />*/}
      <div>
        <AvailableForSection />
      </div>
      {/*<AvailableForSection />*/}
    </>
  )
}
