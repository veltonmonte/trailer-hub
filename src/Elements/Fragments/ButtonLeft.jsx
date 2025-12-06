function ButtonLeft({ onClick }) {
  return (
    <button
      className="arrowLeft"
      onClick={onClick}  
    >
      <img
        src="Imgs/arrow_back_ios_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
        alt="Voltar"
      />
    </button>
  );
}
export default ButtonLeft;
