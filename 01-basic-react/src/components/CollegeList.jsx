import CollegeCard from "./CollegeCard";

function CollegeList() {
  const colleges = [
    {
      name: "Indian Institute of Technology, Delhi",
      website: "iitd-example.ac.in",
      location: "New Delhi, India",
      students: [
        {
          name: "Arjun Sharma",
          age: 20,
          email: "arjun.sharma@iitd-example.ac.in",
        },
        {
          name: "Priya Gupta",
          age: 19,
          email: "priya.gupta@iitd-example.ac.in",
        },
        {
          name: "Rohit Mehra",
          age: 21,
          email: "rohit.mehra@iitd-example.ac.in",
        },
      ],
    },
    {
      name: "Stella Maris College",
      website: "stellamaris-example.edu.in",
      location: "Chennai, India",
      students: [
        {
          name: "Divya Krishnan",
          age: 20,
          email: "divya.krishnan@stellamaris-example.edu.in",
        },
        {
          name: "Rohan Desai",
          age: 21,
          email: "rohan.desai@stellamaris-example.edu.in",
        },
        {
          name: "Meera Iyer",
          age: 22,
          email: "meera.iyer@stellamaris-example.edu.in",
        },
      ],
    },
    {
      name: "Delhi University",
      website: "du-example.ac.in",
      location: "New Delhi, India",
      students: [
        {
          name: "Aisha Khan",
          age: 20,
          email: "aisha.khan@du-example.ac.in",
        },
        {
          name: "Vikram Singh",
          age: 21,
          email: "vikram.singh@du-example.ac.in",
        },
        {
          name: "Sana Ali",
          age: 19,
          email: "sana.ali@du-example.ac.in",
        },
      ],
    },
    {
      name: "BITS Pilani",
      website: "bits-pilani-example.ac.in",
      location: "Pilani, India",
      students: [
        {
          name: "Neha Verma",
          age: 19,
          email: "neha.verma@bits-pilani-example.ac.in",
        },
        {
          name: "Karan Reddy",
          age: 20,
          email: "karan.reddy@bits-pilani-example.ac.in",
        },
        {
          name: "Ishaan Kapoor",
          age: 22,
          email: "ishaan.kapoor@bits-pilani-example.ac.in",
        },
      ],
    },
    {
      name: "Bangalore Institute of Technology",
      website: "bit-example.ac.in",
      location: "Bangalore, India",
      students: [
        {
          name: "Anjali Nair",
          age: 21,
          email: "anjali.nair@bit-example.ac.in",
        },
        {
          name: "Ravi Kumar",
          age: 20,
          email: "ravi.kumar@bit-example.ac.in",
        },
        {
          name: "Lakshmi Rao",
          age: 22,
          email: "lakshmi.rao@bit-example.ac.in",
        },
      ],
    },
  ];
  return (
    <>
      {colleges.map((college) => (
        <CollegeCard key={college.name} college={college} />
      ))}
    </>
  );
}
export default CollegeList;
