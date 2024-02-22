class Avion {
    constructor() {
      this.estado = "listo";
    }
  
    despegar() {
      if (this.estado === "listo") {
        this.estado = "despegando";
        console.log("El avión está en proceso de despegue.");
      } else if (this.estado === "despegando") {
        console.log("El avión ya está en proceso de despegue.");
      } else if (this.estado === "aterrizando") {
        console.log("El avión no puede despegar mientras está aterrizando.");
      } else if (this.estado === "enVuelo") {
        console.log("El avión ya está en vuelo.");
      } else {
        console.log("El estado del avión es desconocido.");
      }
    }
  
    aterrizar() {
      if (this.estado === "despegando") {
        this.estado = "aterrizando";
        console.log("El avión está en proceso de aterrizaje.");
      } else if (this.estado === "aterrizando") {
        console.log("El avión ya está en proceso de aterrizaje.");
      } else if (this.estado === "enVuelo") {
        this.estado = "aterrizando";
        console.log("El avión está en proceso de aterrizaje.");
      } else {
        console.log("El estado del avión es desconocido.");
      }
    }
  
    enVuelo() {
      if (this.estado === "aterrizando") {
        this.estado = "enVuelo";
        console.log("El avión está en vuelo.");
      } else if (this.estado === "enVuelo") {
        console.log("El avión ya está en vuelo.");
      } else {
        console.log("El estado del avión es desconocido.");
      }
    }
  
    apagado() {
      if (this.estado === "enVuelo") {
        this.estado = "apagado";
        console.log("El avión ha aterrizado y se ha apagado.");
      } else if (this.estado === "apagado") {
        console.log("El avión ya está apagado.");
      } else {
        console.log("El avión no puede apagarse en este estado.");
      }
    }
  }
  
  let avion = new Avion();
  avion.despegar();
  avion.aterrizar();
  avion.enVuelo();
  avion.apagado();