import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.png"
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
    width: 100%;
	padding: 4em 2em;
	z-index: 1;

    @media screen and (max-width: 960px) {
    	padding: 2em 1em;
    }
    @media screen and (max-width: 640px) {
    	padding: 1em .5em;
    }

    clip-path" polygon(0 0, 100% 0, 70% 95%, 0 100%)
`;
const HeroInnerContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	gap: 3em;
	align-items: center;
	width: 100%;
	max-width: 1100px;

    @media screen and (max-width: 960px) {
    	flex-direction:  column;
    }
`;
const HeroLeftContainer = styled.div`
	width: 100%;
	order: 1;
	// background: red;

    @media screen and (max-width: 960px) {
    	order: 2;
    	margin-bottom: 2em;
    	display: flex;
    	gap: 2em; 
    	flex-direction: column;
    	align-items: center;
    }
`;
const HeroRightContainer = styled.div`
	width: 100%;
	order: 2;
	justify-content: end;

    @media screen and (max-width: 960px) {
    	order: 1;
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	justify-content: center;
    	margin-bottom: 6em;
    }
    @media screen and (max-width: 640px) {
    	margin-bottom: 2em;
    }
`;

const Title = styled.div`
	font-weight: 500;
	font-size: 4rem;
	color: ${({ theme }) => theme.text_primary};
	line-height: 1em;

    @media screen and (max-width: 960px) {
    	text-align: center;
		font-size: 3rem;
		line-height: 1em;
		margin-bottom: 1vh;
	}
`;

const TextLoop = styled.div`
	font-weight: 300;
	font-size: 2rem;
	display: flex;
	gap: .75em;
	color: ${({ theme }) => theme.text_primary};
	line-height: 1.5em;

    @media screen and (max-width: 960px) {
    	text-align: center;
		font-size: 2rem;
		line-height: 1em;
		margin-bottom: 1vh;
	}
`;

const Span = styled.div`
	cursor: pointer;
	color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
	font-size: 1.25em;
	line-height: 2em;
	margin-bottom: 4em;
	color: ${({ theme }) => theme.text_primary + 95};

    @media screen and (max-width: 960px) {
		font-size: 1.4em;
		line-height: 1.75em;
	}
`;
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    display: inline-block;

    width: 150px;

    @media (min-width: 961px) {
        width: 200px;
    }

    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    background: linear-gradient(
        135deg,
        #006400,
        #66ff33
    ); /* Dark green to lighter neon green gradient */
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
    color: white;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634,
            -20px -20px 60px #1F2634;
        filter: brightness(1.1); /* Increase brightness on hover */
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        width: 100%;
    } 
`;


const Img = styled.img`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	max-width: 40em;
	max-height: 40em;
	border: .25em solid #16b420;
	transition: all 0.4s ease-out; /* Added transition for ease-out animation */

	&:hover {
		transform: scale(1.05);
		box-shadow: 20px 20px 60px #1F2634;
		filter: brightness(1);
		border-radius: 35%;
		border: .25em solid transparent;
		background-image: linear-gradient(to bottom right, #08560d, #16b420); /* Lighter neon green gradient */
	}

	@media (max-width: 864px) {
		max-width: 20em;
		max-height: 20em;
	} 
`;


const Hero = () => {
	return (
		<div id="About">
			<HeroContainer>

        		<motion.div {...headContainerAnimation}>
					<HeroInnerContainer>
						<HeroLeftContainer>
							<motion.div {...headTextAnimation}>
							<Title>
								Hi, I am <br /> {Bio.name}
							</Title>
							<TextLoop>
								I am a 
									<Span>
										<Typewriter
										options={{
											strings: Bio.roles,
											autoStart: true,
											loop: true,
										}}
										/>
									</Span>
							</TextLoop>
							</motion.div>

							<motion.div {...headContentAnimation}>
							<SubTitle>{Bio.description}</SubTitle>
							</motion.div>
							<ResumeButton href={Bio.resume} target="_blank">
								Resume
							</ResumeButton>
						</HeroLeftContainer>

						<HeroRightContainer>
							<Img src={HeroImg} alt="Georgijs Pitkevics" />
						</HeroRightContainer>
					</HeroInnerContainer>
        		</motion.div>
			</HeroContainer>
		</div>
	)
};

export default Hero;