import React from 'react';
import { Header, MetaDataText, MetaSection, Section, SectionHeader } from '../styled';

type InfoSectionProps = {
  heading: string
  text: string
}

const InfoSection: React.FC<InfoSectionProps> = ({ heading, text }) => {
  return (
    <>
      <Header>
        <SectionHeader>{heading}</SectionHeader>
      </Header>
      <Section>
        <MetaSection>
          <MetaDataText>{text}</MetaDataText>
        </MetaSection>
      </Section>
    </>
  )
}
export default InfoSection;
