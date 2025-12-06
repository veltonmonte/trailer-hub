function ButtonRight({ onClick }) {
  return (
    <button
      className="arrowRight"
      onClick={onClick}  
    >
      <img
        src="Imgs/arrow_forward_ios_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
        alt="Avançar"
      />
    </button>
  );
}
export default ButtonRight;