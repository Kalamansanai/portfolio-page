export interface IPage {
  title: string;
  component: JSX.Element;
}

export interface IPageJson {
  title: string;
  componentName: string;
}

export interface IProblem {
  problem: string;
  solution: string;
  icon: string;
  tiltle: string;
}

export interface ISolution {
  title: string;
  text: string;
  imageSrc: string;
}

export interface IProject {
  title: string;
  text: string;
  imgName: string;
}

export interface ITeamMember {
  name: string;
  description: string;
  image: string;
}

export type BackgroundSVGProps = {
  direction: "left" | "right";
};

export type SVGData = {
  common: {
    width: string;
    height: string;
    viewBox: string;
    fill: string;
    xmlns: string;
  };
  paths: {
    d: string;
    stroke: string;
    strokeWidth: string;
    strokeMiterlimit: string;
  }[];
  clipPath: {
    id: string;
    width: string;
    height: string;
    fill: string;
  };
};

export type AllSVGData = {
  BackgroundLeftSVG: SVGData;
  BackgroundRightSVG: SVGData;
};

export type Props = {
  project: IProject;
};

export type WrapperProps = {
  reference: React.RefObject<HTMLDivElement> | null;
  child: JSX.Element;
};

export type SolutionProps = {
  solution: ISolution;
  index: number;
};

export type ProblemProps = {
  problem: IProblem;
  setContent: React.Dispatch<React.SetStateAction<string | null>>;
  isLast: boolean;
  isActive: boolean;
  onClick: () => void;
};

export type ScrollTopProps = {
  setTargetIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export type NavbarProps = {
  pages: IPage[];
  targetIndex: number | undefined;
  setTargetIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  scroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
  sectionRefs: React.RefObject<HTMLDivElement>[];
  isManualScroll: boolean;
  setIsManualScroll: React.Dispatch<React.SetStateAction<boolean>>;
};
