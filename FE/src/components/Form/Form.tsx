import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input defaultValue="name" {...register('example')} />
      {errors.exampleRequired && <span>This field is required</span>}

      <label>Email</label>
      <input defaultValue="email" {...register('example')} />
      {errors.exampleRequired && <span>This field is required</span>}

      <label>Message</label>
      <textarea defaultValue="email" {...register('example')} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Form;
