import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import TechCard from "../components/TechCard";

// Local Data
import data from "../yourData";
import Skills from "../components/Skills";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

 

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mob:mt-10">
        <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo} <br />
        </h1>
        <h2 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineThree}
        </h2>
        <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}
      >
        <h1 className="text-4xl text-bold">Projects</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-3 gap-4">
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              toGithub={() => window.open(project.gitURL)}
              toHosted={() => window.open(project.hostedURL)}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>


      <div className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-4xl text-bold">Languages</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-10 mob:grid-cols-5 laptop:grid-cols-12 gap-4">
          {data.languages.map((language, index) => (
            <TechCard
              key={index}
              imgSource={language.imgSrc}
              techName={language.techName}
            />
          ))}
        </div>
      </div>


      <div className="mt-40 mob:mt-12 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-4xl mob:mt-8 text-bold">Skills</h1>
        <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-3 gap-6">
          {data.skills.map((skill, index) => (
            <Skills key={index} skills={skill.skill} />
          ))}
        </div>
      </div>

      <div className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-4xl text-bold">Technologies</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-10 mob:grid-cols-5 laptop:grid-cols-12 gap-4">
          {data.technologies.map((tech, index) => (
            <TechCard
              key={index}
              imgSource={tech.imgSrc}
              techName={tech.techName}
            />
          ))}
        </div>
      </div>

      <div className="mt-40 mob:mt-12 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-4xl mob:mt-8 text-bold">Achievements.</h1>
        <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
          {data.achievements.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.title}
              description={service.description}
              validation={() => window.open(service.validation)}
            />
          ))}
        </div>
      </div>
      <div
        className="mt-40 mob:mt-20 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="text-4xl text-bold ">About.</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara}{" "}
          <Link href="https://twitter.com/ChiragDogra10">
            <a className="underline underline-offset-1">@Chirag Dogra</a>
          </Link>
        </p>
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-4xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://twitter.com/ChiragDogra10">
          <a className="underline underline-offset-1">Chirag Dogra</a>
        </Link>
      </h1>
    </div>
  );
}
