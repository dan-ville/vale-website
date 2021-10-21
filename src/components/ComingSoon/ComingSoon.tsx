import { UnderConstruction } from "../../pageStyles";

const ComingSoon = () => {
  return (
    <UnderConstruction>
      <p>Sorry, this page isn't ready yet...</p>
      <p>But we're doing our best to deliver!</p>
      <br />
      <iframe
        title="coming-soon"
        src="https://giphy.com/embed/3o72FkiKGMGauydfyg"
        width="480"
        height="363"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/arielle-m-coming-soon-3o72FkiKGMGauydfyg">
          via GIPHY
        </a>
      </p>
    </UnderConstruction>
  );
};

export default ComingSoon;
