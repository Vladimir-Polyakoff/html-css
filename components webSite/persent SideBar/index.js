function scrollEvents() {
  const sections = document.querySelectorAll('.section')
  const links = document.querySelectorAll('.nav__link')
  const menu = document.querySelector('.nav__list')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    // показываются данные секций
      if(entry.isIntersecting) {
        links.forEach(link => {
          const linkHref = link.getAttribute('href').replace('#', '')
          // получить ID
          linkHref === entry.target.id
          ? link.classList.add('active')
          : link.classList.remove('active')
        })
      }
    })
  }, {
    threshold: 0.9
    // нужно увидеть 90% нового блока прежде чем повесится класс Active
  })

  sections.forEach((section) => {
    observer.observe(section)
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      e.preventDefault()

      const sectionID = e.target.getAttribute('href').replace('#', '')
      window.scrollTo({
        top: document.getElementById(sectionID).offsetTop,
        behavior: 'smooth'
      })
    }
  })
}
scrollEvents()

function animateProgressBar() {
  const progress = document.querySelector('.progress__bar')
  // Значение скрола от верха страницы
  const scrollValue = document.documentElement.scrollTop
  // console.log('scrollValue', scrollValue);
  // высота всего сайта(документа)
  const documentHeight = document.documentElement.scrollHeight
  // console.log('documentHeight', documentHeight)
  // Высота экрана пользователя в %
  const viewportHeight = document.documentElement.clientHeight
  // console.log('viewportHeight', viewportHeight)
  // Разница между высотой Дока(сайта) и высотой экрана пользователя
  const heigt = documentHeight - viewportHeight
  // Процент прокрутки
  const scrollPersent = (scrollValue / heigt) * 100
  console.log('scrollPersent', scrollPersent)
  // Стиль для ProgressBar
  progress.style.width = scrollPersent + '%'
}
window.addEventListener('scroll', animateProgressBar)
