export function deleteTask(id) {
  return fetch("http://21wsp9pw.course.tamk.cloud/api/v1/task/delete/" + id, {
    method: "DELETE",
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
