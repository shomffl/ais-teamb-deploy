const TitleInput = ({ props }: any) => {
  return (
    <div>
      <input
        className="appearance-none border-none caret-blue2 w-full my-2 mr-3 text-5xl font-bold  leading-tight focus:outline-none "
        type="text"
        placeholder="Title"
        {...props}
      />
    </div>
  );
};

export default TitleInput;
