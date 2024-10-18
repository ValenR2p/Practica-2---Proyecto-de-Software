export default function Navbar(){
    return `<nav class="navbar">
                    <div class="d-flex">
                        <a href="./home.html"><img class="logo" src="./img/c-sharp-logo@logotyp.us.svg"></a>
                        <h3>Introduccion al Front End</h3>
                    </div>
                    <div class="d-flex">
                        <a class="nav-link" type="submit" href="./home.html">Home</a>
                        <a class="nav-link" type="submit" href="./clientsList.html">Clients</a>
                        <a class="nav-link" type="submit" href="./projectsCards.html">Projects</a>
                    </div>
            </nav>
            `;
}