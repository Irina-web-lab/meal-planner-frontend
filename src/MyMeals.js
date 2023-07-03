import { ImPencil, ImBin } from "react-icons/im";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div >
            <div className="element">
        <p>{text}</p>
        <div className="icons">
        <ImPencil onClick={updatingInInput} className="icon"></ImPencil>
        <ImBin onClick={deleteMeal} className="icon"></ImBin>
        </div>
        </div>
        </div>
    )
}

