import Affichage from "./Affichage";
import Button from "./Button"

const Membre = ({nom, children, age, handleChange, hideName, plus, handleClick}) => {
    // const nom = props.nom
    // const children = props.children
    // const {nom, children} = props
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>
            <Button 
                plus={plus}
                veillir={handleClick}
            />
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;