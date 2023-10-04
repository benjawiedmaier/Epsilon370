import React from 'react';

function Integrantes(){
    return(
        <section class="integrantes">
            <div id="mati">
                <h2><a href="mati.html">Matías Ochoa</a></h2>
                <h3>Alumno UAI</h3>
                <div class="imagen">  
                    <img src="https://labmakeruai22wiedmaier.blob.core.windows.net/public/mati.jpg" alt="mati"></img>
                </div>

            </div>
            <div id="benjamin">
                <h2><a href="wiedmaier.html">Benjamín Wiedmaier</a></h2>
                <h3>Alumno UAI</h3>
                <div class="imagen">
                    <img src="https://labmakeruai22wiedmaier.blob.core.windows.net/public/benja.jpg" alt="benjamin"></img>
                </div>
            </div>
            <div id="munita">
                <h2><a href="wiedmaier.html">Cristóbal Munita</a></h2>
                <h3>Alumno UAI</h3>
                <div class="imagen">
                    <img src="https://labmakeruai22wiedmaier.blob.core.windows.net/public/munita.jpg" alt="munita"></img>
                </div>
            </div>
        </section>
        
    );
}

export default Integrantes;