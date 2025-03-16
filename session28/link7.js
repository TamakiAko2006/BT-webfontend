let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Dương Văn Chiến", scores: { math: 0, english: 0, literature : 0} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];

   function average_score(student) {
    let { math, english, literature } = student.scores;
    return (math + english + literature) / 3;
}

function get_high_achievers(students) {
    let highAchievers = [];
    for (let student of students) {
        let avg = average_score(student);
        if (avg >= 8) {
            highAchievers.push(student.name);
        }
    }
    return highAchievers;
}

let topStudents = get_high_achievers(students);
console.log("Học sinh có điểm trung bình >= 8:", topStudents);