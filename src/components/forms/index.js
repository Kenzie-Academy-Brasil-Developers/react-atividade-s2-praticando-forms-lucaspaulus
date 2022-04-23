import "./index.css"
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";

export default function Form({display, exit, data, setData}){
    const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/
  
    const formSchema = yup.object().shape({
        userName: yup.string().required("Nome de Usuário é obrigatório").max(18, "Quantidade de caracteres excedido"),
        fullName: yup.string().required("Nome Completo é obrigatório"),
        cellphone: yup.string().required("Telefone é obrigatório").matches(phoneNumber, "Telefone invalido"), 
        homeAddress: yup.string().required("Endereço residencial é obrigatório"),
        emailAdress: yup.string().required("Endereço de email é obrigatório").email("Email é invalido"),

        confirmEmail: yup.string().required("Confirmar email é obrigatório").email("Email é invalido")
        .oneOf([yup.ref("emailAdress"),null], "O email precisa ser igual"),

        password: yup.string().required("Senha é obrigatório")
        .matches("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$", "Senha fraca"),

        confirmPassword: yup.string().required("Confirmar senha é obrigatório")
        .oneOf([yup.ref("password"),null], "A senha precisa ser igual"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitfunc = (Data) => {

        setData([...data,Data])
        
    }
        
    return(
        <div className={`modal ${display}`}>
            <form className="form" onSubmit={handleSubmit(onSubmitfunc)} >
                <div className="form__header">
                    <p className="form__header-exitBtn" onClick={exit}>X</p>
                    <h2 className="form__header-title">Cadastro<span> de usuário </span></h2>
                </div>
                
                <div className="form__body">
                    <input  className={errors.userName? "FocusError" : "FocusNoError"} 
                    placeholder="Nome de usuário*" {...register("userName")} />
                    <p className="msg-error">
                        {errors.userName?.message}
                    </p>
                    
                    <input  className={errors.fullName? "FocusError" : "FocusNoError"} 
                    placeholder="Nome completo*" {...register("fullName")}/>
                    <p className="msg-error">
                        {errors.fullName?.message}
                    </p>

                    <input className={errors.cellphone? "FocusError" : "FocusNoError"} 
                    placeholder="Telefone* Ex: (99) 99999-9999" {...register("cellphone")}/>
                    <p className="msg-error">
                        {errors.cellphone?.message}
                    </p>
                    <input className={errors.homeAddress? "FocusError" : "FocusNoError"} 
                    placeholder="Endereço residencial*" {...register("homeAddress")}/>
                    <p className="msg-error">
                        {errors.homeAddress?.message}
                    </p>
                    
                    <input className={errors.emailAdress? "FocusError" : "FocusNoError"} 
                    placeholder="Endereço de Email*" {...register("emailAdress")}/>
                    <p className="msg-error">
                        {errors.emailAdress?.message}
                    </p>

                    <input className={errors.confirmEmail? "FocusError" : "FocusNoError"} 
                    placeholder="Confirme seu Email*" {...register("confirmEmail")}/>
                    <p className="msg-error">
                        {errors.confirmEmail?.message}
                    </p>

                    <div className="form__password">
                        <div className="form__password-col">
                            <input className={errors.password? "FocusError" : "FocusNoError"} 
                            placeholder="Senha*" {...register("password")}/>
                            <p className="msg-error">
                            {errors.password?.message}
                            </p>
                        </div>
                            
                        <div className="form__password-col">
                            <input className={errors.confirmPassword? "FocusError" : "FocusNoError"} 
                            placeholder="Confirme sua senha*" {...register("confirmPassword")}/>
                            <p className="msg-error">
                            {errors.confirmPassword?.message}
                            </p>
                        </div>
                        
                    </div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}