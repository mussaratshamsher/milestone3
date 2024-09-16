document.getElementById('resume-form')?.addEventListener('submit', function(event) {  
    event.preventDefault();  

    const name = (<HTMLInputElement>document.getElementById('name')).value;  
    const email = (<HTMLInputElement>document.getElementById('email')).value;  
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;  
    const experience = (<HTMLTextAreaElement>document.getElementById('experience')).value;  
    const education = (<HTMLTextAreaElement>document.getElementById('education')).value;  
    const skills = (<HTMLTextAreaElement>document.getElementById('skills')).value;

    const resumeContent = ` 
        <h2>Personal Information</h2> 
        
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>  
        <p>Phone: ${phone}</p>  
        <h4>Experience</h4>  
        <p>${experience}</p>  
        <h4>Education</h4>  
        <p>${education}</p>  
         <h4>Skills</h4>
         <p>${skills}</p>
    `;  

    document.getElementById('resume-content')!.innerHTML = resumeContent;  
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





