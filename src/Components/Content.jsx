const Content = (props) => {
  return (
    <p>
      {props.contractType} - {props.country} - {props.city}
    </p>
  );
};

export default Content;
