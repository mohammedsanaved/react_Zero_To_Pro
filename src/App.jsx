const skills = [
  {
    skill: "Penalty Specailist",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Profilic Winger",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Long Range Shoot",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Cross",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Captain",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Speed",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="../public/918025.jpg" className="avatar" alt="" />;
}
function Intro() {
  return (
    <>
      <div>
        <h2>Mohammed Salah</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          explicabo ea impedit in quia quam velit nam totam deleniti odio.
        </p>
      </div>
    </>
  );
}
function SkillList() {
  return (
    <div className="skill-list" key={skills.skill}>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
