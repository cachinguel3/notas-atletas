class AtletasNotas {
  constructor(atletas) {
    this.atletas = atletas;
  }

  calcularMediasValidas() {
    return this.atletas.map((a) => {
      const notasOrdenadas = a.notas.slice().sort((x, y) => x - y);
      const notasValidas = notasOrdenadas.slice(1, 4);
      const soma = notasValidas.reduce((s, n) => s + n, 0);
      const media = soma / notasValidas.length;
      return { nome: a.nome, notas: a.notas, media };
    });
  }
}

const atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

function formatNumero(n) {
  let s = n.toFixed(6);
  s = s.replace(/\.0+$|(?<=\.[0-9]*[1-9])0+$/, '');
  return s;
}

function imprimirResultados(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    const atleta = atletas[i];
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    const ordenadas = atleta.notas.slice().sort((a, b) => a - b);
    const validas = ordenadas.slice(1, 4);
    const soma = validas.reduce((s, n) => s + n, 0);
    const media = soma / validas.length;
    console.log(`Média Válida: ${formatNumero(media)}`);
    console.log('');
  }
}

const resultado = new AtletasNotas(atletas).calcularMediasValidas();
imprimirResultados(atletas);
