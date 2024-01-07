  //window.addEventListener('scroll', function() {
  //const image = document.getElementById('moving-image');
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY / scrollHeight * 100;
  const maxHeight = document.documentElement.clientHeight - image.clientHeight;

  const newPosition = (maxHeight * scrolled) / 100;
  image.style.top = newPosition + 'px';
  //});