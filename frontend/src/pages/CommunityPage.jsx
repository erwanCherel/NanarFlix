import React, { useState } from "react";
import SuggestionForm from "../components/SuggestionForm";
import Community from "../components/Community";

function CommunityPage() {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      <Community />
      <button
        type="submit"
        onClick={toggleForm}
        className="bg-[#9EBA9B] text-white font-bold py-2 px-4 rounded mt-5 mx-auto ml-11"
      >
        Suggérer un film
      </button>

      {showForm && <SuggestionForm />}
    </div>
  );
}

export default CommunityPage;
