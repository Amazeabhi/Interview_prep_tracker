document.addEventListener("DOMContentLoaded", () => {
  const topicForm = document.getElementById("topicForm");
  const resourceForm = document.getElementById("resourceForm");
  const topicList = document.getElementById("topicList");
  const resourceList = document.getElementById("resourceList");

  // Handle Topic Submission
  topicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const topicInput = document.getElementById("topicInput");
    const topic = topicInput.value.trim();
    if (topic) {
      const li = document.createElement("li");
      li.textContent = topic;
      topicList.appendChild(li);
      topicInput.value = "";
    }
  });

  // Handle Resource Submission with Status
  resourceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const resourceInput = document.getElementById("resourceInput");
    const statusInput = document.getElementById("statusInput");
    const resource = resourceInput.value.trim();
    const status = statusInput.value;

    if (resource) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${resource}</strong> — <em>${status}</em>`;
      resourceList.appendChild(li);
      resourceInput.value = "";
      statusInput.selectedIndex = 0;
    }
  });
});
