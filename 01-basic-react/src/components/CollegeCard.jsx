function CollegeCard({ college }) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        border: "2px solid black",
        borderRadius: "10px",
        margin: "20px",
        padding: "20px",        
      }}
    >
      <h2>College : {college.name}</h2>
      <ul>
        <li>
          <h3>Location : {college.location}</h3>
        </li>
        <li>
          <h3>Website : {college.website}</h3>
        </li>
        <li>
          <h3>Students :</h3>
          {college.students.map((student) => (
            <div>
              <h4>{student.name}</h4>
              <h4>{student.age}</h4>
              <h4>{student.email}</h4>
              <hr />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
export default CollegeCard;
