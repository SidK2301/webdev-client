import { FaUserCircle } from "react-icons/fa";

type Person = {
  name: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

const personalPeople: Person[] = [
  {
    name: "Siddhi Ramchandra Kore",
    loginId: "siddhi.kore",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-10",
    totalActivity: "18:42:10",
  },
  {
    name: "Student 2",
    loginId: "student2",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-09",
    totalActivity: "08:16:45",
  },
  {
    name: "Student 3",
    loginId: "student3",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-08",
    totalActivity: "05:03:22",
  },
];

const aiPeople: Person[] = [
  {
    name: "Jane Sample",
    loginId: "sample001",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-07",
    totalActivity: "04:15:30",
  },
  {
    name: "Alex Sample",
    loginId: "sample002",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-06",
    totalActivity: "03:42:18",
  },
  {
    name: "Sam Sample",
    loginId: "sample003",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2026-10-05",
    totalActivity: "02:57:11",
  },
];

function PersonRow({ person }: { person: Person }) {
  return (
    <tr className="odd:bg-neutral-50">
      <td className="p-2 text-nowrap">
        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
        {person.name}
      </td>
      <td className="p-2">{person.loginId}</td>
      <td className="p-2">{person.section}</td>
      <td className="p-2">{person.role}</td>
      <td className="p-2">{person.lastActivity}</td>
      <td className="p-2">{person.totalActivity}</td>
    </tr>
  );
}

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Bruce Wayne
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-02</td>
            <td className="p-2">23:32:23</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Steve Rogers
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">13:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Natasha Romanoff
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          {personalPeople.map((person) => (
            <PersonRow key={person.loginId} person={person} />
          ))}
          {aiPeople.map((person) => (
            <PersonRow key={person.loginId} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
