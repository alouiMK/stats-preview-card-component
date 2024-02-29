import HeaderDesktop from "../assets/image-header-desktop.jpg";
import HeaderMobile from "../assets/image-header-mobile.jpg";

const Card = () => {
  return (
    <div className="bg-DarkDesaturatedBlue flex max-[965px]:flex-col-reverse rounded-lg ">
      <div className="w-[30rem] py-12 pl-14 pr-16">
        <h1 className="text-White text-3xl font-inter font-bold">
          Get <span className="text-SoftViolet">insights</span> that help your
          business grow.
        </h1>
        <p className="text-SlightlyTransparentWhiteP text-sm font-inter font-normal mt-5">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex gap-10 mt-20">
          <div>
            <p className="text-White font-bold font-inter text-xl">10k+</p>
            <p className="font-lexendDeca font-extralight text-sm text-SlightlyTransparentWhiteH">
              COMPANIES
            </p>
          </div>
          <div>
            <p className="text-White font-bold font-inter text-xl">314</p>
            <p className="font-lexendDeca font-extralight text-sm text-SlightlyTransparentWhiteH">
              TEMPLATES
            </p>
          </div>
          <div>
            <p className="text-White font-bold font-inter text-xl">12M+</p>
            <p className="font-lexendDeca font-extralight text-sm text-SlightlyTransparentWhiteH">
              QUERIES
            </p>
          </div>
        </div>
      </div>
      <div className="relative inline-block">
        <div className="relative">
          <img
            src={HeaderDesktop}
            alt="header-desktop"
            className="max-w-[30rem]  rounded-r-lg max-[965px]:hidden"
          />
          <img
            src={HeaderMobile}
            alt="header-mobile"
            className="max-w-[30rem]  rounded-r-lg min-[965px]:hidden"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-SoftViolet opacity-55 rounded-r-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default Card;
