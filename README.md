## Features

- Simple Clone of React Hook Forms

## Install

```
  npm install react-ava-form
```

## Example

- https://codesandbox.io/s/react-ava-form-npm-example-3hgned

## Start

```
import { useForm } from "react-ava-form";

const FormComponent = () => {
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

export default FormComponent;
```

# Parameters

## Register Fields

```
const { register } = useForm();
```

Call register in your field you want to register to the hook.

### Parameters

register(id: string, defaultValue: string | number)

Register needs to be called like this:

```
  <input type="text" {...register(id, defaultValue)} />
```
