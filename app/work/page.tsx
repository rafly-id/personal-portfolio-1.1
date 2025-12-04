import CardWork from "./components/CardWork";
import Title from "@/components/common/Title";

const Work = () => {
  return (
    <div className="mx-5 mt-50">
      <Title text="Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardWork
          imageSrc="/images/project-1.png"
          imageAlt="Project 1"
          title="Movie App"
          tech={["react", "tailwindcss"]}
          link="https://rafly-id-try-movie-app.vercel.app/"
          github="https://github.com/rafly-id/rafly_id_tryMovieApp"
        />
        <CardWork
          imageSrc="/images/project-2.png"
          imageAlt="Project 2"
          title="Zentry App Awwward"
          tech={["react", "gsap", "tailwindcss"]}
          link="https://rafly-id-awwward.vercel.app/"
          github="https://github.com/rafly-id/rafly_id_awwward"
        />
        <CardWork
          imageSrc="/images/project-3.png"
          imageAlt="Project 3"
          title="Portofolio 2024"
          tech={["react", "gsap", "tailwindcss"]}
          link="https://raf-personal-portfolio.vercel.app/"
          github="https://github.com/rafly-id/personal-portfolio"
        />
        <CardWork
          imageSrc="/images/project-4.png"
          imageAlt="Project 4"
          title="Todo List"
          tech={["html", "css", "javascript"]}
          link="https://id-camp-todoapps.vercel.app/"
          github="https://github.com/rafly-id/idCamp_todoapps"
        />
        <CardWork
          imageSrc="/images/project-5.png"
          imageAlt="Project 5"
          title="OnePiece"
          tech={["html", "css"]}
          link="https://web-client-uas-raflylucky.vercel.app/"
          github="https://github.com/rafly-id/WebClient-UAS"
        />
      </div>
    </div>
  );
};

export default Work;
