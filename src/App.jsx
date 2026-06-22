function App() {
  const students = [
    {
      name: "Rishank",
      course: "B.Tech AIML",
      year: "1st Year",
      cgpa: "8.5",
      roll: "2503215300156",
      img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg"
    },
    {
      name: "Rahul",
      course: "B.Tech CSE",
      year: "2nd Year",
      cgpa: "8.8",
      roll: "2503215300157",
      img: "https://static.vecteezy.com/system/resources/thumbnails/026/911/382/small/happy-student-boy-with-books-isolated-free-photo.jpg"
    }
  ];

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#e8f5e9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Student Profile Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {students.map((student, index) => (
          <div
            key={index}
            style={{
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "220px",
              boxShadow: "0px 2px 5px gray",
            }}
          >
            <img
              src={student.img}
              alt={student.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
              }}
            />

            <h3>{student.name}</h3>
            <p><b>Course:</b> {student.course}</p>
            <p><b>Year:</b> {student.year}</p>
            <p><b>CGPA:</b> {student.cgpa}</p>
            <p><b>Roll No:</b> {student.roll}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;