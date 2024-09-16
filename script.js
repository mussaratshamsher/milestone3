var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var resumeContent = " \n        <h2>Personal Information</h2> \n        \n        <p>Name: ".concat(name, "</p>\n        <p>Email: ").concat(email, "</p>  \n        <p>Phone: ").concat(phone, "</p>  \n        <h4>Experience</h4>  \n        <p>").concat(experience, "</p>  \n        <h4>Education</h4>  \n        <p>").concat(education, "</p>  \n         <h4>Skills</h4>\n         <p>").concat(skills, "</p>\n    ");
    document.getElementById('resume-content').innerHTML = resumeContent;
});
//code 2
// const resumeForm = document.getElementById('resume-form') as HTMLInputElement
// const resumeOutput = document.getElementById('resume-content') as HTMLInputElement
// if(resumeForm && resumeOutput){
//     resumeForm.addEventListener('submit',(event)=>{
//         event.preventDefault();
//         const name = (document.getElementById('name')as HTMLInputElement).value;  
//     const email = (document.getElementById('email')as HTMLInputElement).value;  
//     const phone = (document.getElementById('phone')as HTMLInputElement).value;  
//     const experience = (document.getElementById('experience')as HTMLInputElement).value;  
//     const education = (document.getElementById('education')as HTMLInputElement).value;  
//     const skills = (document.getElementById('skills')as HTMLInputElement).value;
//     const resumeContent = ` 
//             <h2>Personal Information</h2> 
//             <p>Name: ${name}</p>
//             <p>Email: ${email}</p>  
//             <p>Phone: ${phone}</p>  
//             <h4>Experience</h4>  
//             <p>${experience}</p>  
//             <h4>Education</h4>  
//             <p>${education}</p>  
//              <h4>Skills</h4>
//              <p>${skills}</p>
//         `;  
// resumeOutput.innerText = resumeContent
//     })
// }  else{
//     console.error('output div is not found in DOM')
// }
