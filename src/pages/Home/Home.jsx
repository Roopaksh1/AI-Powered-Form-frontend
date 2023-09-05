import section1 from '../../assets/images/section1.png';
import section3 from '../../assets/images/section3.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="font-Roboto text-white">
      <section className="bg-home-section1-bg px-10 lg:px-36 py-10 lg:flex-row lg:gap-10 flex flex-col items-center lg:items-start">
        <img
          src={section1}
          alt=" "
          className="w-[20rem] md:w-[30rem] flex-shrink-0"
        />
        <div className="flex flex-col justify-between mt-10 items-center lg:items-start lg:mt-0">
          <h2 className="text-xl md:text-2xl text-center lg:text-start lg:text-3xl">
            Easily create professional online forms, surveys and workflows!
          </h2>
          <Link
            to={'/dashboard'}
            className="bg-[#ffbe46] hover:bg-[#e9b85f] py-2 px-4 text-black w-fit mt-4"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="bg-home-section2-bg px-10 lg:px-36 py-10 lg:flex-row lg:gap-10 text-black  flex flex-col items-center lg:items-start">
        {/* TODO */}
      </section>
      <section className="bg-home-section3-bg px-10 lg:px-36 py-10 lg:flex-row lg:gap-10 text-black  flex flex-col items-center lg:items-start">
        <img
          src={section3}
          alt=" "
          className="w-[20rem] md:w-[30rem] flex-shrink-0"
        />
        <div>
          <h2 className="font-bold text-xl lg:text-3xl md:text-2xl text-center mt-10 lg:text-start">
            Get Results
          </h2>
          <p className="text-sm text-center lg:text-start md:text-xl lg:text-xl mt-4">
            Receive your results in real-time with email notifications. Export
            your results or integrate them with third party services and payment
            processors. Securely share stylish reports featuring tables and
            charts.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
