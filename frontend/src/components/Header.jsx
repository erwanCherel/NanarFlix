export default function Header() {
  return (
    <div className="content items-center py-6 px-8 shadow-md flex">
      <div className="cursor-pointer">LOGO</div>

      <div className="search mr-8">
        <input
          type="text"
          className="search__input"
          aria-label="search"
          placeholder="enter your search"
        />
        <button
          type="submit"
          className="search__submit"
          aria-label="submit search"
        >
          <i className="fas fa-search" />
        </button>
      </div>

      <a href="_blank" id="openBtn">
        <span className="burger-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
    </div>
  );
}
