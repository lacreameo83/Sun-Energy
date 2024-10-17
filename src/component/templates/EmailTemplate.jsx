function EmailTemplate({ logo, location, address }) {
  return (
    <div className="flex  justify-center items-center gap-5">
      <div>
        <div className="hover:text-blue-100">{logo} </div>
      </div>
      <div className="hidden sm:flex flex-col justify-center items-center  ">
        <h2>{location}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default EmailTemplate;
