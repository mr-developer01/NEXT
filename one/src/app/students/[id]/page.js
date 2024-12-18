import React, { use } from "react";

const page = ({ params }) => {
  const fetchGitData = async () => {
    const rowData = await fetch("https://api.github.com/users/mr-developer01");
    return await rowData.json();
  };
  const { id } = use(params);
  const userData = use(fetchGitData());
  userData.login = "Kunal"
  console.log(userData.login);
  

  return <div>Student Detail : {id}</div>;
};

export default page;
