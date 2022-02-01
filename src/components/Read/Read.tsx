import {  ButtonCTA, PageTitle } from "../../pageStyles";
import {
  Section,
  CTASection,
  CTAText,
  DownloadAnchor,
  DownloadImage,
  ImageSection,
} from "./styled";
import Rane from "../../img/Rane.png";

const Read = () => {
  return (
    <>
      <PageTitle>Read</PageTitle>
      <Section>
        <ImageSection>
          <DownloadImage src={Rane} />
          <sub>Rane the Rogue</sub>
        </ImageSection>
        <CTASection>
          <CTAText>
            Read the first three chapters of{" "}
            <em>
              <strong>The Vale: Dawn of Silver Roses</strong>
            </em>
            , book one in the upcoming series!
          </CTAText>
          <br />
          <DownloadAnchor
            download
            href="https://drive.google.com/file/d/1_ayC9fwnRcBm0mdY68iXERF9djAYhbJX/view?usp=sharing"
          >
            <ButtonCTA>Click to download</ButtonCTA>
          </DownloadAnchor>
        </CTASection>
      </Section>
    </>
  )
};

export default Read;
