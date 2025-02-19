const Description = ({ description }) => {
  const parts = description.split(/(\*.*?\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <span key={index} className="font-bold">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );

  return (
    <div className="text-sm font-light max-w-full text-pretty text-muted-foreground">
      {parts}
    </div>
  );
};

export default Description;
