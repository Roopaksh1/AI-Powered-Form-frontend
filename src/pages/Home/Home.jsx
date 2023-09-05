import section1 from '../../assets/images/section1.png';
import section2 from '../../assets/images/section2.png';
import section3 from '../../assets/images/section3.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="font-Roboto text-white">
      <section className="bg-home-section1-bg px-10 py-10 lg:px-0 lg:flex-row flex flex-col items-center">
        <div className="lg:w-[50%]">
          <img
            src={section1}
            alt=" "
            className="w-[20rem] md:w-[30rem] flex-shrink-0 lg:ml-auto lg:pr-10"
          />
        </div>
        <div className="lg:w-[45%]">
          <div className="flex flex-col justify-between mt-10 items-center lg:items-start lg:mt-0 lg:mr-auto">
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
        </div>
      </section>
      <section className="bg-home-section2-bg px-10 py-10 lg:flex-row lg:gap-10 text-black  flex flex-col items-center">
        <div>
          <img
            src={section2}
            alt=" "
            className="h-[20rem] md:h-[30rem] flex-shrink-0 lg:hidden"
          />
        </div>
        <div className="lg:w-[50%]">
          <div className="lg:ml-auto lg:w-[70%]">
            <h2 className="font-bold text-xl lg:text-3xl md:text-2xl text-center lg:text-start mt-10 lg:mt-0">
              Get Results
            </h2>
            <p className="text-sm text-center lg:text-start md:text-xl lg:text-xl mt-4">
              Receive your results in real-time with email notifications. Export
              your results or integrate them with third party services and
              payment processors. Securely share stylish reports featuring
              tables and charts.
            </p>
          </div>
        </div>
        <div className="lg-w-[45%]">
          <img
            src={section2}
            alt=" "
            className="h-[20rem] md:h-[30rem] flex-shrink-0 hidden lg:block lg:pl-10 lg:mr-auto"
          />
        </div>
      </section>
      <section className="bg-home-section3-bg px-10 py-10 lg:flex-row lg:gap-10 text-black  flex flex-col items-center">
        <div className="lg:w-[50%]">
          <img
            src={section3}
            alt=" "
            className="w-[20rem] md:w-[30rem] flex-shrink-0 lg:ml-auto lg:pr-10"
          />
        </div>
        <div className="lg:w-[45%]">
          <h2 className="font-bold text-xl lg:text-3xl md:text-2xl text-center lg:text-start mt-10 lg:mt-0 lg:mr-auto">
            Get Results
          </h2>
          <p className="text-sm text-center lg:text-start md:text-xl lg:text-xl mt-4 lg:mr-auto">
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
