import React from "react";
import ButtonPrimary from "../Elements/ButtonPrimary";
import ButtonSecondary from "../Elements/ButtonSecondary";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

const CardPortfolio = (props) => {
  const { name, description, preview, techStack, link, repository } = props;
  return (
    <>
      <div className="flex flex-col justify-between gap-4 w-full md:w-1/3 p-4 shadow-lg rounded-2xl">
        <div className="flex flex-col gap-2">
          <img
            src={preview}
            alt="preview-portfolio"
            className="w-full border-tertiary border-2"
          />
          <p className="text-lg">{name}</p>
          <div className="flex">
            {techStack.map((item, index) => (
              <img src={item} alt="" key={index} className="w-8 h-8" />
            ))}
          </div>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonPrimary href={link} target="_blank">
            Preview{" "}
          </ButtonPrimary>
          <ButtonSecondary href={repository} target="_blank">
            Repository <RiGitRepositoryCommitsLine />
          </ButtonSecondary>
        </div>
      </div>
    </>
  );
};

export default CardPortfolio;
