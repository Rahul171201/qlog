const Description = ({ desc }) => {
  return <div dangerouslySetInnerHTML={{ __html: desc }}></div>;
};

export default Description;
