"use client";
import { useState } from "react";
import { multiplica } from "@/utils/funcoes";
export default function Home() {
  const [contador, setContador] = useState(0);
  const [calculo, setCalculo] = useState(1);

  function operacao() {
    const novoContador = contador + 1;
    setContador(novoContador);
    setCalculo(multiplica(novoContador, calculo));
  }

  return (
    <div className="h-screen w-full items-center justify-items-center content-center p-8 pb-20">
      <main>
        <div className="w-xl bg-gray-300 p-5 rounded-2xl shadow-xl justify-items-center">
          <h2>Contador: {contador}</h2>
          <button
            onClick={() => operacao()}
            className="bg-emerald-600 my-2 hover:bg-emerald-700 cursor-pointer  text-white rounded-lg px-2 py-1"
          >
            Clique
          </button>
          <h3>Calculo de Soma: {calculo}</h3>
        </div>
      </main>
    </div>
  );
}
