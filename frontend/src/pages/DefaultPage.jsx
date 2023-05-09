import gifDefaultPage from "@assets/gif-defaultPage.gif";
import "../css/defaultPage.scss";

export default function DefaultPage() {
  return (
    <section className="defaultPage-container">
      <img
        src={gifDefaultPage}
        alt="gif default page"
        className="gifDefaultPage"
      />
    </section>
  );
}
