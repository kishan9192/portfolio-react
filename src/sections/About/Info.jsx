export const SubTitle = () => {
  return (
    <h1 className="head-text sm:flex-1 sm:flex my-6 sm:text-start text-center">
      I'm a
      <span className="blue-gradient_text sm:text-start text-center flex flex-col font-semibold drop-shadow sm:ml-3">
        Full Stack Developer
      </span>
    </h1>
  );
};

export const NameTitle = () => {
  return (
    <h1 className="head-text flex sm:flex-1 my-4 sm:my-0 justify-center sm:justify-start">
      Hello, I'm
      <span className="blue-gradient_text font-semibold drop-shadow ml-3">
        Kishan
      </span>
    </h1>
  );
};

const Info = () => {
  return (
    <div className="text-slate-500 text-justify sm:text-start sm:mt-8">
      <p>
        I'm a full-stack developer at Innovaccer with over 3 years of
        experience. By day (and often night), I'm a frontend wizard,
        transforming the digital landscape with my expertise in React and
        JavaScript. I enjoy building dynamic, creative products from start to
        finish, focusing on developing intuitive experiences that continuously
        grow and improve based on user metrics. I've also written tech articles,
        sharing my passion and knowledge with the community. When I'm not
        coding, you’ll find me strumming my guitar or trekking up mountains.
        Code, strum, hike, repeat!
      </p>
    </div>
  );
};

export default Info;
