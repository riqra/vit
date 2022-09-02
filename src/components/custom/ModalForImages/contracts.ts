interface iModalForImages {
  id: string,
  image: string,
  link?: string,
  imageWidth?: string,
  linkTarget?: '_blank' | '_self',
  showAgainInXHours?: number
}

interface iState {
  shouldHide: boolean
}

export type {
  iModalForImages,
  iState
}
