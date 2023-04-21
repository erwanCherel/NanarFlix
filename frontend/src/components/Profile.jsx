export default function Profile() {
  return (
    <section>
      <div className="profile-container">
        <img
          src="src/assets/icons/account-icon.svg"
          alt="profile pic"
          className="profile-pic"
        />
        <h2 className="profile-name">Bernard Nard</h2>

        <div className="profile-biography">
          <h4>Biographie</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className="profile-avis">
          <h4>Avis</h4>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
