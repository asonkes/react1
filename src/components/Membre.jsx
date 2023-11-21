// raccourci "sfc"
const Membre = ({ nom, children, age }) => {
  //const nom = props.nom;
  // const children = props.children;

  // const { nom, children } = props;
  return (
    <>
      <h2>
        Membre : {nom.toUpperCase()} age: {age}
      </h2>
      {children ? <p>{children}</p> : null}
    </>
  );
};

// raccourci "sfc"export de
export default Membre;
