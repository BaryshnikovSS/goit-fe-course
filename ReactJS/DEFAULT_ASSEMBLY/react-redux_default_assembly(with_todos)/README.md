#react-redux_default_assembly


actionCreator => action => middleWare => reducer => state;

actionCreator(value) => action;
action = ({});
middleWare => state => next => action => next(action);
reducer(previousState, action) => newState;
store = { reducer, dispatch(action), getState};

state = createStore(redusers, [preloadSatte], [enhancer]);

mapStateToProps = (state, props) => ({
  notes: state.notes,
  currentFilter: state.filter,
});

mapDispatchToProps = dispatch => ({
  addNote: text => dispatch(addNote(text)),
});

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]);


/* actionCreator - функции, которые могут быть асинхронными и иметь побочные эффекты */
/* action - объекты, которые помогают доставить данные из компонентов в хранилище */
/* middleWare - прослойка, инструмент для расширения функционала, находящийся между двух точек в логической цепочке исполнения кода */
/* reducer - чистые функции, которые принимают предыдущее состояние приложения и действие, а затем возвращают новое состояние */
/* store - js-объект, который содержит состояние приложения и методы доступа к нему, отправки действий и регистрации слушателей */

/* connect - функция(HOC), предоставляющая обернутому в нее компоненту доступ к store */

