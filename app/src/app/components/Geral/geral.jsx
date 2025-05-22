export default function Geral() {
    return (
        <>
            <div className="relative">
                <img src="/medico5.jpg" className="w-full h-[450px] object-cover blur-sm" alt="Médico" />

                <div className="absolute inset-0 flex flex-col justify-center
                  px-6 sm:px-8 lg:px-20
                  text-white
                  lg:items-start lg:text-left
                  items-center text-left
                  top-0 bottom-0">
                    <h1 className="text-3xl font-semibold max-w-3xl mb-4">
                        Clínico Geral: Prevenção, Diagnóstico e Tratamento
                    </h1>
                    <p className="max-w-3xl text-lg leading-relaxed font-sans text-gray-100">
                        No Clínica Vida Plena, acreditamos que o cuidado integral é a base para uma vida plena e saudável. Nosso compromisso é entender suas necessidades de forma completa, prevenindo doenças, incentivando hábitos saudáveis e proporcionando o suporte essencial para seu bem-estar e recuperação rápida. Estamos aqui para cuidar de você com atenção e excelência em todas as etapas da sua saúde.
                    </p>
                </div>
            </div>

        </>
    )

}