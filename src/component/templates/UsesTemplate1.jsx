function UsesTemplate1({ Heading, Purpose, image, Link }) {
  return (
    <div className="h-[60vh] bg-white w-[20vw] rounded-lg my-8 shadow-lg">
      <div>
        <div className="h-[30vh]  font-[700] ">
          <h2 className="text-center my-[20px] text-[15px]">{Heading}</h2>
          <p>{Purpose}</p>
          <p>{Link}</p>
        </div>
        <div className="solargenarator shadow-lg h-[30vh] w-[20vw] ">
          <img
            className="h-[28vh] w-[25vw] shadow-md m-2 mx-auto object-cover"
            src={image}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default UsesTemplate1;
