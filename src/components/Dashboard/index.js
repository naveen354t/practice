import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const sampleData = [
  {
    id: 1,
    topicName: "HTML",
    value: "80%",
  },
  {
    id: 2,
    topicName: "CSS",
    value: "70%",
  },
  {
    id: 3,
    topicName: "Java script",
    value: "60%",
  },
];

const Dashboard = () => {
  const [data, setData] = useState(sampleData);

  return (
    <div>
      <div>
        <Link to="/topic">
          <button type="button">ADD TOPIC</button>
        </Link>
        {data.map((item) => {
          return (
            <div>
              <ul>
                <li key={item.id}>
                  {item.topicName}
                  {item.value}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
