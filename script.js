const teachers = {
    'pratik': [
        ["6th-a","6th-b","7th-c","free","free","7th-b","6th-c","free"],
        ["6th-b","7th-c","6th-a","7th-b","free","6th-c","free","7th-a"],
        ["7th-c","6th-a","free","6th-b","7th-b","free","6th-c","7th-a"],
        ["6th-b","6th-c","7th-b","free","7th-a","free","6th-a","free"],
        ["6th-c","7th-b","6th-a","7th-c","free","free","6th-b","7th-a"],
    ],
    'aarna': [
        ["9th-a","free","8th-a","7th-c","free","7th-b","7th-c","8th-b"],  
        ["8th-a","9th-b","free","8th-c","9th-a","free","7th-b","8th-c"],  
        ["9th-c","8th-b","free","9th-a","7th-c","free","8th-b","7th-b"],  
        ["8th-a","9th-c","7th-b","8th-b","9th-a","free","7th-c","8th-c"],  
        ["7th-b","8th-c","9th-a","free","7th-c","8th-b","9th-b","7th-b"],  
    ],
    'syon': [
        ["9th-a","free","8th-a","7th-c","free","7th-b","7th-c","8th-b"],
        ["8th-a","9th-b","free","8th-c","9th-a","free","7th-b","8th-c"],
        ["9th-c","8th-b","free","9th-a","7th-c","free","8th-b","7th-b"],
        ["8th-a","9th-c","7th-b","8th-b","9th-a","free","7th-c","8th-c"],
        ["7th-b","8th-c","9th-a","free","7th-c","8th-b","9th-b","7th-b"],
    ],
    'ayushman': [
        ["8th-a","free","9th-b","9th-c","7th-a","free","free","8th-b"],
        ["9th-b","8th-c","7th-a","free","8th-b","9th-c","free","7th-c"],
        ["7th-a","9th-b","8th-c","7th-c","free","9th-b","8th-a","free"],
        ["8th-c","7th-a","9th-b","8th-b","7th-c","free","9th-a","free"],
        ["9th-b","8th-c","7th-a","free","9th-c","7th-b","8th-a","free"],
    ],
    'shreyansh': [
        ["free","free","7th-a","6th-a","free","8th-a","8th-c","free"],
        ["7th-b","6th-c","free","7th-c","6th-a","free","7th-b","8th-b"],
        ["6th-a","7th-b","free","6th-c","7th-a","free","6th-b","free"],
        ["7th-c","6th-b","8th-a","free","7th-b","6th-c","free","7th-a"],
        ["6th-b","7th-c","free","6th-a","7th-b","free","8th-c","7th-c"],
    ],
    'palak': [
        ["7th-b","7th-c","free","9th-a","free","free","free","8th-a"],
        ["7th-c","8th-a","9th-b","free","7th-a","8th-c","free","7th-b"],
        ["8th-a","7th-b","free","7th-c","9th-a","free","7th-b","8th-b"],
        ["7th-a","8th-c","7th-b","9th-b","free","free","8th-a","7th-c"],
        ["8th-b","7th-c","7th-a","free","8th-a","9th-b","free","7th-b"],
    ],
    'punya': [
        ["free","8th-b","free","free","6th-c","6th-a","7th-a","7th-b"],
        ["7th-a","free","8th-c","6th-b","7th-b","free","8th-a","free"],
        ["6th-c","7th-b","free","6th-a","7th-a","free","6th-b","8th-b"],
        ["free","7th-c","6th-a","free","7th-b","8th-c","6th-c","7th-a"],
        ["7th-b","6th-a","7th-c","6th-b","free","8th-a","free","7th-c"],
    ],
    'harshit': [
        ["9th-b","8th-c","9th-c","free","8th-a","free","free","free"],
        ["8th-a","9th-b","free","9th-c","8th-c","7th-b","free","9th-a"],
        ["9th-c","8th-a","9th-b","free","8th-b","9th-c","7th-a","free"],
        ["free","8th-c","7th-b","9th-a","free","9th-c","8th-b","7th-c"],
        ["9th-b","free","8th-a","7th-b","9th-c","free","8th-c","7th-a"],
    ],
    'daksh': [
        ["6th-b","7th-b","free","7th-c","free","9th-b","8th-a","free"],
        ["7th-a","6th-c","7th-b","free","6th-a","8th-b","7th-c","free"],
        ["6th-b","7th-c","free","8th-a","7th-a","6th-c","free","7th-b"],
        ["7th-b","6th-a","8th-c","free","7th-c","6th-b","8th-a","free"],
        ["6th-a","7th-b","free","7th-c","6th-b","8th-a","7th-c","free"],
    ],
    'jaadu': [
        ["free","7th-a","8th-b","8th-c","free","9th-c","free","9th-a"],
        ["8th-b","free","7th-a","9th-c","8th-a","free","9th-b","7th-c"],
        ["free","8th-c","9th-b","7th-a","free","8th-b","7th-c","9th-a"],
        ["7th-c","9th-b","free","8th-a","7th-a","9th-c","8th-b","free"],
        ["8th-a","free","7th-c","9th-b","8th-b","free","7th-a","9th-c"],
    ]
};


const attendanceDiv = document.getElementById("attendance");
function renderAttendance() {
  attendanceDiv.innerHTML = "";
  Object.keys(teachers).forEach(t => {
    attendanceDiv.innerHTML += `
      <div class="teacher">
        <span class="teacher-name">${t}</span>
        <div class="teacher-right">
          <div class="circle present" onclick="toggle(this)">P</div>
          <div class="circle remove-x" onclick="removeTeacherByName('${t}')">✖</div>
        </div>
      </div>`;
  });
}

// Remove teacher by name
function removeTeacherByName(name) {
  if (!teachers[name]) return;
  delete teachers[name];
  renderAttendance();
}

// Toggle P/A
function toggle(el) {
  el.classList.toggle("present");
  el.classList.toggle("absent");
  el.textContent = el.classList.contains("present") ? "P" : "A";
}

// Add new teacher
function addTeacher() {
  const name = document.getElementById("newTeacher").value.trim();
  if (!name || teachers[name]) return;

  teachers[name] = Array.from({ length: 5 }, () => Array.from({ length: 8 }, () => "free"));
  renderAttendance(); // 🔥 Always render after adding
  document.getElementById("newTeacher").value = "";
}

// Remove teacher from input
function removeTeacher() {
  const name = document.getElementById("newTeacher").value.trim();
  if (!teachers[name]) return;

  delete teachers[name];
  renderAttendance();
  document.getElementById("newTeacher").value = "";
}

// Generate substitution table
function generate() {
  const day = +document.getElementById("day").value;
  const absent = [];
  const present = [];

  document.querySelectorAll(".teacher").forEach(row => {
    const name = row.querySelector(".teacher-name").textContent.trim();
    const status = row.querySelector(".circle").textContent;
    status === "A" ? absent.push(name) : present.push(name);
  });

  // 1️⃣ Precompute free counts & period availability
  const teacherFreeCount = {};
  const periodFreeTeachers = Array.from({ length: 8 }, () => new Set());
  present.forEach(t => {
    const schedule = teachers[t][day];
    let freeCount = 0;
    schedule.forEach((cls, p) => {
      if (cls === "free") {
        freeCount++;
        periodFreeTeachers[p].add(t);
      }
    });
    teacherFreeCount[t] = freeCount;
  });

  // 2️⃣ Track load (number of assignments)
  const teacherLoad = {};
  present.forEach(t => teacherLoad[t] = 0);

  // 3️⃣ Build substitution chart
  const periodSubs = Array.from({ length: 8 }, () => []);

  absent.forEach(abs => {
    teachers[abs][day].forEach((cls, p) => {
      if (cls === "free") return;

      // candidates for this period
      const candidates = Array.from(periodFreeTeachers[p]);
      if (!candidates.length) {
        periodSubs[p].push(`No free teacher for ${cls} (was ${abs}'s)`);
        return;
      }

      // sort candidates by max free periods, then min load
      candidates.sort((a, b) => {
        if (teacherFreeCount[b] !== teacherFreeCount[a])
          return teacherFreeCount[b] - teacherFreeCount[a];
        return teacherLoad[a] - teacherLoad[b];
      });

      const chosen = candidates[0];

      // assign
      periodSubs[p].push(`${chosen} – ${cls}`);

      // update structures
      teachers[chosen][day][p] = 'assigned';
      teacherFreeCount[chosen]--;
      teacherLoad[chosen]++;
      periodFreeTeachers[p].delete(chosen);
    });
  });

  // 4️⃣ Render HTML table
  let html = `<table><tr>`;
  for (let p = 1; p <= 8; p++) html += `<th>Period ${p}</th>`;
  html += `</tr><tr>`;
  for (let p = 0; p < 8; p++) {
    html += `<td>${periodSubs[p].join("<br>")}</td>`;
  }
  html += `</tr></table>`;
  document.getElementById("output").innerHTML = html;
}

// ✅ Render predefined teachers on page load
renderAttendance();