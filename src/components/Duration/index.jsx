export const Duration = ({ duration }) => {
    const values = duration.split(" ");
    const hoursIndex = values.indexOf("hr");
    
    let time = "";
    
    if (hoursIndex !== -1) {
        const hours = values[hoursIndex - 1];
        const minutes = values[hoursIndex + 1];
        time = `${hours}H : ${minutes}min`;
    } else {
        const minutes = values[0];
        time = `${minutes} min por episódio`;
    }
    
    return time;
};
