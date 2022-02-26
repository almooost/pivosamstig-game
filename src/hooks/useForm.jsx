import { useCallback, useState } from "react";

const useForm = (callback) => {

    const [values, setValues] = useState([]);
    const [errors, setErrors] = useState([]);
    const [styleNext, setStyleNext] = useState({"display": "none"});

    const solutions = ["pivosamstig22","papajoes","papajoe's","papajoe","olivertwist","oliver","twist", "paddyreillys","paddyreilly","paddys","paddy","paddyreilly's","pivo","playboy","playboys","craftbeer","winchester"];

    const validate = (event, name, value) => {

        switch(name){
            case 'solution':
                if (!solutions.includes(value.toLowerCase().trim())){
                    //if (value.toLowerCase().trim() !== 'papajoes' && value.toLowerCase().trim() !== 'craftbeer'){
                    setErrors({
                        solution: 'Falsch'
                    })
                } else {
                    setErrors({});
                }
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
            setStyleNext({"display": "flex", "clear":"both"});
            event.target[2].style.setProperty("margin","auto","important");
            console.log(event);
            callback();
        } else {
            alert("Computer sagt nein!");
        }
    }

    const handleChange = (event) => {
        event.persist();
        event.preventDefault();

        let name = event.target.name;
        let value = event.target.value;

        validate(event, name, value);

        setValues({
            ...values,
            [name]:value
        })
    }

    return{values, errors, styleNext, handleChange, handleSubmit};
}

export default useForm;