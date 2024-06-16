/* eslint-disable react/prop-types */

const Alert = ({ type, text }) => {
  return (
    <div className="absolute alertMessage bottom-5 left-10">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : " bg-lime-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <span
          className={`${
            type === "danger" ? "bg-red-500" : "bg-lime-600"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-sm`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <span className="mr-2 text-left text-sm">{text}</span>
      </div>
    </div>
  );
};

export default Alert;
