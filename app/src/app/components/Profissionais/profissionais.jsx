const profissionais = [
    {
      id: 1,
      nome: "Dra. Ana Silva",
      especialidade: "Clínica Geral",
      foto: "/ana-silva.jpg",
    },
    {
      id: 2,
      nome: "Dr. João Pereira",
      especialidade: "Cardiologista",
      foto: "/joao-pereira.jpg",
    },
    {
      id: 3,
      nome: "Dra. Mariana Souza",
      especialidade: "Dermatologista",
      foto: "/mariana-souza.jpg",
    },
  ];
  
  export default function Profissionais() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-cyan-900 mb-8 text-center">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profissionais.map(({ id, nome, especialidade, foto }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={foto}
                alt={nome}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-cyan-900">{nome}</h3>
              <p className="text-gray-600">{especialidade}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  