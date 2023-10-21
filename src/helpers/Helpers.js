export const dateConverter = (date) => {
    const fechaObj = new Date(date);
    const day = fechaObj.getUTCDate();
    const month = fechaObj.getUTCMonth() + 1; 
    const year = fechaObj.getUTCFullYear();
    
    return `${day}-${month}-${year}`;
};