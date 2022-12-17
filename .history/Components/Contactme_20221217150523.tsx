import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';
// import {}  from 'react-hook-form/dist/useForm';


type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {}

function Contactme({ }: Props) {

  const { register, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (formData) => {
    // here actually we  are opening  the email app from are window to send the mail
    window.location.href = `mailto:chandravijayk42187@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}.${formData.message} (${formData.email})`;
  }
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-0 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >Contact</h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className=" text-lg md:text-4xl font-semibold text-center">Feel Free to reach Us.{" "}
          <span className=" text-[#F7AB0A] decoration-[#F7AB0A]/50 ">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#F7AB0A] md:h-7 md:w-7 h-4 w-4 animate-ping" />
            <p className=" text-lg md:text-2xl">Chandravijayk42187@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            < MapPinIcon className=" text-[#F7AB0A] md:h-7 md:w-7 h-3 w-3 animate-ping" />
            <p className="text-lg md:text-2xl">Mumbai, Maharashtra</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:space-y-2 space-x-7 md:w-fit mx-auto">
          <div className="flex space-x-2 " >
            <input {...register("name")} placeholder="Name" className="contactInput rounded-md " type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput rounded-md" type="email" />

          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput rounded-md" type="text" />
          <textarea {...register("message")} placeholder="Message" className="contactInput rounded-md " />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md  text-black font-bold text-lg animate-pulse">Submit</button>

        </form>

      </div>


    </div>
  )
}

export default Contactme