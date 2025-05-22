import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    { id: 1, name: "Ana Silva", text: "Ótimo atendimento e profissionais super atenciosos! Recomendo a todos." },
    { id: 2, name: "João Pereira", text: "A clínica mudou minha vida, atendimento impecável e equipe dedicada." },
    { id: 3, name: "Mariana Souza", text: "Ambiente acolhedor e cuidado excelente. Me senti em casa!" },
];

export default function Testemunhas() {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg relative h-48 overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={testimonials[index].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full p-6 text-center flex flex-col justify-center">
                    <p className="text-gray-800 text-lg italic mb-6">"{testimonials[index].text}"</p>
                    <h3 className="text-cyan-900 font-bold text-xl">- {testimonials[index].name}</h3>
                </motion.div>
            </AnimatePresence>
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-cyan-700 hover:bg-cyan-900 text-white rounded-full w-10 h-10 flex items-center justify-center">
                ‹
            </button>
            <button
                onClick={next}
                aria-label="Next"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-700 hover:bg-cyan-900 text-white rounded-full w-10 h-10 flex items-center justify-center">›
            </button>
        </div>
    );
}
