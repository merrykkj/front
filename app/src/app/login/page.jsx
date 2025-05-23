'use client';

import { useState } from 'react';

export default function Login() {
  const [tipo, setTipo] = useState(null);
  const [modoPaciente, setModoPaciente] = useState('login');

  const voltar = () => {
    setTipo(null);
    setModoPaciente('login');
  };

  const Botao = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={
        `w-full py-3 px-6 cursor-pointer bg-cyan-700 text-white rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300 font-semibold text-lg ` +
        className
      }
    >
      {children}
    </button>
  );

  const Input = ({ placeholder }) => (
    <input
      type={placeholder.toLowerCase().includes('senha') ? 'password' : 'text'}
      placeholder={placeholder}
      className="w-full p-3 mb-5 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:border-cyan-500 transition duration-300"
    />
  );

  const renderFormulario = () => {
    if (tipo === 'paciente') {
      return (
        <div className="flex flex-col">
          <div className="flex gap-4 mb-6">
            <Botao onClick={() => setModoPaciente('login')} className={modoPaciente === 'login' ? 'bg-cyan-700' : ''}>Login</Botao>
            <Botao onClick={() => setModoPaciente('cadastro')} className={modoPaciente === 'cadastro' ? 'bg-cyan-700' : ''}>Cadastro</Botao>
          </div>

          {modoPaciente === 'cadastro' && <Input placeholder="Nome completo" />}
          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <Botao>{modoPaciente === 'login' ? 'Entrar' : 'Cadastrar'}</Botao>
        </div>
      );
    }

    let campos = [];

    if (tipo === 'médico') campos = ['CRM', 'ID', 'Senha', 'Email Corporativo'];
    if (tipo === 'funcionário') campos = ['ID', 'Email Corporativo', 'Senha'];
    if (tipo === 'gestor') campos = ['ID do Gestor', 'Senha'];

    return (
      <div className="flex flex-col">
        {campos.map((c, i) => (
          <Input key={i} placeholder={c} />
        ))}
        <Botao>Entrar</Botao>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 bg-gray-700 flex flex-col items-center justify-center p-12 max-h-screen overflow-auto text-white">
        {!tipo ? (
          <div className="w-full max-w-md space-y-8">
            <h1 className="text-3xl text-cyan-400 font-extrabold text-center">Selecione a categoria</h1>
            <Botao onClick={() => setTipo('médico')}>Médico</Botao>
            <Botao onClick={() => setTipo('funcionário')}>Funcionário</Botao>
            <Botao onClick={() => setTipo('gestor')}>Gestor</Botao>
            <Botao onClick={() => setTipo('paciente')}>Paciente</Botao>
          </div>
        ) : (
          <div className="w-full max-w-md space-y-8">
            <h2 className="text-3xl font-semibold text-center capitalize tracking-tight">
              {tipo} {tipo === 'paciente' && `(${modoPaciente})`}
            </h2>
            {renderFormulario()}
            <button
              onClick={voltar}
              className="w-1/2 mx-auto block py-3 mt-10 cursor-pointer border-2 border-cyan-500 rounded-lg text-cyan-500 font-semibold hover:bg-cyan-600 hover:text-white transition duration-300 shadow-md"
            >
              Voltar
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:block md:w-1/2 min-h-screen">
        <img
          src="/medica7.jpg"
          alt="Imagem médica"
          className="w-full h-full object-cover"
          style={{ maxHeight: '100vh' }}
        />
      </div>
    </div>
  );
}
