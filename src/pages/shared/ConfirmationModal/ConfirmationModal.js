import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successAction, modalData, successButtonName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96 bg-gray-100">
                    <h3 className="font-semibold ">{title}!</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-primary">{successButtonName}</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;