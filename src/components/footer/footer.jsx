import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #D8D8D8;
    height: 100px;
    padding: 20px;
   
`;

const DeveloperInfo = styled.div`
    font-size: 16px;
    color: #57638A;

    a {
        color: #57638A;
        text-decoration: none;
    }
`;

const ProjectLink = styled.div`
    font-size: 16px;
    color: #57638A;

    a {
        color: #57638A;
        text-decoration: none;
        margin-left: 10px;
        display: inline-flex;
        align-items: center;
    }
`;

const Footer = () => {
    const navigate = useNavigate();

    return (
        <FooterContainer>
            <DeveloperInfo>
                Developed by <a href="https://example.com">2TEAM</a>
            </DeveloperInfo>
            <ProjectLink>
                <a href="https://github.com">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://gitlab.com">
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </a>
                <a href="https://discord.com">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
            </ProjectLink>
        </FooterContainer>
    );
};

export default Footer;
