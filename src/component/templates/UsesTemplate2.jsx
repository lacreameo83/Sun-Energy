function UsesTemplate2({ Heading, Purpose, image, Link }) {
  return (
    <div className="h-[60vh]   bg-[#f8fdfd] w-[20vw] rounded-lg my-8 shadow-lg">
      <div>
        <div className="solargenarator h-[30vh] w-[20vw]">
          <img
            className="h-[30vh] w-[30vw] mx-auto m-2 object-cover"
            src={image}
          />
        </div>
        <div className="p-5 font-[500] ">
          <h2 className="text-center my-[20px] text-[15px] font-[700] text-white">
            {Heading}
          </h2>
          <p>{Purpose}</p>
          <p>{Link}</p>
        </div>
      </div>
    </div>
  );
}

export default UsesTemplate2;
