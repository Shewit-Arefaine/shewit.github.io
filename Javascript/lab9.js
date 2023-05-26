class Student{
    constructor(studentID){
        this.studentID = student;
        this.answers = [];
    }

    addAnswer(question){
        this.answers.push(question);
    }
}


class Student{
    constructor(studentID){
        this.studentID = student;
        this.answers = [];
    }

    addAnswer(question){
        this.answers.push(question);
    }
}


class Quiz{
    constructor(questions, students){
        this.questions = questions.reduce( (acc, question) => {
            acc[question.id] = question.answer;
            return acc;
        }, {});

        // Or we can do using map as follows
        // this.questions = questions.map(question => ({[question.id] : question.answer})) 

        this.answer = answer;
    }
    

    scoreStudent(sid){
        const student = this.students.find(s => s.studentID === sid );
        
        // or using filter
        // const student = this.students.filter(s => s.studentID === sid);

        let score = 0;
        student.answers.forEach(question => {
            if(this.questions[question.qID] === question.answer){
                score++;
            }
        });
        return score;

    }

    getAverageScore(){
        const scores = this.students.map(student => this.scoreStudent(student.studentID));
        return scores.reduce( (acc, score) => acc + score, 0)/scores.length;
    }
}