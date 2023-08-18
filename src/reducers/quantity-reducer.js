export default function quantityReducer(state, action) {
    switch (action.type) {
        case 'increment_count':
            return { count: state.count + 1 };
        case 'decrement_count':
            if (state.count === 1) return { count: 1 };
            return { count: state.count - 1 };
        case 'set_count':
            return { count: action.count };
        case 'reset_count':
            return { count: 1 };
        default:
            throw error('Unknown action: ' + action.type);
    }
}