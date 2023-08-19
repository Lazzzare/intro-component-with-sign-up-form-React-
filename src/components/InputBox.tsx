import { useForm, SubmitHandler } from "react-hook-form";
import ErrorIcon from "../assets/icon-error.svg";

const InputBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(register);

  type Inputs = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Article */}
      <div
        className="bg-[#5E54A4] py-[18px] md:py-[17px] px-[66px] md:px-[112px]
      rounded-[10px] shadow-costumShadow"
      >
        <p className="text-white text-center text-[15px] font-normal leading-6 tracking-[0.26px]">
          <span className="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
      </div>
      {/* Input Fields */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 md:p-[40px] rounded-[10px] flex flex-col gap-y-4 mt-6 shadow-costumShadow"
      >
        <div className="w-full flex flex-row justify-between relative">
          <input
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className={`border w-full text-[#3D3B48] text-[14px] font-semibold leading-6
          rounded-[5px] py-[15px] pl-[19px] md:pl-8 ${
            errors.firstName ? "border-lightRed border-2" : "border-[#DEDEDE]"
          }`}
          />
          {/* Error Icon */}
          {errors.firstName && (
            <img
              src={ErrorIcon}
              className="w-6 h-6 absolute top-[16px] right-[27px]"
            />
          )}
        </div>
        {/* Error Message */}
        {errors.firstName && <span>First Name cannot be empty</span>}
        {/*  */}
        <div className="w-full flex flex-row justify-between relative">
          <input
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className={`border w-full border-[#DEDEDE] text-[#3D3B48] text-[14px] font-semibold leading-6
          rounded-[5px] py-[15px] pl-[19px] md:pl-8 ${
            errors.lastName ? "border-lightRed border-2" : "border-[#DEDEDE]"
          }`}
          />
          {errors.firstName && (
            <img
              src={ErrorIcon}
              className="w-6 h-6 absolute top-[16px] right-[27px]"
            />
          )}
        </div>
        {errors.lastName && <span>Last Name cannot be empty</span>}
        {/*  */}
        <div className="w-full flex flex-row justify-between relative">
          <input
            placeholder="Email Address"
            {...register("emailAddress", { required: true })}
            className={`border w-full border-[#DEDEDE]text-[#3D3B48] text-[14px] font-semibold leading-6
          rounded-[5px] py-[15px] pl-[19px] md:pl-8 ${
            errors.emailAddress
              ? "border-lightRed border-2"
              : "border-[#DEDEDE]"
          }`}
          />
          {errors.firstName && (
            <img
              src={ErrorIcon}
              className="w-6 h-6 absolute top-[16px] right-[27px]"
            />
          )}
        </div>
        {errors.emailAddress && <span>Email Address cannot be empty</span>}
        {/*  */}
        <div className="w-full flex flex-row justify-between relative">
          <input
            placeholder="Password"
            {...register("password", { required: true })}
            className={`border w-full border-[#DEDEDE] text-[#3D3B48] text-[14px] font-semibold leading-6
          rounded-[5px] py-[15px] pl-[19px] md:pl-8 ${
            errors.password ? "border-lightRed border-2" : "border-[#DEDEDE]"
          }`}
          />
          {errors.firstName && (
            <img
              src={ErrorIcon}
              className="w-6 h-6 absolute top-[16px] right-[27px]"
            />
          )}
        </div>
        {errors.password && <span>Password cannot be empty</span>}
        <button
          type="submit"
          className="text-white bg-lightGreen py-[15px] rounded-[5px] hover:bg-[#77E2B3] duration-300"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        {/* Terms and Services */}
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
