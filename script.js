document.addEventListener('DOMContentLoaded', () => {
    // --- ICONS (Heroicons SVG) ---
    const ICONS = {
        edit: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>`,
        trash: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>`,
        plus: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>`,
        save: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" /></svg>`,
        flag: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" /></svg>`,
        calendar: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
        chart: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
        heart: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
        fire: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1014.12 11.88l-4.242 4.242z" /></svg>`,
    };

    const defaultWorkoutDatabase = { "A":{days:[{idPrefix:'a-d1',title:"Dia 1: Peito e Ombro",exercises:[{id:"a-d1-ex1",text:"<strong>Peck Deck (Voador):</strong> 4 séries de 10-12 reps"},{id:"a-d1-ex2",text:"<strong>Supino Inclinado c/ Halteres:</strong> 4 séries de 8-10 reps"},{id:"a-d1-ex3",text:"<strong>Supino Reto c/ Barra:</strong> 3 séries de 10 reps"},{id:"a-d1-ex4",text:"<strong>Desenv. de Ombros na Máquina:</strong> 3 séries de 10-12 reps"},{id:"a-d1-ex5",text:"<strong>Elevação Lateral c/ Halteres (sentado):</strong> 3 séries de 12-15 reps"},{id:"a-d1-ex6",text:"<strong>Face Pull na Polia:</strong> 4 séries de 15 reps"}]},{idPrefix:'a-d2',title:"Dia 2: Costas",exercises:[{id:"a-d2-ex1",text:"<strong>Lat Pulldown (Puxada Frontal):</strong> 4 séries de 10-12 reps"},{id:"a-d2-ex2",text:"<strong>Remada Curvada c/ Barra:</strong> 4 séries de 8-10 reps"},{id:"a-d2-ex3",text:"<strong>Remada Baixa (c/ Triângulo):</strong> 3 séries de 10-12 reps"},{id:"a-d2-ex4",text:"<strong>Puxada Unilateral na Polia:</strong> 3 séries de 12 reps/lado"},{id:"a-d2-ex5",text:"<strong>Pulldown com Corda na Polia Alta:</strong> 3 séries de 12 reps"}]},{idPrefix:'a-d3',title:"Dia 3: Pernas",exercises:[{id:"a-d3-ex1",text:"<strong>Agachamento no Hack Machine:</strong> 4 séries de 10-12 reps"},{id:"a-d3-ex2",text:"<strong>Leg Press 45°:</strong> 3 séries de 10 reps"},{id:"a-d3-ex3",text:"<strong>Cadeira Extensora:</strong> 3 séries de 12 reps"},{id:"a-d3-ex4",text:"<strong>Mesa Flexora:</strong> 3 séries de 10-12 reps"},{id:"a-d3-ex5",text:"<strong>Stiff com Halteres:</strong> 4 séries de 12 reps"},{id:"a-d3-ex6",text:"<strong>Panturrilha no Leg Press:</strong> 4 séries de 15-20 reps"}]},{idPrefix:'a-d4',title:"Dia 4: Braços e Abdômen",exercises:[{id:"a-d4-ex1",text:"<strong>BÍCEPS - Rosca Direta c/ Barra W:</strong> 3 séries de 10 reps"},{id:"a-d4-ex2",text:"<strong>BÍCEPS - Rosca Martelo c/ Halteres:</strong> 3 séries de 10 reps/braço"},{id:"a-d4-ex3",text:"<strong>BÍCEPS - Rosca Concentrada no Banco:</strong> 3 séries de 12 reps"},{id:"a-d4-ex4",text:"<strong>TRÍCEPS - Tríceps na Polia com Corda:</strong> 4 séries de 12 reps"},{id:"a-d4-ex5",text:"<strong>TRÍCEPS - Tríceps Testa c/ Halteres:</strong> 3 séries de 12 reps"},{id:"a-d4-ex6",text:"<strong>TRÍCEPS - Mergulho entre Bancos:</strong> 3 séries até a falha"},{id:"a-d4-ex7",text:"<strong>ANTEBRAÇO - Rosca Inversa c/ Barra:</strong> 3 séries de 15 reps"},{id:"a-d4-ex8",text:"<strong>ABDÔMEN - Prancha Isométrica:</strong> 3 séries até a falha"},{id:"a-d4-ex9",text:"<strong>ABDÔMEN - Elevação de Pernas:</strong> 3 séries de 15 reps"}]},{idPrefix:'a-d5',title:"Dia 5: Full Body (Opcional)",exercises:[{id:"a-d5-ex1",text:"<strong>Leg Press Horizontal:</strong> 3 séries de 12 reps"},{id:"a-d5-ex2",text:"<strong>Supino Reto com Halteres:</strong> 3 séries de 10 reps"},{id:"a-d5-ex3",text:"<strong>Remada na Máquina:</strong> 3 séries de 12 reps"},{id:"a-d5-ex4",text:"<strong>Elevação Lateral c/ Halteres:</strong> 3 séries de 15 reps"},{id:"a-d5-ex5",text:"<strong>Rosca Polia + Tríceps Polia (Bi-set):</strong> 3 séries de 12+12 reps"}]}]}, "B":{days:[]}, "C":{days:[]}};
    
    let workoutLog = JSON.parse(localStorage.getItem('workoutLog')) || {};
    let userWorkoutPlan = {};
    const getTodayKey = () => new Date().toISOString().split('T')[0];
    let currentCalendarDate = new Date();
    let activeModal = null;
    let editLogKey = null;
    const mainEl = document.querySelector('main');
    const difficultyEmojis = `<button data-value="1" title="Muito Fácil" class="difficulty-btn text-4xl">😊</button><button data-value="2" title="Fácil" class="difficulty-btn text-4xl">🙂</button><button data-value="3" title="Moderado" class="difficulty-btn text-4xl">😐</button><button data-value="4" title="Difícil" class="difficulty-btn text-4xl">😟</button><button data-value="5" title="Exaustivo" class="difficulty-btn text-4xl">🥵</button>`;

    // --- UTILS & CORE ---
    function saveWorkoutPlan() { localStorage.setItem('userWorkoutPlan', JSON.stringify(userWorkoutPlan)); }
    function saveLogState() { localStorage.setItem('workoutLog', JSON.stringify(workoutLog)); }
    function openModal(modalId) { closeAllModals(); activeModal = document.getElementById(modalId); if (activeModal) activeModal.classList.add('active'); }
    function closeAllModals() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('active')); activeModal = null; }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 4000);
    }

    function showConfirm(title, message, onConfirm) {
        const modal = document.getElementById('confirm-modal');
        modal.querySelector('#confirm-title').textContent = title;
        modal.querySelector('#confirm-message').textContent = message;
        const confirmBtn = modal.querySelector('#confirm-ok-btn');
        const cancelBtn = modal.querySelector('#confirm-cancel-btn');
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        newConfirmBtn.addEventListener('click', () => { onConfirm(); closeAllModals(); }, { once: true });
        cancelBtn.addEventListener('click', closeAllModals, { once: true });
        openModal('confirm-modal');
    }

    function reRenderAndSelectTab(tabId) {
        buildLayout();
        const newTabButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        if(newTabButton) newTabButton.click();
    }

    // --- DYNAMIC CONTENT BUILDERS ---
    function buildLayout() {
        let html = `<section id="dashboard" class="content-section">${buildDashboard()}</section>`;
        Object.keys(userWorkoutPlan).forEach(phaseKey => {
            const phaseData = userWorkoutPlan[phaseKey];
            html += `<section id="fase-${phaseKey.toLowerCase()}" class="content-section" data-phase="${phaseKey}"><div class="space-y-6">`;
            (phaseData.days || []).forEach(day => { html += buildWorkoutDayCard(day); });
            if ((phaseData.days || []).length < 7) {
                html += `<div class="mt-6"><button class="add-day-btn btn btn-secondary w-full" data-phase-key="${phaseKey}">${ICONS.plus} Adicionar Novo Dia de Treino</button></div>`;
            }
            html += `</div></section>`;
        });
        html += `<section id="historico" class="content-section"><div class="bg-gray-800 p-6 rounded-xl shadow-lg"><div id="calendar-header" class="flex items-center justify-between mb-4"><button id="prev-month" class="p-2 rounded-full hover:bg-gray-700 transition-colors">&lt;</button><h3 id="calendar-title" class="text-xl font-bold text-white"></h3><button id="next-month" class="p-2 rounded-full hover:bg-gray-700 transition-colors">&gt;</button></div><div id="calendar-weekdays" class="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-2"><div>Dom</div><div>Seg</div><div>Ter</div><div>Qua</div><div>Qui</div><div>Sex</div><div>Sáb</div></div><div id="calendar-grid" class="calendar-grid-class"></div></div></section>`;
        mainEl.innerHTML = html;
        loadInitialState();
    }

    function buildDashboard() {
        return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"><div class="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4"><div class="text-blue-400">${ICONS.calendar}</div><div><p class="text-gray-400 text-sm">Dias Treinados (Mês)</p><p id="stat-days-trained" class="text-3xl font-bold text-white">-</p></div></div><div class="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4"><div class="text-green-400">${ICONS.chart}</div><div><p class="text-gray-400 text-sm">Média de Nota (Mês)</p><p id="stat-avg-score-month" class="text-3xl font-bold text-white">-</p></div></div><div class="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4"><div class="text-red-400">${ICONS.heart}</div><div><p class="text-gray-400 text-sm">Minutos de Cardio (Mês)</p><p id="stat-cardio-minutes" class="text-3xl font-bold text-white">-</p></div></div><div class="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4"><div class="text-yellow-400">${ICONS.fire}</div><div><p class="text-gray-400 text-sm">Treino Frequente</p><p id="stat-fav-workout" class="text-lg font-bold text-white truncate">-</p></div></div></div>`;
    }

    function buildWorkoutDayCard(day) {
        const exercisesHTML = (day.exercises || []).map(ex => `<li class="flex items-center" data-exercise-id="${ex.id}"><input type="checkbox" id="${ex.id}" class="exercise-checkbox mr-4"><label for="${ex.id}" class="exercise-label">${ex.text}</label></li>`).join('');
        return `<div class="workout-card bg-gray-800 p-6 rounded-xl shadow-lg" data-day-title="${day.title}" data-id-prefix="${day.idPrefix}"><div class="flex justify-between items-center mb-2"><div class="day-title-container flex-grow"><h3 class="text-2xl font-bold text-white">${day.title.replace(/\(Opcional\)/g, '<span class="text-base font-normal text-gray-400">(Opcional)</span>')}</h3></div><button class="edit-workout-btn p-2 rounded-full hover:bg-gray-700" title="Editar este treino">${ICONS.edit}</button></div><div class="normal-controls"><div class="progress-bar-container my-4 opacity-0"><div class="progress-bar-fill"></div></div><ul class="space-y-3 exercise-list">${exercisesHTML}</ul><hr class="border-gray-700 my-6"><div class="space-y-4 cardio-section"><h4 class="font-bold text-lg text-white flex items-center gap-2">${ICONS.heart} Cardio (Opcional)</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="cardio-type-${day.idPrefix}" class="block text-sm text-gray-400 mb-1">Tipo</label><select id="cardio-type-${day.idPrefix}" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary"><option>Esteira</option><option>Bicicleta</option><option>Elíptico</option><option>Outro</option></select></div><div><label for="cardio-minutes-${day.idPrefix}" class="block text-sm text-gray-400 mb-1">Minutos</label><input type="number" id="cardio-minutes-${day.idPrefix}" class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="0"></div></div></div><button class="finish-workout-btn btn btn-primary mt-8 w-full" disabled>${ICONS.flag} Finalizar Treino e Avaliar</button></div><div class="edit-controls hidden mt-4 space-y-2"><div class="day-title-container-edit mb-4"></div><ul class="space-y-3 exercise-list-edit"></ul><button class="add-exercise-btn btn btn-secondary w-full text-sm">${ICONS.plus} Adicionar Exercício</button><div class="flex space-x-2 mt-4"><button class="save-plan-changes-btn btn btn-primary w-full">${ICONS.save} Salvar Plano</button><button class="cancel-plan-changes-btn btn btn-secondary w-full">Cancelar</button></div><button class="delete-day-btn btn btn-danger w-full mt-2">${ICONS.trash} Excluir este Dia</button></div></div>`;
    }

    // --- EVENT HANDLERS & LOGIC ---
    function setupEventListeners() {
        document.querySelector('nav').addEventListener('click', handleTabClick);
        mainEl.addEventListener('click', handleMainClick);
        mainEl.addEventListener('change', handleMainChange);
        document.body.addEventListener('click', handleModalAndDifficultyClicks);
        document.body.addEventListener('mousemove', e => {
            if (e.target.matches('.calendar-day.has-workout')) {
                const tooltip = document.getElementById('calendar-tooltip');
                tooltip.style.left = `${e.pageX + 15}px`;
                tooltip.style.top = `${e.pageY + 15}px`;
            }
        });
    }

    function handleTabClick(e) {
        const tabEl = e.target.closest('.tab-button'); if (!tabEl) return;
        const tabId = tabEl.getAttribute('data-tab');
        if (tabEl.classList.contains('locked')) { showToast('Este treino ainda não está liberado!', 'error'); return; }
        document.querySelectorAll('.tab-button').forEach(t => t.classList.remove('active'));
        tabEl.classList.add('active');
        document.querySelectorAll('.content-section').forEach(content => { content.style.display = 'none'; content.classList.remove('active'); });
        const activeSection = document.getElementById(tabId);
        if (activeSection) { activeSection.style.display = 'block'; activeSection.classList.add('active'); }
        if (tabId === 'historico') renderCalendar(currentCalendarDate);
        if (tabId === 'dashboard') renderDashboard();
    }

    function handleMainClick(e) {
        const target = e.target;
        if (target.closest('.edit-workout-btn')) { toggleEditMode(target.closest('.workout-card')); return; }
        if (target.closest('.add-day-btn')) { addDay(target.closest('.add-day-btn')); return; }
        if (target.closest('.delete-day-btn')) { deleteDay(target.closest('.workout-card')); return; }
        if (target.closest('.save-plan-changes-btn')) { savePlanChanges(target.closest('.workout-card')); return; }
        if (target.closest('.cancel-plan-changes-btn')) { cancelPlanChanges(target.closest('.workout-card')); return; }
        if (target.closest('.add-exercise-btn')) { addExerciseRow(target.closest('.workout-card')); return; }
        if (target.closest('.delete-exercise-btn')) { target.closest('li').remove(); return; }
        if (target.matches('.finish-workout-btn') && !target.disabled) { finishWorkout(target.closest('.workout-card')); return; }
        if (target.closest('.calendar-day.has-workout')) { editLogKey = target.closest('.calendar-day.has-workout').dataset.logKey; openModal('edit-modal'); populateEditModal(editLogKey); return; }
    }

    function handleMainChange(e) { if (e.target.matches('.exercise-checkbox')) { const workoutCard = e.target.closest('.workout-card'); updateProgressBar(workoutCard); checkFinishButtonState(workoutCard); } }
    
    function handleModalAndDifficultyClicks(e) {
        if (e.target.closest('.close-modal-btn')) return closeAllModals();
        if (!activeModal) return;
        const difficultyBtn = e.target.closest('.difficulty-btn');
        if (difficultyBtn) {
            handleDifficultySelection(difficultyBtn);
            if (activeModal.id === 'completion-modal') {
                const tempLog = workoutLog[getTodayKey()];
                tempLog.difficulty = parseInt(difficultyBtn.dataset.value, 10);
                const score = calculateSmartScore(tempLog);
                const scoreEl = document.getElementById('modal-score'), placeholderEl = document.getElementById('modal-score-placeholder');
                if (scoreEl && placeholderEl) { scoreEl.textContent = score.toFixed(1); placeholderEl.style.display = 'none'; scoreEl.style.display = 'block'; }
            }
        }
        if (activeModal.id === 'completion-modal' && e.target.closest('#save-workout-btn')) {
            const selectedDiff = activeModal.querySelector('.difficulty-btn.selected');
            if (!selectedDiff) { showToast('Selecione uma dificuldade para o treino.', 'error'); return; }
            const todayKey = getTodayKey(), log = workoutLog[todayKey];
            log.difficulty = parseInt(selectedDiff.dataset.value, 10);
            log.smartScore = calculateSmartScore(log);
            saveLogState();
            showToast(`Treino salvo! Sua nota: ${log.smartScore.toFixed(1)}`);
            closeAllModals();
            renderDashboard();
            const currentCard = document.querySelector(`[data-day-title="${log.dayTitle}"]`);
            if (currentCard) { currentCard.querySelectorAll('.exercise-checkbox').forEach(cb => cb.checked = false); updateProgressBar(currentCard); checkFinishButtonState(currentCard); }
        } else if (activeModal.id === 'edit-modal') {
            if (e.target.closest('#save-edit-btn')) saveEdits();
            if (e.target.closest('#delete-log-btn')) deleteLog();
        }
    }

    function handleDifficultySelection(button) { button.parentElement.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected')); button.classList.add('selected'); }
    function updateProgressBar(workoutCard) { const progressBarContainer = workoutCard.querySelector('.progress-bar-container'); if (!progressBarContainer) return; const progressBarFill = progressBarContainer.querySelector('.progress-bar-fill'); const checkboxes = workoutCard.querySelectorAll('.exercise-list .exercise-checkbox'); const checked = workoutCard.querySelectorAll('.exercise-list .exercise-checkbox:checked'); const progress = checkboxes.length > 0 ? (checked.length / checkboxes.length) * 100 : 0; progressBarFill.style.width = `${progress}%`; progressBarContainer.style.opacity = progress > 0 ? '1' : '0'; }
    function checkFinishButtonState(workoutCard) { const finishBtn = workoutCard.querySelector('.finish-workout-btn'); const checkedCount = workoutCard.querySelectorAll('.exercise-list .exercise-checkbox:checked').length; if(finishBtn) finishBtn.disabled = checkedCount === 0; }
    
    function toggleEditMode(workoutCard) {
        const normalControls = workoutCard.querySelector('.normal-controls');
        const editControls = workoutCard.querySelector('.edit-controls');
        const exerciseList = workoutCard.querySelector('.exercise-list');
        const exerciseListEdit = workoutCard.querySelector('.exercise-list-edit');
        const titleContainerEdit = workoutCard.querySelector('.day-title-container-edit');
        const originalTitle = workoutCard.dataset.dayTitle;

        normalControls.classList.add('hidden');
        editControls.classList.remove('hidden');

        const titleParts = originalTitle.split(/:(.*)/s);
        const prefix = titleParts[0] + ':';
        const editablePart = titleParts[1] ? titleParts[1].trim() : '';
        titleContainerEdit.innerHTML = `<div class="flex items-baseline text-2xl font-bold"><span class="text-white mr-2">${prefix}</span><input type="text" class="day-title-input edit-input flex-grow text-2xl font-bold" value="${editablePart}"></div>`;

        exerciseListEdit.innerHTML = '';
        exerciseList.querySelectorAll('li').forEach(li => {
            const id = li.dataset.exerciseId;
            const label = li.querySelector('label').innerHTML;
            const [name, series] = label.replace(/<strong>|<\/strong>/g, '').split(':');
            const newLi = document.createElement('li');
            newLi.className = "flex items-center gap-2";
            newLi.dataset.exerciseId = id;
            newLi.innerHTML = `<div class="flex-grow flex items-center gap-2"><input type="text" class="edit-input-name edit-input flex-grow" value="${name.trim()}"><input type="text" class="edit-input-reps edit-input w-2/3" value="${series ? series.trim() : ''}"></div><button class="delete-exercise-btn p-1 text-red-500 hover:text-red-400 text-2xl font-bold">&times;</button>`;
            exerciseListEdit.appendChild(newLi);
        });
    }

    function cancelPlanChanges() {
        const activeTab = document.querySelector('.tab-button.active')?.dataset.tab || 'dashboard';
        reRenderAndSelectTab(activeTab);
    }

    function savePlanChanges(workoutCard) {
        const phaseKey = workoutCard.closest('[data-phase]').dataset.phase;
        const originalTitle = workoutCard.dataset.dayTitle;
        const dayIndex = userWorkoutPlan[phaseKey].days.findIndex(d => d.title === originalTitle);
        if (dayIndex === -1) { showToast("Erro ao encontrar o dia para salvar.", "error"); return; }

        const titleInput = workoutCard.querySelector('.day-title-input');
        const newTitleName = titleInput.value.trim();
        const prefix = originalTitle.split(':')[0];
        const newFullTitle = `${prefix}: ${newTitleName}`;
        userWorkoutPlan[phaseKey].days[dayIndex].title = newFullTitle;

        const newExercises = [];
        workoutCard.querySelectorAll('.exercise-list-edit li').forEach(li => {
            const id = li.dataset.exerciseId;
            const nameInput = li.querySelector('.edit-input-name');
            const repsInput = li.querySelector('.edit-input-reps');
            if (nameInput.value && repsInput.value) { newExercises.push({ id, text: `<strong>${nameInput.value.trim()}:</strong> ${repsInput.value.trim()}` }); }
        });
        userWorkoutPlan[phaseKey].days[dayIndex].exercises = newExercises;
        saveWorkoutPlan();
        showToast("Plano de treino salvo com sucesso!");
        
        const activeTab = document.querySelector('.tab-button.active')?.dataset.tab || 'dashboard';
        reRenderAndSelectTab(activeTab);
    }

    function addExerciseRow(workoutCard) {
        const list = workoutCard.querySelector('.exercise-list-edit');
        const newId = `ex-${Date.now()}`;
        const li = document.createElement('li');
        li.className = "flex items-center gap-2";
        li.dataset.exerciseId = newId;
        li.innerHTML = `<div class="flex-grow flex items-center gap-2"><input type="text" class="edit-input-name edit-input flex-grow" placeholder="Nome do Exercício"><input type="text" class="edit-input-reps edit-input w-2/3" placeholder="Séries e Reps"></div><button class="delete-exercise-btn p-1 text-red-500 hover:text-red-400 text-2xl font-bold">&times;</button>`;
        list.appendChild(li);
        li.querySelector('.edit-input-name').focus();
    }
    
    function addDay(button) {
        const phaseKey = button.dataset.phaseKey;
        const phase = userWorkoutPlan[phaseKey];
        if ((phase.days || []).length >= 7) { showToast("Limite de 7 dias por fase atingido.", "error"); return; }
        const newDayNumber = (phase.days || []).length + 1;
        const newDay = { idPrefix: `${phaseKey.toLowerCase()}-d${newDayNumber}`, title: `Dia ${newDayNumber}: Novo Treino`, exercises: [{ id: `ex-${Date.now()}`, text: "<strong>Novo Exercício:</strong> 3 séries de 10 reps" }] };
        if (!phase.days) phase.days = [];
        phase.days.push(newDay);
        saveWorkoutPlan();
        const activeTab = document.querySelector('.tab-button.active')?.dataset.tab || 'dashboard';
        reRenderAndSelectTab(activeTab);
        showToast("Novo dia de treino adicionado!");
    }

    function deleteDay(workoutCard) {
        showConfirm("Excluir Dia?", "Esta ação não pode ser desfeita. Deseja mesmo excluir este dia de treino?", () => {
            const phaseKey = workoutCard.closest('[data-phase]').dataset.phase;
            const dayTitle = workoutCard.dataset.dayTitle;
            userWorkoutPlan[phaseKey].days = userWorkoutPlan[phaseKey].days.filter(d => d.title !== dayTitle);
            userWorkoutPlan[phaseKey].days.forEach((day, index) => {
                const titleParts = day.title.split(/:(.*)/s);
                day.title = `Dia ${index + 1}: ${titleParts[1] ? titleParts[1].trim() : 'Novo Treino'}`;
                day.idPrefix = `${phaseKey.toLowerCase()}-d${index + 1}`;
            });
            saveWorkoutPlan();
            const activeTab = document.querySelector('.tab-button.active')?.dataset.tab || 'dashboard';
            reRenderAndSelectTab(activeTab);
            showToast("Dia de treino excluído.", "success");
        });
    }
    
    function calculateSmartScore(log) {
        if (!log) return 0;
        const originalPlanExercises = userWorkoutPlan[log.phase]?.days.find(d => d.title === log.dayTitle)?.exercises || [];
        const totalExercises = originalPlanExercises.length;
        const completedCount = log.completedExercises?.length || 0;
        const baseScore = totalExercises > 0 ? (completedCount / totalExercises) * 10 : 0;
        const completionRatio = totalExercises > 0 ? (completedCount / totalExercises) : 0;
        let difficultyMultiplier = 1.0;
        switch (log.difficulty) {
            case 1: difficultyMultiplier = 0.80; break;
            case 2: difficultyMultiplier = 0.92; break;
            case 4: if (completionRatio >= 0.7) difficultyMultiplier = 1.04; break;
            case 5: if (completionRatio >= 0.7) difficultyMultiplier = 1.08; break;
        }
        const adjustedScore = baseScore * difficultyMultiplier;
        let cardioScoreComponent = -2.0;
        if (log.cardio && log.cardio.minutes > 0) {
            const mins = log.cardio.minutes;
            if (mins >= 1 && mins < 20) { cardioScoreComponent = -1.5; } 
            else if (mins >= 20 && mins <= 30) { cardioScoreComponent = 0.0; } 
            else if (mins > 30) { cardioScoreComponent = 1.0; }
        }
        const rawFinalScore = adjustedScore + cardioScoreComponent;
        const allExercisesDone = completionRatio === 1 && totalExercises > 0;
        const hardDifficulty = log.difficulty >= 4;
        const goodCardioDone = log.cardio?.minutes >= 20;
        const canGetTen = allExercisesDone && hardDifficulty && goodCardioDone;
        let finalScore = canGetTen ? Math.min(rawFinalScore, 10) : Math.min(rawFinalScore, 9.9);
        return Math.max(0, finalScore);
    }

    function finishWorkout(workoutCard) { const todayKey = getTodayKey(); if (workoutLog[todayKey]) { showConfirm("Sobrescrever Treino?", "Você já registrou um treino hoje. Deseja sobrescrevê-lo?", () => proceedWithFinish(workoutCard)); } else { proceedWithFinish(workoutCard); } }
    
    function proceedWithFinish(workoutCard) {
        const todayKey = getTodayKey(); workoutLog[todayKey] = {}; const log = workoutLog[todayKey];
        log.phase = workoutCard.closest('[data-phase]').dataset.phase;
        log.dayTitle = workoutCard.dataset.dayTitle;
        log.completedExercises = Array.from(workoutCard.querySelectorAll('.exercise-checkbox:checked')).map(cb => cb.id);
        const idPrefix = workoutCard.dataset.idPrefix;
        const cardioMinutes = parseInt(document.getElementById(`cardio-minutes-${idPrefix}`).value, 10);
        if (cardioMinutes > 0) { const cardioType = document.getElementById(`cardio-type-${idPrefix}`).value; log.cardio = { type: cardioType, minutes: cardioMinutes };
        } else { delete log.cardio; }
        saveLogState();
        const modal = document.getElementById('completion-modal');
        modal.querySelector('.difficulty-ratings').innerHTML = difficultyEmojis;
        const scoreEl = modal.querySelector('#modal-score'), placeholderEl = modal.querySelector('#modal-score-placeholder');
        scoreEl.style.display = 'none'; placeholderEl.style.display = 'block';
        openModal('completion-modal');
    }

    function populateEditModal(logKey) {
        const log = workoutLog[logKey]; if (!log) return;
        document.getElementById('edit-modal-title').textContent = `Editando: ${new Date(logKey + 'T12:00:00').toLocaleDateString('pt-BR')}`;
        document.getElementById('edit-modal-score').textContent = log.smartScore?.toFixed(1) || "-";
        const exContainer = document.getElementById('edit-modal-exercises'); const phase = userWorkoutPlan[log.phase]; const day = phase?.days.find(d => d.title === log.dayTitle);
        exContainer.innerHTML = '';
        if (day) { const list = document.createElement('ul'); list.className = 'space-y-3'; (day.exercises || []).forEach(ex => { const isChecked = log.completedExercises?.includes(ex.id); list.innerHTML += `<li class="flex items-center"><input type="checkbox" id="edit-${ex.id}" data-original-id="${ex.id}" class="exercise-checkbox mr-4" ${isChecked ? 'checked' : ''}><label for="edit-${ex.id}" class="exercise-label">${ex.text}</label></li>`; }); exContainer.appendChild(list); } 
        else { exContainer.innerHTML = '<p class="text-gray-500">Não foi possível carregar os exercícios (plano pode ter sido alterado).</p>'; }
        const diffContainer = document.getElementById('edit-modal-difficulty'); diffContainer.innerHTML = difficultyEmojis; if (log.difficulty) diffContainer.querySelector(`.difficulty-btn[data-value='${log.difficulty}']`)?.classList.add('selected');
        const cardioContainer = document.getElementById('edit-modal-cardio'); const cardio = log.cardio;
        cardioContainer.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="edit-cardio-type" class="block text-gray-300 mb-1 text-sm">Tipo</label><select id="edit-cardio-type" class="w-full p-2 rounded bg-gray-700 text-white"><option>Esteira</option><option>Bicicleta</option><option>Elíptico</option><option>Outro</option></select></div><div><label for="edit-cardio-minutes" class="block text-gray-300 mb-1 text-sm">Minutos</label><input type="number" id="edit-cardio-minutes" class="w-full p-2 rounded bg-gray-700 text-white" value="${cardio?.minutes || 0}"></div></div>`;
        if (cardio) { document.getElementById('edit-cardio-type').value = cardio.type || 'Esteira'; }
    }

    function saveEdits() {
        if (!editLogKey || !workoutLog[editLogKey]) return;
        const log = workoutLog[editLogKey];
        const workoutDiffBtn = document.querySelector('#edit-modal-difficulty .difficulty-btn.selected');
        if (!workoutDiffBtn) { showToast('Selecione uma dificuldade para o treino.', 'error'); return; }
        log.difficulty = parseInt(workoutDiffBtn.dataset.value, 10);
        log.completedExercises = Array.from(document.querySelectorAll('#edit-modal-exercises .exercise-checkbox:checked')).map(cb => cb.dataset.originalId);
        const cardioMins = parseInt(document.getElementById('edit-cardio-minutes')?.value || 0, 10);
        if (cardioMins > 0) { log.cardio = { type: document.getElementById('edit-cardio-type')?.value, minutes: cardioMins }; } 
        else { delete log.cardio; }
        log.smartScore = calculateSmartScore(log);
        saveLogState();
        closeAllModals();
        renderCalendar(currentCalendarDate);
        renderDashboard();
        showToast("Alterações salvas com sucesso!");
    }

    function deleteLog() {
        if (!editLogKey) return;
        const dateStr = new Date(editLogKey + 'T12:00:00').toLocaleDateString('pt-BR');
        showConfirm("Excluir Registro?", `Tem certeza que deseja excluir o registro do dia ${dateStr}?`, () => {
            delete workoutLog[editLogKey];
            saveLogState();
            closeAllModals();
            renderCalendar(currentCalendarDate);
            renderDashboard();
            showToast("Registro excluído.");
        });
    }

    function renderDashboard() {
        const today = new Date(), currentMonthStr = today.toISOString().slice(0, 7), logs = Object.entries(workoutLog);
        const thisMonthLogs = logs.filter(([key]) => key.startsWith(currentMonthStr));
        document.getElementById('stat-days-trained').textContent = thisMonthLogs.length;
        const calcAvgScore = (arr) => arr.length > 0 ? (arr.reduce((sum, [, log]) => sum + (log.smartScore || 0), 0) / arr.length).toFixed(1) : "-";
        document.getElementById('stat-avg-score-month').textContent = calcAvgScore(thisMonthLogs);
        document.getElementById('stat-cardio-minutes').textContent = thisMonthLogs.reduce((sum, [, log]) => sum + (log.cardio?.minutes || 0), 0);
        const getMostFrequent = (arr) => { if (arr.length === 0) return "-"; const counts = arr.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {}); return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b); };
        document.getElementById('stat-fav-workout').textContent = getMostFrequent(logs.map(([, log]) => log.dayTitle).filter(Boolean));
    }

    function renderCalendar(date) {
        const calendarGrid = document.getElementById('calendar-grid'); if (!calendarGrid) return;
        calendarGrid.innerHTML = '';
        const year = date.getFullYear(), month = date.getMonth();
        document.getElementById('calendar-title').textContent = `${date.toLocaleString('pt-BR', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())} ${year}`;
        const firstDayOfMonth = new Date(year, month, 1).getDay(), daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 0; i < firstDayOfMonth; i++) { calendarGrid.innerHTML += `<div class="calendar-day other-month"></div>`; }
        for (let day = 1; day <= daysInMonth; day++) {
            const dayKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            dayDiv.textContent = day;
            if (workoutLog[dayKey]) {
                dayDiv.classList.add('has-workout'); dayDiv.dataset.logKey = dayKey;
                dayDiv.addEventListener('mouseover', () => { const log = workoutLog[dayKey]; const tooltip = document.getElementById('calendar-tooltip'); if (log && tooltip) { tooltip.innerHTML = `${log.dayTitle}<br>Nota: <strong>${log.smartScore.toFixed(1)}</strong>`; tooltip.style.display = 'block'; } });
                dayDiv.addEventListener('mouseout', () => { const tooltip = document.getElementById('calendar-tooltip'); if (tooltip) tooltip.style.display = 'none'; });
            }
            calendarGrid.appendChild(dayDiv);
        }
    }

    function loadInitialState() {
        const todayKey = getTodayKey(); if (!workoutLog[todayKey]) return;
        const log = workoutLog[todayKey]; if (!log.dayTitle) return;
        const workoutCard = document.querySelector(`[data-day-title="${log.dayTitle}"]`); if (!workoutCard) return;
        if (log.completedExercises) { log.completedExercises.forEach(id => { const checkbox = document.getElementById(id); if (checkbox) checkbox.checked = true; }); }
        if (log.cardio) { const idPrefix = workoutCard.dataset.idPrefix; document.getElementById(`cardio-type-${idPrefix}`).value = log.cardio.type || 'Esteira'; document.getElementById(`cardio-minutes-${idPrefix}`).value = log.cardio.minutes || 0; }
        updateProgressBar(workoutCard);
        checkFinishButtonState(workoutCard);
    }

    function init() {
        try {
            const savedPlan = localStorage.getItem('userWorkoutPlan');
            userWorkoutPlan = savedPlan ? JSON.parse(savedPlan) : JSON.parse(JSON.stringify(defaultWorkoutDatabase));
            if (!userWorkoutPlan.A || !userWorkoutPlan.B || !userWorkoutPlan.C) throw new Error("Plano inválido, redefinindo.");
        } catch (e) {
            console.error("Falha ao carregar o plano do localStorage, redefinindo para o padrão.", e);
            userWorkoutPlan = JSON.parse(JSON.stringify(defaultWorkoutDatabase));
            localStorage.setItem('userWorkoutPlan', JSON.stringify(userWorkoutPlan));
        }
        buildLayout();
        setupEventListeners();
        document.querySelector('.tab-button[data-tab="dashboard"]').click();
        
        document.querySelector('body').addEventListener('click', e => {
            if (e.target.id === 'prev-month') { currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1); renderCalendar(currentCalendarDate); }
            if (e.target.id === 'next-month') { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1); renderCalendar(currentCalendarDate); }
        });
    }

    init();
});
