class atletasNotas {
    constructor(atletas){
        this.atletas = atletas;
    }

    obterMedia() {
    return this.atletas.map(a => {
      const soma = a.notas.reduce((s, n) => s + n, 0);
      const media = soma / a.notas.length;
      return { nome: a.nome, media };
    });
    }
    
    
}



let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

const resultado = new atletasNotas(atletas).obterMedia();
console.log(resultado);