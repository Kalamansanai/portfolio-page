export interface Page {
  element: JSX.Element;
  title: string;
}

export interface Problem {
  problem: string;
  solution: string;
  icon: string;
  tiltle: string;
}

export interface SolutionContent {
  title: string;
  text: string;
}

export interface SolutionImage {
  title: string;
  imageSrc: string;
}
