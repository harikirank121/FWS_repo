import { useState } from "react";

function StudentManager() {

    const [students, setStudents] = useState([
        { id: 1, name: "Ravi", course: "CSE" },
        { id: 2, name: "Anu", course: "IT" },
        { id: 3, name: "Kiran", course: "ECE" },
        { id: 4, name: "Priya", course: "EEE" },
        { id: 5, name: "Rahul", course: "CSE" }
    ]);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    const addStudent = () => {
        const newStudent = { id, name, course };
        setStudents([...students, newStudent]);

        setId("");
        setName("");
        setCourse("");
    };

    const deleteStudent = (id) => {
        const newList = students.filter((s) => s.id !== id);
        setStudents(newList);
    };

    return (
        <div>
            <h2>Student Manager</h2>

            ID:
            <input value={id} onChange={(e) => setId(e.target.value)} />

            Name:
            <input value={name} onChange={(e) => setName(e.target.value)} />

            Course:
            <input value={course} onChange={(e) => setCourse(e.target.value)} />

            <button onClick={addStudent}>Add</button>

            <br /><br />

            {students.length === 0 ? (
                <p>No students available</p>
            ) : (
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Delete</th>
                    </tr>

                    {students.map((s) => (
                        <tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>
                                <button onClick={() => deleteStudent(s.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    );
}

export default StudentManager;