import React from 'react';
import { useParams, Link } from 'react-router-dom';

const leyesData = {
    proximidad: {
        title: 'Ley de Proximidad',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de la proximidad:</strong>
                </p>
                <p>
                    En igualdad de las demás condiciones, tendemos a percibir como juntos (o como un mismo objeto) los elementos más próximos en el espacio o en el tiempo.
                </p>
                <p>
                    Si un estímulo visible está constituido por una multitud de elementos diversos, se manifiesta en el sujeto receptor la tendencia a agrupar aquellos elementos más próximos entre sí.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <ul>
                    <li><strong>a)</strong> En este primer gráfico, tenemos una tendencia dominante a ver cuatro barras horizontales, agrupando de dos en dos las líneas cercanas entre sí.</li>
                    <li><strong>b)</strong> Del mismo modo ocurre en el segundo gráfico, en el que los elementos más cercanos son percibidos como unidades, frente a los elementos más distantes.</li>
                </ul>
            </div>
        ),
        image: 'https://53f5d536.delivery.rocketcdn.me/wp-content/uploads/2022/10/teoria-de-la-gestalt-psicologia-percepcion-visual-10.png',
        example: '/src/images/proximidad-ejemplo.jpg',
        prev: 'experiencia',
        next: 'semejanza',
    },
    semejanza: {
        title: 'Ley de Semejanza',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de la semejanza:</strong>
                </p>
                <p>
                    En igualdad de las demás condiciones, tendemos a percibir como parte de una misma estructura u objeto los elementos semejantes.
                </p>
                <p>
                    Si un estímulo visible está constituido por una multitud de elementos diversos, se manifiesta en el sujeto receptor la tendencia a agrupar aquellos elementos más similares entre sí.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p><strong>a)</strong> Agrupamos signos negativos frente a positivos, aun cuando ambos se encuentran a la misma distancia.</p>
                <p><strong>b)</strong> Los elementos más similares son percibidos como integrantes de un mismo conjunto frente a los disimilares.</p>
                <p>Al hablar de semejanza nos referimos a las propiedades visuales del objeto.</p>
            </div>
        ),
        image: '/src/images/semejanza-foto.png',
        example: '/src/images/semejanza-ejemplo.jpg',
        prev: 'proximidad',
        next: 'cerramiento',
    },
    cerramiento: {
        title: 'Ley de Cerramiento',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de cerramiento:</strong>
                </p>
                <p>
                    En igualdad de las demás circunstancias, tendemos a clausurar las brechas existentes en una posible figura con líneas incompletas.
                    Mientras la actividad sea incompleta, toda situación nueva será transitoria. Alcanzada la meta, se llega a una situación final.
                </p>
                <p>Las líneas que delimitan una superficie son percibidas más fácilmente como unidad que aquellas que no llegan a cerrarse.</p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p><strong>a)</strong> Percibimos como unidad dos rectángulos (y medio) ya que nuestro sistema perceptivo tiene la tendencia a completar la brecha entre las dos líneas encaradas. Se hace difícil entender este gráfico como cinco elementos independientes.</p>
                <p><strong>b)</strong> El mismo caso que en el
                    gráfico anterior pero con elementos curvos en vez de rectilíneos. En este caso tendemos
                    a percibir dos círculos y medio. Y lo vemos de una forma aún más clara que en el ejemplo
                    anterior puesto que la tendencia a clausurarse de estos elementos es mayor.
                </p>
                <p><strong>c)</strong> Los elementos que se clausuran entre sí forman con mucha más facilidad unidades perceptivas que aquellos que no lo hacen, pese a estar más cercanos entre sí.</p>
                <p>
                    En la primera parte de este gráfico las ocho líneas verticales se agrupan en cuatro elementos muy claros por la proximidad entre pares de líneas. En la segunda parte se han unido con líneas horizon- tales las líneas verticales distantes. El resultado es que percibimos más claramente tres rectángulos cerrados. Una conclusión de ello es que la Ley de cerramiento domina sobre la Ley de proximidad. O lo que es lo mismo, percibimos más claramente como unidad los elementos cerrados o que tienden a cerrarse que los elementos próximos entre sí. Ilustración basada en la demostración de David Katz (Katz, 1967).
                </p>
            </div>
        ),
        image: 'https://cdn0.psicologia-online.com/es/posts/0/9/2/que_es_la_ley_de_cierre_de_la_gestalt_y_ejemplos_6290_orig.jpg',
        example: '/src/images/cerramiento-ejemplo.jpg',
        prev: 'semejanza',
        next: 'continuidad',
    },
    continuidad: {
        title: 'Ley de Buena Continuidad',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de la buena continuidad:</strong>
                </p>
                <p>
                    En igualdad de circunstancias, tendemos a percibir como parte de una misma figura los estímulos que guardan entre sí una continuidad de forma.
                </p>
                <p>
                    Aquellas partes de una figura que tengan un destino común se constituyen en unidad con mayor facilidad que otras.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p><strong>a)</strong> En este primer gráfico, a pesar de las distintas combinaciones posibles, el tramo de
                    línea recta tiende a continuar como línea recta, y una parte del círculo como círculo. </p>
                <p><strong>b)</strong>
                    A su vez, en el segundo gráfico ejemplificativo, la línea ondulada impone su continuidad
                    por medio de las formas circulares y cuadradas por su "buena continuidad".</p>
            </div>
        ),
        image: 'https://colegiodepsicologossj.com.ar/wp-content/uploads/que-es-la-ley-de-continuidad-en-psicologia-1.webp',
        example: '/src/images/continuidad-ejemplo.jpg',
        prev: 'cerramiento',
        next: 'movimiento común',
    },
    "movimiento común": {
        title: 'Ley de Movimiento Común',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de movimiento común:</strong>
                </p>
                <p>
                    En igualdad de circunstancias, tendemos a percibir como grupo o conjunto aquellos elementos que se mueven conjuntamente o se mueven
                    del mismo modo, o que se mueven reposadamente respecto a otros.
                </p>
                <p>
                    Se constituyen en unidad aquellos elementos que se mueven juntos de
                    manera similar, o en oposición a otros que se encuentren quietos o estáticos.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p>
                    Un ejemplo para entender esta ley puede ser el de los faros de coche en la
                    oscuridad. Percibimos como conjunto agrupado los faros de un mismo
                    coche porque tienen un movimiento común. Y por supuesto los
                    diferenciamos de los de otro vehículo, aunque esté próximo, porque no
                    tienen exactamente el mismo movimiento.
                </p>
            </div>
        ),
        image: 'https://guiaux.com/wp-content/uploads/2023/03/diseno-gestalt-destinocomun-850x458.png',
        example: '/src/images/movimiento-comun-ejemplo.jpg',
        prev: 'continuidad',
        next: 'pregnancia',
    },
    pregnancia: {
        title: 'Ley de la Pregnancia',
        description: (
            <>
                <hr />
                <p>
                    La expresión alemana Prägnanz se podría traducir como consistencia o regularidad. La regularidad o las relaciones de regularidad entre los estímulos visuales
                    es algo que nos induce a percibirlos como unidad o conjunto. Algunas de las
                    leyes que hemos descrito presentan también este componente.
                </p>
                <p>
                    <strong>Veamos dos maneras de formular la Ley de la Pregnancia:</strong>
                </p>
                <p>
                    En igualdad de circunstancias, tendemos a percibir como unidad aquellos elementos que presentan el mayor grado de simplicidad, simetría,
                    regularidad y estabilidad (buenas formas).
                </p>
                <p>
                    Se constituyen en unidad con mayor facilidad aquellos elementos de
                    mayor regularidad, conexión, simetría, equilibrio, homogeneidad, máxima simplicidad y concisión.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p><strong>a)</strong>En este gráfico, se establecen como figura las líneas paralelas entre sí (interdistancia
                    regular), mientras que difícilmente los dos cuadrantes más externos se establecerán como
                    figura común debido a su interdistancia irregular.
                </p>
                <p><strong>b)</strong>
                    Igualmente, y de nuevo a partir de
                    la Ley de la pregnancia, en este segundo gráfico propuesto, toman el papel de figura las
                    franjas blancas (de forma más regular) frente a las negras que toman el papel de fondo
                    (de forma más irregular).
                </p>
            </div>
        ),
        image: 'https://definicion.de/wp-content/uploads/2012/05/textura.jpg',
        example: '/src/images/pregnancia-ejemplo.jpg',
        prev: 'movimiento común',
        next: 'experiencia',
    },
    experiencia: {
        title: 'Ley de la Experiencia',
        description: (
            <>
                <hr />
                <p>
                    <strong>Veamos dos maneras de formular la Ley de la Experiencia:</strong>
                </p>
                <p>
                    La experiencia previa del sujeto receptor interviene, junto con los aspectos citados anteriormente, en la constitución de las formas percibidas.
                </p>
            </>
        ),
        details: (
            <div className="alert alert-warning mt-4">
                <p>
                    Esta imagen no es un experimento original del movimiento gestaltista pero
                    ilustra muy bien la Ley de la experiencia y el fenómeno de la emergencia en
                    nuestro sistema visual. En ella hay una serie de puntos dispersos, pero cuando reconocemos en ellos un dálmata ya no podemos dejar de verlo.
                    Nuestra experiencia previa (en la percepción de esa forma como el
                    reconocimiento de un "perro dálmata") actúa potentemente sobre nuestra
                    percepción consciente.
                </p>
            </div>
        ),
        image: 'https://okdiario.com/img/2023/04/31/el-curioso-motivo-por-el-que-los-semaforos-de-sevilla-estan-en-horizontal.jpg',
        example: '/src/images/experiencia-ejemplo.jpg',
        prev: 'pregnancia',
        next: 'proximidad',
    },
};


const Ley = () => {
    const { id } = useParams();
    const ley = leyesData[id] || {};

    return (
        <div>
            <header
                className="parallax-section position-relative text-white"
                style={{
                    backgroundImage: `url(${ley.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60vh',
                }}
            >
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                ></div>
                <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
                    <h1 className="display-1 fw-bold text-center">{ley.title}</h1>
                </div>
            </header>

            <main className="container py-5">

                <div className="mb-5">
                    <h2 className="fw-bold mb-3 text-warning display-5">{ley.title}</h2>
                    <p className="fs-5">{ley.description}</p>
                </div>

                {ley.example && (
                    <div className="text-center mb-5">
                        <img
                            src={ley.example}
                            alt={`Ejemplo de ${ley.title}`}
                            className="img-fluid rounded shadow"
                        />
                    </div>
                )}
                <p className="fs-5">{ley.details}</p>

                <nav aria-label="Navegación entre leyes" className="mt-5 ">
                    <div className="row g-3 ">
                        <div className="col-md-6">
                            {ley.prev && (
                                <Link
                                    to={`/leyes/${ley.prev}`}
                                    className="btn btn-white btn-outline-warning p-3 w-100 d-flex align-items-center justify-content-center shadow-lg fw-bold"
                                >
                                    ← Ley Anterior: {leyesData[ley.prev].title}
                                </Link>
                            )}
                        </div>
                        <div className="col-md-6">
                            {ley.next && (
                                <Link
                                    to={`/leyes/${ley.next}`}
                                    className="btn btn-white btn-outline-warning p-3 w-100 d-flex align-items-center justify-content-center shadow-lg fw-bold"
                                >
                                    Siguiente Ley: {leyesData[ley.next].title} →
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </main>
        </div>
    );
};

export default Ley;
