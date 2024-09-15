import { Footer } from "../components/Footer";
import { ReadyOption } from "../components/ReadyOption";

const sections = [
  {
    tailwindColor: "rgb(22, 75, 96,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Call Center",
    cssClass: "callCenter",
  },
  {
    tailwindColor: "rgb(228, 143, 69,0.8)",
    optionText: "HIRE PEOPLE",
    buttonText: "Data Entry",
    cssClass: "dataEntry",
  },
  {
    tailwindColor: "rgb(37, 67, 54,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Consultation",
    cssClass: "consulting",
  },
];

export function Home() {
  return (
    <>
      <div className="home flex ">
        {sections.map((values, index) => (
          <div className="w-1/3  h-lvh">
            <ReadyOption key={index} {...values} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
