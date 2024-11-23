function ServiceTemplate({ img, title, uses }) {
  return (
    <div className="w-full  mt-8 lg:mt-0 relative shadow-lg flex flex-col items-center p-6 sm:w-[30%] md:w-[100%] bg-white rounded-lg">
      {/* Image Section */}
      <img
        className="h-16 w-16 rounded-full absolute top-[-12%] md:top-[-10%] border-2 border-teal-500 object-cover"
        src={img}
        alt={title}
      />

      {/* Title */}
      <h3 className="font-bold text-lg text-center mt-12 sm:mt-14 text-teal-700">
        {title}
      </h3>

      {/* Description */}
      <p className="text-justify text-sm sm:text-base lg:text-sm font-light mt-4 leading-relaxed text-gray-700">
        {uses}
      </p>
    </div>
  );
}

export default ServiceTemplate;
