import React from 'react'
import '/src/stylesheets/Integrantes.css';

function Integrantes(props) {
    return (
        <main className="container">
            <div className="row d-flex align-items-center justify-content-center row-1">
                <div className="col-12 col-lg-8 c1">
                    <h1 className="title-1">{props.titulo1}</h1>
                    <p className="parrafo-1">{props.parrafo1}</p>
                    <hr />
                    <p> Brindar entretenimiento a las personas que accedan al juego y al mismo tiempo aprendan sobre el semáforo.</p>
                    <p> Proporcionar conocimiento a quienes accedan al juego acerca de las multas que trae consigo el mal uso del semáforo.</p>
                    <p> Mostrar la relevancia del semáforo como medio de control de tráfico.</p>
                    <p> Impactar y concientizar sobre el buen uso del semáforo en la cotidianidad.</p>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center c2">
                    <img src="src/assets/Img.png" alt="" className="img-1" />
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center row-2">
                <div className="col-12 col-lg-4 c d-flex justify-content-center">
                    <img src="src/assets/Logo_titilar.png" alt="" className="logo-img" />
                </div>
                <div className="col-12 col-lg-8 c d-flex flex-column justify-content-center">
                    <h1 className="title-2 ">{props.titulo2}</h1>
                    <h4 className="sub-title-1">{props.subtitulo1}</h4>
                    <p className="parrafo-2">{props.parrafo2}</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="sub-title-2 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h4 className="sub-title-2">{props.subtitulo2}</h4>
                                </button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Nuestro logo:</strong> El semáforo eléctrico se originó en Londres y al haber sido un acontecimiento tan importante el concepto principal que utilizamos fue el de nuestro tema central; el semáforo. Utilizamos un tipo de semáforo abstracto que funcionara como un semáforo trazado completamente, pero sin estarlo en realidad, para que así reflejara mayor facilidad de recordación con pocos elementos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center row-3 integrantes">
                <h1 className="title-3">Integrantes</h1>
                <div className="c3 col-12 col-lg-4 d-flex flex-column align-items-center">
                    <img src="src/assets/Mariana.jfif" alt="" className="Mariana" />
                    {/* Button trigger modal */}
                    <button type="button" className="btn-1" data-bs-toggle="modal" data-bs-target="#exampleModal-1">
                        Mariana
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal-1" tabIndex="-1" aria-labelledby="exampleModalLabel-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel-1">Mariana Montoya</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Soy Mari y me encargo de diseñar todo lo de este proyecto, estudie en diferentes colegios pero mi graduación fue en la I.E Madre Laura como bachiller/técnica, diseñe a la relojera, me gusta leer, escuchar música y aprender de diseño gráfico. También soy alguien demasiado sensible y me gusta aprender sobre la historia de Colombia.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c4 col-12 col-lg-4 d-flex flex-column align-items-center">
                    <img src="src/assets/Emmanuel.jfif" alt="" className="Emmanuel" />
                    {/* Button trigger modal */}
                    <button type="button" className="btn-2" data-bs-toggle="modal" data-bs-target="#exampleModal-2">
                        Emmanuel
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal-2" tabIndex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel-2">Emmanuel Rojo</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Ey, me encargo de la programación del juego, me gradué al igual que mis dos compañeras en la institución educativa Madre Laura como bachiller/técnico en multimedia, disfruto jugar al futbol y a los videojuegos, compartir con mis amigos y familia, escuchar rap y conocer nuevos lugares.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c5 col-12 col-lg-4 d-flex flex-column align-items-center">
                    <img src="src/assets/Manuela.jfif" alt="" className="Manuela" />
                    {/* Button trigger modal */}
                    <button type="button" className="btn-3" data-bs-toggle="modal" data-bs-target="#exampleModal-3">
                        Manuela
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal-3" tabIndex="-1" aria-labelledby="exampleModalLabel-3"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel-3">Manuela Lopera</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Hola, soy la encargada del contenido audiovisual de Titilar, tengo 19 años, graduada
                                    como bachiller/técnica de la institución educativa Madre Laura con técnica en
                                    multimedia, mis hobbies son dibujar, pintar, bailar, cantar y hacer deporte, también
                                    me encargue de crear a Julián.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Integrantes