const InputText = (props) => {
  const handleChangeName = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="nome">{props.label}</label>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={props.value}
        onChange={handleChangeName}
      />
      {props.children}
    </>
  );
};

export default InputText;
