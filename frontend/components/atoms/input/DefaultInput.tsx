const Input = ({
  type,
  placeholder,
  register,
}: {
  type: string;
  placeholder: string;
  register?: any;
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white2 caret-blue2 font-sm rounded py-2 px-3 leading-tight focus:outline-none"
        {...register}
      />
    </>
  );
};

export default Input;
