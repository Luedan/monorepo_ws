export const InputField = ({
  label,
  name,
  id,
  placeholder,
  ...props
}: {
  label: string;
  name: string;
  id: string;
  placeholder: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
  return (
    <div className="sm:col-span-3 w-4/5">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          {...props}
          type="text"
          name={name}
          id={id}
          autoComplete="given-name"
          className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
