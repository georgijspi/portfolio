import React from "react";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 4em;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
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
    	font-size: .9em;
    }
`;

const Experience = () => {
	return (
		<Container id="Experience">
			<Wrapper>
				<Title>Experience</Title>
				<Desc
					style={{
						marginBottom: "40px",
					}}
				>
					I have a background in Content Moderation and an avid software enginer. I am an active member of Redbrick, DCU's Networking Society, as well as DCU Solar Racing.
				</Desc>

				<VerticalTimeline>
					{experiences.map((experience,index) => (
						<ExperienceCard 
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</Wrapper>
		</Container>

	)
}

export default Experience