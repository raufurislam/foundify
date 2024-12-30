import { useState } from "react";

const Faq = () => {
  const [thought, setThought] = useState("");

  const handleSend = () => {
    // console.log("Submitted thought:", thought); // Log or send the thought
    setThought("");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-2 flex flex-col gap-3">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center lg:mb-6 mb-3">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-plus bg-base-200 shadow-sm">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title lg:text-xl text-lg font-medium">
          How do I report a lost item?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            To report a lost item, click on the "Report Item" button in the
            navigation bar. Fill out the form with details like the item's name,
            description, location, and date, then submit it.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 shadow-sm">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title lg:text-xl text-lg font-medium">
          Can I update the details of a reported item?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            Yes, you can edit the details of your reported items. Go to the "My
            Items" page, select the item, and click the "Edit" button to update
            the information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 shadow-sm">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title lg:text-xl text-lg font-medium">
          How do I find items that others have reported?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            Visit the "Lost & Found Items" page and use the search bar or
            filters to look for items by category, location, or keyword.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 shadow-sm">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title lg:text-xl text-lg font-medium">
          What happens when someone finds my lost item?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            If someone finds your item, they can contact you using the details
            you provided. You will receive a notification if they mark your item
            as "Found."
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 shadow-sm">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title lg:text-xl text-lg font-medium">
          Can I mark a found item as returned to the owner?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            Yes, go to the "My Items" page, select the item, and click "Mark as
            Recovered" to indicate that the item has been successfully returned
            to its owner.
          </p>
        </div>
      </div>
      {/* Extra Questions */}
      <div className="grid grid-cols-1 mt-5 shadow-sm">
        <div>
          <h3 className="lg:text-xl text-lg font-semibold">
            For any additional information, feel free to contact us
          </h3>
        </div>
        <div className="join mt-3">
          <textarea
            className="textarea textarea-bordered h-20 join-item w-full"
            placeholder="Your thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
          <button className="btn join-item w-28 h-auto" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
