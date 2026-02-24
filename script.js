const jobs = [
    {
        id: 1,
        companyName: "Mobile Print Corp",
        position: "Senior Print Developer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "50,000 - 70,000 BDT",
        description: "Work with enterprise print solutions and modern web technologies.",
        status: "all"
    },
    {
        id: 2,
        companyName: "Next Play Agency",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "60,000 BDT",
        description: "Develop scalable applications for global clients.",
        status: "all"
    },
    {
        id: 3,
        companyName: "Deltax Solutions",
        position: "Software Engineer",
        location: "Uttara, Dhaka",
        type: "Full-time",
        salary: "45,000 BDT",
        description: "Build secure and high performance backend systems.",
        status: "all"
    },
    {
        id: 4,
        companyName: "Quantum Net",
        position: "Service Engineer",
        location: "Dhaka",
        type: "On-site",
        salary: "35,000 BDT",
        description: "Maintain enterprise networking solutions.",
        status: "all"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI Developer",
        location: "Remote",
        type: "Contract",
        salary: "55,000 BDT",
        description: "Create clean user interfaces and responsive layouts.",
        status: "all"
    },
    {
        id: 6,
        companyName: "MegaCode Solutions",
        position: "React Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "65,000 BDT",
        description: "Develop modern React based web applications.",
        status: "all"
    },
    {
        id: 7,
        companyName: "StartUpXYZ",
        position: "Junior Developer",
        location: "Remote",
        type: "Full-time",
        salary: "30,000 BDT",
        description: "Assist senior developers in building software solutions.",
        status: "all"
    },
    {
        id: 8,
        companyName: "TechFlow Industries",
        position: "Backend Developer",
        location: "Banani, Dhaka",
        type: "Full-time",
        salary: "70,000 BDT",
        description: "Develop APIs and manage large scale databases.",
        status: "all"
    }
];

const container = document.getElementById("jobsContainer");
const tabs = document.querySelectorAll(".tab");

function updateDashboard() {
    const interview = jobs.filter(job => job.status === "interview").length;
    const rejected = jobs.filter(job => job.status === "rejected").length;
    const total = jobs.length;

    document.getElementById("interviewCount").innerText = interview;
    document.getElementById("rejectedCount").innerText = rejected;
    document.getElementById("totalCount").innerText = total;

    document.getElementById("tabCount").innerText = total;
}

function renderJobs(tab) {
    container.innerHTML = "";

    let filtered = jobs;
    if (tab !== "all") {
        filtered = jobs.filter(job => job.status === tab);
    }

    if (filtered.length === 0) {
        document.getElementById("emptyState").classList.remove("hidden");
        return;
    } else {
        document.getElementById("emptyState").classList.add("hidden");
    }

    filtered.forEach(job => {
        const card = document.createElement("div");
        card.className = "card";

        let statusText = '<button class="btn notapplied-btn">Not Applied</button>';
        let statusClass = "status-all";
        let borderClass = "all-status";

        if (job.status === "interview") {
            statusText = '<button class="btn interviewUp-btn">Interview</button>';
            statusClass = "status-interview";
            borderClass = "interview-status";
        }

        if (job.status === "rejected") {
            statusText =  '<button class="btn rejectedUp-btn">Rejected</button>';
            statusClass = "status-rejected";
            borderClass = "rejected-status";
        }

        card.classList.add(borderClass);

        card.innerHTML = `
            <span class="delete-icon">🗑</span>

            <div class="company-name">${job.companyName}</div>
            <div class="position">${job.position}</div>
            <div class="meta">${job.location} • ${job.type} • ${job.salary}</div>

            <div class="status-text ${statusClass}">
                ${statusText}
            </div>

            <div class="description">${job.description}</div>

            <div class="buttons">
                <button class="btn interview-btn">Interview</button>
                <button class="btn rejected-btn">Rejected</button>
            </div>
        `;

        card.querySelector(".interview-btn").onclick = () => {
            job.status = "interview";
            updateDashboard();
            renderJobs(tab);
        };

        card.querySelector(".rejected-btn").onclick = () => {
            job.status = "rejected";
            updateDashboard();
            renderJobs(tab);
        };

        card.querySelector(".delete-icon").onclick = () => {
            const index = jobs.findIndex(j => j.id === job.id);
            jobs.splice(index, 1);
            updateDashboard();
            renderJobs(tab);
        };

        container.appendChild(card);
    });
}
