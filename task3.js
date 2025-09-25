function showLinkInfo() {
  const links = document.querySelectorAll('a');
  let message = '';

  if (links.length > 0) {
    const totalLinks = links.length;
    const firstLink = links[0].href;
    const lastLink = links[links.length - 1].href;
    message = `Total de enlaces: ${totalLinks}\nPrimer enlace: ${firstLink}\nÚltimo enlace: ${lastLink}`;
  }
  console.log(message);
}
