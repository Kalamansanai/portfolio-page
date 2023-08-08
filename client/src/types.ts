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
