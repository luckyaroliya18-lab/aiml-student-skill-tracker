// =====================================
// AIML STUDENT SKILL TRACKER
// =====================================

// Initial Skills
let skills = [
    { name: "Python", level: 8 },
    { name: "Machine Learning", level: 6 },
    { name: "JavaScript", level: 5 },
    { name: "SQL", level: 4 }
];

// Projects
let projects = [
    {
        name: "Student Result Predictor",
        technology: "Python",
        status: "Completed",
        score: 85
    },
    {
        name: "Movie Recommendation System",
        technology: "Machine Learning",
        status: "Completed",
        score: 90
    },
    {
        name: "Portfolio Website",
        technology: "JavaScript",
        status: "Ongoing",
        score: 70
    }
];


// Start Project
function startProject() {

    let studentName =
        document.getElementById("studentName").value;

    let semester =
        Number(document.getElementById("semester").value);


    // Input validation
    if (studentName === "" || semester <= 0) {

        alert("Please enter valid information.");

        return;
    }


    // Calculate average score
    let averageScore = calculateAverageScore(projects);


    // Completed projects
    let completedProjects = projects.filter(function(project) {

        return project.status === "Completed";

    });


    // Performance
    let performance = getPerformance(averageScore);


    // Career status using ternary
    let careerStatus =
        averageScore >= 60
            ? "On Track"
            : "Needs More Practice";


    // Skills HTML
    let skillsHTML = "";

    skills.forEach(function(skill) {

        let category = getSkillCategory(skill.level);

        skillsHTML += `
            <div class="item">
                <strong>${skill.name}</strong>
                - Level ${skill.level}/10
                - ${category}
            </div>
        `;
    });


    // Projects HTML
    let projectsHTML = "";

    projects.forEach(function(project) {

        projectsHTML += `
            <div class="item">
                <strong>${project.name}</strong><br>
                Technology: ${project.technology}<br>
                Status: ${project.status}<br>
                Score: ${project.score}/100
            </div>
        `;
    });


    // Final Dashboard
    document.getElementById("dashboard").innerHTML = `

        <div class="dashboard-card">

            <h2>Student Dashboard</h2>

            <p>
                <strong>Name:</strong>
                ${studentName}
            </p>

            <p>
                <strong>Semester:</strong>
                ${semester}
            </p>

        </div>


        <div class="dashboard-card">

            <h2>Skills</h2>

            ${skillsHTML}

        </div>


        <div class="dashboard-card">

            <h2>Projects</h2>

            ${projectsHTML}

        </div>


        <div class="dashboard-card">

            <h2>Performance Analytics</h2>

            <p>
                Total Projects:
                ${projects.length}
            </p>

            <p>
                Completed Projects:
                ${completedProjects.length}
            </p>

            <p>
                Average Score:
                ${averageScore.toFixed(2)}
            </p>

            <p>
                Performance:
                ${performance}
            </p>

            <p>
                Career Preparation:
                ${careerStatus}
            </p>

        </div>
    `;
}


// Skill Category Function
function getSkillCategory(level) {

    if (level >= 8) {

        return "Advanced";

    } else if (level >= 5) {

        return "Intermediate";

    } else {

        return "Beginner";
    }
}


// Calculate Average
function calculateAverageScore(projectList) {

    let total = 0;

    for (let i = 0; i < projectList.length; i++) {

        total += projectList[i].score;

    }

    return total / projectList.length;
}


// Performance Function
function getPerformance(score) {

    switch (true) {

        case score >= 85:
            return "Excellent";

        case score >= 70:
            return "Good";

        case score >= 50:
            return "Needs Improvement";

        default:
            return "Poor";
    }
}