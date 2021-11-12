export const calculaFck = (carga) => {
    const fck = (carga / 78.54) * 100;
    return  parseInt(fck);
  };