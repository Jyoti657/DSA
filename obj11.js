const depart = [
  { id: 1, name: "Enginneering", location: "BuildingA" },
  { id: 2, name: "HR", location: "Building B" },
  { id: 3, name: "Marketing", location: "Building c" },
];
const emp = [
  {
    id: 1,
    name: "Jay Metha",
    depatId: 1,
    role: "SoftwareEng",
    project: [1, 2],
  },
  {
    id: 2,
    name: "Jyoti Mourya",
    depatId: 3,
    role: "marketingAnalysis",
    project: [1],
  },
  { id: 3, name: "Krishan", depatId: 2, role: "Devoops", project: [1, 2, 3] },
];
const project = [
  { id: 1, name: "abc" },
  { id: 2, name: "xyz" },
  { id: 3, name: "pqr" },
];

//   i need the output emp name ,department  and project

console.log(depart[0].name);

const getEmpDetails = emp.map((employes) => {
  const department = depart.find((dep) => dep.id === employes.depatId);
  console.log(department);
   const projectName=project.find((p)=>p.id=== employes.project)
  
});
// console.log(getEmpDetails);
