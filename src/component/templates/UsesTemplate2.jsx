function UsesTemplate2({ Heading, Purpose, image, Link }) {
  return (
    <div className="h-[60vh]   bg-[#f8fdfd] w-[20vw] rounded-lg my-8 ">
      <div>
        <div className="solargenarator h-[30vh] w-[20vw]">
          <img
            className="h-[30vh] w-[30vw] mx-auto m-2 object-cover"
            src={image}
          />
        </div>
        <div className="p-5 font-[500] ">
          <h2 className="text-center my-1 text-[15px] font-[600] text-white">
            {Heading}
          </h2>
          <p className="text-[10px]">{Purpose}</p>
          <p>{Link}</p>
        </div>
      </div>
    </div>
  );
}

export default UsesTemplate2;
