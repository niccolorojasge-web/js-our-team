const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//const output = document.getElementById('team-list')
const teamContainer = document.querySelector(".team-container");

let outputTotal = "";


for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i];
  outputTotal += `
    <div class="team-card">
      <div class="card-image">
        <img src="./${teamMember.img}" alt="">
      </div>
      <div class="card-text">
        <h3>${teamMember.name} </h3>
        <p>${teamMember.role}</p>
        <p>${teamMember.email}</p>
      </div>
    </div> `;
}

teamContainer.innerHTML = outputTotal