import 'semantic-ui-css/semantic.min.css';
import '../css/home.css';


const Home = () => {

    return (
        <>
            <div className="heroSticky">
                <div className="containerSticky tituloPortada">
                    <div className="tituloPortada">Tu menú semanal en la puerta de tu casa</div>
                    <div className="subtituloPortada">
                        Vos elegís tu plan de recetas y nosotros te enviamos todos los ingredientes
                    </div>
                </div>
            </div>

            <div className="pasos">
                <div className="telefono" data-aos="fade-right">
                    <img src="./img/app.jpeg" alt="" />
                </div>

                <div className="paso">
                    <div className="pasoD" data-aos="fade-left">
                        <h3 className="tituloPaso">1. Seleccioná tu plan</h3>
                        <p className="textoPaso">
                            Elegí el plan que más se adapte a tu estilo
                            <br />
                            de vida y recibí cajas cada semana hasta que
                            <br />
                            canceles. ¿Necesitás cancelar u omitir una
                            <br />semana? No hay problema.
                        </p>
                    </div>
                    <div className="pasoI" data-aos="fade-left">
                        <h3 className="tituloPaso">2. Recibí tu entrega</h3>
                        <p className="textoPaso">
                            Cada semana, vas a recibir recetas simples,
                            <br />con instrucciones paso a paso con su
                            <br />información nutricional e ingredientes frescos y
                            <br />perfectamente medidos para que puedas
                            <br />preparar deliciosas cenas en poco tiempo.
                        </p>
                    </div>
                    <div className="pasoD" data-aos="fade-left">
                        <h3 className="tituloPaso">3. Cociná, comé y disfrutá</h3>
                        <p className="textoPaso">
                            La eterna pregunta «¿y hoy qué comemos?»
                            <br />está a punto de desaparecer de tu vida.
                            <br />Bienvenida a un mundo donde la cena siempre
                            <br />es planificada, simple y deliciosa.
                        </p>
                    </div>
                </div>
            </div>

            <div className="queHay" data-aos="fade-up">
                Beneficios
            </div>

            <div className="beneficios">
                <div className="">
                    <div className="cardBeneficioI" data-aos="fade-right">
                        <div className="tituloBeneficioI">DELICIOSO</div>
                        <div className="textoBeneficio">
                            Curamos las mejores recetas para garantizar que tus comidas sean tan deliciosas como fáciles de preparar.
                        </div>
                    </div>

                    <div className="cardBeneficioI" data-aos="fade-right">
                        <div className="tituloBeneficioI">SIMPLE</div>
                        <div className="textoBeneficio">
                            Desde recetas paso a paso hasta cambios en tu cuenta sin problemas, hacemos que tu vida sea más fácil de todas las formas posibles.
                        </div>
                    </div>

                    <div className="cardBeneficioI" data-aos="fade-right">
                        <div className="tituloBeneficioI">FLEXIBLE</div>
                        <div className="textoBeneficio">
                            Queremos brindarte una experiencia sin estrés, por lo que podes omitir una semana, pausar tu suscripción o cancelarla en cualquier momento.
                        </div>
                    </div>
                </div>

                <div className="seccionBeneficiosD">
                    <div className="cardBeneficioD" data-aos="fade-left">
                        <div className="tituloBeneficioD">SIN ESTRÉS</div>
                        <div className="textoBeneficio">Recuperá tus tardes con menos viajes al super, comidas planificadas previamente y poca limpieza.</div>
                    </div>

                    <div className="cardBeneficioD" data-aos="fade-left">
                        <div className="tituloBeneficioD">VARIEDAD</div>
                        <div className="textoBeneficio">¡Apetitos exigentes bienvenidos! Decinos qué te gusta y qué no te gusta, y te vamos a recomendar algo delicioso.</div>
                    </div>

                    <div className="cardBeneficioD" data-aos="fade-left">
                        <div className="tituloBeneficioD">SIN DESPERDICIOS</div>
                        <div className="textoBeneficio">
                            Es fácil ser ecológico con nuestros ingredientes pre-medidos y materiales reciclables y/o biodegradables.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;