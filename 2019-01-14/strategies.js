// function generateSalaryStategies( ){
//     return {
//         's': (salary)=>{
//             return salary * 1.2;
//         },
//         'a': (salary) => {
//             return salay * 1.3;
//         }
//     }
// }
function generateSalaryStategies() {
    return {
        's': function s(salary) {
            return salary * 1.2;
        },
        'a': function a(salary) {
            return salay * 1.3;
        }
    };
}