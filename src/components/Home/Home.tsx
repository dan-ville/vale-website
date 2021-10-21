import { PageTitle } from "../../pageStyles";
import { Summary, SummaryHeading, SummaryAccent } from "./styled";

export default function Home() {
  return (
    <>
      <PageTitle>The Vale</PageTitle>
      <Summary>
        <SummaryHeading>When the world was one...</SummaryHeading>
        <p>
          Long ago, when continents were yet joined and the people of Earth were
          eight tribes, one tribe fell to the temptation of power.
        </p>
        <p>
          They acquired great powers to turn into dark monsters and wage war on
          the other tribes. To survive, the tribes allied themselves with the
          Ancients, beast spirits from whom originated all animal life.
        </p>
        <p>
          The Ancients gave the seven tribes the power to shapeshift into spirit
          warriors, each resembling the respective animal of their likeness.
          Through their power, the seven tribes drove back the eigth tribe and
          banished them to the darkness outside the Vale.
        </p>
        <p>
          But when catastrophies begin again in the Vale, the tribes start to
          suspect the return of the banished tribe... and the coming of another
          war for the Vale.
        </p>
        <SummaryAccent>
          Join the heroes of the Vale as they save humanity's broken society,
          defy destiny with half-hearted hopes, and bridge the gaps of history,
          all while fighting for trust in a world of lies.
        </SummaryAccent>
      </Summary>
    </>
  );
}
