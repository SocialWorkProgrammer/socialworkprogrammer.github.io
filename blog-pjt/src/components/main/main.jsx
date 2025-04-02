import React from "react";

// const를 사용해 함수형 컴포넌트를 선언할 수 있음.
// function Navbar와 비교했을 때, 호이스팅이 불가함(선언 후 사용해야 함)
// 그럼에도 컴포넌트를 그대로 재사용할 수 있으며, this가 없음
const Navbar = () => {
  return (
    <header className="bg-Midnight text-white shadow-md h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center w-full px-4">
        {/* 로고 */}
        <div className="text-2xl font-bold">
          <a href="#home">MyLogo</a>
        </div>

        {/* 네비게이션 링크 */}
        <nav className="space-x-10">
          <a href="#tech-stack" className="hover:text-gray-300 text-xl">
            Tech Stack
          </a>
          <a href="#projects" className="hover:text-gray-300 text-xl">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      // calc함수를 통해 크기를 계산할 수 있음(아래 calc의 경우 100vh에서 Navbar의 높이만큼 뺀 것임)
      className="bg-slate-500 h-[calc(100vh-4rem)] w-full flex items-center justify-center"
    >
      <h1 className="text-5xl text-white font-bold">Welcome to My Portfolio</h1>
    </section>
  );
};

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="bg-slate-600 h-screen w-full flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-white font-bold mb-6">Tech Stack</h2>
      <div className="flex space-x-10">
        <span className="text-white text-2xl">🚀 React</span>
        <span className="text-white text-2xl">🎨 Tailwind CSS</span>
        <span className="text-white text-2xl">💾 Node.js</span>
      </div>
    </section>
  );
};

const Project = ({ title, description, image, link }) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gray-700 text-white">
      <img
        src={image}
        alt={title}
        className="w-1/2 h-1/2 object-cover rounded-lg shadow-lg"
      />
      <h3 className="text-3xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-lg text-center max-w-2xl">{description}</p>
      <a
        href={link}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
      >
        View Project
      </a>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <Project
        title="Project 1"
        description="First project description"
        image="/project1.jpg"
        link="#"
      />
      <Project
        title="Project 2"
        description="Second project description"
        image="/project2.jpg"
        link="#"
      />
      <Project
        title="Project 3"
        description="Third project description"
        image="/project3.jpg"
        link="#"
      />
    </section>
  );
};

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
