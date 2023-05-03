import { useState } from "react";

export default function CommentBox() {
  const [newReviewer, setReviewer] = useState();
  const [newComment, setComment] = useState();
  const [allComments, setAllComments] = useState([]);

  const handleReviewerChange = (event) => {
    setReviewer(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllComments([
      ...allComments,
      { reviewer: newReviewer, comment: newComment },
    ]);
    setReviewer("");
    setComment("");
  };

  return (
    <div className="div5 flex flex-col justify-center items-center">
      <form className="w-3/4 md:w-2/4 mt-10" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="flex flex-col justify-center items-center text-white"
        >
          Pseudo :
        </label>
        <input
          type="text"
          value={newReviewer}
          onChange={handleReviewerChange}
          id="name"
          name="name"
          className="w-full px-3 py-2 rounded-md shadow-sm mb-6"
          required
        />
        <label
          htmlFor="message"
          className="flex flex-col justify-center items-center text-white"
        >
          Ajouter un commentaire :
        </label>
        <textarea
          id="message"
          name="message"
          value={newComment}
          onChange={handleCommentChange}
          className="w-full px-3 py-2 rounded-md shadow-sm text-black"
          required
        />
        <button
          type="submit"
          className="bg-[#9EBA9B] text-white py-2 px-4 rounded mt-5 flex flex-col justify-center items-center mx-auto mb-1"
        >
          Ajouter
        </button>
      </form>
      <div className="flex flex-wrap md:ml-1 md:mr-1 justify-center mb-10">
        {allComments.map(({ reviewer, comment }) => (
          <div
            className="grid grid-cols-4 gap-2 grid-flow-row grid- bg-[#9EBA9B] w-10/12 h-30 p-3 rounded-md mx-3 my-3 md:w-96 md:h-28 "
            key={reviewer}
          >
            <div className="p-2 row-start-1 row-end-3 col-start-1 col-end-2 ">
              <img
                src="https://lespetitsproducteurs.be/wp-content/uploads/2020/12/navet-violet.png"
                alt="navet"
              />
            </div>
            <h2 className="p-1 mb-2 text-center font-bold text-base col-start-2 col-end-5 row-start-1 row-end-2 h-1">
              {reviewer}
            </h2>
            <p className="p-3 text-center col-start-2 col-end-5 row-start-2 row-end-3 overflow-auto h-12 text-xs">
              {comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
