// Temas disponibles
const temas = {
    default: {
        primary: '#d97ba8',
        secondary: '#c75a96',
        light: '#fdf0f5',
        lighter: '#fff5f9',
        accent: '#f4a6c1',
        accentHover: '#ed8bb1',
        gradient: 'linear-gradient(135deg, #fdf0f5 0%, #f5e6f0 100%)',
        headerGradient: 'linear-gradient(135deg, #d97ba8 0%, #c75a96 100%)',
        name: '🌸 Rosa Palo'
    },
    blue: {
        primary: '#3498db',
        secondary: '#2980b9',
        light: '#ecf0f1',
        lighter: '#f8f9fa',
        accent: '#5dade2',
        accentHover: '#3498db',
        gradient: 'linear-gradient(135deg, #ecf0f1 0%, #e0e6e8 100%)',
        headerGradient: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
        name: '🔵 Azul'
    },
    green: {
        primary: '#27ae60',
        secondary: '#229954',
        light: '#eafaf1',
        lighter: '#f4fdf9',
        accent: '#52be80',
        accentHover: '#45b66e',
        gradient: 'linear-gradient(135deg, #eafaf1 0%, #d5f4e6 100%)',
        headerGradient: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        name: '🟢 Verde'
    },
    purple: {
        primary: '#8e44ad',
        secondary: '#7d3c98',
        light: '#f4ecf7',
        lighter: '#faf8fc',
        accent: '#af7ac5',
        accentHover: '#9b59b6',
        gradient: 'linear-gradient(135deg, #f4ecf7 0%, #ede7f6 100%)',
        headerGradient: 'linear-gradient(135deg, #8e44ad 0%, #7d3c98 100%)',
        name: '🟣 Púrpura'
    },
    orange: {
        primary: '#e67e22',
        secondary: '#d35400',
        light: '#fef5e7',
        lighter: '#fef9f3',
        accent: '#f8b88b',
        accentHover: '#f39c12',
        gradient: 'linear-gradient(135deg, #fef5e7 0%, #fde8d1 100%)',
        headerGradient: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
        name: '🟠 Naranja'
    },
    teal: {
        primary: '#16a085',
        secondary: '#138d75',
        light: '#e8f8f5',
        lighter: '#f1fcfb',
        accent: '#48c9b0',
        accentHover: '#1abc9c',
        gradient: 'linear-gradient(135deg, #e8f8f5 0%, #d1f2eb 100%)',
        headerGradient: 'linear-gradient(135deg, #16a085 0%, #138d75 100%)',
        name: '🌊 Turquesa'
    }
};

// Configuración de la malla - INICIALIZAR VACÍO
// (El usuario agregará sus propias asignaturas)
let ramosDatos = [];

// Variable para detectar primera vez
let primeraVez = true;
let ramoCompletado = {};
let ramoPromedios = {}; // Guardar promedios de cada asignatura
let temaActual = 'blue'; // Iniciar con azul por defecto
let mallaInfo = {
    titulo: '🎓 Mi Carrera',
    subtitulo: 'Mi Malla Didáctica',
    emoji: '🎓'
};
let ramoEditandoId = null;
let ramoEditandoPromedioId = null;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    aplicarTema(temaActual);
    
    // Mostrar pantalla de bienvenida si es primera vez
    if (primeraVez && ramosDatos.length === 0) {
        mostrarBienvenida();
    } else {
        ocultarBienvenida();
    }
    
    renderizarMalla();
    actualizarContadores();
    actualizarGraficoCreditos();
    configurarEventos();
});

// Configurar eventos
function configurarEventos() {
    // Botón de inicio en la pantalla de bienvenida
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', ocultarBienvenida);
    }

    document.getElementById('themeSelector').addEventListener('change', (e) => {
        temaActual = e.target.value;
        aplicarTema(temaActual);
        guardarDatos();
    });

    document.getElementById('resetBtn').addEventListener('click', reiniciarProgreso);
    document.getElementById('editBtn').addEventListener('click', abrirEditModal);
    document.getElementById('closeEditModal').addEventListener('click', cerrarEditModal);
    document.getElementById('cancelEditBtn').addEventListener('click', cerrarEditModal);
    document.getElementById('saveEditBtn').addEventListener('click', guardarEdicionMalla);
    document.getElementById('addRamoBtn').addEventListener('click', abrirRamoModalNuevo);
    document.getElementById('closeRamoModal').addEventListener('click', cerrarRamoModal);
    document.getElementById('cancelRamoBtn').addEventListener('click', cerrarRamoModal);
    document.getElementById('saveRamoBtn').addEventListener('click', guardarRamo);
    document.getElementById('deleteRamoBtn').addEventListener('click', eliminarRamo);
    document.getElementById('exportBtn').addEventListener('click', exportarMalla);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('fileInput').click());
    document.getElementById('fileInput').addEventListener('change', importarMalla);
    
    // Eventos del modal de promedio
    const closePromedioModal = document.getElementById('closePromedioModal');
    const cancelPromedioBtn = document.getElementById('cancelPromedioBtn');
    const savePromedioBtn = document.getElementById('savePromedioBtn');
    
    if (closePromedioModal) closePromedioModal.addEventListener('click', cerrarPromedioModal);
    if (cancelPromedioBtn) cancelPromedioBtn.addEventListener('click', cerrarPromedioModal);
    if (savePromedioBtn) savePromedioBtn.addEventListener('click', guardarPromedio);
    
    // Eventos de emojis
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('emojiInput').value = e.target.dataset.emoji;
        });
    });
}

// Aplicar tema
function aplicarTema(nombreTema) {
    const tema = temas[nombreTema];
    document.documentElement.style.setProperty('--color-primary', tema.primary);
    document.documentElement.style.setProperty('--color-secondary', tema.secondary);
    document.documentElement.style.setProperty('--color-light', tema.light);
    document.documentElement.style.setProperty('--color-lighter', tema.lighter);
    document.documentElement.style.setProperty('--color-accent', tema.accent);
    document.documentElement.style.setProperty('--color-accent-hover', tema.accentHover);
    document.documentElement.style.setProperty('--gradient', tema.gradient);
    document.documentElement.style.setProperty('--header-gradient', tema.headerGradient);
    renderizarMalla();
}

// ===== FUNCIONES DE BIENVENIDA =====
function mostrarBienvenida() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.remove('hidden');
    }
}

function ocultarBienvenida() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
    }
    primeraVez = false;
    guardarDatos();
}

// ===== FUNCIONES DE PROMEDIO =====
function abrirPromedioModal(ramoId) {
    ramoEditandoPromedioId = ramoId;
    const ramo = ramosDatos.find(r => r.id === ramoId);
    
    if (ramo) {
        document.getElementById('ramoPromedioNombre').textContent = ramo.nombre;
        document.getElementById('promedioInput').value = ramoPromedios[ramoId] || '';
        document.getElementById('promedioModal').style.display = 'flex';
    }
}

function cerrarPromedioModal() {
    document.getElementById('promedioModal').style.display = 'none';
    ramoEditandoPromedioId = null;
}

function guardarPromedio() {
    const promedio = parseFloat(document.getElementById('promedioInput').value);
    
    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
        alert('Por favor ingresa un promedio válido entre 1.0 y 7.0');
        return;
    }
    
    if (ramoEditandoPromedioId) {
        ramoPromedios[ramoEditandoPromedioId] = promedio;
        guardarDatos();
        cerrarPromedioModal();
        renderizarMalla();
        actualizarGraficoCreditos();
    }
}

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
    const maxSemestre = Math.max(...ramosDatos.map(r => r.semestre));
    for (let sem = 1; sem <= maxSemestre; sem++) {
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
    const promedio = ramoPromedios[ramo.id];
    
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
        ${completado && promedio ? `<div class="ramo-promedio">Promedio: ${promedio}</div>` : ''}
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
    if (!ramoCompletado[ramoId]) {
        // Al marcar como completado, abrir modal de promedio
        ramoCompletado[ramoId] = true;
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
        abrirPromedioModal(ramoId);
    } else {
        // Al desmarcar, solo desmarcar sin pedir promedio
        ramoCompletado[ramoId] = false;
        delete ramoPromedios[ramoId];
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
        actualizarGraficoCreditos();
    }
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
        guardarDatos();
        renderizarMalla();
        actualizarContadores();
    }
}

// ===== FUNCIONES DE EDICIÓN =====

// Abrir modal de edición
function abrirEditModal() {
    document.getElementById('emojiInput').value = mallaInfo.emoji || '🎓';
    document.getElementById('titleInput').value = mallaInfo.titulo.replace(/^[^\w\s]*\s*/, '').trim();
    document.getElementById('subtitleInput').value = mallaInfo.subtitulo;
    renderizarListaRamos();
    document.getElementById('editModal').classList.add('active');
}

// Cerrar modal de edición
function cerrarEditModal() {
    document.getElementById('editModal').classList.remove('active');
}

// Renderizar lista de ramos en el modal
function renderizarListaRamos() {
    const ramosList = document.getElementById('ramosList');
    ramosList.innerHTML = '';

    ramosDatos.forEach(ramo => {
        const div = document.createElement('div');
        div.className = 'ramo-item';
        div.innerHTML = `
            <div class="ramo-item-info">
                <strong>${ramo.codigo}</strong> - ${ramo.nombre}
                <small>Semestre ${ramo.semestre} | ${ramo.creditos} créditos</small>
            </div>
            <button class="btn-edit-ramo" data-id="${ramo.id}">✏️</button>
        `;
        
        div.querySelector('.btn-edit-ramo').addEventListener('click', () => {
            abrirRamoModalEditar(ramo.id);
        });
        
        ramosList.appendChild(div);
    });
}

// Variables para edición de ramo
let ramoEditandoId = null;

// Abrir modal para nuevo ramo
function abrirRamoModalNuevo() {
    ramoEditandoId = null;
    document.getElementById('ramoModalTitle').textContent = 'Agregar Nueva Materia';
    document.getElementById('ramoCode').value = '';
    document.getElementById('ramoName').value = '';
    document.getElementById('ramoCreditos').value = '';
    document.getElementById('ramoSemestre').value = '';
    document.getElementById('ramoPrerequisitos').value = '';
    document.getElementById('deleteRamoBtn').style.display = 'none';
    document.getElementById('ramoModal').classList.add('active');
}

// Abrir modal para editar ramo
function abrirRamoModalEditar(ramoId) {
    ramoEditandoId = ramoId;
    const ramo = ramosDatos.find(r => r.id === ramoId);
    
    if (!ramo) return;
    
    document.getElementById('ramoModalTitle').textContent = 'Editar Materia';
    document.getElementById('ramoCode').value = ramo.codigo;
    document.getElementById('ramoName').value = ramo.nombre;
    document.getElementById('ramoCreditos').value = ramo.creditos;
    document.getElementById('ramoSemestre').value = ramo.semestre;
    document.getElementById('ramoPrerequisitos').value = ramo.prerequisitos.join(', ');
    document.getElementById('deleteRamoBtn').style.display = 'inline-block';
    document.getElementById('ramoModal').classList.add('active');
}

// Cerrar modal de ramo
function cerrarRamoModal() {
    document.getElementById('ramoModal').classList.remove('active');
    ramoEditandoId = null;
}

// Guardar ramo
function guardarRamo() {
    const codigo = document.getElementById('ramoCode').value.trim();
    const nombre = document.getElementById('ramoName').value.trim();
    const creditos = parseInt(document.getElementById('ramoCreditos').value) || 0;
    const semestre = parseInt(document.getElementById('ramoSemestre').value) || 1;
    const prerequisitosTexto = document.getElementById('ramoPrerequisitos').value.trim();
    const prerequisitos = prerequisitosTexto ? prerequisitosTexto.split(',').map(p => p.trim()) : [];

    if (!codigo || !nombre || creditos <= 0) {
        alert('Por favor completa todos los campos correctamente');
        return;
    }

    if (ramoEditandoId) {
        // Editar ramo existente
        const ramo = ramosDatos.find(r => r.id === ramoEditandoId);
        if (ramo) {
            ramo.codigo = codigo;
            ramo.nombre = nombre;
            ramo.creditos = creditos;
            ramo.semestre = semestre;
            ramo.prerequisitos = prerequisitos;
        }
    } else {
        // Crear nuevo ramo
        const nuevoId = 'ramo_' + Date.now();
        ramosDatos.push({
            id: nuevoId,
            codigo,
            nombre,
            creditos,
            semestre,
            prerequisitos
        });
    }

    guardarDatos();
    cerrarRamoModal();
    renderizarListaRamos();
    renderizarMalla();
}

// Eliminar ramo
function eliminarRamo() {
    if (!ramoEditandoId) return;
    
    if (confirm('¿Estás segura de que quieres eliminar esta materia?')) {
        ramosDatos = ramosDatos.filter(r => r.id !== ramoEditandoId);
        delete ramoCompletado[ramoEditandoId];
        guardarDatos();
        cerrarRamoModal();
        renderizarListaRamos();
        renderizarMalla();
        actualizarContadores();
    }
}

// Guardar edición de malla
function guardarEdicionMalla() {
    const emoji = document.getElementById('emojiInput').value.trim() || '🎓';
    const nombreCarrera = document.getElementById('titleInput').value.trim();
    
    if (!nombreCarrera) {
        alert('Por favor ingresa el nombre de la carrera');
        return;
    }
    
    mallaInfo.emoji = emoji;
    mallaInfo.titulo = emoji + ' ' + nombreCarrera;
    mallaInfo.subtitulo = document.getElementById('subtitleInput').value.trim();
    
    document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
    document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
    
    guardarDatos();
    cerrarEditModal();
}

// ===== FUNCIONES DE EXPORTAR/IMPORTAR =====

// Exportar malla
function exportarMalla() {
    const datos = {
        info: mallaInfo,
        ramos: ramosDatos,
        tema: temaActual
    };

    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `malla_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Importar malla
function importarMalla(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const datos = JSON.parse(e.target.result);
            
            if (datos.info && datos.ramos) {
                mallaInfo = datos.info;
                ramosDatos = datos.ramos;
                temaActual = datos.tema || 'default';
                ramoCompletado = {};

                document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
                document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
                document.getElementById('themeSelector').value = temaActual;
                
                aplicarTema(temaActual);
                renderizarMalla();
                actualizarContadores();
                guardarDatos();
                
                alert('¡Malla importada correctamente!');
            } else {
                alert('El archivo no tiene el formato correcto');
            }
        } catch (error) {
            alert('Error al importar el archivo: ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== PERSISTENCIA =====

// Actualizar gráfico de créditos
function actualizarGraficoCreditos() {
    const totalCreditos = ramosDatos.reduce((sum, ramo) => sum + ramo.creditos, 0);
    const creditosCompletados = ramosDatos
        .filter(ramo => ramoCompletado[ramo.id])
        .reduce((sum, ramo) => sum + ramo.creditos, 0);
    
    const creditosPendientes = totalCreditos - creditosCompletados;
    const porcentaje = totalCreditos > 0 ? Math.round((creditosCompletados / totalCreditos) * 100) : 0;
    
    // Calcular promedio general
    const ramoCompletados = ramosDatos.filter(ramo => ramoCompletado[ramo.id]);
    let promedioGeneral = '-';
    if (ramoCompletados.length > 0) {
        const sumaPromedios = ramoCompletados.reduce((sum, ramo) => {
            return sum + (ramoPromedios[ramo.id] || 0);
        }, 0);
        promedioGeneral = (sumaPromedios / ramoCompletados.length).toFixed(1);
    }
    
    // Actualizar elementos de información
    document.getElementById('totalCreditos').textContent = totalCreditos;
    document.getElementById('creditosCompletados').textContent = creditosCompletados;
    document.getElementById('porcentajeCompletado').textContent = porcentaje + '%';
    document.getElementById('promedioGeneral').textContent = promedioGeneral;
    
    // Crear gráfico con Chart.js
    const ctx = document.getElementById('creditosChart');
    if (ctx) {
        // Destruir gráfico anterior si existe
        if (window.creditosChartInstance) {
            window.creditosChartInstance.destroy();
        }
        
        window.creditosChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Completados', 'Pendientes'],
                datasets: [{
                    data: [creditosCompletados, creditosPendientes],
                    backgroundColor: [
                        'rgba(52, 211, 153, 0.8)',
                        'rgba(209, 213, 219, 0.5)'
                    ],
                    borderColor: [
                        'rgba(16, 185, 129, 1)',
                        'rgba(156, 163, 175, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { size: 14 },
                            padding: 15
                        }
                    }
                }
            }
        });
    }
}

// Guardar todos los datos
function guardarDatos() {
    const datos = {
        info: mallaInfo,
        ramos: ramosDatos,
        tema: temaActual,
        completados: ramoCompletado,
        promedios: ramoPromedios,
        primeraVez: primeraVez
    };
    localStorage.setItem('mallaCompleta', JSON.stringify(datos));
}

// Cargar todos los datos
function cargarDatos() {
    const guardado = localStorage.getItem('mallaCompleta');
    if (guardado) {
        try {
            const datos = JSON.parse(guardado);
            mallaInfo = datos.info || mallaInfo;
            ramosDatos = datos.ramos || [];
            temaActual = datos.tema || 'blue';
            ramoCompletado = datos.completados || {};
            ramoPromedios = datos.promedios || {};
            primeraVez = datos.primeraVez !== false;
            
            document.getElementById('mallaTitle').textContent = mallaInfo.titulo;
            document.getElementById('mallaSubtitle').textContent = mallaInfo.subtitulo;
            document.getElementById('themeSelector').value = temaActual;
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    } else {
        // Primera vez: inicializar con array vacío
        ramosDatos = [];
        temaActual = 'blue';
        primeraVez = true;
    }
}

