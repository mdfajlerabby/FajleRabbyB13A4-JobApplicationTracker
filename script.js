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