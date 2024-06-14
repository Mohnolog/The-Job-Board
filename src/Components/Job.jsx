import Title from "./Title";
import Content from "./Content";
const Job = (props) => {
  //   console.log(props); // {module: "JavaScript"}

  return (
    <div className="jobSubContainer">
      <Title title={props.title} />
      <Content
        contractType={props.contractType}
        country={props.country}
        city={props.city}
      />
    </div>
  );
};

export default Job;
