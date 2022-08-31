import React from "react";
import useForm from "../components/use-form/useForm";

const Input = () => {
  const { onSubmit, register } = useForm();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = onSubmit(event);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" {...register("test1", "default 1")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
