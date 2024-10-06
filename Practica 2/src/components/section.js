export default function Section(sectionData){
    return `<section class="home_section">
                <img src="${sectionData.image}">
                <div>
                    <h2>${sectionData.title}</h2>         
                    <p>${sectionData.text}</p>
                    <a class="button" href="${sectionData.link}">${sectionData.operation}</a>
                </div>
            </section>
            `
}