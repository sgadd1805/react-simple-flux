import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

export var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(function(payload){
    console.log(payload);
    return true;
});

