import Job from "./Job";

const Jobs = (props) => {
  // l'argument props permet de récupérer les props transmises au composant via son parent !
  // Elles se présentent sous forme d'OBJET Javascript !!!
  console.log(props); // {module: 'JavaScript', name: 'Gwen', age: 34, color: 'magenta'}
  return (
    // <div style={{ color: props.color }}>
    <div
      style={{
        blockSize: "fit-content",
      }}
      className={props.className}
    >
      <Job
        title={props.title}
        contractType={props.contractType}
        country={props.country}
        city={props.city}
      />
    </div>
  );
};

export default Jobs;
