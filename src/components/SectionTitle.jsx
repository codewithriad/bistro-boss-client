const SectionTitle = ({ subHeading, Heading }) => {
  return (
    <div className="md:w-1/3 mx-auto text-center my-8">
      <p className="italic text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-4 py-6">{Heading}</h3>
    </div>
  );
};

export default SectionTitle;
