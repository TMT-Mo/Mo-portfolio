import Container from "../UI/Container/Container";

const Project = ({ className, projectList }) => {
  return (
    <>
      {projectList.map((project) => (
        <section id={project.id} className='carousel-item w-full'>
          <Container
            className={`flex flex-col px-6 space-y-12 mt-36 items-center `}
          >
            <div data-aos="fade-up" className="flex justify-center">
              <div className="rounded-xl flex flex-col border-2 border-gray-700 shadow-md items-center w-full shadow-slate-400 space-y-6 p-6 transition duration-700 hover:scale-105 hover:shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
                <a href={project.address}>
                  <img src={project.img} className="rounded-xl " alt="" />
                </a>
                <span className="text-sky-500 text-2xl font-bold relative flex justify-center after:absolute after:w-1/2 after:bg-sky-500 after:h-1 after:mt-12">
                  {project.title}
                </span>
                <p className="text-gray-400 text-lg text-justify pt-6">
                  {project.description}
                </p>
                <div className="flex flex-col items-center w-full md:flex-row">
                  <div className="flex flex-row justify-around w-full">
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[0]}
                    </span>
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[1]}
                    </span>
                  </div>
                  <div className="flex flex-row justify-around w-full">
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[2]}
                    </span>
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[3]}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly w-full">
                  <a
                    href={project.github}
                    className="py-2 px-4 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                  <a
                    href={project.address}
                    className="py-2 px-6 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};

export default Project;
