const choiceForm = document.querySelector("#myChoiceForm");
function convertFormDataToObject (form){
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}
choiceForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const myData = convertFormDataToObject(e.target);
    alert(`Here I converted your form to json for you: ${JSON.stringify(myData)}`);
    e.target.reset();
   
});