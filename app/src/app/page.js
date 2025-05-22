'use client';

import { motion } from "framer-motion";

import Header from "./components/Header/header";
import Especialidades from "./components/Especialidades/especialidades";
import Geral from './components/Geral/geral'
import Testemunhas from "./components/Testemunhas/testemunhas";
import Profissionais from "./components/Profissionais/profissionais";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="banner relative">
        <img
          src="/medico3.jpg"
          alt="Banner"
          className="w-full h-[450px] object-cover"/>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block absolute top-60 right-30 transform -translate-y-1/2 text-white text-3xl max-w-3xl font-semibold text-center px-4">
          Bem-vindo à Clínica Vida Plena — cuidando da sua saúde com carinho e excelência.
        </motion.p>
        <Especialidades />
        <Geral/>
        <Profissionais/>
        <Testemunhas />
      </div>
    </>

  );
}
