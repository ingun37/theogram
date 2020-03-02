export function renderTheograms(containerId:string) {
    let container = document.getElementById(containerId);
    if (container) {
        const element = document.createElement('div');
    
        element.innerHTML = " generated div";
    
        container.appendChild(element);
    }
}