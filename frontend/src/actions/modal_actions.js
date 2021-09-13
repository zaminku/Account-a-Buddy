export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, itemId) => ({
    type: OPEN_MODAL,
    modal,
    itemId
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})
