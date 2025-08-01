const courses = [
  {
    semester: 1,
    subjects: [
      { name: "Biología celular (DBIO 1069)", id: "BIOCEL", prerequisites: [] },
      { name: "Anatomía humana (DMOR 0003)", id: "ANAT", prerequisites: [] },
      { name: "Química general y orgánica (DQUI 1035)", id: "QUIM", prerequisites: [] },
      { name: "Bases conceptuales de la gestión del cuidado (ENFE A001)", id: "BASES", prerequisites: [] },
      { name: "Psicología del desarrollo y aprendizaje (ENFE A0002)", id: "PSICO", prerequisites: [] },
    ],
  },
  {
    semester: 2,
    subjects: [
      { name: "Estrategias para el aprendizaje (ASIGESA01)", id: "ESTRA", prerequisites: [] },
      { name: "Fisiología humana (DBIO 1075)", id: "FISIO", prerequisites: ["BIOCEL", "ANAT"] },
      { name: "Histoembriología (DMOR 0012)", id: "HISTO", prerequisites: [] },
      { name: "Bioquímica general (DBIO 1076)", id: "BIOQ", prerequisites: ["QUIM"] },
      { name: "Primeros auxilios (ENFE B001)", id: "PRIMER", prerequisites: ["BASES"] },
      { name: "Socioantropología en la Salud (ENFE B002)", id: "SOCIO", prerequisites: ["BASES"] },
      { name: "Formación integral I", id: "FOR1", prerequisites: [] },
    ],
  },
  {
    semester: 3,
    subjects: [
      { name: "Microbiología general (DBIO 1072)", id: "MICRO", prerequisites: ["BIOCEL"] },
      { name: "Farmacología general (DBIO 1044)", id: "FARMA1", prerequisites: ["FISIO", "HISTO", "BIOQ"] },
      { name: "Farmacología aplicada (DBIO 1045)", id: "FARMA2", prerequisites: ["FISIO", "HISTO", "BIOQ"] },
      { name: "Fisiopatología (ENFE C001)", id: "FISIOPATO", prerequisites: ["FISIO", "HISTO", "BIOQ"] },
      { name: "Enfermería en el ciclo vital (ENFE C002)", id: "CICLO", prerequisites: ["PSICO", "FISIO", "HISTO", "BIOQ", "PRIMER"] },
      { name: "Educación en salud (ENFE C003)", id: "EDUC", prerequisites: ["BASES"] },
      { name: "Antropología (FILS 0001)", id: "ANTRO", prerequisites: [] },
      { name: "Formación integral II", id: "FOR2", prerequisites: ["FOR1"] },
    ],
  },
  {
    semester: 4,
    subjects: [
      { name: "Enfermería en Salud Comunitaria I (ENFE D001)", id: "COM1", prerequisites: ["CICLO", "EDUC"] },
      { name: "Metodologías de enseñanza y aprendizaje (ENFE D002)", id: "METODO", prerequisites: ["MICRO", "FARMA1", "FARMA2", "FISIOPATO", "CICLO", "EDUC"] },
      { name: "Gestión del cuidado en la persona (ENFE D003)", id: "GESTPERS", prerequisites: ["MICRO", "FARMA1", "FARMA2", "FISIOPATO", "CICLO"] },
      { name: "Comunicación e interacción humana (ENFE D004)", id: "COMUNIC", prerequisites: [] },
      { name: "Epidemiología (ENFE 0014)", id: "EPIDEMIO", prerequisites: [] },
      { name: "Ética (FILS 0002)", id: "ETICA", prerequisites: ["ANTRO"] },
      { name: "Formación integral III", id: "FOR3", prerequisites: ["FOR2"] },
    ],
  },
  {
    semester: 5,
    subjects: [
      { name: "Electivo de formación integral", id: "ELECFOR", prerequisites: ["ETICA"] },
      { name: "Gestión del cuidado en el adulto (ENFE E001)", id: "ADULTO", prerequisites: ["COM1", "METODO", "GESTPERS", "COMUNIC"] },
      { name: "Enfermería en Salud Mental (ENFE E002)", id: "SALUDMENT", prerequisites: ["COM1", "METODO", "GESTPERS", "COMUNIC"] },
      { name: "Administración en enfermería (ENFE E003)", id: "ADMIN", prerequisites: [] },
      { name: "Formación integral IV", id: "FOR4", prerequisites: ["FOR3"] },
    ],
  },
  {
    semester: 6,
    subjects: [
      { name: "Gestión del cuidado en el Adulto Mayor (ENFE F001)", id: "MAYOR", prerequisites: ["ADULTO", "SALUDMENT"] },
      { name: "Gestión del cuidado en la Mujer y RN (ENFE F002)", id: "MUJER", prerequisites: ["ADULTO", "SALUDMENT"] },
      { name: "Enfermería en alteraciones salud mental (ENFE F003)", id: "ALTERMENT", prerequisites: ["ADULTO", "SALUDMENT"] },
      { name: "Gestión de enfermería en Servicios Clínicos (ENFE F004)", id: "SERVCLIN", prerequisites: ["ADMIN"] },
      { name: "Estadística (DMAE E003)", id: "ESTAD", prerequisites: ["EPIDEMIO"] },
    ],
  },
  {
    semester: 7,
    subjects: [
      { name: "Electivo profesional", id: "ELECPRO", prerequisites: [] },
      { name: "Enfermería de Urgencia (ENFE G001)", id: "URGENCIA", prerequisites: ["MAYOR", "MUJER", "ALTERMENT"] },
      { name: "Gestión del cuidado en el Niño y Niña (ENFE G002)", id: "NINO", prerequisites: ["MAYOR", "MUJER", "ALTERMENT"] },
      { name: "Investigación I (ENFE 0028)", id: "INV1", prerequisites: ["ESTAD"] },
      { name: "Ética en enfermería (ENFE 0031)", id: "ETICAENF", prerequisites: ["ADULTO"] },
    ],
  },
  {
    semester: 8,
    subjects: [
      { name: "Enfermería en Salud Comunitaria II (ENFE H001)", id: "COM2", prerequisites: ["URGENCIA", "NINO"] },
      { name: "Investigación II (ENFE 0033)", id: "INV2", prerequisites: ["INV1"] },
      { name: "Gestión del cuidado en Urgencias (ENFE 0034)", id: "GESTURG", prerequisites: ["URGENCIA", "NINO"] },
      { name: "Gestión del cuidado en el adolescente (ENFE 0035)", id: "ADOLE", prerequisites: ["NINO"] },
    ],
  },
  {
    semester: 9,
    subjects: [
      { name: "Internado intrahospitalario (ENFE I001)", id: "INTHOSP", prerequisites: ["COM2", "INV2", "GESTURG", "ADOLE", "FOR4"] },
    ],
  },
  {
    semester: 10,
    subjects: [
      { name: "Internado extrahospitalario (ENFE I002)", id: "INTEXT", prerequisites: ["COM2", "INV2", "GESTURG", "ADOLE", "FOR4"] },
    ],
  },
];

function createCourseElement(course) {
  const div = document.createElement("div");
  div.className = "course locked";
  div.textContent = course.name;
  div.dataset.id = course.id;
  div.dataset.prerequisites = JSON.stringify(course.prerequisites);

  div.addEventListener("click", () => {
    if (div.classList.contains("locked")) return;
    div.classList.toggle("completed");
    updateUnlockedCourses();
  });

  return div;
}

function updateUnlockedCourses() {
  const completed = new Set(
    Array.from(document.querySelectorAll(".course.completed")).map((el) => el.dataset.id)
  );

  document.querySelectorAll(".course").forEach((el) => {
    const prereqs = JSON.parse(el.dataset.prerequisites);
    const unlocked = prereqs.every((p) => completed.has(p));
    if (!el.classList.contains("completed")) {
      el.classList.toggle("locked", !unlocked);
    }
  });
}

function renderSemesters() {
  const container = document.getElementById("semesters-container");
  container.innerHTML = "";
  courses.forEach((semester) => {
    const semDiv = document.createElement("div");
    semDiv.className = "semester";
    const title = document.createElement("h2");
    title.textContent = `Semestre ${semester.semester}`;
    semDiv.appendChild(title);

    semester.subjects.forEach((subject) => {
      const courseEl = createCourseElement(subject);
      semDiv.appendChild(courseEl);
    });

    container.appendChild(semDiv);
  });

  updateUnlockedCourses();
}


renderSemesters();
