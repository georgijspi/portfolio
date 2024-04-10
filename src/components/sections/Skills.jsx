import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

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

const SkillsContainer = styled.div`
	width: 100%;
	max-width: 40vw;
	display: flex;
	flex-wrap: wrap;
	margin-top: 1.5em;
	gap: 3em;
	justify-content: center;
    @media screen and (max-width: 960px) {
		max-width: 80vw;
	}
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
	const tiltOptions = {
		scale: 1.1,
		max: 10,
		speed: 300,
		perspective: 1000,
		easing: "cubic-bezier(.03,.98,.52,.99)",
	};

	return (
		<Container id="Skills">
			<Wrapper>
				<Title>Skills</Title>
				<Desc>
					I have many interests and while it is difficult to focus on one at a time, I enjoy taking my time to learn all I can about the Computer Science industry.
				</Desc>
				<SkillsContainer>
					{skills.map((skill, index) => (
						<Tilt key={`skill-${index}`} options={tiltOptions}>
							<Skill>
								<SkillTitle>{skill.title}</SkillTitle>
								<SkillList>
									{skill.skills.map((item, index_x) => (
										<SkillItem key={`skill-x-${index_x}`}>
											<SkillImage src={item.image} />
											{item.name}
										</SkillItem>
									))}
								</SkillList>
							</Skill>
						</Tilt>
					))}
				</SkillsContainer>
			</Wrapper>
		</Container>
	)
}

export default Skills;
