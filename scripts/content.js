if (window.location.href.indexOf("#en") > -1) {
  document.getElementById("langEN").style.backgroundColor = "#004f7b";
}
if (window.location.href.indexOf("#de") > -1) {
  document.getElementById("langDE").style.backgroundColor = "#004f7b";
}

// Übersetzungen
var language = {
  en: {
    welcome: "Hello, I'm Özgün.",
    aboutMe:
      "Hi I'm cool. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    summary: "About Me",
    jobs: "Work experience",
    certification: "Certifications",
    education: "Education",
    contact: "Contact",
    MailList: "Write to me at one of my email addresses:",
    techSkills: "Technical skills",
    selfDestruction: "Self destruction",
    MailListInfo: "These addresses actually exist",
  },
};

// define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#en") {
    welcome.textContent = language.en.welcome;
    aboutMe.textContent = language.en.aboutMe;
    summ.textContent = language.en.summary;
    jobs.textContent = language.en.jobs;
    certification.textContent = language.en.certification;
    education.textContent = language.en.education;
    contactMe.textContent = language.en.contact;
    MailList.textContent = language.en.MailList;
    techSkills.textContent = language.en.techSkills;
    selfDestruction.textContent = language.en.selfDestruction;
  }
}
