const whatsappUrl = (number: string, text: string) => {
  return `https://wa.me/${number}?text=${text}`
}

const template = {
  whatsappUrl
}

export default template;
