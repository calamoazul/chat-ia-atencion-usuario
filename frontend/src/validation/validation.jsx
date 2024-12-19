
import React from React


const errors = {

    "empty": {
        "error": "",
        "mssage": "El campo %s no puede estar vacío",
    },
    "html": {
        "error": "",
        "message": "No se permite preguntas con formato html"

    },
    "injection-sql": {
        "error": "",
        "message": "Pregunta no permitada"
    }
}

const findError = ({ model }) => {

}


const validation = () => {


        const userBox = document.querySelector(".userBox")
        userBox.addEventListener("change", function(evt) {

            if(userBox.validity.valueMissing) {
                userBox.setCustomValidity("Este campo el obligrio")
            }
            else {
                userBox.setCustomValidity("")
            }
        })
}


export default useValidation