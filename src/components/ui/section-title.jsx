const SectionTitle = (props) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-primary p-1 sm:p-2 rounded-sm flex-shrink-0">
        {props.heading}
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-1/2 lg:w-2/3">
        {props.paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
