import { Link } from "react-router-dom"
import { ButtonCTA, PageTitle, PageWrapper } from "../../pageStyles"
import { Summary, SummaryHeading, SummaryAccent, CTA } from "./styled"

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle>The Vale</PageTitle>
      <Summary>
        <SummaryHeading>Long ago, when the world was one...</SummaryHeading>
        <p>
          When continents were yet joined, one of the eight tribes of man waged
          war on the other tribes using dark powers.
        </p>
        <p>
          To protect their world, the ancient animal spirits gave the rest of
          humanity the power to shift into animal warriors and win the war,
          driving the dark tribe to banishment outside the Vale.
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
      <CTA>
        <Link to="/read">
          <ButtonCTA>Read the first chapter</ButtonCTA>
        </Link>
      </CTA>
    </PageWrapper>
  )
}
