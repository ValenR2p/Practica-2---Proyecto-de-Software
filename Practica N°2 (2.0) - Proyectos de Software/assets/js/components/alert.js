export async function alert(message,information) {
    if(message == 'succes'){
        return `<div class="alert-box">
                    <img class="alert-icon" src="assets/img/Succes.png"></img>
                    <div id="alert-info" class="alert-info">
                        <h2 class="alert-title">Succes!</h2>
                        <p class="alert-message">Operation completed succesfully</p>
                    </div>
                    <button class="alert-button" onclick="closeAlert2();closeAlert()">Aceptar</button>
                </div>
        `;
    }else{
        return `<div class="alert-box">
                    <img class="alert-icon" src="assets/img/Error.png"></img>
                    <div id="alert-info" class="alert-info">
                        <h2 class="alert-title">Error!</h2>
                        <p class="alert-message">${information}</p>
                    </div>
                    <button class="alert-button" onclick="closeAlert2()">Aceptar</button>
                </div>
        `;
    }
    ;
}