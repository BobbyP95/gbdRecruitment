export function Footer() {
  return (
    <>
      <div className="  bg-gray-100 p-7 flex flex-wrap justify-between text-xl  md:justify-around">
        <div className="w-2/4 md:w-auto flex flex-col items-center">
          <img className="w-24 md:w-40" src="/gbd.svg" alt="Logo" />
          <h1 className="my-10 text-sm md:text-2xl font-extrabold text-emerald-950">
            GBD Company LTD
          </h1>
        </div>

        <div className="flex flex-col mx-1 justify-start text-sm md:text-xl">
          <h1 className="font-bold">Company</h1>
          <div className=" mt-3 flex flex-col text-center gap-2" >
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          </div>
        </div>
        <div className="flex flex-col mx-1 justify-start text-sm md:text-lg ">
          <h1 className="font-bold" >Terms & Policies</h1>
          <div className=" mt-3 flex flex-col text-center gap-2" >
          <a href="">Policies</a>
          <a href="">Terms of Use</a>
          <a href="">Code of Conduct</a>
          <a href="">Privacy</a>
          </div>
        </div>
        <div className="flex flex-col justify-start text-sm md:text-xl">
          <h1 className="font-bold" >Follow Us</h1>
          <div className=" mt-3 flex flex-col text-center gap-2" >
          <a href="">Policies</a>
          <a href="">Terms of Use</a>
          <a href="">Code of Conduct</a>
          <a href="">Privacy</a>
          </div>
        </div>
      </div>
      <div className="bg-emerald-950 p-7 flex justify-around text-xl font-light items-center text-white ">
        <h2>Copyright © 2024 GBD Company LTD. All Rights Reserved</h2>
      </div>
    </>
  );
}
