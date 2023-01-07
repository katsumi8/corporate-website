import { FormPTprops } from "@src/types/props";
import React from "react";

function FormPT({
  values,
  formErrors,
  handleChange,
  handleFocus,
  handleSubmit,
}: FormPTprops) {
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formErrors).length === 0 && values.isSubmitted ? (
        <div className="w-full py-2 text-2xl font-bold text-center text-lime-600">
          <p>I received your email !</p>
          <p>I will shortly get in touch with you.</p>
        </div>
      ) : (
        <>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Name / Company</label>
              <input
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.name && values.isSubmitted ? (
                <p className="text-xs italic text-red-500">{formErrors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Phone Number</label>
              <input
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.phoneNumber && values.isSubmitted ? (
                <p className="text-xs italic text-red-500">
                  {formErrors.phoneNumber}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">Email</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.email && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">{formErrors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">Subject</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="text"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.subject && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">
                {formErrors.subject}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">Message</label>
            <textarea
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              rows={10}
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onFocus={handleFocus}
            ></textarea>
            {formErrors.message && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">
                {formErrors.message}
              </p>
            ) : null}
          </div>
          <button
            className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
            type="submit"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
}

export default FormPT;
