const FormatCurrency = ({ value }: { value: number }) => {
  return (
    <span>
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)}
    </span>
  );
};

export default FormatCurrency;
