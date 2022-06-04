const aboutmeFolder = document.querySelector('#aboutme-folder')
const projectsFolder = document.querySelector('#projects-folder')
const experiencesFolder = document.querySelector('#experiences-folder')
const travelsFolder = document.querySelector('#travels-folder')

const aboutmeContent = document.querySelector('#aboutme-content')
const projectsContent = document.querySelector('#projects-content')
const experiencesContent = document.querySelector('#experiences-content')
const travelsContent = document.querySelector('#travels-content')

aboutmeFolder.addEventListener('click', () => {
  new WinBox({
    class: [
      "no-resize"
    ],
    title: "About Me",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#000000",
    border: 4,
    mount: aboutmeContent,
    onfocus: function () {
      this.setBackground('#000000')
    },
});
})

projectsFolder.addEventListener('click', () => {
  new WinBox({
    class: [
      "no-resize"
    ],
    title: "My Projects",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#000000",
    border: 4,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#000000')
    },
});
})

experiencesFolder.addEventListener('click', () => {
  new WinBox({
    class: [
      "no-resize"
    ],
    title: "My Experiences",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#000000",
    border: 4,
    mount: experiencesContent,
    onfocus: function () {
      this.setBackground('#000000')
    },
});
})

travelsFolder.addEventListener('click', () => {
  new WinBox({
    class: [
      "no-resize"
    ],
    title: "My Travels",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#000000",
    border: 4,
    mount: travelsContent,
    onfocus: function () {
      this.setBackground('#000000')
    },
});
})
