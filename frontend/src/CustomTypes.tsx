export interface headerButtonProp {
  buttonName: string;
  toPath: string;
  isHomeButton?: boolean;
}

export interface mediaProp {
  media: string;
  altText: string;
  largeScreenPictureWidthPercentage?: number;
}

export interface linkBoxProp {
  url: string;
  siteName: string;
  image: string;
}

export interface urlProp {
  url: string;
  hyperlinkName: string;
}

export interface newsArticleProp {
  blurb: string;
  link: string;
}

export interface projectProp {
  altText: string;
  picture: string;
  route: string;
}
