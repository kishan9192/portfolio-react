/* eslint-disable react/prop-types */

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-100 bottom-0 left-130 right-0">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-sm`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
