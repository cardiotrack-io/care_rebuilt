const CustomerDetailsForm = () => {
  return (
    <>
      <div className="form_container flex flex-col items-start  py-4 px-2 rounded-md bg-darkBlue bg-opacity-20 space-y-2">
        <div className="name_container">
          <label
            for="customer_name"
            className="block text-darkBlue text-xs text-left font-semibold"
          >
            Enter your name
          </label>
          <input
            type="text"
            id="customer_name"
            className="border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm"
          />
        </div>
        <div className="address_container flex flex-col space-y-2 ">
          <label
            for="address_line_1"
            className="block text-darkBlue text-xs text-left font-semibold"
          >
            Address Line - 1
          </label>
          <input
            type="text"
            id="address_line_1"
            className="border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm"
          />
          <label
            for="address_line_2"
            class="block text-darkBlue text-xs text-left font-semibold"
          >
            Address Line - 2
          </label>
          <textarea
            id="address_line_2"
            className="border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm"
          />
        </div>
      </div>
    </>
  );
};

export default CustomerDetailsForm;
