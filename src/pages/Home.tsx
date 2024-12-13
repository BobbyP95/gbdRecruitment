import { Footer } from "../components/Footer";
import { ReadyOption } from "../components/ReadyOption";

const sections = [
  {
    id:1,
    tailwindColor: "rgb(22, 75, 96,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Call Center",
    cssClass: "callCenter",
    location: "/get_a_job"
  },
  {
    id:2,
    tailwindColor: "rgb(228, 143, 69,0.8)",
    optionText: "HIRE PEOPLE",
    buttonText: "Data Entry",
    cssClass: "dataEntry",
    location: "/recruiting"
  },
  {
    id:3,
    tailwindColor: "rgb(37, 67, 54,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Consultation",
    cssClass: "consulting",
    location: "/consulting"
  },
];

export function Home() {
  return (
    <>
      <div className="home flex flex-wrap w-full pt-20 ">
        {sections.map((values,index) => (
          <div key={index} className="sec-item  w-full h-96 md:w-1/3  md:h-lvh">
            <ReadyOption key={values.id}  {...values} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
