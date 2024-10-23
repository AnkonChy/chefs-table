import img from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center rounded "
      style={{
        backgroundImage: `url(${img})`,
        height: "700px",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center text-white px-8 py-32 space-y-10">
        <h1 className="text-6xl font-bold w-4/6">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg w-7/12">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-3">
          <button className="btn">Explore Now</button>
          <button className="btn">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
