import "./index.css"
export default function Card({data}){
    return(
        <>
            {data.map((dataPessoa, index)=>
                <div className="card" key={index}>
                    <div className="card__header">
                        <h2>{dataPessoa.userName}</h2>
                        <p>Nome de usuário</p>
                    </div>

                    <div className="card__body">
                        <div className="card__col-left">
                            <h3 className="card__col-left-title">Nome completo</h3>
                            <h3 className="card__col-left-title">Telefone</h3>
                            <h3 className="card__col-left-title">Endereço residencial</h3>
                            <h3 className="card__col-left-title">Endereço de Email</h3>
                            <h3 className="card__col-left-title">Confirmação de Email</h3>
                            <h3 className="card__col-left-title">Senha</h3>
                            <h3 className="card__col-left-title">Confirmação de senha</h3>
                        </div>

                        <div className="card__col-right">
                            <p className="card__col-right-description">{dataPessoa.fullName}</p>
                            <p className="card__col-right-description">{dataPessoa.cellphone}</p>
                            <p className="card__col-right-description">{dataPessoa.homeAddress}</p>
                            <p className="card__col-right-description">{dataPessoa.emailAdress}</p>
                            <p className="card__col-right-description">{dataPessoa.confirmEmail}</p>
                            <p className="card__col-right-description">{dataPessoa.password}</p>
                            <p className="card__col-right-description">{dataPessoa.confirmPassword}</p>
            
                        </div>
                      
                    </div>

                </div>
        
            )}
        </>

    )
}