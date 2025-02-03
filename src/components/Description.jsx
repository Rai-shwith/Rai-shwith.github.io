const Description = ({ description,normalClassNames, specialClassName }) => {
  const parts = description.split(/(\*.*?\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <span key={index} className={specialClassName}>
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );

  return (
    <p className={normalClassNames}>
      {parts}
    </p>
  );
};

export default Description;
