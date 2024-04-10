import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4em;
  padding: 0 1em;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.2em;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  text-align: center;
  font-weight: 500;
  margin-top: 2em;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 1em;
    font-size: 3em;
  }
`;

const Desc = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const CardContainer = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Random flabbergaster descriptive analysis of a horse's never-ending galloping through the fields of burning tires. Showcasing the beauty of ugliness through the depiction of otherworldly artform.
        </Desc>

        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
