import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  position: relative;
`;

const DescriptionContainer = styled.div`
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? "1000px" : "90px")};
  transition: max-height 0.5s ease;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  overflow: hidden;
  margin-top: 8px;
  display: block;
  max-height: ${({ expanded }) => (expanded ? "1000px" : "3.6em")};
  transition: max-height 0.5s ease;
  line-height: 1.8em;
`;

const Tags = styled.div`
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ImageLink = styled.a`
  width: 100%;
  height: 180px;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.cardBackground};
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.buttonBackground};
  transition: background-color 0.3s, transform 0.2s;
  border: 2px solid transparent;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: ${({ theme }) => theme.buttonBackground};
    transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
    border-radius: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
  }

  &:hover::before {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;

const ButtonIcon = styled.span`
  margin-left: 8px;
`;

const SvgIcon = styled.svg`
  width: 1em;
  height: 1em;
  fill: ${({ theme }) => theme.primary}; /* Change the fill color as needed */
  margin-left: 8px; /* Adjust the margin as needed */
`;

const ButtonSvgIcon = styled(SvgIcon)`
  width: 1em;
  height: 1em;
  fill: ${({ theme }) => theme.primary};
  margin-left: 8px;
`;


const ProjectCard = ({ project }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check for smaller screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    if (isMobile) {
      handleToggleExpand();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      handleToggleExpand();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      handleToggleExpand();
    }
  };

  return (
    <Card
      expanded={expanded}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageLink>
        <Image src={project.image} />
      </ImageLink>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <DescriptionContainer expanded={expanded}>
          <Description expanded={expanded}>
            {project.description.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </Description>
        </DescriptionContainer>
      </Details>
      <Members>
        {/* Render avatars here */}
      </Members>
      <Tags expanded={expanded}>
        {project.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
      <Button href={project.github} target="_blank">
        <ButtonText>View Code</ButtonText>
        <ButtonIcon>
          <ButtonSvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* GitHub icon */}
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.206 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.042-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.756-1.332-1.756-1.087-.742.083-.727.083-.727 1.203.086 1.838 1.236 1.838 1.236 1.07 1.834 2.814 1.303 3.502.998.108-.776.42-1.303.763-1.603-2.67-.305-5.48-1.332-5.48-5.93 0-1.31.468-2.382 1.236-3.224-.124-.308-.536-1.526.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.398 3.002-.402 1.018.004 2.044.136 3.002.402 2.292-1.552 3.297-1.23 3.297-1.23.656 1.65.242 2.868.118 3.176.77.842 1.234 1.914 1.234 3.224 0 4.61-2.816 5.62-5.488 5.918.432.37.818 1.096.818 2.213 0 1.6-.015 2.886-.015 3.279 0 .317.214.693.825.574C20.566 21.795 24 17.305 24 12c0-6.63-5.37-12-12-12" />
          </ButtonSvgIcon>
        </ButtonIcon>
      </Button>
      <Button href={project.webapp} target="_blank">
        Interactive Demo
      </Button>
    </Card>
  );
};

export default ProjectCard;
