const SectionTitle = (props) => {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-4xl bg-primary p-1 rounded-sm">{props.heading}</h1>
      <p className="text-sm w-1/2">{props.paragraph}</p>
    </div>
  );
};

export default SectionTitle;
