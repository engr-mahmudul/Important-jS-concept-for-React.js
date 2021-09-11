const student = {
    name: "Aziz",
    id: 120,
    // subjects: {
    //     first : "Bangla",
    //     sec : "English",
    //     optional : {
    //         // fouth : "HM",
    //         // fifth : "ZO"
    //     }
    // }
}

const {fouth,fifth} = student?.subjects?.optional;
console.log(fouth,fifth);