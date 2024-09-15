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