export default function Profil() {
  return (
    <section className="flex  flex-col justify-center items-center text-white gap-5 my-20">
      <h2 className="text-3xl">Login</h2>
      <form className="flex flex-col justify-center items-center text-xl gap-5">
        <label
          htmlFor="email"
          className="flex flex-col justify-center items-center"
        >
          Email:
          <input type="email" id="email" className="text-black w-60" />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col justify-center items-center"
        >
          Password:
          <input type="password" id="password" className="text-black w-60" />
        </label>
        <button
          type="submit"
          className="bg-white text-black rounded-xl w-auto p-2"
        >
          Log in
        </button>
      </form>
    </section>
  );
}
