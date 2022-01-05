export function createNewTask(data) {
  return fetch("http://21wsp9pw.course.tamk.cloud/api/v1/task/addtask", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
        console.log(response);
        window.location.reload();
      } else {
        console.log("Somthing happened wrong");
      }
    })
    .catch((err) => err);
}
