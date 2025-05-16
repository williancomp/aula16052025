import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";

describe("Tela Inicial", () => {
  it("Renderiza o componente Home", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  test("deve incrementar o contador ao clicar no botão", () => {
    render(<Home />);

    const botao = screen.getByText("Clique");

    // Primeiro clique: contador 0 -> 1, calculo 1 -> 1*1 = 1
    fireEvent.click(botao);
    expect(screen.getByText("Contador: 1")).toBeInTheDocument();
    expect(screen.getByText("Calculo de Soma: 1")).toBeInTheDocument();

    // Segundo clique: contador 1 -> 2, calculo 1 -> 2*1 = 2
    fireEvent.click(botao);
    expect(screen.getByText("Contador: 2")).toBeInTheDocument();
    expect(screen.getByText("Calculo de Soma: 2")).toBeInTheDocument();

    // Terceiro clique: contador 2 -> 3, calculo 2 -> 3*2 = 6
    fireEvent.click(botao);
    expect(screen.getByText("Contador: 3")).toBeInTheDocument();
    expect(screen.getByText("Calculo de Soma: 6")).toBeInTheDocument();
  });
});
