const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const averages = students.map(student => {
    const scores = Object.values(student)[0]; 
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0); 
    const average = total / Object.keys(scores).length; 
    return { [Object.keys(student)[0]]: { average } }; 
});

console.log(averages);
