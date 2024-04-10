import React from "react";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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

const Education = () => {
	return (
		<Container id="Education">
			<Wrapper>
				<Title>Education</Title>
				<Desc
					style={{
						marginBottom: "40px",
					}}
				>
					Random flabbergaster descriptive analaysis of a horse's neverending galloping through the fields of burning tires. Showcasing the beauty of ugliness through the depiction of otherworldly artform.
				</Desc>

				<VerticalTimeline>
					{education.map((item,index) => (
						<EducationCard 
							key={`education-${index}`}
							education={item }
						/>
					))}
				</VerticalTimeline>
			</Wrapper>
		</Container>

	)
}

export default Education