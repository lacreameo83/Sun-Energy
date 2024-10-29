function ServiceTemplate({ img, title, uses }) {
  return (
    <div className="w-[100%]  relative  shadow-lg  sm:h-[37vh] flex flex-col  items-center p-4 sm:w-[30%] bg-[#fffff9] rounded-[12px] ">
      {/* <div className="relative top-[-55px] h-[60px] w-[60px] rounded-full flex justify-center items-center  shadow-lg  bg-slate-500 "> */}
      <img
        className=" h-[70px] w-[70px] rounded-full absolute top-[-15%] "
        src={img}
      />
      {/* </div> */}

      <h3 className="font-[700] text-[15px] mt-10">{title}</h3>
      <p className="text-justify font-[300]">{uses}</p>
    </div>
  );
}

export default ServiceTemplate;
