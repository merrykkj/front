export default function Footer() {
    return (
      <footer className="bg-cyan-900 text-white w-full mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-lg font-semibold">Clínica Vida Plena</h2>
            <p className="text-sm">Cuidando de você 24h por dia</p>
            <p className="text-sm">Telefone: (11) 1234-5678</p>
            <p className="text-sm">Email: contato@vidasau.com.br</p>
          </div>
  
          <ul className="flex flex-col sm:flex-row sm:space-x-8 text-sm items-center text-center">
            <li>
              <a href="#" className="hover:underline transition">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline transition">
                Suporte
              </a>
            </li>
          </ul>
  
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-cyan-300 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114.5 6h2.5v3h-2c-.8 0-1.5.7-1.5 1.5V12H17l-.5 3h-2v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-300 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5a4.4 4.4 0 01-1.1 1.5 4.4 4.4 0 01-1.5 1.1c-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5a4.4 4.4 0 01-1.5-1.1 4.4 4.4 0 01-1.1-1.5c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.3-.6.6-1 .9-1.5a4.4 4.4 0 011.5-1.1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.3-2.1.5-.5.3-.8.6-1.2 1s-.7.7-1 1.2c-.2.4-.4 1-.5 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.3 1.7.5 2.1.3.5.6.8 1 1.2.4.4.7.7 1.2 1 .4.2 1 .4 2.1.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.3 2.1-.5.5-.3.8-.6 1.2-1 .4-.4.7-.7 1-1.2.2-.4.4-1 .5-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.3-1.7-.5-2.1a3.1 3.1 0 00-1-1.2 3.1 3.1 0 00-1.2-1c-.4-.2-1-.4-2.1-.5-1.2-.1-1.6-.1-4.7-.1zm0 3.5a6.3 6.3 0 016.3 6.3A6.3 6.3 0 0112 18.1 6.3 6.3 0 015.7 12 6.3 6.3 0 0112 7.5zm0 1.8a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.5-2.1a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  