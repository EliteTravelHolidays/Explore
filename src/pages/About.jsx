import { Helmet } from "react-helmet-async"
import PageHeader from "../components/common/PageHeader"
import CompanyStory from "../components/about/CompanyStory"
import WhyChooseUs from "../components/about/WhyChooseUs"
import TeamSection from "../components/about/TeamSection"

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Elite Travels</title>
      </Helmet>
      <PageHeader
        title="About Us"
        subtitle="The story behind Elite Travels"
        breadcrumb="About"
      />
      <CompanyStory />
      <WhyChooseUs />
      <TeamSection />
    </>
  )
}

export default About
