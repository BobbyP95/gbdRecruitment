export function Footer() {
  return (
    <>
      <div className="  bg-gray-100 p-7 flex flex-wrap justify-around text-xl ">
        <div className="w-2/4 md:w-auto flex flex-col items-center">
          <img className="w-24 md:w-40" src="/gbd.svg" alt="Logo" />
          <h1 className="my-10 text-sm md:text-2xl font-extrabold text-emerald-950">
            GBD Company LTD
          </h1>
        </div>
        <div className="flex flex-col justify-start text-sm md:text-auto">
          <h1 className="font-bold">Company</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Blog</h3>
          </div>
        </div>
        <div className="flex flex-col justify-start text-sm md:text-auto ">
          <h1 className="font-bold" >Terms & Policies</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>Policies</h3>
          <h3>Terms of Use</h3>
          <h3>Code of Conduct</h3>
          <h3>Privacy</h3>
          </div>
        </div>
        <div className="flex flex-col justify-start text-sm">
          <h1 className="font-bold" >Follow Us</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>Policies</h3>
          <h3>Terms of Use</h3>
          <h3>Code of Conduct</h3>
          <h3>Privacy</h3>
          </div>
        </div>
      </div>
      <div className="bg-emerald-950 p-7 flex justify-around text-xl font-light items-center text-white ">
        <h2>Copyright © 2024 GBD Company LTD. All Rights Reserved</h2>
      </div>
    </>
  );
}
