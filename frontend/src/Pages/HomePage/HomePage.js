import React from "react";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <>
      <MainCarousel /><br /><br />
      <div className="space-y-5 py-5 flex flex-col justify-center px-5 lg-px-10">
        {" "}
        <HomeSectionCarousel SectionName={"Women"}/>
        <HomeSectionCarousel SectionName={"beauty"}/>
        <HomeSectionCarousel SectionName={"Accessories"}/>
        <HomeSectionCarousel SectionName={"Decor"}/>
      </div>
    
    </>
  );
};

export default HomePage;
