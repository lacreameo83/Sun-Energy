function ServiceTemplate({ img, title, uses }) {
  return (
    <div className="w-[100%] mb-10 relative border-[1px] shadow-lg  h-[30vh] flex flex-col  items-center p-4 sm:w-[30%] ">
      {/* <div className="relative top-[-55px] h-[60px] w-[60px] rounded-full flex justify-center items-center  shadow-lg  bg-slate-500 "> */}
      <img
        className="text-[20px] h-[60px] w-[60px] rounded-full relative top-[-35px] "
        src={img}
      />
      {/* </div> */}

      <h3 className="font-[700] text-[15px]">{title}</h3>
      <p className="text-justify">{uses}</p>
    </div>
  );
}

export default ServiceTemplate;
