interface iModalForImages {
  id: string,
  image: string,
  link?: string,
  imageWidth?: string,
  linkTarget?: '_blank' | '_self',
  showAgainInXHours?: number
}

export type {
  iModalForImages
}
