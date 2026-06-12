// Configuración de la malla - PEDAGOGÍA EN MATEMÁTICA UAH 2026
const ramosDatos = [
    // SEMESTRE 1
    {
        id: 'numeros_algebra',
        codigo: 'PED001',
        nombre: 'De los Números al Álgebra',
        creditos: 5,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'lab_sistemas_numericos',
        codigo: 'PED002',
        nombre: 'Laboratorio de Sistemas Numéricos',
        creditos: 4,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'intro_geometria_euclidiana',
        codigo: 'PED003',
        nombre: 'Introducción a la Geometría Euclidiana',
        creditos: 5,
        prerequisitos: [],
        semestre: 1
    },
    {
        id: 'taller_expresion_escrita',
        codigo: 'PED004',
        nombre: 'Taller de Expresión Escrita',
        creditos: 6,
        prerequisitos: [],
        semestre: 1
    },
    // SEMESTRE 2
    {
        id: 'algebra_fundamentos',
        codigo: 'PED005',
        nombre: 'Álgebra y Fundamentos',
        creditos: 6,
        prerequisitos: ['numeros_algebra', 'intro_geometria_euclidiana'],
        semestre: 2
    },
    {
        id: 'intro_computacion',
        codigo: 'PED006',
        nombre: 'Introducción a la Ciencia de la Computación y Ambientes Digitales',
        creditos: 4,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'geometria_analitica1',
        codigo: 'PED007',
        nombre: 'Geometría Analítica I',
        creditos: 6,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'taller_expresion_oral',
        codigo: 'PED008',
        nombre: 'Taller de Expresión Oral',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'estadistica_descriptiva',
        codigo: 'PED009',
        nombre: 'Estadística Descriptiva',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'inclusion_educativa',
        codigo: 'PED010',
        nombre: 'Inclusión Educativa',
        creditos: 5,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'intro_educacion',
        codigo: 'PED011',
        nombre: 'Introducción a la Educación',
        creditos: 6,
        prerequisitos: [],
        semestre: 2
    },
    {
        id: 'optativo_teologica_2',
        codigo: 'PED012',
        nombre: 'Optativo Formación Teológica',
        creditos: 3,
        prerequisitos: [],
        semestre: 2
    },
    // SEMESTRE 3
    {
        id: 'algebra_lineal',
        codigo: 'PED013',
        nombre: 'Álgebra Lineal',
        creditos: 5,
        prerequisitos: ['algebra_fundamentos'],
        semestre: 3
    },
    {
        id: 'geometria_analitica2',
        codigo: 'PED014',
        nombre: 'Geometría Analítica II',
        creditos: 10,
        prerequisitos: ['geometria_analitica1'],
        semestre: 3
    },
    {
        id: 'analisis1',
        codigo: 'PED015',
        nombre: 'Análisis I',
        creditos: 6,
        prerequisitos: ['numeros_algebra', 'intro_geometria_euclidiana'],
        semestre: 3
    },
    {
        id: 'lab_matematica_discreta',
        codigo: 'PED016',
        nombre: 'Laboratorio de Matemática Discreta',
        creditos: 4,
        prerequisitos: [],
        semestre: 3
    },
    {
        id: 'optativo_teologica_3',
        codigo: 'PED017',
        nombre: 'Optativo Formación Teológica',
        creditos: 3,
        prerequisitos: [],
        semestre: 3
    },
    {
        id: 'optativo_general_3',
        codigo: 'PED018',
        nombre: 'Optativo Formación General',
        creditos: 3,
        prerequisitos: [],
        semestre: 3
    },
    // SEMESTRE 4
    {
        id: 'estructuras_algebraicas',
        codigo: 'PED019',
        nombre: 'Estructuras Algebraicas',
        creditos: 5,
        prerequisitos: ['algebra_lineal'],
        semestre: 4
    },
    {
        id: 'geometria_euclidiana',
        codigo: 'PED020',
        nombre: 'Geometría Euclidiana',
        creditos: 5,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'analisis2',
        codigo: 'PED021',
        nombre: 'Análisis II',
        creditos: 5,
        prerequisitos: ['analisis1'],
        semestre: 4
    },
    {
        id: 'fundamentos_didactica_matematica',
        codigo: 'PED022',
        nombre: 'Fundamentode la Didáctica de la Matemática',
        creditos: 4,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'psicologia_aprendizaje',
        codigo: 'PED023',
        nombre: 'Psicología del Aprendizaje y Ciclo Vital',
        creditos: 5,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'curriculum_planificacion',
        codigo: 'PED024',
        nombre: 'Curriculum y Planificación',
        creditos: 4,
        prerequisitos: [],
        semestre: 4
    },
    {
        id: 'taller_practica_temprana1',
        codigo: 'PED025',
        nombre: 'Taller de Práctica Temprana I',
        creditos: 4,
        prerequisitos: ['intro_educacion'],
        semestre: 4
    },
    {
        id: 'optativo_general_4',
        codigo: 'PED026',
        nombre: 'Optativo Formación General',
        creditos: 3,
        prerequisitos: [],
        semestre: 4
    },
    // SEMESTRE 5
    {
        id: 'estudio_geometrias',
        codigo: 'PED027',
        nombre: 'Estudio de las Geometrías',
        creditos: 5,
        prerequisitos: ['geometria_euclidiana', 'geometria_analitica2'],
        semestre: 5
    },
    {
        id: 'probabilidades',
        codigo: 'PED028',
        nombre: 'Probabilidades',
        creditos: 5,
        prerequisitos: ['lab_matematica_discreta'],
        semestre: 5
    },
    {
        id: 'cognicion_matematica',
        codigo: 'PED029',
        nombre: 'Cognición y Matemática',
        creditos: 5,
        prerequisitos: ['fundamentos_didactica_matematica', 'psicologia_aprendizaje'],
        semestre: 5
    },
    {
        id: 'evaluacion_aprendizajes',
        codigo: 'PED030',
        nombre: 'Evaluación de los Aprendizajes',
        creditos: 5,
        prerequisitos: ['curriculum_planificacion'],
        semestre: 5
    },
    {
        id: 'taller_practica_temprana2',
        codigo: 'PED031',
        nombre: 'Taller de Práctica Temprana II',
        creditos: 4,
        prerequisitos: ['taller_practica_temprana1'],
        semestre: 5
    },
    // SEMESTRE 6
    {
        id: 'didactica_numeros_algebra',
        codigo: 'PED032',
        nombre: 'Didáctica de los Números y del Álgebra',
        creditos: 4,
        prerequisitos: ['fundamentos_didactica_matematica', 'estructuras_algebraicas'],
        semestre: 6
    },
    {
        id: 'analisis3',
        codigo: 'PED033',
        nombre: 'Análisis III',
        creditos: 6,
        prerequisitos: ['analisis2'],
        semestre: 6
    },
    {
        id: 'didactica_geometria',
        codigo: 'PED034',
        nombre: 'Didáctica de la Geometría',
        creditos: 6,
        prerequisitos: ['estudio_geometrias', 'cognicion_matematica'],
        semestre: 6
    },
    {
        id: 'estadistica_inferencial',
        codigo: 'PED035',
        nombre: 'Estadística Inferencial',
        creditos: 6,
        prerequisitos: ['probabilidades'],
        semestre: 6
    },
    {
        id: 'elab_taller_reflexion1',
        codigo: 'PED036',
        nombre: 'ELAB y Taller de Reflexión I',
        creditos: 6,
        prerequisitos: ['taller_practica_temprana2', 'evaluacion_aprendizajes'],
        semestre: 6
    },
    {
        id: 'ingles1',
        codigo: 'PED037',
        nombre: 'Inglés I',
        creditos: 6,
        prerequisitos: [],
        semestre: 6
    },
    // SEMESTRE 7
    {
        id: 'didactica_funciones_calculo',
        codigo: 'PED038',
        nombre: 'Didáctica de las Funciones y del Cálculo',
        creditos: 7,
        prerequisitos: ['didactica_numeros_algebra', 'analisis3'],
        semestre: 7
    },
    {
        id: 'programacion_pensamiento_computacional',
        codigo: 'PED039',
        nombre: 'Programación y Pensamiento Computacional para la Enseñanza de la Matemática',
        creditos: 7,
        prerequisitos: ['intro_computacion', 'didactica_numeros_algebra'],
        semestre: 7
    },
    {
        id: 'didactica_estadistica_probabilidades',
        codigo: 'PED040',
        nombre: 'Didáctica de la Estadística y de las Probabilidades',
        creditos: 7,
        prerequisitos: ['estadistica_inferencial', 'cognicion_matematica'],
        semestre: 7
    },
    {
        id: 'taller_etica_educacion',
        codigo: 'PED041',
        nombre: 'Taller de Ética y Educación',
        creditos: 5,
        prerequisitos: [],
        semestre: 7
    },
    {
        id: 'elab_taller_reflexion2',
        codigo: 'PED042',
        nombre: 'ELAB y Taller de Reflexión II',
        creditos: 6,
        prerequisitos: ['elab_taller_reflexion1', 'evaluacion_aprendizajes'],
        semestre: 7
    },
    {
        id: 'optativo_general_7',
        codigo: 'PED043',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 7
    },
    // SEMESTRE 8
    {
        id: 'investigacion_didactica_matematica',
        codigo: 'PED044',
        nombre: 'Investigación en Didáctica de la Matemática',
        creditos: 8,
        prerequisitos: ['didactica_funciones_calculo', 'didactica_geometria', 'didactica_estadistica_probabilidades'],
        semestre: 8
    },
    {
        id: 'realidad_educacional_chilena',
        codigo: 'PED045',
        nombre: 'Realidad Educacional Chilena',
        creditos: 8,
        prerequisitos: [],
        semestre: 8
    },
    {
        id: 'elab_taller_reflexion3',
        codigo: 'PED046',
        nombre: 'ELAB y Taller de Reflexión III',
        creditos: 8,
        prerequisitos: ['elab_taller_reflexion2', 'didactica_numeros_algebra'],
        semestre: 8
    },
    {
        id: 'ingles2',
        codigo: 'PED047',
        nombre: 'Inglés II',
        creditos: 6,
        prerequisitos: ['ingles1'],
        semestre: 8
    },
    {
        id: 'optativo_general_8',
        codigo: 'PED048',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 8
    },
    // SEMESTRE 9
    {
        id: 'historia_epistemologia_matematica',
        codigo: 'PED049',
        nombre: 'Historia y Epistemología de la Matemática',
        creditos: 9,
        prerequisitos: ['estudio_geometrias', 'estructuras_algebraicas', 'analisis3'],
        semestre: 9
    },
    {
        id: 'taller_diseno_didactico1',
        codigo: 'PED050',
        nombre: 'Taller de Diseño Didáctico I',
        creditos: 9,
        prerequisitos: ['investigacion_didactica_matematica'],
        semestre: 9
    },
    {
        id: 'elab_taller_reflexion4',
        codigo: 'PED051',
        nombre: 'ELAB y Taller de Reflexión IV',
        creditos: 9,
        prerequisitos: ['elab_taller_reflexion3', 'investigacion_didactica_matematica', 'realidad_educacional_chilena'],
        semestre: 9
    },
    {
        id: 'optativo_general_9',
        codigo: 'PED052',
        nombre: 'Optativo Formación Complementaria',
        creditos: 6,
        prerequisitos: [],
        semestre: 9
    },
    // SEMESTRE 10
    {
        id: 'seminario_titulacion',
        codigo: 'PED053',
        nombre: 'Seminario de Titulación',
        creditos: 10,
        prerequisitos: ['taller_diseno_didactico1', 'historia_epistemologia_matematica', 'elab_taller_reflexion4'],
        semestre: 10
    },
    {
        id: 'taller_diseno_didactico2',
        codigo: 'PED054',
        nombre: 'Taller de Diseño Didáctico II',
        creditos: 10,
        prerequisitos: ['taller_diseno_didactico1'],
        semestre: 10
    },
    {
        id: 'elab_practica_profesional',
        codigo: 'PED055',
        nombre: 'ELAB y Práctica Profesional',
        creditos: 10,
        prerequisitos: ['elab_taller_reflexion4', 'taller_diseno_didactico1'],
        semestre: 10
    }
];

// Estado de completitud de ramos
let ramoCompletado = {};

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarProgreso();
    renderizarMalla();
    actualizarContadores();
    document.getElementById('resetBtn').addEventListener('click', reiniciarProgreso);
});

// Renderizar la malla
function renderizarMalla() {
    const mallaGrid = document.getElementById('mallaGrid');
    mallaGrid.innerHTML = '';

    // Ordenar por semestre
    const ramosPorSemestre = {};
    ramosDatos.forEach(ramo => {
        if (!ramosPorSemestre[ramo.semestre]) {
            ramosPorSemestre[ramo.semestre] = [];
        }
        ramosPorSemestre[ramo.semestre].push(ramo);
    });

    // Renderizar semestres como columnas
    for (let sem = 1; sem <= 10; sem++) {
        if (ramosPorSemestre[sem]) {
            const divSemestre = document.createElement('div');
            divSemestre.className = 'semestre-columna';
            
            const titulo = document.createElement('div');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `SEM ${sem}`;
            divSemestre.appendChild(titulo);

            ramosPorSemestre[sem].forEach(ramo => {
                const ramoElement = crearElementoRamo(ramo);
                divSemestre.appendChild(ramoElement);
            });

            mallaGrid.appendChild(divSemestre);
        }
    }
}

// Crear elemento de ramo
function crearElementoRamo(ramo) {
    const div = document.createElement('div');
    const completado = ramoCompletado[ramo.id] || false;
    const bloqueado = estasBloqueado(ramo);
    
    div.className = 'ramo';
    if (completado) div.classList.add('completed');
    if (bloqueado) div.classList.add('locked');

    const prerequisitosTexto = ramo.prerequisitos.length > 0
        ? `Requiere: ${ramo.prerequisitos.join(', ')}`
        : 'Sin prerequisitos';

    div.innerHTML = `
        <div class="ramo-header">
            <div class="ramo-code">${ramo.codigo}</div>
            <div class="checkbox"></div>
        </div>
        <div class="ramo-name">${ramo.nombre}</div>
        <div class="ramo-credits">${ramo.creditos} créditos</div>
        <div class="ramo-prerequisites">${prerequisitosTexto}</div>
        <div class="status-badge ${completado ? '' : bloqueado ? 'status-locked' : 'status-available'}">
            ${completado ? '✓ Completado' : bloqueado ? '🔒 Bloqueado' : '📖 Disponible'}
        </div>
    `;

    // Evento click
    if (!bloqueado) {
        div.addEventListener('click', () => toggleRamo(ramo.id));
    }

    return div;
}

// Verificar si un ramo está bloqueado
function estasBloqueado(ramo) {
    return ramo.prerequisitos.some(prereq => !ramoCompletado[prereq]);
}

// Toggle completitud de ramo
function toggleRamo(ramoId) {
    ramoCompletado[ramoId] = !ramoCompletado[ramoId];
    guardarProgreso();
    renderizarMalla();
    actualizarContadores();
}

// Actualizar contadores
function actualizarContadores() {
    const completados = Object.values(ramoCompletado).filter(v => v).length;
    const total = ramosDatos.length;
    
    document.getElementById('completedCount').textContent = completados;
    document.getElementById('totalCount').textContent = total;
}

// Reiniciar progreso
function reiniciarProgreso() {
    if (confirm('¿Estás segura de que quieres reiniciar tu progreso?')) {
        ramoCompletado = {};
        guardarProgreso();
        renderizarMalla();
        actualizarContadores();
    }
}

// Guardar progreso en localStorage
function guardarProgreso() {
    localStorage.setItem('mallaProgreso', JSON.stringify(ramoCompletado));
}

// Cargar progreso desde localStorage
function cargarProgreso() {
    const guardado = localStorage.getItem('mallaProgreso');
    if (guardado) {
        ramoCompletado = JSON.parse(guardado);
    }
}
