import { motion } from "framer-motion";

function Card({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col items-center text-center border border-blue-100"
    >
      <div className="bg-cyan-100 text-cyan-800 p-4 rounded-full mb-4 text-4xl transition-transform group-hover:scale-110">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold text-cyan-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function Especialidades() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-cyan-900 mb-10 text-center">
        Nossas Especialidades
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full max-w-4xl mx-auto my-10 px-4">
        <Card icon="fa-user-md" title="Clínico Geral" description="Atendimento completo e acompanhamento médico contínuo para todas as idades." />
        <Card icon="fa-baby" title="Pediatria" description="Especialistas em cuidar da saúde das crianças com carinho e atenção." />
        <Card icon="fa-bone" title="Ortopedia" description="Tratamentos eficazes para ossos, articulações e lesões musculares." />
        <Card icon="fa-heartbeat" title="Cardiologia" description="Diagnóstico e tratamento de doenças do coração e sistema circulatório." />
        <Card icon="fa-brain" title="Neurologia" description="Cuidado especializado para doenças do sistema nervoso e cerebral." />
        <Card icon="fa-tooth" title="Odontologia" description="Atendimento odontológico completo para saúde bucal." />
      
      </div>

    </main>
  );
}
