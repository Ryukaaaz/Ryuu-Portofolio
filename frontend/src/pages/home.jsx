import { ThemeToggle } from "@/components/themeToggle"
import { StarBackground } from "@/components/starBackground"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/heroSection"
import { AboutMeSection } from "@/components/AboutMe"
import { SkillSection } from "@/components/SkillsSection"
import { ProjectSection } from "@/components/ProjectSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* {Theme Toggle} */}
        {/* <ThemeToggle/> */}

        {/* {Background Effects} */}
        <StarBackground/>

        {/* {NavBar} */}
        <Navbar/>


        {/* {Main Content} */}
        <HeroSection/>
        <AboutMeSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>


        {/* {Footer} */}
        <Footer/>

    </div>
}