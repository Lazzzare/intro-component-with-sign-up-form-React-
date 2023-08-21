import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorIcon from "../assets/icon-error.svg";

interface Inputs {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

interface InputField {
  name: keyof Inputs;
  placeholder: string;
  type?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  errorMessage: string;
}

const InputBox: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert("everything okey");
  };

  const inputFields: InputField[] = [
    {
      name: "firstName",
      placeholder: "First Name",
      errorMessage: "First Name cannot be empty",
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      errorMessage: "Last Name cannot be empty",
    },
    {
      name: "emailAddress",
      placeholder: "Email Address",
      type: "email",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
      errorMessage: "Email Address cannot be empty",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password cannot be empty",
    },
  ];

  const renderInput = (field: InputField) => (
    <div
      className="w-full flex flex-row justify-between relative"
      key={field.name}
    >
      <input
        placeholder={field.placeholder}
        type={field.type || "text"}
        {...register(field.name, { required: true, pattern: field.pattern })}
        className={`border w-full text-[#3D3B48] text-[14px] font-semibold leading-6
          rounded-[5px] py-[15px] pl-[19px] md:pl-8 ${
            errors[field.name] ? "border-lightRed border-2" : "border-[#DEDEDE]"
          }`}
      />
      {errors[field.name] && (
        <img
          src={ErrorIcon}
          className="w-6 h-6 absolute top-[16px] right-[27px]"
          alt="Error Icon"
        />
      )}
    </div>
  );

  const renderErrorMessage = (field: InputField) =>
    errors[field.name] && (
      <span className="text-lightRed text-[11px] font-medium italic text-right">
        {errors[field.name]?.message || field.errorMessage}
      </span>
    );

  return (
    <div>
      <div className="bg-[#5E54A4] py-[18px] md:py-[17px] px-[66px] md:px-[112px] rounded-[10px] shadow-costumShadow">
        <p className="text-white text-center text-[15px] font-normal leading-6 tracking-[0.26px]">
          <span className="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 md:p-[40px] rounded-[10px] flex flex-col gap-y-4 mt-6 shadow-costumShadow"
      >
        {inputFields.map((field) => (
          <React.Fragment key={field.name}>
            {renderInput(field)}
            {renderErrorMessage(field)}
          </React.Fragment>
        ))}

        <button
          type="submit"
          className="text-white bg-lightGreen py-[15px] rounded-[5px] hover:bg-[#77E2B3] duration-300 uppercase"
        >
          claim your free trial
        </button>

        <p className="text-[#BAB7D4] text-center text-[11px] font-normal leading-[21px]">
          By clicking the button, you are agreeing to our
          <span className="ml-1 text-[#FF7979] font-bold cursor-pointer">
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  );
};

export default InputBox;
